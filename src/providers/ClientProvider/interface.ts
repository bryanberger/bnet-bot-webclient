declare namespace IClientProvider {
  export interface Props {
    context: Context
    children: React.ReactNode
  }

  export interface Context {
    apiKey: string | null
    users: []
    messages: []
  }

  export type Action =
    // | { type: 'CHANGE_USERS'; payload: [] }
    // | { type: 'CHANGE_MESSAGES'; payload: [] }
    { type: 'CHANGE_API_KEY'; payload: string }
}

export default IClientProvider
