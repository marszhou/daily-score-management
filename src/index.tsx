import React from 'react'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css'
// import 'bootstrap/scss/bootstrap.scss'
import './custom.scss'
import { db } from './app/db'
import { v4 } from 'uuid'

const root = createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)

db.students.add({
  id: v4(),
  name: 'haha2',
  avatar: ''
}).catch(e => {
  console.log(e)
})