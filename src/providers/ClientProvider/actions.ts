import { Dispatch } from 'react'
import IClientProvider from './interface'

export const changeApiKey = (
  dispatch: Dispatch<IClientProvider.Action>,
  apiKey: string,
) => dispatch({ type: 'CHANGE_API_KEY', payload: apiKey })
