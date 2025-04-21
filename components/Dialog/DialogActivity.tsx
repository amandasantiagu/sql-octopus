import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import HeaderActivity from '../Header/HeaderActivity'
import { styled, LinearProgress, linearProgressClasses } from '@mui/material'
import CombiningPairs from '../Activities/CombiningPairs'
import OnlyChoice from '../Activities/OnlyChoice'
import TrueOrFalse from '../Activities/TrueOrFalse'
import FillBlanks from '../Activities/FillBlanks'
import { activitys, ActivityType } from '@/types/Activity'
import ButtonValidation from '../ButtonValidation/ButtonValidationComponent'
import ResultPractice from '../Activities/ResultPractice'
import { ModuleContent } from '@/types/Module'
import { useTimer } from 'react-timer-hook'

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

const DialogActivity: React.FC<Props> = ({ open, content, onClose }) => {
  const [step, setSteps] = React.useState<number>(1)
  const [currentActivity, setCurrentActivity] = React.useState<ActivityType | undefined>(undefined)
  const [results, setResults] = React.useState<{ activity: ActivityType; answer: any }[]>([])

  const expiryTimestamp = new Date()
  expiryTimestamp.setFullYear(expiryTimestamp.getFullYear() + 1)

  const { seconds, minutes, hours, start, pause, restart } = useTimer({
    expiryTimestamp,
    autoStart: false, // Não inicia automaticamente
  })

  const handleClose = () => {
    setSteps(1)
    setCurrentActivity(activitys[0])

    pause()
    setResults([])

    const newExpiryTimestamp = new Date()
    newExpiryTimestamp.setHours(0, 0, 0, 0)
    restart(newExpiryTimestamp, false)

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

    if (newStep > activitys.length) pause()
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

  const totalTime = React.useMemo(() => {
    const totalSeconds = seconds + minutes * 60 + hours * 3600
    return totalSeconds
  }, [seconds, minutes, hours])

  React.useEffect(() => {
    if (!currentActivity) setCurrentActivity(activitys[0])

    setSteps(1)
    start()
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

export default DialogActivity
