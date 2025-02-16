import React, { useState } from 'react'

import { FormHelperText, InputAdornment, TextField } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { AiFillLock } from 'react-icons/ai'
import { CardSign, Sign } from '@/styles/sign'

const FORM_EMAIL = 'email'
const FORM_PASSWORD = 'password'

const LoginPage: NextPage = () => {
  const router = useRouter()

  // const { showToast } = useToast()

  const formHook = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formHook

  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <Sign>
      <CardSign>
        <div className="h-12 w-auto text-center justify-center">
          <Image src="/logo.png" alt="SqlOctopus" width={250} height={250} />
        </div>

        <FormProvider {...formHook}>
          <form>
            <p className='font-bold text-2xl text-white'>Entre com sua conta xx</p>

            <div className="rounded-md shadow-sm">
              <div className="mb-8">
                <label className="sr-only">Email address</label>

                <Controller
                  name={FORM_EMAIL}
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
                      placeholder="E-mail"
                      size="small"
                      fullWidth
                      autoComplete="email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <MdEmail size={18} style={{ color: `${colors.primaryColor}` }} /> */}
                          </InputAdornment>
                        ),
                      }}
                      onChange={onChange}
                      error={!!errors[FORM_EMAIL]}
                    />
                  )}
                />

                {!!errors[FORM_EMAIL] && (
                  <FormHelperText error>E-mail é obrigatório</FormHelperText>
                )}
              </div>

              <div>
                <label className="sr-only">Password</label>

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
                      size="small"
                      fullWidth
                      autoComplete="current-password"
                      error={!!errors[FORM_PASSWORD]}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AiFillLock
                              size={18}
                              // style={{
                              //   color: `${colors.primaryColor}`,
                              // }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />

                {!!errors[FORM_PASSWORD] && (
                  <FormHelperText error>Senha é obrigatório</FormHelperText>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                data-cy="submit-button"
                style={{
                  height: '2.2rem',
                  backgroundImage: 'linear-gradient(120deg, #23A455 42%, #23A455 100%)',
                }}
                className="group relative mt-2 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {isLoading ? '...' : <span>Entrar </span>}
              </button>
            </div>
          </form>
        </FormProvider>
      </CardSign>
    </Sign>
  )
}

export default LoginPage