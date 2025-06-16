import { useRequest } from '@/contexts/RequestContext'
import { CardOptions } from '@/styles/activityStyles'
import { Answer } from '@/types/Answer'
import { CircularProgress } from '@mui/material'
import * as React from 'react'

interface Props {
  data: any
  type: 'view' | 'redo' | 'start' | null
  onChange: (item: string) => void
}

const OnlyChoice: React.FC<Props> = ({ data, type, onChange }) => {
  const [value, setValue] = React.useState<any | undefined>(undefined)
  const [currentAnswer, setCurrentAnswer] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)

  const { fetchRequest } = useRequest()

  const handleClick = (item: any) => {
    setValue(item.value)
    onChange(item.value)
  }

  const getCurrentAnswer = async () => {
    if (!data?.id) return

    setLoading(true)
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
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (type === 'view') getCurrentAnswer()
  }, [type])

  return (
    <div className="w-full flex flex-col gap-6">
      {loading ? (
        <div className="w-full flex justify-center">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div className="flex flex-col w-full gap-4">
          {data?.data &&
            data.data.map((item: any, index: number) => (
              <CardOptions
                key={index}
                isSelected={currentAnswer ? currentAnswer === item.value : value === item.value}
                className="cursor-pointer uppercase"
                onClick={() => {
                  if (currentAnswer) return

                  handleClick(item)
                }}
              >
                {item.label}
              </CardOptions>
            ))}
        </div>
      )}
    </div>
  )
}

export default OnlyChoice
