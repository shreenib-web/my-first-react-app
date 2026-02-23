import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'   // ✅ REMOVE {}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)