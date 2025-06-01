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
    if (user?.alreadyDoneTutorial) return router.push('/learn')

    if (!user?.alreadyDoneTutorial) {
      setLoading(true)
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
        <Image src="/logo.png" alt="SqlOctopus" width={60} height={60} />
        <p className="font-bold text-xl text-white">Ola, humano!</p>
      </div>

      <div className="w-full flex flex-col flex-grow gap-4 text-white py-2 overflow-y-auto">
        <span>Bem-vindo(a) ao SQLOctopus!</span>

        <span>
          Neste aplicativo, você embarcará em uma jornada completa pelo mundo do SQL, desde os
          primeiros passos até o domínio avançado da linguagem. Ao longo do caminho, você aprenderá
          a:
        </span>

        <span>
          Começar com consultas básicas, usando comandos como SELECT e WHERE para extrair
          informações essenciais dos dados.
        </span>

        <span>
          Explorar junções e subconsultas, combinando dados de várias tabelas e criando consultas
          mais dinâmicas e complexas.
        </span>

        <span>Dominar atualizações complexas, gerenciar autorizações e configurar visões.</span>
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
