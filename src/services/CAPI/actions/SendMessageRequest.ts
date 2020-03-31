import { CAPI } from '../interface'
import CAPIClient from '../'

const SendMessageRequest = (client: CAPIClient, text: string) => {
  const payload: CAPI.SendMessageRequest = {
    command: 'Botapichat.SendMessageRequest',
    request_id: client.lastRequestId,
    payload: {
      message: text,
    },
  }
  client.send(JSON.stringify(payload))
}

export default SendMessageRequest
