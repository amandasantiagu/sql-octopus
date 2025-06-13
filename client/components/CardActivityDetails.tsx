import * as React from 'react'
import { format } from 'date-fns'
import { PiCurrencyEthFill } from 'react-icons/pi'
import { BiTimeFive } from 'react-icons/bi'
import { TbTargetArrow } from 'react-icons/tb'
import { CardItems, LabelCard } from '@/styles/cardStyles'
import { ModuleContent } from '@/types/Module'

interface Props {
  activity: ModuleContent
}

const CardActivityDetails: React.FC<Props> = ({ activity }) => {
  const formattedTime = React.useMemo(() => {
    if (!activity?.duration) return '0'
    const minutes = Math.floor(activity.duration / 60)
    const seconds = activity?.duration % 60

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }, [activity?.duration])

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

          {formattedTime}
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
