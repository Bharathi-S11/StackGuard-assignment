import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import {useAuth} from '../context/AuthContext'

const AuthPage = () => {
  const {signIn, signUp} = useAuth()
  const navigate = useNavigate()

  const [isSignUp, setIsSignUp] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const fullName = `${firstName} ${lastName}`.trim()
    const success = isSignUp
      ? signUp(email, password, fullName)
      : signIn(email, password)

    if (success) {
      navigate('/config')
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <AuthLayout
      title={isSignUp ? 'Welcome to Stackguard' : 'Welcome back to Stackguard'}
      subtitle="Secure your codebase with advanced secret scanning security best practices"
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="name-row">
            <input
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
        )}

        <input
          type="email"
          placeholder="Enter email ID"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        )}

        {error && <p className="error">{error}</p>}

        <button type="submit" className="primary-btn">
          {isSignUp ? 'Create account' : 'Sign in'}
        </button>

        <p className="terms">
          By continuing, you agree to our{' '}
          <button
            type="button"
            className="link-btn"
            onClick={() => alert('Show Terms of Service')}
          >
            Terms of Service
          </button>{' '}
          and{' '}
          <button
            type="button"
            className="link-btn"
            onClick={() => alert('Show Privacy Policy')}
          >
            Privacy Policy
          </button>
        </p>

        <p className="toggle">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button
                type="button"
                className="link-btn"
                onClick={() => setIsSignUp(false)}
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <button
                type="button"
                className="link-btn"
                onClick={() => setIsSignUp(true)}
              >
                Create one
              </button>
            </>
          )}
        </p>
      </form>
    </AuthLayout>
  )
}

export default AuthPage
