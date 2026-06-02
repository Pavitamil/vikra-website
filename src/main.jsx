import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
)

// Hide the instant preloader/splash screen after the React app mounts
setTimeout(() => {
  const preloader = document.getElementById('preloader')
  if (preloader) {
    preloader.style.opacity = '0'
    preloader.style.visibility = 'hidden'
    setTimeout(() => preloader.remove(), 500)
  }
}, 5000)
