'use client'

import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { User } from '@/types/User'

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

  const apiUrl = process.env.NEXT_PUBLIC_API_URL // Base da API

  const signIn = async (email: string, password: string) => {
    try {
      const response = await fetch(`${apiUrl}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        return { error: errorData.message || 'Falha ao autenticar' }
      }

      const { access_token, user } = await response.json()

      setAccessToken(access_token)
      setUser(user)

      return { error: null, data: user }
    } catch (error: any) {
      console.error('Erro no login:', error)
      return { error: 'Ocorreu um erro inesperado' }
    }
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
