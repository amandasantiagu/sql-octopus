import Image from 'next/image'
import * as React from 'react'
import { ButtonWithLoading } from '../ButtonWithLoading'
import { buttonTiffanyBlue } from '@/styles/activityStyles'
import CardActivityDetails from '../CardActivityDetails'

interface Props {
  data?: any
  onClose?: () => void
}

const ResultPractice: React.FC<Props> = ({ data, onClose }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center h-full">
      <span className="text-white text-xl">Pratica concluida!</span>

      <Image src="/logo.png" alt="SqlOctopus" width={250} height={250} />

      <div className="bg-white w-full px-2 rounded-lg">
        <CardActivityDetails
          activity={{
            label: 'Linhas e colunas',
            id: 1,
            parentId: 123,
            completed: new Date(),
            exp: 50,
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
