'use client'
import { createContext, useCallback, useContext, useState } from 'react'

type ToastType = 'success' | 'info' | 'warning' | 'error'
type OnListenToastTypeProps = { message: string; type: ToastType }

interface Redirect {
  href: string
  textLink: string
  target?: string
}
interface ToastProps {
  message: string
  type: ToastType
  duration?: number
  redirect?: Redirect
  vertical: 'top' | 'bottom'
  horizontal: 'center' | 'right' | 'left'
}

export interface ToastContextInterface {
  showToast(
    message: string,
    type: ToastType,
    redirect?: Redirect,
    duration?: number,
    vertical?: 'bottom' | 'top',
    horizontal?: 'center' | 'right' | 'left'
  ): void
  toast: ToastProps | undefined
  onListenToast: ({ message, type }: { message: string; type: ToastType }) => void
}

export const ToastContext = createContext<ToastContextInterface>({} as ToastContextInterface)

type Props = {
  children: React.ReactNode
}

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const [toast, setToast] = useState<ToastProps | undefined>()

  const showToast = useCallback(
    (
      message: string,
      type: ToastType,
      redirect?: Redirect,
      duration = 6000,
      vertical: 'bottom' | 'top' = 'bottom',
      horizontal: 'center' | 'right' | 'left' = 'center'
    ) => {
      setToast({
        message,
        type,
        duration,
        vertical,
        horizontal,
        redirect,
      })
    },
    []
  )

  const onListenToast = ({ message, type }: OnListenToastTypeProps) => {
    showToast(message, type)
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
        toast,
        onListenToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextInterface => {
  const context = useContext(ToastContext)

  return context
}

export default ToastProvider
