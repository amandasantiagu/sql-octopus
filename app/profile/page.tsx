'use client'
import { CardSign, Sign } from '@/styles/signStyles'
import { FormHelperText, TextField } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'

const FORM_EMAIL = 'email'
const FORM_PASSWORD = 'password'

export default function Profile() {
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
    <Sign>
      <CardSign>
        <div className="h-auto w-auto text-center justify-center mb-2">
          <Image src="/logo.png" alt="SqlOctopus" width={142} height={142} />
        </div>

        <p className="font-bold text-xl text-white">profile</p>
      </CardSign>
    </Sign>
  )
}
