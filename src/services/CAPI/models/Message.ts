import { CAPI } from '../interface'
import moment from 'moment'

interface MessageObject {
  user: {
    id: number
    name: string
  }
  id: string
  date: Date
  text: string
  type: CAPI.MessageTypes
}

class Message {
  private _message: MessageObject

  constructor(message: MessageObject) {
    this._message = message
  }

  public get id() {
    return this._message.id
  }

  public get user() {
    return this._message.user
  }

  public get text() {
    return this._message.text
  }

  public get date() {
    return moment(this._message.date, 'YYYYMMDD').fromNow()
  }

  public get type() {
    return this._message.type
  }
}

export default Message
