import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import HeaderActivity from '../Header/HeaderActivity'
import { styled, LinearProgress, linearProgressClasses, Button } from '@mui/material'
import ResultPractice from '../Activities/ResultPractice'
import Combiningpairs from '../Activities/CombiningPairs'
import DragAndDrop from '../Activities/DragAndDrop'
import OnlyChoice from '../Activities/OnlyChoice'
import TrueOrFalse from '../Activities/TrueOrFalse'
import FillBlanks from '../Activities/FillBlanks'
import { ActivityType } from '@/types/Activity'
import { ButtonWithLoading } from '../ButtonWithLoading'
import { buttonTiffanyBlue } from '@/styles/activityStyles'

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

//acho que a life pode vir no usuario
// Nessa pagina vou ter que receber a quantidade de vida, e todos as atividades ligada aquela LESSON, fazer um get com o id da lesson selecionada e retornar as atividades
const DialogActivity: React.FC<Props> = ({ open, onClose }) => {
  const [step, setSteps] = React.useState<number>(1)
  const [currentActivity, setCurrentActivity] = React.useState<ActivityType | undefined>(undefined)
  const [check, setCheck] = React.useState<boolean>(false)

  const activitys = [
    {
      id: 1,
      description:
        'Organize as informações dos estudantes exibindo apenas aqueles com idade acima de 18 anos.',
      type: 'fill-blanks',
      table: [
        {
          id: 1,
          label: 'id',
          values: ['1', '2', '3'],
        },
        {
          id: 2,
          label: 'name',
          values: ['Anna', 'Maria', 'Keny'],
        },
        {
          id: 3,
          label: 'age',
          values: ['20', '17', '22'],
        },
        {
          id: 4,
          label: 'grade',
          values: ['B', 'A', 'B'],
        },
      ],
      template: 'SELECT * FROM students WHERE __condition__;',
      blanks: [
        {
          placeholder: '__condition__',
          correctAnswer: 'age > 18',
        },
      ],
    },
    {
      id: 2,
      description: "Exiba o nome e a idade dos estudantes da tabela 'students'.",
      type: 'fill-blanks',
      template: 'SELECT __columns__ FROM __table__;',
      table: [
        {
          id: 1,
          label: 'id',
          values: ['1', '2', '3'],
        },
        {
          id: 2,
          label: 'name',
          values: ['Anna', 'Maria', 'Keny'],
        },
        {
          id: 3,
          label: 'age',
          values: ['20', '17', '22'],
        },
        {
          id: 4,
          label: 'grade',
          values: ['B', 'A', 'B'],
        },
      ],
      blanks: [
        {
          placeholder: '__columns__',
          correctAnswer: 'name, age',
        },
        {
          placeholder: '__table__',
          correctAnswer: 'students',
        },
      ],
    },
  ]

  const progress = (step / activitys?.length) * 100

  const typeInCurrentActivity = React.useMemo(() => {
    const type = currentActivity?.type

    switch (type) {
      case 'fill-blanks':
        return <FillBlanks data={currentActivity} />
      case 'only-choice':
        return <OnlyChoice data={currentActivity} />
      case 'drag-and-drop':
        return <DragAndDrop data={currentActivity} />
      case 'combining-pairs':
        return <Combiningpairs data={currentActivity} />
      case 'true-false':
        return <TrueOrFalse data={currentActivity} />
      default:
        return <ResultPractice data={currentActivity} />
    }
  }, [currentActivity])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCheck(true)
  }

  React.useEffect(() => {
    if (!currentActivity) setCurrentActivity(activitys[0])
  }, [])

  return (
    <Dialog
      onClose={onClose}
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
      <div className="w-full flex flex-col h-screen p-4">
        <HeaderActivity currentLife={2} onClose={onClose} />

        <BorderLinearProgress variant="determinate" value={progress} />

        <div className="p-4 w-full flex flex-col gap-2 items-center h-full overflow-auto">
          {currentActivity && typeInCurrentActivity}
        </div>

        <ButtonWithLoading
          id="validation"
          size="large"
          className="sticky bottom-0"
          onClick={handleClick}
          sx={buttonTiffanyBlue}
        >
          Verificar
        </ButtonWithLoading>
      </div>
    </Dialog>
  )
}

export default DialogActivity
