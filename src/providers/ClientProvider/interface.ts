import User from '../../services/CAPI/models/User'
import Message from '../../services/CAPI/models/Message'
import CAPIClient from '../../services/CAPI'

declare namespace IClientProvider {
  export interface Props {
    context: Context
    children: React.ReactNode
  }

  export interface Context {
    apiKey: string | null
    users: Map<number, User>
    messages: Set<Message>
    client?: CAPIClient
  }

  export type Action =
    | { type: 'CHANGE_USERS'; payload: Map<number, User> }
    | { type: 'CHANGE_MESSAGES'; payload: Set<Message> }
    | { type: 'CHANGE_API_KEY'; payload: string }
    | { type: 'CHANGE_CHANNEL'; payload: string }
    | { type: 'SET_CLIENT'; payload: CAPIClient }
}

export default IClientProvider
