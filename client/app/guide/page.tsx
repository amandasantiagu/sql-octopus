'use client'

import { ButtonWithLoading } from '@/components/ButtonWithLoading'
import ShepherdTour from '@/components/Shepherd/ShepherdTour'
import { useRequest } from '@/contexts/RequestContext'
import { useAuth } from '@/contexts/useAuth'
import { GuidePage } from '@/styles/guideStyles'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Guide() {
  const { fetchRequest } = useRequest()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCompleteTutorial = async () => {
    setLoading(true)

    if (user?.alreadyDoneTutorial) {
      setLoading(false)

      return router.push('/learn')
    }

    if (!user?.alreadyDoneTutorial) {
      try {
        await fetchRequest(`users/${user?.id}/complete-tutorial`, {
          method: 'POST',
          body: {},
        })
      } catch (error) {
      } finally {
        setLoading(false)
        router.push('/learn')
      }
    }
  }

  return (
    <GuidePage>
      <div className="w-full flex flex-row items-center gap-4">
        <img src="/logo.png" alt="SqlOctopus" width={60} height={60} />
        <p className="font-bold text-xl text-white">Ola, humano!</p>
      </div>

      <div className="w-full flex flex-col flex-grow gap-4 text-white py-2 overflow-y-auto">
        <span>Bem-vindo(a) ao SQLOctopus!</span>

        <span>
          Neste aplicativo, você dará seus primeiros passos no universo do SQL, aprendendo de forma
          prática e acessível. O objetivo aqui não é dominar tudo, mas sim adquirir as habilidades
          essenciais para explorar e manipular dados com confiança.
        </span>

        <span>
          Você aprenderá comandos como SELECT e WHERE, essenciais para extrair informações
          importantes dos dados.
        </span>

        <span>
          Explorará junções e subconsultas, entendendo como combinar dados de diferentes tabelas e
          criar consultas dinâmicas e mais elaboradas.
        </span>

        <span>
          Descobrirá como realizar atualizações simples, gerenciar permissões básicas e configurar
          visões úteis para o seu aprendizado.
        </span>
      </div>

      <div className="flex flex-col w-full">
        <ShepherdTour />

        <ButtonWithLoading
          className="w-full"
          variant="text"
          onClick={handleCompleteTutorial}
          isLoading={loading}
          sx={{
            color: 'white',
            width: '100%',
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Sair
        </ButtonWithLoading>
      </div>
    </GuidePage>
  )
}
