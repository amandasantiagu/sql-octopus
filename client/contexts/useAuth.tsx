'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { User } from '@/types/User'

interface AuthContextProps {
  user: User | null
  accessToken: string | null
  signIn: (email: string, password: string) => Promise<{ error: string | null; data?: User }>
  signOut: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const router = useRouter()

  const apiUrl = process.env.NEXT_PUBLIC_API_URL // Base da API

  // Restaura estado de autenticação
  useEffect(() => {
    const token = Cookies.get('authToken')

    if (token) {
      setAccessToken(token)
      fetch(`${apiUrl}auth/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (!res.ok) {
            return console.log('Erro ao buscar dados do usuário')
          }
          return res.json()
        })
        .then((userData: User) => {
          setCurrentUser(userData)
        })
        .catch((error) => {
          console.log('Erro ao restaurar sessão:', error)
          signOut()
        })
    }
  }, [apiUrl])

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
      setCurrentUser(user)

      Cookies.set('authToken', access_token, { expires: 7, path: '/' })

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
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user: currentUser, accessToken, signIn, signOut }}>
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
