import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import { IconButton } from '@mui/material'
import { IoMdClose } from 'react-icons/io'

interface Props {
  open: boolean
  content: any
  onClose: () => void
}

const DialogInfoContent: React.FC<Props> = ({ open, content, onClose }) => {
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

          <span className="text-white font-semibold w-full flex items-center">
            {content?.label}
          </span>
        </div>

        <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />
      </div>

      <div className="px-4 w-full flex flex-col gap-8 items-center text-white h-max">
        <div className="flex flex-col gap-4">
          <span>Aqui vai o conteudo</span>
        </div>
      </div>
    </Dialog>
  )
}

export default DialogInfoContent
