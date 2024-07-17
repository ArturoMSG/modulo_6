import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AutenticacionProvider } from './context/AutenticacionContext.jsx'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutenticacionProvider>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </AutenticacionProvider>
  </React.StrictMode>
)
