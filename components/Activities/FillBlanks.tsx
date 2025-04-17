import * as React from 'react'
import TableComponent from '../TableComponent'

interface Props {
  data: any
  onChange: (newAnswer: any) => void
}

const FillBlanks: React.FC<Props> = ({ data, onChange }) => {
  const [answers, setAnswers] = React.useState(
    data?.blanks?.reduce((acc: any, blank: any) => {
      acc[blank] = ''
      return acc
    }, {}) || {}
  )

  const handleInputChange = (placeholder: string, value: string) => {
    setAnswers((prev: any) => ({
      ...prev,
      [placeholder]: value,
    }))
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

  return (
    <div className="w-full flex flex-col gap-6">
      <span className="text-white text-base w-full">{data?.description}</span>

      <div className="flex flex-col w-full gap-1">
        <span className="text-base text-white"> Tabela </span>

        {data?.table && <TableComponent table={data.table} />}
      </div>

      <div className="text-white flex flex-col w-full gap-4">
        <span className="text-base font-bold">Complete os espaços:</span>

        <div className="flex flex-wrap w-full gap-4 items-center">
          {data?.template.split(/(__\w+__)/g).map((part: string, index: number) => {
            const blank = data?.blanks?.find((b: any) => b === part)

            if (blank) {
              return (
                <input
                  key={index}
                  type="text"
                  value={answers[blank]}
                  onChange={(e) => handleInputChange(blank, e.target.value)}
                  onBlur={handleBlur}
                  placeholder="complete"
                  className="mx-1 px-2 py-1 rounded bg-white text-black"
                />
              )
            }
            return <span key={index}>{part}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default FillBlanks
