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

  const handleClose = () => {
    setSteps(1)
    setCurrentActivity(undefined)

    if (onClose) onClose()
  }

  const activitys = [
    {
      id: 1,
      type: 'fill-blanks',
      description: 'Exiba o nome e a idade dos estudantes da tabela students.',
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
      blanks: ['__columns__', '__table__'],
      correctAnswer: 'SELECT name, age FROM students;',
    },
    {
      id: 3,
      type: 'only-choice',
      description: 'Qual comando é utilizado para agrupar resultados por uma coluna?',
      options: [
        { label: 'join', value: 'join' },
        { label: 'group by', value: 'groupBy' },
        { label: 'order by', value: 'orderBy' },
        { label: 'having', value: 'having' },
      ],
      correctAnswer: 'groupBy',
    },
    {
      id: 4,
      type: 'true-false',
      description: 'A cláusula HAVING pode ser usada sem um GROUP BY',
      correctAnswer: true,
    },
    {
      id: 5,
      type: 'combining-pairs',
      description:
        'Leia atentamente cada descrição apresentada e verifique se esta associada ao comando correspondente.',
      options: [
        {
          id: 1,
          label: 'select',
          description: 'Escolhe as colunas a serem exibidas no resultado da consulta.',
        },
        {
          id: 2,
          label: 'where',
          description: 'Filtra registros com base em condições específicas.',
        },
        {
          id: 3,
          label: 'from',
          description: 'Define a tabela de onde os dados serão recuperados.',
        },
        { id: 4, label: 'distinct', description: 'Remove valores duplicados do resultado.' },
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

  // const previousStep = React.useCallback(() => {
  //   const index = step - 1
  //   getCurrentActivity(index)
  //   setSteps(index)
  // }, [step])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCheck(true)

    nextStep()
  }

  console.log(currentActivity)

  React.useEffect(() => {
    if (!currentActivity) setCurrentActivity(activitys[0])
    setSteps(1)
  }, [open])

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
