import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

const logoUrl =
  'https://res.cloudinary.com/dmrxth4it/image/upload/v1762337976/Screenshot_2025-11-05_154537_zmhcgg.png'

const DashboardPage = () => {
  const {user, logout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dash-brand">
          <img src={logoUrl} alt="StackGuard Logo" className="brand-logo" />
          <h2>Stackguard</h2>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="dashboard-main">
        <h1>Hello, {user?.fullName || 'User'} 👋</h1>
        <p>Welcome to your secure dashboard.</p>
      </main>
    </div>
  )
}

export default DashboardPage
