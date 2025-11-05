import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import {useAuth} from '../context/AuthContext'

const ConfigPage = () => {
  const {setConfigKey} = useAuth()
  const navigate = useNavigate()
  const [key, setKey] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (key.length < 100 || key.length > 1000) {
      setError('Public key must be between 100 and 1000 characters.')
      return
    }
    setConfigKey(key)
    navigate('/dashboard')
  }

  return (
    <AuthLayout
      title="Verify your public key"
      subtitle="To get started, provide your public key for verification."
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your public key..."
          value={key}
          onChange={e => setKey(e.target.value)}
          rows="5"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="primary-btn">
          Verify
        </button>
      </form>
    </AuthLayout>
  )
}

export default ConfigPage
