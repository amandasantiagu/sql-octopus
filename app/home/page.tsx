'use client'
import AccordionComponent from '@/components/AccordionComponent'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Container, Main } from '@/styles/homeStyles'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'

export default function Home() {
  const formHook = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  const {
    control,
    formState: { errors },
  } = formHook

  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <Main>
      <Container>
        <Header />

        <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />

        <AccordionComponent />
      </Container>

      <Footer />
    </Main>
  )
}
