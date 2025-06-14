import { useRequest } from '@/contexts/RequestContext'
import { CardOptions } from '@/styles/activityStyles'
import { Answer } from '@/types/Answer'
import * as React from 'react'

interface Props {
  data: any
  type: 'view' | 'redo' | 'start' | null
  onChange: (answer: any) => void
}

const TrueOrFalse: React.FC<Props> = ({ data, type, onChange }) => {
  const [currentAnswer, setCurrentAnswer] = React.useState<string | null>(null)

  const { fetchRequest } = useRequest()

  const options = [
    { label: 'Verdadeiro', value: 'Verdadeiro' },
    { label: 'Falso', value: 'Falso' },
  ]

  const getCurrentAnswer = async () => {
    if (!data?.id) return
    try {
      const response = await fetchRequest<Answer>(`answers/exercise/${data?.id}`, {
        method: 'GET',
      })

      if (response) {
        setCurrentAnswer(response?.answer)
      }
    } catch (error) {
      console.log('Erro na requisição:', error)
    } finally {
    }
  }

  const [value, setValue] = React.useState<any | undefined>(undefined)

  const handleClick = (item: any) => {
    setValue(item.value)

    onChange(item.value)
  }

  React.useEffect(() => {
    if (type === 'view') getCurrentAnswer()
  }, [type])

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col w-full gap-4">
        {options &&
          options.map((item: any, index: number) => (
            <CardOptions
              key={index}
              isSelected={currentAnswer ? currentAnswer === item.value : value === item.value}
              className={`cursor-pointer uppercase`}
              onClick={() => {
                if (currentAnswer) return

                handleClick(item)
              }}
            >
              {item.label}
            </CardOptions>
          ))}
      </div>
    </div>
  )
}

export default TrueOrFalse
