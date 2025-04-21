import Image from 'next/image'
import * as React from 'react'
import { ButtonWithLoading } from '../ButtonWithLoading'
import { buttonTiffanyBlue } from '@/styles/activityStyles'
import CardActivityDetails from '../CardActivityDetails'
import { ModuleContent } from '@/types/Module'
import { ActivityType } from '@/types/Activity'

interface Props {
  data: { activity: ActivityType; answer: any }[]
  content: ModuleContent
  time: number
  onClose?: () => void
}

const ResultPractice: React.FC<Props> = ({ data, content, time, onClose }) => {
  const formattedTime = React.useMemo(() => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }, [time])

  const hits = React.useMemo(() => {
    const total = data.length
    const correctAnswers = data.filter((item) => item.activity.answer === item.answer).length

    if (total === 0) return 0
    return Math.round((correctAnswers / total) * 100)
  }, [data])

  const exp = React.useMemo(() => {
    if (hits === 100) return 150
    if (hits >= 60 && hits < 100) return 100
    return 70
  }, [hits])

  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center h-full">
      <div className="text-white text-base flex-col text-center flex w-full">
        <span>Conteúdo</span>
        <span className="text-primary-100 font-medium">{content.label}</span>
        <span>finalizado!</span>
      </div>

      <Image src="/logo.png" alt="SqlOctopus" width={200} height={200} />

      <div className="bg-white w-full px-2 rounded-lg">
        <CardActivityDetails
          activity={{
            label: content.label,
            id: content.id,
            moduleId: content.moduleId,
            completed: new Date(),
            duration: formattedTime,
            exp: exp,
            hits: hits,
          }}
        />
      </div>

      <ButtonWithLoading
        id="back"
        size="large"
        className="sticky bottom-0 w-full"
        onClick={onClose}
        sx={buttonTiffanyBlue}
      >
        Ir para o inicio
      </ButtonWithLoading>
    </div>
  )
}

export default ResultPractice
