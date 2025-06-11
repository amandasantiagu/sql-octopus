'use client'

import React, { createContext, useContext, useState } from 'react'
import { useAuth } from './useAuth'

const apiUrl = process.env.NEXT_PUBLIC_API_URL // Base da API

type FetchOptions = {
  body?: Record<string, any> | string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'
  query?: Record<string, any>
  headers?: Record<string, any>
}

type RequestContextProps = {
  fetchRequest: <T = any>(endpoint: string, options?: Partial<FetchOptions>) => Promise<T>
}

const RequestContext = createContext<RequestContextProps | undefined>(undefined)

export const RequestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { accessToken } = useAuth()

  const fetchRequest = async <T = any,>(
    endpoint: string,
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

    const fullUrl = `${apiUrl}${endpoint}`
    try {
      const response = await fetch(fullUrl, fetchOptions)

      if (!response.ok) {
        let errorResponse
        try {
          errorResponse = await response.json()
        } catch {
          errorResponse = { message: response.statusText }
        }

        throw {
          status: response.status,
          ...errorResponse,
        }
      }

      return response.json()
    } catch (error) {
      throw error
    }
  }

  return <RequestContext.Provider value={{ fetchRequest }}>{children}</RequestContext.Provider>
}

export const useRequest = () => {
  const context = useContext(RequestContext)
  if (!context) {
    throw new Error('useRequest deve ser usado dentro de um RequestProvider')
  }
  return context
}
