'use client'

import { sxTextField } from '@/components/CustomTextField'
import { useToast } from '@/contexts/toast'
import { useAuth } from '@/contexts/useAuth'
import { CardSign, Sign } from '@/styles/signStyles'
import { User } from '@/types/User'
import { FormHelperText, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'

const FORM_EMAIL = 'email'
const FORM_PASSWORD = 'password'

export default function Login() {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<User>({
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  const { showToast } = useToast()
  const { signIn } = useAuth()

  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: User) => {
    if (loading) return // Evita múltiplas submissões

    setLoading(true) // Inicia carregamento
    try {
      const { error, data: loggedUser } = await signIn(data.email, data.password)

      if (error) {
        showToast(error, 'error')
      } else {
        showToast('Login feito com sucesso', 'success')

        if (loggedUser?.alreadyDoneTutorial) {
          router.push('/learn')
        } else {
          router.push('/guide')
        }
      }
    } catch (err) {
      console.error('Erro inesperado no login:', err)
      showToast('Erro inesperado. Tente novamente.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Sign>
      <CardSign>
        <div className="h-auto w-auto text-center justify-center mb-2">
          <Image src="/logo.png" alt="SqlOctopus" width={142} height={142} />
        </div>

        <p className="font-bold text-xl text-white">Entre com sua conta</p>

        <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1 w-full">
            <div className="mb-2">
              <Controller
                name={FORM_EMAIL}
                rules={{ required: 'E-mail é obrigatório' }}
                control={control}
                render={({ field: { name, onBlur, value, onChange } }) => (
                  <TextField
                    name={name}
                    onBlur={onBlur}
                    value={value || ''}
                    required
                    data-cy="email-input"
                    placeholder="Email"
                    size="small"
                    sx={sxTextField}
                    fullWidth
                    autoComplete="email"
                    onChange={onChange}
                    error={!!errors[FORM_EMAIL]}
                  />
                )}
              />
              {!!errors[FORM_EMAIL] && (
                <FormHelperText error>{errors[FORM_EMAIL].message}</FormHelperText>
              )}
            </div>

            <div>
              <Controller
                name={FORM_PASSWORD}
                rules={{ required: 'Senha é obrigatória' }}
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
                    variant="outlined"
                    sx={sxTextField}
                    size="small"
                    fullWidth
                    autoComplete="current-password"
                    error={!!errors[FORM_PASSWORD]}
                  />
                )}
              />
              {!!errors[FORM_PASSWORD] && (
                <FormHelperText error>{errors[FORM_PASSWORD].message}</FormHelperText>
              )}
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              data-cy="submit-button"
              disabled={!isValid || loading}
              style={{
                background: loading ? '#ccc' : '#0D5C63',
                width: '100%',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
              className="flex w-full bg-primary-300 justify-center rounded-md border border-transparent py-1 px-4 text-sm font-medium text-white uppercase"
            >
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
          </div>

          <div className="flex flex-row gap-1">
            <span className="text-white">Não tem uma conta ainda?</span>
            <Link href="/register">
              <span className="text-primary-300">Registre-se</span>
            </Link>
          </div>
        </form>
      </CardSign>
    </Sign>
  )
}
