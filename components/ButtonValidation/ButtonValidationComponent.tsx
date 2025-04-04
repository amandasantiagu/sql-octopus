import React, { useMemo, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import { buttonTeal, buttonTiffanyBlue } from '@/styles/activityStyles'
import { FaHeart } from 'react-icons/fa6'
import DialogExplanation from '../Dialog/DialogExplanation'

type Props = {
  currentActivity?: any
  life?: number
  result: any
  onAfterClick: () => void
}

const ButtonValidation: React.FC<Props> = ({ result, life = 2, currentActivity, onAfterClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openExplanation, setOpenExplanation] = useState(false)

  const title = useMemo(() => {
    return result ? 'Parabens!' : 'Incorreto'
  }, [result])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const toggleModalExplanation = () => {
    setOpenExplanation(!openExplanation)
  }

  return (
    <div className="relative">
      <DialogExplanation
        open={openExplanation}
        activity={currentActivity}
        onClose={() => setOpenExplanation(false)}
      />
      <Button
        onClick={toggleModal}
        sx={buttonTiffanyBlue}
        variant="contained"
        color="primary"
        className="w-full"
      >
        Verificar
      </Button>

      <Dialog
        open={isModalOpen}
        onClose={toggleModal}
        fullWidth
        maxWidth="sm"
        sx={{
          '& .MuiDialog-paper': {
            margin: 0,
            background: '#17373A',
            borderRadius: '16px 16px 0 0',
            position: 'fixed',
            bottom: 0,
            minWidth: '100vw',
            padding: '1.5rem',
          },
        }}
      >
        <DialogContent>
          <div className="flex flex-col w-full text-white items-center gap-4">
            <span
              className={`text-xl font-semibold ${title === 'Incorreto' ? 'text-red-500' : 'text-primary-200'}`}
            >
              {title}
            </span>
            {title === 'Incorreto' ? (
              <div className="flex flex-col gap-4">
                <div className="w-full flex gap-2 justify-center">
                  <FaHeart className={life === 3 ? 'text-red-600' : 'text-red-950'} size={30} />
                  <FaHeart className={life > 1 ? 'text-red-600' : 'text-red-950'} size={30} />
                  <FaHeart className={life === 0 ? 'text-red-950' : 'text-red-600'} size={30} />
                </div>

                <span className="text-white"> A cada erro voce perde uma vida </span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </DialogContent>

        <DialogActions className="flex flex-col gap-4">
          <Button
            onClick={toggleModalExplanation}
            variant="contained"
            color="error"
            className="w-full"
            sx={buttonTeal}
          >
            Explicação
          </Button>

          <Button
            onClick={() => {
              if (onAfterClick) onAfterClick()
              toggleModal()
            }}
            sx={buttonTiffanyBlue}
            variant="contained"
            className="w-full"
            color="primary"
          >
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ButtonValidation
