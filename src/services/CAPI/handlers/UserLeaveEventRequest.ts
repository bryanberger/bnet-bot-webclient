import { CAPI } from '../interface'
import CAPIClient from '..'

const UserLeaveEventRequest = (client: CAPIClient, payload: CAPI.Payload) => {
  const user_id = payload.user_id || 0
  client.removeUser(user_id)
  console.log('UserLeaveEventRequest', user_id)
}

export default UserLeaveEventRequest
