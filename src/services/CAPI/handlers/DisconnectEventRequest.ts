import CAPIClient from '../'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DisconnectEventRequest = (client: CAPIClient) => {
  console.log('DisconnectEventRequest')
  client.disconnect()
}

export default DisconnectEventRequest
