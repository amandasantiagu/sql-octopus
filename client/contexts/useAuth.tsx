'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { User } from '@/types/User'

interface AuthContextProps {
  user: User | null
  accessToken: string | null
  signIn: (email: string, password: string) => Promise<{ error: string | null; data?: User }>
  updateUser: (user: User) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const router = useRouter()

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const updateUser = (updatedUser: User) => {
    setCurrentUser(updatedUser)

    Cookies.set('user', JSON.stringify(updatedUser), { expires: 7, path: '/' })
  }

  const updateToken = (value: string) => {
    setAccessToken(value)

    Cookies.set('authToken', value, { expires: 7, path: '/' })
  }

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

      updateToken(access_token)
      updateUser(user)

      return { error: null, data: user }
    } catch (error: any) {
      console.error('Erro no login:', error)
      return { error: 'Ocorreu um erro inesperado' }
    }
  }

  const signOut = () => {
    setCurrentUser(null)
    setAccessToken(null)

    Cookies.remove('authToken', { path: '/' })
    Cookies.remove('user', { path: '/' })
    router.push('/login')
  }

  useEffect(() => {
    const token = Cookies.get('authToken')
    const storedUser = Cookies.get('user')

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setCurrentUser(parsedUser)
      } catch (error) {
        console.log('Erro ao analisar o cookie do usuário:', error)
        Cookies.remove('user')
      }
    } else {
      console.log('Cookie do usuário não encontrado ou vazio')
      setCurrentUser(null)
    }

    if (token) {
      updateToken(token)
    }
  }, [accessToken])

  return (
    <AuthContext.Provider value={{ user: currentUser, accessToken, updateUser, signIn, signOut }}>
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
