import { CAPI } from '../interface'
import CAPIClient from '..'

const UserLeaveEventRequest = (client: CAPIClient, payload: CAPI.Payload) => {
  if (payload.user_id) {
    const user_id = payload.user_id
    client.removeUser(user_id)
    console.log('UserLeaveEventRequest', payload)
  }
}

export default UserLeaveEventRequest
