import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { ButtonWithLoading } from '../ButtonWithLoading'
import { format } from 'date-fns'
import CardActivityDetails from '../CardActivityDetails'

interface DialogActivityDetailsProps {
  open: boolean
  activity: any
  onClose: () => void
}

const DialogActivityDetails: React.FC<DialogActivityDetailsProps> = ({
  open,
  activity,
  onClose,
}) => {
  const formatToHoursAndMinutes = (date: Date): string => {
    return format(date, 'HH:mm')
  }

  return (
    <Dialog
      onClose={onClose}
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
        Prática: {activity?.label}
      </DialogTitle>

      <div className="p-4 w-full flex flex-col gap-2 items-center">
        <CardActivityDetails activity={activity} />
        <div className="flex flex-col gap-2 w-full">
          <ButtonWithLoading
            className="w-full"
            sx={{
              background: '#78CDD7',
              color: 'black',
              width: '100%',
              boxShadow: 'none',
              borderRadius: '0.5rem',
            }}
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
