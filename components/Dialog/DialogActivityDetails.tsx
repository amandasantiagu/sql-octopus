import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'

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
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Detalhes da Atividade</DialogTitle>
      <div style={{ padding: '1rem' }}>
        <span>oi</span>
      </div>
    </Dialog>
  )
}

export default DialogActivityDetails
