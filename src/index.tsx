import React from 'react'
import ReactDOM from 'react-dom/client'
import { DAppProvider, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import App from './App'

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
)
