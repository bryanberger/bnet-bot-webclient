import React, { useState, useEffect, useMemo } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'

import { AuthenticateRequest, ConnectRequest } from './services/CAPI/actions'
import useClientContext from './providers/ClientProvider/hook'
import { Chat, UserList, MessageBar } from './components'
import AppLayout from './components/AppLayout'
import EnterApiKey from './components/EnterApiKey'
import { changeApiKey } from './providers/ClientProvider/actions'

const socketUrl = 'wss://connect-bot.classic.blizzard.com/v1/rpc/chat'

const connectionStatus = {
  [ReadyState.CONNECTING]: 'Connecting',
  [ReadyState.OPEN]: 'Open',
  [ReadyState.CLOSING]: 'Closing',
  [ReadyState.CLOSED]: 'Closed',
}

const App = () => {
  const { state } = useClientContext()

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
