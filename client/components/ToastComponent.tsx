'use client'
import { Snackbar, Alert } from '@mui/material'
import { useToast } from '@/contexts/toast'
import { useEffect, useState } from 'react'

const ToastComponent: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const { toast } = useToast()

  const handleClose = (_event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === 'clickaway') return

    setOpen(false)
  }

  useEffect(() => {
    if (!toast) return

    setOpen(true)
  }, [toast])

  return (
    <>
      {toast && open && (
        <Snackbar
          open={open}
          autoHideDuration={toast.duration}
          onClose={() => handleClose}
          anchorOrigin={{
            vertical: toast.vertical,
            horizontal: toast.horizontal,
          }}
          key={toast.vertical + toast.horizontal + toast.message}
        >
          <Alert
            className="items-center px-5"
            onClose={handleClose}
            severity={toast.type}
            action={
              toast?.redirect && (
                <a href={toast?.redirect?.href} target={toast?.redirect?.target}>
                  {toast?.redirect?.textLink}
                </a>
              )
            }
            variant="filled"
          >
            {toast.message}
          </Alert>
        </Snackbar>
      )}
    </>
  )
}

export default ToastComponent
