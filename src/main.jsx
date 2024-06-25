import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShowContext from "./context/ShowContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShowContext>
      <App />
    </ShowContext>
  </React.StrictMode>,
)
