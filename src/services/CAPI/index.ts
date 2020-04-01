import { EventEmitter } from 'events'
import * as Actions from './actions'
import Handlers from './handlers'
import { CAPI } from './interface'
import User from './models/User'
import Message from './models/Message'

const URL = 'wss://connect-bot.classic.blizzard.com/v1/rpc/chat'
// const URL = 'wss://echo.websocket.org'

export enum ReadyState {
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
}

export enum Events {
  ON_USER_JOIN = 'userJoin',
  ON_USER_LEAVE = 'userLeave',
  ON_READY = 'ready',
  ON_CHANNEL_JOIN = 'channelJoin',
  ON_CHAT_MESSAGE = 'message',
}

const DummyUser = new User({
  name: '',
  id: 0,
  pid: 'CHAT',
  flag: ['Moderator'],
})

class CAPIClient extends EventEmitter {
  private _apiKey: string
  private _lastRequestId: number
  private _users: Map<number, User>
  private _messages: Set<Message>
  private _channel: string
  private _localUser: User = DummyUser
  private _ws: WebSocket

  constructor(apiKey: string) {
    super()

    if (!apiKey) throw new Error('No `apiKey` specified!')

    // set apiKey
    this._apiKey = apiKey

    // set defaults
    this._lastRequestId = 0
    this._channel = ''
    this._users = new Map<number, User>()
    this._messages = new Set<Message>()

    // init _ws
    this._ws = new WebSocket(URL)
    // this._ws = new WebSocket(URL, 'json')
    this._ws.onopen = this.onOpen.bind(this)
    this._ws.onerror = this.onError.bind(this)
    this._ws.onclose = this.onClose.bind(this)
    this._ws.onmessage = this.onMessage.bind(this)
  }

  // Private Methods

  private onOpen(event: Event) {
    console.log('onOpen', event)
    Actions.AuthenticateRequest(this)
  }

  private onMessage(event: MessageEvent) {
    try {
      const data: CAPI.Data = JSON.parse(event.data)
      const command: CAPI.AllCommands = data.command

      if (Handlers.hasOwnProperty(command)) {
        Handlers[command].default(this, data.payload)
      } else {
        console.log(`[ERROR] Command ${command} not recognized`)
      }
    } catch (e) {
      console.log(`[ERROR] Message payload`, e)
    }
  }

  private onClose(event: CloseEvent) {
    console.log('onClose', event)
  }

  private onError(event: Event) {
    console.log('onError', event)
  }

  // Public Methods

  public disconnect() {
    console.log('disconnect')
    if (this._ws) this._ws.close()
  }

  public send(payload: string) {
    console.log('send', payload)
    if (this._ws.readyState === ReadyState.OPEN) {
      this._ws.send(payload)
    }
  }

  public sendMessage(payload: string) {
    console.log('sendMessage', payload)
    // TODO: Rate limit this
    Actions.SendMessageRequest(this, payload)
  }

  public addLocalUserMessage(payload: CAPI.Payload) {
    Actions.AddLocalUserMessage(this, payload)
  }

  public addUser(user: User) {
    if (this._users.size === 0) {
      this._localUser = user
      this.emit(Events.ON_READY)
    }
    this._users.set(user.id, user)
    this.emit(Events.ON_USER_JOIN, user)
  }

  public addMessage(message: Message) {
    this._messages.add(message)
    this.emit(Events.ON_CHAT_MESSAGE, message)
  }

  public removeUser(user_id: number) {
    if (this._users.has(user_id)) {
      const user = this._users.get(user_id) as User
      this._users.delete(user_id)
      this.emit(Events.ON_USER_LEAVE, user)
    }
  }

  // Getters

  public get apiKey() {
    return this._apiKey
  }

  public get lastRequestId() {
    return ++this._lastRequestId
  }

  public get users() {
    return this._users
  }

  public get messages() {
    return this._messages
  }

  public get channel() {
    return this._channel
  }

  public get readyState() {
    return this._ws.readyState
  }

  public get localUser() {
    return this._localUser
  }

  // Setters

  public set channel(channel: string) {
    this._channel = channel
    this.emit(Events.ON_CHANNEL_JOIN, channel)
  }
}

export default CAPIClient
