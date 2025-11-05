import React, {createContext, useContext, useState} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [configKey, setConfigKey] = useState(null)

  const signUp = (email, password, fullName) => {
    if (email && password.length >= 6) {
      setUser({email, fullName})
      return true
    }
    return false
  }

  const signIn = (email, password) => {
    if (email && password.length >= 6) {
      setUser({email, fullName: email.split('@')[0]})
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setConfigKey(null)
  }

  return (
    <AuthContext.Provider
      value={{user, signUp, signIn, logout, configKey, setConfigKey}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
