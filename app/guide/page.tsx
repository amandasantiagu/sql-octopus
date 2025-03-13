'use client'
import { ButtonWithLoading } from '@/components/ButtonWithLoading'
import { GuidePage } from '@/styles/guideStyles'
import Image from 'next/image'
import { useState } from 'react'

export default function Guide() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <GuidePage>
      <div className="w-full flex flex-row items-center justify-center gap-2">
        <Image src="/logo.png" alt="SqlOctopus" width={80} height={80} />
        <p className="font-bold text-xl text-white">Ola, humano!</p>
      </div>

      <div className="w-full flex flex-col gap-4 py-8">
        <span className="text-white">Bem-vindo(a) ao SQLOctopus!</span>

        <span className="text-white">
          Neste aplicativo, você embarcará em uma jornada completa pelo mundo do SQL, desde os
          primeiros passos até o domínio avançado da linguagem. Ao longo do caminho, você aprenderá
          a:
        </span>

        <span className="text-white">
          Nível Fácil: Começar com consultas básicas, usando comandos como SELECT e WHERE para
          extrair informações essenciais dos dados.
        </span>

        <span className="text-white">
          Nível Intermediário: Explorar junções e subconsultas, combinando dados de várias tabelas e
          criando consultas mais dinâmicas e complexas.
        </span>

        <span className="text-white">
          Nível Avançado: Dominar atualizações complexas, gerenciar autorizações e configurar
          visões, ganhando total controle sobre o banco de dados.
        </span>

        <span className="text-white">
          Prepare-se para expandir suas habilidades em SQL, passo a passo, com exercícios práticos e
          atividades interativas! Vamos começar essa jornada?
        </span>
      </div>

      <ButtonWithLoading
        className="w-full"
        sx={{
          height: '2.2rem',
          background: '#78CDD7',
          color: 'black',
          width: '100%',
        }}
      >
        VAMOS COMECAR
      </ButtonWithLoading>
    </GuidePage>
  )
}
