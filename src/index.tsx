import React from 'react'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import 'rsuite/dist/rsuite.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
