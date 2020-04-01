import { nanoid } from 'nanoid'
import { CAPI } from '../interface'
import CAPIClient from '..'
import Message from '../models/Message'
import { GameStrings } from '../utils'

const UserLeaveEventRequest = (client: CAPIClient, payload: CAPI.Payload) => {
  if (payload.user_id) {
    const user_id = payload.user_id
    const user = client.users.get(user_id)
    if (user) {
      const game = GameStrings[user.pid]
      const message = new Message({
        user: {
          id: -1,
          name: '[Server]',
        },
        id: nanoid(),
        text: `${user.name} has left the channel using ${game}`,
        type: 'ServerInfo',
        date: new Date(),
      })

      client.addMessage(message)
    }

    client.removeUser(user_id)
    console.log('UserLeaveEventRequest', payload)
  }
}

export default UserLeaveEventRequest
