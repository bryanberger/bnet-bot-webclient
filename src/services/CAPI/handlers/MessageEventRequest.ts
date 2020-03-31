import { CAPI } from '../interface'
import CAPIClient from '..'
import Message from '../models/Message'
import { nanoid } from 'nanoid'

const MessageEventRequest = (client: CAPIClient, payload: CAPI.Payload) => {
  const user_id = payload.user_id || 0
  const message = new Message({
    user: {
      id: user_id,
      name: client.users.get(user_id)?.name || '',
    },
    id: nanoid(),
    text: payload.message || '',
    type: payload.type || 'Whisper',
    date: new Date(),
  })

  client.addMessage(message)
  console.log('MessageEventRequest', message)
}

export default MessageEventRequest
