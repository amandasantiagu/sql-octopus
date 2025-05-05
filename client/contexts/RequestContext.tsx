'use client'

import React, { createContext, useContext, useState } from 'react'

const apiUrl = process.env.NEXT_PUBLIC_API_URL // Base da API

type FetchOptions = {
  body?: Record<string, any> | string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'
  query?: Record<string, any>
  headers?: Record<string, any>
}

type RequestContextProps = {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
  fetchRequest: <T = any>(endpoint: string, options?: Partial<FetchOptions>) => Promise<T>
}

const RequestContext = createContext<RequestContextProps | undefined>(undefined)

export const RequestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  const fetchRequest = async <T = any,>(
    endpoint: string, // Agora aceitamos apenas o endpoint, não a URL completa
    options?: Partial<FetchOptions>
  ): Promise<T> => {
    const headers = {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    }

    const fetchOptions: RequestInit = {
      method: options?.method || 'GET',
      headers,
      body: options?.body ? JSON.stringify(options.body) : undefined,
    }

    const fullUrl = `${apiUrl}${endpoint}` // Adiciona a base da URL

    try {
      const response = await fetch(fullUrl, fetchOptions)
      if (!response.ok) {
        if (response.status === 401) {
          // Token expirado, implemente lógica para refresh token
          setAccessToken(null) // Redirecionar ou renovar token
        }
        throw new Error(await response.text())
      }
      return response.json()
    } catch (error: any) {
      console.error('Erro ao fazer requisição:', error.message)
      throw error
    }
  }

  return (
    <RequestContext.Provider value={{ accessToken, setAccessToken, fetchRequest }}>
      {children}
    </RequestContext.Provider>
  )
}

export const useRequest = () => {
  const context = useContext(RequestContext)
  if (!context) {
    throw new Error('useRequest deve ser usado dentro de um RequestProvider')
  }
  return context
}
