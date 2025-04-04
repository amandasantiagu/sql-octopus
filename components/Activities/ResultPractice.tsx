import Image from 'next/image'
import * as React from 'react'
import { ButtonWithLoading } from '../ButtonWithLoading'
import { buttonTiffanyBlue } from '@/styles/activityStyles'
import CardActivityDetails from '../CardActivityDetails'

interface Props {
  data?: any
}

const ResultPractice: React.FC<Props> = ({ data }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('oi')
  }

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <span className="text-white text-lg">Pratica concluida!</span>
      <Image src="/logo.png" alt="SqlOctopus" width={130} height={130} />

      <CardActivityDetails
        activity={{
          label: 'Linhas e colunas',
          id: 1,
          parentId: 123,
          completed: new Date(),
          exp: 50,
        }}
      />

      <ButtonWithLoading
        id="back"
        size="large"
        className="sticky bottom-0"
        onClick={handleClick}
        sx={buttonTiffanyBlue}
      >
        Ir para o inicio
      </ButtonWithLoading>
    </div>
  )
}

export default ResultPractice
