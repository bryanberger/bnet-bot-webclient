import { CAPI } from '../interface'
import CAPIClient, { Events } from '..'
import User from '../models/User'

const UserUpdateEventRequest = (client: CAPIClient, payload: CAPI.Payload) => {
  const user = new User({
    id: payload.user_id || 0,
    name: payload.toon_name || '',
  })

  client.addUser(user)
  console.log('UserUpdateEventRequest', user)
}

export default UserUpdateEventRequest
