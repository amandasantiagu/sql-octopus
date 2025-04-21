import { useEffect, useState } from 'react'
import Shepherd, { Tour } from 'shepherd.js'
import 'shepherd.js/dist/css/shepherd.css'
import { ButtonWithLoading } from '../ButtonWithLoading'
import { buttonTiffanyBlue } from '@/styles/activityStyles'
import { useRouter } from 'next/navigation'

export default function ShepherdTour() {
  const router = useRouter()

  const [isTourRunning, setIsTourRunning] = useState<boolean>(false)
  let tour: Tour

  const handleTourEnd = () => {
    setIsTourRunning(false)
  }

  const initializeTour = () => {
    tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: 'shepherd-theme-arrows',
        scrollTo: { behavior: 'smooth', block: 'center' },
      },
      useModalOverlay: true,
    })

    tour.addStep({
      id: 'step-1',
      title: 'Seja bem vindo!',
      text: 'Agora vamos iniciar nosso tour pela plataforma.',
      attachTo: {
        element: '#init-guide',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Finalizar',
          action: tour.complete,
        },
        {
          text: 'Próximo',
          action: () => {
            tour.next()
          },
        },
      ],
    })

    tour.addStep({
      id: 'step-2',
      title: 'Menu de EXP',
      text: 'Aqui você terá acesso à quantidade de EXP acumulada, conquistada ao concluir as atividades.',
      attachTo: {
        element: '#menu-exp',
        on: 'top',
      },
      beforeShowPromise: () => {
        return new Promise<void>((resolve) => {
          router.push('/learn')

          const checkElement = () => {
            const element = document.querySelector('#menu-exp')
            if (element) {
              resolve()
            } else {
              setTimeout(checkElement, 100)
            }
          }

          checkElement()
        })
      },
      buttons: [
        {
          text: 'Voltar',
          action: () => {
            router.push('guide')
            tour.cancel()
          },
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-3',
      title: 'Suas vidas!',
      text: 'Você pode ter até 3 vidas. Para iniciar uma atividade, é necessário ter pelo menos uma. Mas não se preocupe: você pode recuperar vidas usando seu EXP ou esperar que elas recarreguem com o tempo.',
      attachTo: {
        element: '#menu-hearth',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-4',
      title: 'Botão de guia',
      text: 'Aqui você terá uma explicação da plataforma e poderá iniciar o tour sempre que quiser.',
      attachTo: {
        element: '#btn-guide',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-5',
      title: 'Explorando os conteúdos de SQL',
      text: 'Nesta seção, você encontrará todos os conteúdos disponíveis organizados em temas. Os itens estão apresentados em seções para facilitar a navegação e serão desbloqueados progressivamente à medida que você avança. Aproveite para explorar e consolidar seu aprendizado passo a passo!',
      attachTo: {
        element: '#list-learn',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-7',
      title: 'Acesse o Ranking de usuarios',
      text: 'Este botão leva você à página de ranking, onde pode conferir a lista dos usuarios com mais experiência (EXP).',

      attachTo: {
        element: '#icon-ranking',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-8',
      title: 'Descubra quem possui o melhor EXP!',
      text: 'Nesta lista, os usuários são classificados de acordo com sua experiência (EXP) e o tempo que levaram para alcançá-la. Quem conquistou mais EXP no menor tempo ocupa o topo do ranking. Confira sua posição e veja quem lidera!',
      beforeShowPromise: () => {
        return new Promise<void>((resolve) => {
          router.push('/ranking')

          const checkElement = () => {
            const element = document.querySelector('#list-ranking')
            if (element) {
              resolve()
            } else {
              setTimeout(checkElement, 100)
            }
          }

          checkElement()
        })
      },
      attachTo: {
        element: '#list-ranking',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-9',
      title: 'Configurações',
      text: 'Este botão leva você à página de configurações do perfil',
      attachTo: {
        element: '#icon-profile',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-10',
      title: 'Configurações',
      text: 'Aqui você tem acesso as informações do seu perfil',
      beforeShowPromise: () => {
        return new Promise<void>((resolve) => {
          router.push('/profile')

          const checkElement = () => {
            const element = document.querySelector('#list-profile')
            if (element) {
              resolve()
            } else {
              setTimeout(checkElement, 100)
            }
          }

          checkElement()
        })
      },
      attachTo: {
        element: '#list-profile',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-11',
      title: 'Configurações',
      text: 'Esse botão te redireciona para a pagina de login!',
      attachTo: {
        element: '#logout',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-12',
      title: 'Learn',
      text: 'Aqui você será redirecionado para a pagina learn',
      attachTo: {
        element: '#icon-home',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Próximo',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'step-13',
      title: 'Parabéns! Hora de aprender!',
      text: 'Você concluiu o tour! Agora é o momento de colocar o que aprendeu em prática. Explore as lições, ganhe mais conhecimento, acumule EXP e mostre quem domina o ranking! Vamos nessa?',
      beforeShowPromise: () => {
        return new Promise<void>((resolve) => {
          router.push('/learn')

          const checkElement = () => {
            const element = document.querySelector('#list-learn')
            if (element) {
              resolve()
            } else {
              setTimeout(checkElement, 100)
            }
          }

          checkElement()
        })
      },
      attachTo: {
        element: '#list-learn',
        on: 'top',
      },
      buttons: [
        {
          text: 'Voltar',
          action: tour.back,
        },
        {
          text: 'Finalizar',
          action: tour.complete,
        },
      ],
    })

    handleTourEnd()

    return tour
  }

  const startTour = () => {
    if (isTourRunning) return

    setIsTourRunning(true)

    initializeTour()

    tour.start()

    tour.on('complete', handleTourEnd)
    tour.on('cancel', handleTourEnd)
  }

  return (
    <div className="p-6">
      <ButtonWithLoading
        className="w-full"
        sx={buttonTiffanyBlue}
        onClick={startTour}
        id="init-guide"
      >
        VAMOS COMECAR
      </ButtonWithLoading>
    </div>
  )
}
