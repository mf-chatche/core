import React from 'react'
import { AppProvider } from 'app-providers'
import { AppRoutes } from 'app-router'

import './app.style.scss'

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
