'use client'

import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { User } from '@/types/User'
import { useRequest } from './RequestContext'

interface AuthContextProps {
  user: User | null
  accessToken: string | null
  signIn: (email: string, password: string) => Promise<{ error: string | null; data?: User }>
  signOut: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const router = useRouter()
  const { fetchRequest } = useRequest()

  const signIn = async (email: string, password: string) => {
    const response = await fetchRequest('auth/login', {
      method: 'POST',
      body: {
        email,
        password,
      },
    })

    if (response?.error) {
      return { error: response.error.message || 'Falha ao autenticar' }
    }

    const { access_token, user } = response

    setAccessToken(access_token)
    setUser(user)

    return { error: null }
  }

  const signOut = () => {
    setUser(null)
    setAccessToken(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, accessToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
