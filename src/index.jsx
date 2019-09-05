import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from 'easy-peasy'

import App from './App'
import store from './store'

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
)
