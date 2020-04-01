import { CAPI } from '../interface'
import CAPIClient from '..'
import User from '../models/User'

const UserUpdateEventRequest = (client: CAPIClient, payload: CAPI.Payload) => {
  const user = new User({
    id: payload.user_id || 0,
    name: payload.toon_name || '',
    flag: payload.flag || [],
    pid: (payload.attribute && payload.attribute[0].value) || 'unknown',
  })

  client.addUser(user)
  console.log('UserUpdateEventRequest', user)
}

export default UserUpdateEventRequest
