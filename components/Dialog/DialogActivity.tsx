import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import HeaderActivity from '../Header/HeaderActivity'
import { styled, LinearProgress, linearProgressClasses, Button } from '@mui/material'
import ResultPractice from '../Activities/ResultPractice'
import CombiningPairs from '../Activities/CombiningPairs'
import DragAndDrop from '../Activities/DragAndDrop'
import OnlyChoice from '../Activities/OnlyChoice'
import TrueOrFalse from '../Activities/TrueOrFalse'
import FillBlanks from '../Activities/FillBlanks'
import { activitys, ActivityType } from '@/types/Activity'
import ButtonValidation from '../ButtonValidation/ButtonValidationComponent'

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
  const [check, setCheck] = React.useState<boolean>(false)

  const handleClose = () => {
    setSteps(1)
    setCurrentActivity(undefined)

    if (onClose) onClose()
  }

  const progress = (step / activitys?.length) * 100

  const typeInCurrentActivity = React.useMemo(() => {
    const type = currentActivity?.type

    switch (type) {
      case 'fill-blanks':
        return <FillBlanks data={currentActivity} />
      case 'only-choice':
        return <OnlyChoice data={currentActivity} />
      case 'drag-drop':
        return <DragAndDrop data={currentActivity} />
      case 'combining-pairs':
        return <CombiningPairs data={currentActivity} />
      case 'true-false':
        return <TrueOrFalse data={currentActivity} />
      default:
        return <ResultPractice data={currentActivity} />
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
    console.log('passou aqui')
    setCheck(true)

    nextStep()
  }

  console.log(currentActivity)

  React.useEffect(() => {
    if (!currentActivity) setCurrentActivity(activitys[0])
    setSteps(1)
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
        <HeaderActivity currentLife={2} onClose={handleClose} />

        <BorderLinearProgress variant="determinate" value={progress} />

        <div className="p-4 w-full flex flex-col gap-2 items-center h-full overflow-auto">
          {currentActivity && typeInCurrentActivity}
        </div>

        <ButtonValidation onAfterClick={handleClick} currentActivity={currentActivity} />
      </div>
    </Dialog>
  )
}

export default DialogActivity
