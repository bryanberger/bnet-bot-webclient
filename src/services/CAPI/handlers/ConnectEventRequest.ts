import { CAPI } from '../interface'
import CAPIClient from '..'

const ConnectEventRequest = (client: CAPIClient, payload: CAPI.Payload) => {
  const channel = payload.channel || ''
  client.channel = channel
  console.log('ConnectEventRequest', channel, ' joined')
}

export default ConnectEventRequest
