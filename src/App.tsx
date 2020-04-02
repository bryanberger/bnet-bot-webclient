import React, { useEffect } from 'react'

import useClientContext from './providers/ClientProvider/hook'
import AppLayout from './components/AppLayout'
import EnterApiKey from './components/EnterApiKey'
import {
  changeMessages,
  changeUsers,
  setClient,
} from './providers/ClientProvider/actions'
import CAPIClient from './services/CAPI'
import useBeforeUnload from './hooks/useBeforeUnload'

const App = () => {
  const { state, dispatch } = useClientContext()
  useBeforeUnload(
    true,
    'Refreshing or closing this window will terminate your connection to battle.net',
  )
  useEffect(() => {
    if (state.apiKey !== null) {
      const client = new CAPIClient(state.apiKey)

      client.on('ready', () => {
        console.log('ready')
        setClient(dispatch, client)
      })

      client.on('channelJoin', e => {
        console.log('channelJoin', e)
      })

      client.on('message', e => {
        console.log('message', e)
        changeMessages(dispatch, client.messages)
      })

      client.on('userJoin', e => {
        console.log('userJoin', e)
        changeUsers(dispatch, client.users)
      })

      client.on('userLeave', e => {
        console.log('userLeave', e)
        changeUsers(dispatch, client.users)
      })
    }
  }, [state.apiKey, dispatch])

  return (
    <>
      {!state.apiKey && <EnterApiKey />}
      <AppLayout />
    </>
  )
}

export default App
