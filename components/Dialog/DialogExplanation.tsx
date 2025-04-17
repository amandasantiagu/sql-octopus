import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import { IconButton } from '@mui/material'
import { IoMdClose } from 'react-icons/io'
import { ButtonWithLoading } from '../ButtonWithLoading'
import { buttonTiffanyBlue } from '@/styles/activityStyles'

interface Props {
  open: boolean
  activity: any
  onClose: () => void
}

const DialogExplanation: React.FC<Props> = ({ open, activity, onClose }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="lg"
      sx={{
        '& .MuiDialog-paper': {
          minWidth: '100%',
          background: '#0d5c63',
          minHeight: '100vh',
        },
      }}
    >
      <div className="flex flex-col gap-4 py-2">
        <div className="flex w-full gap-4 items-center p-2">
          <IconButton aria-label="close" onClick={onClose}>
            <IoMdClose className="text-gray-300" />
          </IconButton>

          <span className="text-white font-semibold w-full flex items-center">EXPLICAÇÃO</span>
        </div>

        <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />
      </div>

      <div className="p-4 w-full flex flex-col gap-8 items-center text-white h-max">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full justify-center items-center py-4">
            <span className="font-semibold">Resposta correta:</span>
            <span className="text-md">{activity?.answer}</span>
          </div>

          <div className="rounded-md bg-white text-primary p-4 text-sm">
            <span>{activity?.explanation}</span>
          </div>
        </div>

        <ButtonWithLoading className="w-full" sx={buttonTiffanyBlue} onClick={onClose}>
          continuar
        </ButtonWithLoading>
      </div>
    </Dialog>
  )
}

export default DialogExplanation
