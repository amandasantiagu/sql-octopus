import * as React from 'react'
import TableComponent from '../TableComponent'
import { Answer } from '@/types/Answer'
import { useRequest } from '@/contexts/RequestContext'

interface Props {
  data: any
  type: 'view' | 'redo' | 'start' | null
  onChange: (newAnswer: any) => void
}

const FillBlanks: React.FC<Props> = ({ data, type, onChange }) => {
  const { fetchRequest } = useRequest()
  const [currentAnswer, setCurrentAnswer] = React.useState<string | null>(null)

  const [answers, setAnswers] = React.useState(
    data?.blanks
      ? data?.blanks?.reduce((acc: any, blank: any) => {
          acc[blank] = ''
          return acc
        }, {})
      : {}
  )

  const handleInputChange = (placeholder: string, value: string) => {
    setAnswers((prev: any) => ({
      ...prev,
      [placeholder]: value,
    }))
  }

  const getCurrentAnswer = async () => {
    if (!data?.id) return
    try {
      const response = await fetchRequest<Answer>(`answers/exercise/${data?.id}`, {
        method: 'GET',
      })

      console.log(response?.answer)

      if (response) {
        setCurrentAnswer(response?.answer)
      }
    } catch (error) {
      console.log('Erro na requisição:', error)
    } finally {
    }
  }

  const handleBlur = () => {
    if (data?.template) {
      let filledTemplate = data.template
      Object.keys(answers).forEach((key) => {
        const regex = new RegExp(key, 'g')
        filledTemplate = filledTemplate.replace(regex, answers[key] || '')
      })

      onChange(filledTemplate)
    }
  }

  React.useEffect(() => {
    if (type === 'view') getCurrentAnswer()
  }, [type])

  return (
    <div className="w-full flex flex-col gap-6">
      <span className="text-white text-base w-full font-bold">{data?.description}</span>

      {data?.data && <TableComponent data={data.data} />}

      <div className="text-white flex flex-col w-full gap-4">
        <span className="text-base ">Complete a consulta:</span>

        <div className="flex flex-wrap w-full gap-4 items-center p-4 rounded-lg bg-primary-500">
          {currentAnswer && type === 'view' ? (
            <span>{currentAnswer}</span>
          ) : (
            <>
              {data?.template.split(/(__\w+__)/g).map((part: string, index: number) => {
                const blank = data?.blanks?.find((b: any) => b === part)

                if (blank) {
                  return (
                    <input
                      key={index}
                      disabled={!!(currentAnswer && type === 'view')}
                      type="text"
                      value={answers[blank]}
                      onChange={(e) => handleInputChange(blank, e.target.value)}
                      onBlur={handleBlur}
                      placeholder="Insira um valor"
                      className="px-1 py-1 rounded bg-white text-black"
                    />
                  )
                }
                return <span key={index}>{part}</span>
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default FillBlanks
