import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import MyProvider from './providers/MyProvider'

render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root')
)
