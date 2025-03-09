'use client'
import AccordionComponent from '@/components/AccordionComponent'
import Header from '@/components/Header'
import { Main } from '@/styles/homeStyles'
import { CardSign, Sign } from '@/styles/signStyles'
import { CardHeader, FormHelperText, TextField } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { FaHeart } from 'react-icons/fa6'
import { PiCurrencyEthFill } from 'react-icons/pi'

const FORM_EMAIL = 'email'
const FORM_PASSWORD = 'password'

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
      <Header />

      <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />

      <AccordionComponent />
    </Main>
  )
}
