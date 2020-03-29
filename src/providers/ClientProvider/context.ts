import { createContext } from 'react'
import IClientProvider from './interface'

const defaultContext: IClientProvider.Context = {
  apiKey: '',
  users: [],
  messages: [],
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
