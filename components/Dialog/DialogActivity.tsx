import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import HeaderActivity from '../Header/HeaderActivity'
import { styled, LinearProgress, linearProgressClasses, Button } from '@mui/material'
import CombiningPairs from '../Activities/CombiningPairs'
import OnlyChoice from '../Activities/OnlyChoice'
import TrueOrFalse from '../Activities/TrueOrFalse'
import FillBlanks from '../Activities/FillBlanks'
import { activitys, ActivityType } from '@/types/Activity'
import ButtonValidation from '../ButtonValidation/ButtonValidationComponent'
import ResultPractice from '../Activities/ResultPractice'

interface Props {
  open: boolean
  activity: any
  onClose: () => void
}

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#17373A',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#78CDD7',
  },
}))

const DialogActivity: React.FC<Props> = ({ open, onClose }) => {
  const [step, setSteps] = React.useState<number>(1)
  const [currentActivity, setCurrentActivity] = React.useState<ActivityType | undefined>(undefined)
  const [results, setResults] = React.useState<{ activity: ActivityType; answer: any }[]>([])
  const [consecutiveCorrect, setConsecutiveCorrect] = React.useState<number>(0)

  const handleClose = () => {
    setSteps(1)
    setCurrentActivity(activitys[0])
    setResults([])

    if (onClose) onClose()
  }

  const progress = (step / activitys?.length) * 100

  const handleActivityChange = (newValue: any) => {
    if (currentActivity) {
      setResults((prevResults) => {
        const updatedResults = prevResults.filter((r) => r.activity !== currentActivity)
        return [...updatedResults, { activity: currentActivity, answer: newValue }]
      })
    }
  }

  const typeInCurrentActivity = React.useMemo(() => {
    const type = currentActivity?.type

    switch (type) {
      case 'fill-blanks':
        return <FillBlanks data={currentActivity} onChange={handleActivityChange} />
      case 'only-choice':
        return <OnlyChoice data={currentActivity} onChange={handleActivityChange} />
      case 'combining-pairs':
        return <CombiningPairs data={currentActivity} onChange={handleActivityChange} />
      case 'true-false':
        return <TrueOrFalse data={currentActivity} onChange={handleActivityChange} />
      default:
        return <></>
    }
  }, [currentActivity])

  const getCurrentActivity = (step: number) => {
    const index = step - 1
    const activity = activitys[index] as ActivityType
    setCurrentActivity(activity)
  }

  const nextStep = React.useCallback(() => {
    const newStep = step + 1
    getCurrentActivity(newStep)
    setSteps(newStep)
  }, [step])

  const handleClick = () => {
    nextStep()
  }

  const currentResult = React.useMemo(() => {
    return (
      results.find((r) => r.activity === currentActivity) || {
        activity: currentActivity,
        answer: null,
      }
    )
  }, [currentActivity, results])

  console.log(results)

  React.useEffect(() => {
    if (!currentActivity) setCurrentActivity(activitys[0])
    setSteps(1)
  }, [])

  React.useEffect(() => {
    const correctAnswer = currentResult.activity?.answer === currentResult.answer

    if (correctAnswer) {
      console.log(consecutiveCorrect)
      setConsecutiveCorrect((prev) => prev + 1)
    } else {
      setConsecutiveCorrect(0)
    }
  }, [currentResult])

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth={false}
      sx={{
        '& .MuiDialog-paper': {
          width: '100vw',
          background: '#0D5C63',
          height: '100%',
          maxWidth: 'none',
          maxHeight: 'none',
          margin: 0,
        },
      }}
    >
      <div className="w-full flex flex-col h-screen px-2 py-4">
        {currentActivity && <HeaderActivity currentLife={2} onClose={handleClose} />}

        {currentActivity && <BorderLinearProgress variant="determinate" value={progress} />}

        <div className="p-4 w-full flex flex-col gap-2 items-center h-full overflow-auto">
          {step <= activitys.length ? (
            currentActivity && (
              <div className="flex flex-col w-full h-full">
                <div className="flex-grow">{typeInCurrentActivity}</div>
                <div className="mt-auto">
                  <ButtonValidation
                    onAfterClick={handleClick}
                    currentResult={currentResult}
                    consecutive={consecutiveCorrect || 0}
                    disabled={!currentResult?.answer}
                  />
                </div>
              </div>
            )
          ) : (
            <ResultPractice data={results} onClose={handleClose} />
          )}
        </div>
      </div>
    </Dialog>
  )
}

export default DialogActivity
