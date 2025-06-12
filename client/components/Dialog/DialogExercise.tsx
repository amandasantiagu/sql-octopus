import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import HeaderActivity from '../Header/HeaderActivity'
import { styled, LinearProgress, linearProgressClasses, Button } from '@mui/material'
import CombiningPairs from '../Activities/CombiningPairs'
import OnlyChoice from '../Activities/OnlyChoice'
import TrueOrFalse from '../Activities/TrueOrFalse'
import FillBlanks from '../Activities/FillBlanks'

import ButtonValidation from '../ButtonValidation/ButtonValidationComponent'
import ResultPractice from '../Activities/ResultPractice'
import { ExerciseType } from '@/types/Activity'
import { ModuleContent } from '@/types/Module'
import { useRequest } from '@/contexts/RequestContext'
import { useAuth } from '@/contexts/useAuth'
import { User } from '@/types/User'
import { buttonTiffanyBlue } from '@/styles/activityStyles'

interface Props {
  open: boolean
  content: ModuleContent
  typeExercises: 'view' | 'redo' | 'start' | null
  onClose: () => void
  onUpdateContents: () => void
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

const DialogExercise: React.FC<Props> = ({
  open,
  content,
  typeExercises,
  onClose,
  onUpdateContents,
}) => {
  const { fetchRequest } = useRequest()
  const { user, updateUser } = useAuth()
  const [step, setSteps] = React.useState<number>(1)
  const [currentExercise, setCurrentExercise] = React.useState<ExerciseType | undefined>(undefined)
  const [results, setResults] = React.useState<{ activity: ExerciseType; answer: any }[]>([])
  const [exercises, setExercises] = React.useState<ExerciseType[]>([])

  const [startTime, setStartTime] = React.useState<Date | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [dataResult, setDataResult] = React.useState<{
    hits: number
    exp: Number
    duration: number
  } | null>(null)

  const validateAnswer = (
    activityType: string,
    data: any[],
    correctAnswer: string | any[],
    answer: any
  ): boolean => {
    if (activityType === 'combining_pairs') {
      return (
        Array.isArray(data) &&
        Array.isArray(answer) &&
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

  const saveAnswers = async (results: any[]) => {
    try {
      for (const result of results) {
        await fetchRequest('answers', {
          method: 'POST',
          body: {
            userId: user?.id,
            exerciseId: result.activity.id,
            answer: result.answer,
          },
        })
      }
    } catch (error) {
      console.error('Erro ao enviar uma ou mais respostas:', error)
    }
  }

  const completedContent = async (
    results: { activity: ExerciseType; answer: any }[],
    total: number
  ) => {
    try {
      const totalQuestions = results.length
      const correctAnswers = results.filter((item) =>
        validateAnswer(
          item.activity.type,
          item.activity.data || [],
          item.activity.answer,
          item.answer
        )
      ).length

      const hits = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100)

      let exp = 100
      if (hits === 100) exp = 200
      else if (hits >= 60) exp = 150

      setDataResult({ hits, exp, duration: total })

      if (hits < 50) return

      if (typeExercises === 'redo' && content?.userProgressId) {
        await fetchRequest(`user-progress/${content?.userProgressId}`, {
          method: 'PATCH',
          body: {
            hits,
            contentId: content?.id,
            duration: total,
            exp,
          },
        })
      } else {
        await fetchRequest(`user-progress/${user?.id}`, {
          method: 'POST',
          body: {
            hits,
            contentId: content?.id,
            duration: total,
            exp,
          },
        })
      }

      updateUser({ ...user, exp: user?.exp ? user?.exp + exp : exp } as User)

      await saveAnswers(results)

      if (onUpdateContents) onUpdateContents()
    } catch (error) {
      console.error('Erro ao enviar:', error)
    }
  }

  const handleClose = () => {
    setSteps(1)
    setCurrentExercise(exercises[0])

    setResults([])
    setDataResult(null)
    setStartTime(null)

    if (onClose) onClose()
  }

  const getExercises = async () => {
    if (!content?.id) return

    setLoading(true)
    try {
      const response = await fetchRequest(`content/${content?.id}/exercises`, {
        method: 'GET',
      })

      const responseValues = response?.exercises || []

      setExercises(responseValues)

      if (responseValues?.length > 0) {
        setCurrentExercise(responseValues[0])
        setSteps(1)
        setStartTime(new Date())
      }
    } catch (error) {
      console.log('Erro na requisição:', error)
    } finally {
      setLoading(false)
    }
  }

  const progress = (step / exercises?.length) * 100

  const handleActivityChange = (newValue: any) => {
    if (currentExercise) {
      setResults((prevResults) => {
        const updatedResults = prevResults.filter((r) => r.activity.id !== currentExercise.id)
        return [...updatedResults, { activity: currentExercise, answer: newValue }]
      })
    }
  }

  const typeInCurrentExercise = React.useMemo(() => {
    const type = currentExercise?.type

    switch (type) {
      case 'fill_blanks':
        return (
          <FillBlanks data={currentExercise} onChange={handleActivityChange} type={typeExercises} />
        )
      case 'only_choice':
        return (
          <OnlyChoice data={currentExercise} onChange={handleActivityChange} type={typeExercises} />
        )
      case 'combining_pairs':
        return (
          <CombiningPairs
            data={currentExercise}
            onChange={handleActivityChange}
            type={typeExercises}
          />
        )
      case 'true_false':
        return (
          <TrueOrFalse
            data={currentExercise}
            onChange={handleActivityChange}
            type={typeExercises}
          />
        )
      default:
        return <></>
    }
  }, [currentExercise, typeExercises])

  const getCurrentExercise = (step: number, list: ExerciseType[]) => {
    if (list?.length === 0) return

    const index = step - 1
    const activity = list[index] as ExerciseType
    setCurrentExercise(activity)
  }

  const nextStep = React.useCallback(() => {
    const newStep = step + 1
    getCurrentExercise(newStep, exercises)
    setSteps(newStep)

    if (newStep > exercises?.length && startTime) {
      const endTime = new Date()
      const timeDiff = endTime.getTime() - startTime.getTime()
      const total = Math.floor(timeDiff / 1000)

      if (typeExercises !== 'view') completedContent(results, total)
    }
  }, [step, exercises, results, typeExercises])

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
    getExercises()
  }, [content?.id])

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
        {currentExercise && <HeaderActivity type={typeExercises} onClose={handleClose} />}

        {currentExercise && <BorderLinearProgress variant="determinate" value={progress} />}

        <div className="p-4 w-full flex flex-col gap-2 items-center h-full overflow-auto">
          {step <= exercises?.length ? (
            currentExercise && (
              <div className="flex flex-col w-full h-full">
                <div className="flex-grow">{typeInCurrentExercise}</div>

                {typeExercises === 'view' ? (
                  <Button
                    onClick={nextStep}
                    sx={buttonTiffanyBlue}
                    variant="contained"
                    color="primary"
                    className="w-full"
                  >
                    Continuar
                  </Button>
                ) : (
                  <div className="mt-auto">
                    <ButtonValidation
                      onAfterClick={handleClick}
                      currentResult={currentResult}
                      disabled={!currentResult?.answer}
                      onCloseAllDialog={handleClose}
                    />
                  </div>
                )}
              </div>
            )
          ) : (
            <ResultPractice
              content={content}
              data={
                typeExercises === 'view'
                  ? { hits: content.hits, exp: content.exp, duration: content.duration }
                  : dataResult
              }
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </Dialog>
  )
}

export default DialogExercise
