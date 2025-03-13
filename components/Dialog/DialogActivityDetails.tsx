import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { ButtonWithLoading } from '../ButtonWithLoading'
import { format } from 'date-fns'

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
        borderRadius: '0.5rem',
      }}
    >
      <DialogTitle className="bg-primary-200 text-white text-base">
        Prática: {activity?.label}
      </DialogTitle>

      <div className="p-1 w-full flex flex-col gap-4 items-center">
        <div className="flex w-full gap-2 text-sm justify-center py-4">
          <div className="flex flex-col gap-1 items-center">
            <div>TOTAL XP</div> <div>{activity?.exp}</div>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <div>DURAÇÃO</div>
            <div>{formatToHoursAndMinutes(activity?.completed || new Date())}</div>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <div>ACERTOS</div> <div>88%</div>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <ButtonWithLoading
            className="w-full"
            sx={{
              height: '2.2rem',
              background: '#78CDD7',
              color: 'black',
              width: '100%',
              boxShadow: 'none',
              textTransform: 'none',
              borderRadius: '0.5rem',
              fontWeight: 600,
            }}
          >
            Refazer prática
          </ButtonWithLoading>

          <ButtonWithLoading
            className="w-full"
            variant="text"
            onClick={onClose}
            sx={{
              height: '2.2rem',
              color: 'black',
              width: '100%',
              boxShadow: 'none',
              textTransform: 'none',
              borderRadius: '0.5rem',
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
