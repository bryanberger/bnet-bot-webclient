import React, { useReducer } from 'react'

import IClientProvider from './interface'
import ClientContext from './context'
import reducer from './reducer'

const ClientProvider: React.FC<IClientProvider.Props> = ({
  context,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, context)
  const value = { state, dispatch }

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  )
}

export default ClientProvider
