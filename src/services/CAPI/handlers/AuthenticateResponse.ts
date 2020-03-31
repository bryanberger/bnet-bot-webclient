import CAPIClient from '../'
import { ConnectRequest } from '../actions'

const AuthenticateResponse = (client: CAPIClient) => ConnectRequest(client)

export default AuthenticateResponse
