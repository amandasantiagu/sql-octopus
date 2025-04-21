import React, { useEffect, useMemo, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { buttonTeal, buttonTiffanyBlue } from '@/styles/activityStyles'
import { FaHeart } from 'react-icons/fa6'
import DialogExplanation from '../Dialog/DialogExplanation'
import { ActivityType } from '@/types/Activity'

type Props = {
  currentResult: { activity: ActivityType | undefined; answer: any }
  life?: number
  disabled?: boolean
  consecutive?: number
  onAfterClick: () => void
}

const ButtonValidation: React.FC<Props> = ({
  life = 2,
  currentResult,
  consecutive = 0,
  disabled = false,
  onAfterClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openExplanation, setOpenExplanation] = useState(false)

  const validateAnswer = (
    activityType: string,
    data: any[],
    correctAnswer: string,
    answer: any
  ): boolean => {
    if (activityType === 'combining-pairs') {
      return (
        data.length === answer.length &&
        data.every((item: { label: string; value: string }) =>
          answer.some(
            (answerItem: { label: string; value: string }) =>
              item.label === answerItem.label && item.value === answerItem.value
          )
        )
      )
    }

    return correctAnswer === answer
  }

  const title = useMemo(() => {
    if (!currentResult.activity || !currentResult.answer) return 'Incorreto'

    const { type, data, answer } = currentResult.activity

    const isCorrect = validateAnswer(type, data || [], answer, currentResult.answer)

    return isCorrect ? 'Parabéns!' : 'Incorreto'
  }, [currentResult])

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
        activity={currentResult.activity}
        onClose={() => setOpenExplanation(false)}
      />

      <Button
        onClick={toggleModal}
        sx={buttonTiffanyBlue}
        disabled={disabled}
        variant="contained"
        color="primary"
        className="w-full"
      >
        Verificar
      </Button>

      <Dialog
        open={isModalOpen}
        onClose={undefined}
        disableEscapeKeyDown
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
              <div>
                <span className="text-white">A resposta esta correta, continue assim!</span>
              </div>
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
