import { CAPI } from '../interface'
import CAPIClient from '../'

const AuthenticateRequest = (client: CAPIClient) => {
  const payload: CAPI.AuthenticateRequest = {
    command: 'Botapiauth.AuthenticateRequest',
    request_id: client.lastRequestId,
    payload: {
      api_key: client.apiKey,
    },
  }
  client.send(JSON.stringify(payload))
}

export default AuthenticateRequest
