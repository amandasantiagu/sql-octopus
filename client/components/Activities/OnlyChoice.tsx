import { CardOptions } from '@/styles/activityStyles'
import * as React from 'react'

interface Props {
  data: any
  onChange: (item: string) => void
}

const OnlyChoice: React.FC<Props> = ({ data, onChange }) => {
  const [value, setValue] = React.useState<any | undefined>(undefined)

  const handleClick = (item: any) => {
    console.log('click', item.value)
    setValue(item.value)
    onChange(item.value)
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <span className="text-white text-base w-full">{data?.description}</span>

      <div className="flex flex-col w-full gap-4">
        {data?.data &&
          data.data.map((item: any, index: number) => (
            <CardOptions
              key={index}
              isSelected={value === item.value}
              className="cursor-pointer uppercase"
              onClick={() => handleClick(item)}
            >
              {item.label}
            </CardOptions>
          ))}
      </div>
    </div>
  )
}

export default OnlyChoice
