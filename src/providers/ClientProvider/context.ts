import { createContext } from 'react'
import IClientProvider from './interface'

export const defaultContext: IClientProvider.Context = {
  apiKey: localStorage.getItem('cApiKey'),
  users: new Map(),
  messages: new Set(),
  client: undefined,
}

const ClientContext = createContext<{
  state: IClientProvider.Context
  dispatch: (action: IClientProvider.Action) => void
}>({
  state: defaultContext,
  dispatch: () => {
    return null
  },
})

export default ClientContext
