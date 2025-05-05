import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { ButtonWithLoading } from '../ButtonWithLoading'
import CardActivityDetails from '../CardActivityDetails'
import { ModuleContent } from '@/types/Module'

interface DialogActivityDetailsProps {
  open: boolean
  content: ModuleContent
  onClose: () => void
  onOpenLesson: () => void
}

const DialogActivityDetails: React.FC<DialogActivityDetailsProps> = ({
  open,
  content,
  onClose,
  onOpenLesson,
}) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="lg"
      sx={{
        '& .MuiDialog-paper': { borderRadius: '0.8rem', minWidth: '100vw' },
      }}
    >
      <DialogTitle
        className="bg-primary-200 text-white text-base justify-center flex w-full"
        sx={{ fontSize: '1rem' }}
      >
        Prática: {content?.label}
      </DialogTitle>

      <div className="p-4 w-full flex flex-col gap-2 items-center">
        <CardActivityDetails activity={content} />

        <div className="flex flex-col gap-2 w-full">
          <ButtonWithLoading
            className="w-full"
            sx={{
              color: 'white',
              boxShadow: 'none',
              borderRadius: '0.5rem',
            }}
            onClick={onOpenLesson}
          >
            Visualizar
          </ButtonWithLoading>

          <ButtonWithLoading
            className="w-full"
            sx={{
              background: '#78CDD7',
              color: 'black',
              boxShadow: 'none',
              borderRadius: '0.5rem',
            }}
            onClick={onOpenLesson}
          >
            Refazer prática
          </ButtonWithLoading>

          <ButtonWithLoading
            className="w-full"
            variant="text"
            onClick={onClose}
            sx={{
              color: 'black',
              width: '100%',
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Fechar
          </ButtonWithLoading>
        </div>
      </div>
    </Dialog>
  )
}

export default DialogActivityDetails
