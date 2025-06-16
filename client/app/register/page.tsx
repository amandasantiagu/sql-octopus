'use client'

import { sxTextField } from '@/components/CustomTextField'
import { useRequest } from '@/contexts/RequestContext'
import { useToast } from '@/contexts/toast'
import { CardSign, Sign } from '@/styles/signStyles'
import { User } from '@/types/User'
import { FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

const FORM_NAME = 'name'
const FORM_EMAIL = 'email'
const FORM_PASSWORD = 'password'
const CONFIRM_PASSWORD = 'confirmPassword'

export default function Register() {
  const formHook = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  const {
    control,
    watch,
    formState: { errors, isValid },
    handleSubmit,
  } = formHook

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword)

  const router = useRouter()
  const { showToast } = useToast()
  const { fetchRequest } = useRequest()

  const onSubmit = async (data: any) => {
    try {
      await fetchRequest('users', {
        method: 'POST',
        body: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      })

      showToast('Usuario criado com sucesso!', 'success')

      router.push('login')
    } catch (error) {
      // showToast(error?.message || 'Erro na requisição', 'error')
    }
  }

  return (
    <Sign>
      <CardSign>
        <div className="h-auto w-auto text-center justify-center mb-2">
          <img src="/logo.png" alt="SqlOctopus" width={142} height={142} />
        </div>

        <p className="font-bold text-xl text-white">Registre-se</p>

        <FormProvider {...formHook}>
          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
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
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value || ''}
                      placeholder="Senha"
                      type={showPassword ? 'text' : 'password'}
                      data-cy="password-input"
                      sx={sxTextField}
                      variant="outlined"
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={togglePasswordVisibility} edge="end">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        },
                      }}
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
                  name={CONFIRM_PASSWORD}
                  rules={{
                    required: true,
                    validate: (value) =>
                      value === watch(FORM_PASSWORD) || 'As senhas devem ser iguais',
                  }}
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value || ''}
                      placeholder="Confirme sua senha"
                      type={showConfirmPassword ? 'text' : 'password'}
                      data-cy="confirm-password-input"
                      sx={sxTextField}
                      variant="outlined"
                      size="small"
                      fullWidth
                      autoComplete="new-password"
                      error={!!errors.confirmPassword}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}
                />

                {!!errors[CONFIRM_PASSWORD] && (
                  <FormHelperText error>As senhas devem ser iguais</FormHelperText>
                )}
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                disabled={!isValid}
                data-cy="submit-button"
                style={{
                  background: '#0D5C63',
                  width: '100%',
                }}
                className="mt-2 flex w-full bg-primary-300 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white uppercase"
              >
                <span> Registrar </span>
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
