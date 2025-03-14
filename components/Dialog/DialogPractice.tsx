import * as React from 'react'
import Dialog from '@mui/material/Dialog'

interface Props {
  open: boolean
  practice: any
  onClose: () => void
}

const DialogPractice: React.FC<Props> = ({ open, practice, onClose }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={false} // Remove limite padrão de largura
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '0.8rem',
          width: '100%',
          height: '100%', // Altura total da tela
          margin: 0, // Remove margens padrão
          maxWidth: 'none', // Remove limite de largura
          maxHeight: 'none', // Remove limite de altura
        },
      }}
    >
      <span>Header</span>

      <div className="p-4 w-full flex flex-col gap-2 items-center">Ola</div>
    </Dialog>
  )
}

export default DialogPractice
