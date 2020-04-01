import { nanoid } from 'nanoid'

import { CAPI } from '../interface'
import CAPIClient from '..'
import User from '../models/User'
import { GameStrings } from '../utils'
import Message from '../models/Message'

const UserUpdateEventRequest = (client: CAPIClient, payload: CAPI.Payload) => {
  const pid = (payload.attribute && payload.attribute[0].value) || 'CHAT'
  const user = new User({
    id: payload.user_id || 0,
    name: payload.toon_name || '',
    flag: payload.flag || [],
    pid: pid,
    game: GameStrings[pid],
  })

  const game = GameStrings[user.pid]
  const message = new Message({
    user: {
      id: -1,
      name: '[Server]',
    },
    id: nanoid(),
    text: `${user.name} has joined the channel using ${game}`,
    type: 'ServerInfo',
    date: new Date(),
  })

  client.addMessage(message)
  client.addUser(user)

  console.log('UserUpdateEventRequest', user)
}

export default UserUpdateEventRequest
