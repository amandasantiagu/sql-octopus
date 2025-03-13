'use client'
import { sxTextField } from '@/components/CustomTextField'
import { CardSign, Sign } from '@/styles/signStyles'
import { FormHelperText, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'

const FORM_NAME = 'name'
const FORM_EMAIL = 'email'
const FORM_PASSWORD = 'password'

export default function Register() {
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

        <p className="font-bold text-xl text-white">Registre-se</p>

        <FormProvider {...formHook}>
          <form className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-4 w-full">
              <div>
                <Controller
                  name={FORM_NAME}
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field: { name, onBlur, value, onChange } }) => (
                    <TextField
                      name={name}
                      onBlur={onBlur}
                      value={value || ''}
                      required
                      data-cy="email-input"
                      sx={sxTextField}
                      placeholder="Nome completo"
                      size="small"
                      fullWidth
                      autoComplete="email"
                      onChange={onChange}
                      error={!!errors[FORM_NAME]}
                    />
                  )}
                />

                {!!errors[FORM_NAME] && (
                  <FormHelperText error>Nome completo é obrigatório</FormHelperText>
                )}
              </div>

              <div>
                <Controller
                  name={FORM_EMAIL}
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field: { onChange, onBlur, name, value } }) => (
                    <TextField
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value || ''}
                      name={name}
                      placeholder="Email"
                      type="email"
                      data-cy="email-input"
                      variant="outlined"
                      sx={sxTextField}
                      size="small"
                      fullWidth
                      autoComplete="current-email"
                      error={!!errors[FORM_EMAIL]}
                    />
                  )}
                />

                {!!errors[FORM_EMAIL] && <FormHelperText error>Email é obrigatório</FormHelperText>}
              </div>

              <div>
                <Controller
                  name={FORM_PASSWORD}
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field: { onChange, onBlur, name, value } }) => (
                    <TextField
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value || ''}
                      name={name}
                      placeholder="Senha"
                      type="password"
                      data-cy="password-input"
                      sx={sxTextField}
                      variant="outlined"
                      size="small"
                      fullWidth
                      autoComplete="current-password"
                      error={!!errors[FORM_PASSWORD]}
                    />
                  )}
                />

                {!!errors[FORM_PASSWORD] && (
                  <FormHelperText error>Senha é obrigatório</FormHelperText>
                )}
              </div>

              <div>
                <Controller
                  name={FORM_PASSWORD}
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field: { onChange, onBlur, name, value } }) => (
                    <TextField
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value || ''}
                      name={name}
                      placeholder="Confirme sua senha"
                      type="password"
                      data-cy="password-input"
                      variant="outlined"
                      size="small"
                      sx={sxTextField}
                      fullWidth
                      autoComplete="current-password"
                      error={!!errors[FORM_PASSWORD]}
                    />
                  )}
                />

                {!!errors[FORM_PASSWORD] && (
                  <FormHelperText error>Senha é obrigatório</FormHelperText>
                )}
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                disabled={isLoading}
                data-cy="submit-button"
                style={{
                  height: '2.2rem',
                  background: '#0D5C63',
                  width: '100%',
                }}
                className="mt-2 flex w-full bg-primary-300 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white uppercase"
              >
                {isLoading ? '...' : <span>Registrar </span>}
              </button>
            </div>

            <div className="flex flex-row gap-1">
              <span className="text-white">Já tem uma conta?</span>
              <Link href="/login">
                <span className="text-primary-300">Faça o seu login</span>
              </Link>
            </div>
          </form>
        </FormProvider>
      </CardSign>
    </Sign>
  )
}
