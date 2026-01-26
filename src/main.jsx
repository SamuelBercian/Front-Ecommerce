import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouteApp from './app/routes/router'
import './app/style/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteApp />
  </StrictMode>,
)
