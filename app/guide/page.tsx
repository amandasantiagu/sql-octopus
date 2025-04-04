'use client'
import { ButtonWithLoading } from '@/components/ButtonWithLoading'
import { buttonTiffanyBlue } from '@/styles/activityStyles'
import { GuidePage } from '@/styles/guideStyles'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Guide() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
          Nível Fácil: Começar com consultas básicas, usando comandos como SELECT e WHERE para
          extrair informações essenciais dos dados.
        </span>

        <span>
          Nível Intermediário: Explorar junções e subconsultas, combinando dados de várias tabelas e
          criando consultas mais dinâmicas e complexas.
        </span>

        <span>
          Nível Avançado: Dominar atualizações complexas, gerenciar autorizações e configurar
          visões, ganhando total controle sobre o banco de dados.
        </span>

        <span>
          Prepare-se para expandir suas habilidades em SQL, passo a passo, com exercícios práticos e
          atividades interativas! Vamos começar essa jornada?
        </span>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Link href="/learn" className="w-full">
          <ButtonWithLoading className="w-full" sx={buttonTiffanyBlue}>
            VAMOS COMECAR
          </ButtonWithLoading>
        </Link>

        <Link href="/learn" className="w-full">
          <ButtonWithLoading
            className="w-full"
            variant="text"
            sx={{
              color: 'white',
              width: '100%',
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Sair
          </ButtonWithLoading>
        </Link>
      </div>
    </GuidePage>
  )
}
