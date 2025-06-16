import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { ButtonWithLoading } from '../ButtonWithLoading'

import Image from 'next/image'
import { buttonTiffanyBlue } from '@/styles/activityStyles'

interface DialogCloseLessonProps {
  onClose: () => void
}

const DialogCloseLesson: React.FC<DialogCloseLessonProps> = ({ onClose }) => {
  const [open, setOpen] = React.useState<boolean>(false)

  const handleClose = () => {
    if (onClose) onClose()

    setOpen(false)
  }
  return (
    <>
      <IconButton aria-label="close" onClick={() => setOpen(true)}>
        <IoMdClose className="text-gray-300" />
      </IconButton>

      <Dialog
        open={open}
        maxWidth="lg"
        sx={{
          '& .MuiDialog-paper': { borderRadius: '0.8rem', width: '100%' },
        }}
      >
        <DialogTitle
          className="bg-primary-200 text-white text-base justify-center flex w-full"
          sx={{ fontSize: '1rem' }}
        >
          Tem certeza?
        </DialogTitle>

        <div className="p-4 w-full flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center w-full py-4">
            <img
              src="/logo.png"
              alt="SqlOctopus"
              width={100}
              height={100}
              className="cursor-pointer"
            />

            <span className="text-base font-semibold text-primary-300 text-center">
              Ao sair voce vai perder todo o seu progresso!
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <ButtonWithLoading sx={buttonTiffanyBlue} onClick={() => setOpen(false)}>
              Continuar aprendendo
            </ButtonWithLoading>
            <ButtonWithLoading variant="text" onClick={handleClose}>
              Sair
            </ButtonWithLoading>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default DialogCloseLesson
