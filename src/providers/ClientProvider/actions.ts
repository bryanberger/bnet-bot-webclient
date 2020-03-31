import { Dispatch } from 'react'
import IClientProvider from './interface'
import User from '../../services/CAPI/models/User'
import Message from '../../services/CAPI/models/Message'
import CAPIClient from '../../services/CAPI'

export const changeApiKey = (
  dispatch: Dispatch<IClientProvider.Action>,
  apiKey: string,
) => dispatch({ type: 'CHANGE_API_KEY', payload: apiKey })

export const changeUsers = (
  dispatch: Dispatch<IClientProvider.Action>,
  users: Map<number, User>,
) => dispatch({ type: 'CHANGE_USERS', payload: users })

export const changeMessages = (
  dispatch: Dispatch<IClientProvider.Action>,
  messages: Set<Message>,
) => dispatch({ type: 'CHANGE_MESSAGES', payload: messages })

export const changeChannel = (
  dispatch: Dispatch<IClientProvider.Action>,
  channel: string,
) => dispatch({ type: 'CHANGE_CHANNEL', payload: channel })

export const setClient = (
  dispatch: Dispatch<IClientProvider.Action>,
  client: CAPIClient,
) => dispatch({ type: 'SET_CLIENT', payload: client })
