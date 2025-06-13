import Image from 'next/image'
import * as React from 'react'
import { ButtonWithLoading } from '../ButtonWithLoading'
import CardActivityDetails from '../CardActivityDetails'
import { ModuleContent } from '@/types/Module'
import { buttonTiffanyBlue } from '@/styles/activityStyles'
import { HiOutlineEmojiSad } from 'react-icons/hi'

interface Props {
  data: any | null
  content: ModuleContent
  onClose?: () => void
}

const ResultPractice: React.FC<Props> = ({ data, content, onClose }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center h-full">
      <div className="text-white text-base flex-col text-center flex w-full gap-1">
        <span>Conteúdo</span>

        <span className="text-primary-100 font-bold text-md">{content.label}</span>

        {data?.hits > 49 && <span>finalizado!</span>}
      </div>

      {data?.hits < 50 ? (
        <HiOutlineEmojiSad size={120} className="text-primary-500" />
      ) : (
        <Image src="/logo.png" alt="SqlOctopus" width={200} height={200} />
      )}

      {data?.hits < 50 ? (
        <div className="text-white text-base flex-col gap-2 text-center flex w-full">
          <span className="text-yellow-600 font-bold text-md">
            Você precisa refazer este conteúdo!
          </span>

          <span className="text-sm">
            Você fez <span className="font-bold text-md">{data?.hits}</span> pontos. A pontuação
            mínima necessária é 50.
          </span>
        </div>
      ) : (
        <div className="bg-white w-full px-2 rounded-lg">
          <CardActivityDetails
            activity={{
              label: content.label,
              id: content.id,
              moduleId: content.moduleId,
              duration: data?.duration,
              exp: data?.exp,
              hits: data?.hits,
            }}
          />
        </div>
      )}

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
