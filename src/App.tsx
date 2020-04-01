import React, { useState, useEffect, useMemo } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'

import useClientContext from './providers/ClientProvider/hook'
import AppLayout from './components/AppLayout'
import EnterApiKey from './components/EnterApiKey'
import {
  changeApiKey,
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
        // if (client.localUser) changeLocalUser(dispatch, client.localUser)
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
      })

      // const users = client.users
    }
    // if (state.apiKey != null) {
    //   const ws = new WebSocket(socketUrl, 'json')
    //   ws.onopen = () => {
    //     console.log('onopen')
    //     ws.send(AuthenticateRequest(state.apiKey as string))
    //   }
    //   ws.onmessage = e => {
    //     const response = JSON.parse(e.data)
    //     console.log('onmessage', response)
    //     if (response.command == 'Botapiauth.AuthenticateResponse') {
    //       console.log('try and connect...')
    //       ws.send(ConnectRequest)
    //     }
    //   }
    //   ws.onclose = e => console.log('close', e)
    //   ws.onerror = e => console.log('error', e)
    // }
  }, [state.apiKey])

  return (
    <>
      {!state.apiKey && <EnterApiKey />}
      <AppLayout />
    </>
  )

  // const STATIC_OPTIONS = useMemo(
  //   () => ({
  //     onClose: (e: any) => console.log('onClose', e),
  //     onMessage: (e: any) => console.log('onMessage', e),
  //     onError: (e: any) => console.log('onError', e),
  //     onOpen: (e: any) => {
  //       console.log('onOpen', e)
  //       e.target.send(AuthenticateRequest)
  //     },
  //     shouldReconnect: () => false,
  //     reconnectAttempts: 3,
  //     reconnectInterval: 10000,
  //   }),
  //   [],
  // )

  // const [sendMessage, lastMessage, readyState, getWebSocket] = useWebSocket(
  //   socketUrl,
  //   STATIC_OPTIONS,
  // )

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     // getWebSocket returns the WebSocket wrapped in a Proxy. This is to restrict actions like mutating a shared websocket, overwriting handlers, etc
  //     console.log('lastMessage useEffect', getWebSocket().url, lastMessage)
  //     switch (lastMessage.data.command) {
  //       case 'Botapiauth.AuthenticateResponse':
  //         return sendMessage(ConnectRequest)
  //     }

  //     // setMessageHistory(prev => prev.concat(lastMessage))
  //   }
  // }, [sendMessage, lastMessage])

  // const [messageHistory, setMessageHistory] = useState<MessageEvent[]>([])
  // const [sendMessage, lastMessage, readyState, getWebSocket] = useWebSocket(
  //   socketUrl,
  //   STATIC_OPTIONS,
  // )

  // // const handleClickSendMessage = useCallback(() => sendMessage('Hello'), [])
  // // useEffect(() => {
  // //   if (readyState === ReadyState.OPEN) {
  // //     sendMessage(AuthenticateRequest)
  // //   }
  // // }, [readyState])

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     //getWebSocket returns the WebSocket wrapped in a Proxy. This is to restrict actions like mutating a shared websocket, overwriting handlers, etc
  //     // const currentWebsocketUrl = getWebSocket().url
  //     console.log('lastMessage useEffect', getWebSocket().url, lastMessage)
  //     // console.log('received a message from ', currentWebsocketUrl)
  //     switch (lastMessage.data.command) {
  //       case 'Botapiauth.AuthenticateResponse':
  //         return sendMessage(ConnectRequest)
  //     }

  //     setMessageHistory(prev => prev.concat(lastMessage))
  //   }
  // }, [sendMessage, lastMessage])

  // return (
  //   <div>
  //     {/* <button
  //       onClick={handleClickSendMessage}
  //       disabled={readyState !== ReadyState.OPEN}
  //     >
  //       Click Me to send 'Hello'
  //     </button> */}
  //     {/* <span>Status: {connectionStatus}</span> */}
  //     <span>Status: {connectionStatus[readyState]}</span>
  //     {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
  //     <ul>
  //       {messageHistory.map((message: MessageEvent, id: number) => (
  //         <span key={id}>{message.data}</span>
  //       ))}
  //     </ul>
  //   </div>
  // )
}

export default App
