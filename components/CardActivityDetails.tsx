import * as React from 'react'
import { format } from 'date-fns'
import { PiCurrencyEthFill } from 'react-icons/pi'
import { BiTimeFive } from 'react-icons/bi'
import { TbTargetArrow } from 'react-icons/tb'
import { CardItems, LabelCard } from '@/styles/cardStyles'

interface Props {
  activity: any
}

const CardActivityDetails: React.FC<Props> = ({ activity }) => {
  const formatToHoursAndMinutes = (date: Date): string => {
    return format(date, 'HH:mm')
  }

  return (
    <div className="flex w-full gap-4 text-sm justify-center py-4">
      <LabelCard>
        <div>TOTAL XP</div>

        <CardItems className="bg-yellow-200 text-yellow-600">
          <PiCurrencyEthFill className="text-yellowIcon" size={20} />
          {activity?.exp}
        </CardItems>
      </LabelCard>

      <LabelCard>
        <div>DURAÇÃO</div>

        <CardItems className="bg-blue-200 text-blue-800">
          <BiTimeFive className="text-blue-500" size={20} />

          {formatToHoursAndMinutes(activity?.completed || new Date())}
        </CardItems>
      </LabelCard>

      <LabelCard>
        <div>ACERTOS</div>

        <CardItems className="bg-green-200 text-green-800">
          <TbTargetArrow className="text-green-600" size={20} />
          {activity?.hits}%
        </CardItems>
      </LabelCard>
    </div>
  )
}

export default CardActivityDetails
