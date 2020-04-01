import { CAPI } from '../interface'
import CAPIClient from '..'
import Message from '../models/Message'
import { nanoid } from 'nanoid'

const AddLocalUserMessage = (client: CAPIClient, payload: CAPI.Payload) => {
  if (client.localUser) {
    const user_id = client.localUser.id
    const message = new Message({
      user: {
        id: user_id,
        name: client.localUser.name,
      },
      id: nanoid(),
      text: payload.message || '',
      type: payload.type || 'Channel',
      date: new Date(),
    })

    client.addMessage(message)
    console.log('AddLocalUserMessage', message)
  }
}

export default AddLocalUserMessage
