import { CAPI } from '../interface'
import CAPIClient from '../'

const ConnectRequest = (client: CAPIClient) => {
  const payload: CAPI.ConnectRequest = {
    command: 'Botapichat.ConnectRequest',
    request_id: client.lastRequestId,
  }
  client.send(JSON.stringify(payload))
}

export default ConnectRequest
