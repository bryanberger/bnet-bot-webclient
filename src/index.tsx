import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'

import * as serviceWorker from './serviceWorker'
import App from './App'
import theme from './theme'
import global from './theme/global'
import IClientProvider from './providers/ClientProvider/interface'
import ClientProvider from './providers/ClientProvider'

const context: IClientProvider.Context = {
  apiKey: localStorage.getItem('cApiKey'),
  users: [],
  messages: [],
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <ClientProvider context={context}>
        <App />
      </ClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
