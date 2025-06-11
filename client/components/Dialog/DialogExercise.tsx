import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import HeaderActivity from '../Header/HeaderActivity'
import { styled, LinearProgress, linearProgressClasses } from '@mui/material'
import CombiningPairs from '../Activities/CombiningPairs'
import OnlyChoice from '../Activities/OnlyChoice'
import TrueOrFalse from '../Activities/TrueOrFalse'
import FillBlanks from '../Activities/FillBlanks'

import ButtonValidation from '../ButtonValidation/ButtonValidationComponent'
import ResultPractice from '../Activities/ResultPractice'
import { activitys, ActivityType } from '@/types/Activity'
import { ModuleContent } from '@/types/Module'
import { useRequest } from '@/contexts/RequestContext'

interface Props {
  open: boolean
  content: ModuleContent
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

const DialogExercise: React.FC<Props> = ({ open, content, onClose }) => {
  const { fetchRequest } = useRequest()

  const [step, setSteps] = React.useState<number>(1)
  const [currentExercise, setCurrentExercise] = React.useState<ActivityType | undefined>(undefined)
  const [results, setResults] = React.useState<{ activity: ActivityType; answer: any }[]>([])
  const [startTime, setStartTime] = React.useState<Date | null>(null)
  const [totalTime, setTotalTime] = React.useState<number>(0)
  const [loading, setLoading] = React.useState(false)
  const [exercises, setExercises] = React.useState<ActivityType[]>([])

  const handleClose = () => {
    setSteps(1)
    setCurrentExercise(exercises[0])

    setResults([])
    setStartTime(null)
    setTotalTime(0)

    if (onClose) onClose()
  }

  const getExercises = async () => {
    setLoading(true)
    try {
      const response = await fetchRequest('exercise', {
        method: 'GET',
      })

      setExercises(response || [])
    } catch (error) {
      console.log('Erro na requisição:', error)
    } finally {
      setLoading(false)
    }
  }

  const progress = (step / activitys?.length) * 100

  const handleActivityChange = (newValue: any) => {
    if (currentExercise) {
      setResults((prevResults) => {
        const updatedResults = prevResults.filter((r) => r.activity !== currentExercise)
        return [...updatedResults, { activity: currentExercise, answer: newValue }]
      })
    }
  }

  const typeInCurrentExercise = React.useMemo(() => {
    const type = currentExercise?.type

    switch (type) {
      case 'fill_blanks':
        return <FillBlanks data={currentExercise} onChange={handleActivityChange} />
      case 'only_choice':
        return <OnlyChoice data={currentExercise} onChange={handleActivityChange} />
      case 'combining_pairs':
        return <CombiningPairs data={currentExercise} onChange={handleActivityChange} />
      case 'true_false':
        return <TrueOrFalse data={currentExercise} onChange={handleActivityChange} />
      default:
        return <></>
    }
  }, [currentExercise])

  const getCurrentExercise = (step: number) => {
    if (exercises.length === 0) return

    const index = step - 1
    const activity = exercises[index] as ActivityType
    setCurrentExercise(activity)
  }

  const nextStep = React.useCallback(() => {
    const newStep = step + 1
    getCurrentExercise(newStep)
    setSteps(newStep)

    if (newStep > exercises.length && startTime) {
      const endTime = new Date()
      const timeDiff = endTime.getTime() - startTime.getTime()

      console.log(timeDiff)
      setTotalTime(Math.floor(timeDiff / 1000))
    }
  }, [step])

  const handleClick = () => {
    nextStep()
  }

  const currentResult = React.useMemo(() => {
    return (
      results.find((r) => r.activity === currentExercise) || {
        activity: currentExercise,
        answer: null,
      }
    )
  }, [currentExercise, results])

  React.useEffect(() => {
    if (loading || exercises?.length === 0) return
    if (!currentExercise) setCurrentExercise(exercises[0])

    setSteps(1)
    setStartTime(new Date())
  }, [exercises])

  React.useEffect(() => {
    getExercises()
  }, [])

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
        {currentExercise && <HeaderActivity onClose={handleClose} />}

        {currentExercise && <BorderLinearProgress variant="determinate" value={progress} />}

        <div className="p-4 w-full flex flex-col gap-2 items-center h-full overflow-auto">
          {step <= activitys.length ? (
            currentExercise && (
              <div className="flex flex-col w-full h-full">
                <div className="flex-grow">{typeInCurrentExercise}</div>
                <div className="mt-auto">
                  <ButtonValidation
                    onAfterClick={handleClick}
                    currentResult={currentResult}
                    disabled={!currentResult?.answer}
                  />
                </div>
              </div>
            )
          ) : (
            <ResultPractice
              content={content}
              data={results}
              time={totalTime}
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </Dialog>
  )
}

export default DialogExercise
