import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import ConfigPage from './pages/ConfigPage'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './routes/ProtectedRoute'
import {useAuth} from './context/AuthContext'

function App() {
  const {user, configKey} = useAuth()

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/config"
        element={
          <ProtectedRoute isAllowed={!!user} redirectPath="/">
            <ConfigPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            isAllowed={!!user && !!configKey}
            redirectPath="/config"
          >
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
