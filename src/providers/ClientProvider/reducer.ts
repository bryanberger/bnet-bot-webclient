import IClientProvider from './interface'

const reducer = (
  state: IClientProvider.Context,
  action: IClientProvider.Action,
) => {
  switch (action.type) {
    case 'CHANGE_API_KEY':
      // Store Key in LocalStorage for now
      localStorage.setItem('cApiKey', action.payload)
      return {
        ...state,
        apiKey: action.payload,
      }
    case 'CHANGE_MESSAGES':
      return {
        ...state,
        messages: action.payload,
      }
    case 'CHANGE_USERS':
      return {
        ...state,
        users: action.payload,
      }
    case 'SET_CLIENT':
      return {
        ...state,
        client: action.payload,
      }
    default:
      return state
  }
}

export default reducer
