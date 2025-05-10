'use client'

import { ButtonWithLoading } from '@/components/ButtonWithLoading'
import CustomTextField from '@/components/CustomTextField'
import Footer from '@/components/Footer'
import { useAuth } from '@/contexts/useAuth'
import { ProfileItems, ProfilePage } from '@/styles/profileStyles'
import { User } from '@/types/User'
import { Avatar } from '@mui/material'
import { useRouter } from 'next/navigation'
import { IoMdSettings } from 'react-icons/io'

export default function Profile() {
  const user = {
    name: 'Amanda Santiago',
    email: 'amandasantiagu@ufsc.br',
    userId: 22,
  } as User

  const getInitials = () => {
    if (!user.name) return ''
    const nameParts = user.name.split(' ')
    const initials = nameParts.map((part) => part[0].toUpperCase()).join('')
    return initials
  }

  const router = useRouter()
  const { signOut } = useAuth()

  return (
    <ProfilePage className="flex flex-col min-h-screen">
      <ProfileItems>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex w-full gap-6 items-center justify-center">
            <IoMdSettings size={32} className="text-white" />

            <span className="text-white font-semibold text-base">CONFIGURAÇÕES</span>
          </div>

          <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />
        </div>

        <div id="list-profile" className="flex flex-col gap-4">
          <div className="flex flex-col w-full items-center">
            <Avatar alt="name-user" sx={{ width: 56, height: 56, background: '#44A1A0' }}>
              {getInitials()}
            </Avatar>
          </div>

          <div className="flex flex-col justify-center w-full gap-8">
            <CustomTextField value={user.name} name="name" inputLabel="Nome" />
            <CustomTextField value={user.email} name="email" inputLabel="Email" />
          </div>
        </div>

        <div className="mt-auto w-full" id="logout">
          <ButtonWithLoading
            className="w-full"
            sx={{ background: '#17373A', borderRadius: '0.5rem' }}
            onClick={signOut}
          >
            Sair
          </ButtonWithLoading>
        </div>
      </ProfileItems>

      <Footer />
    </ProfilePage>
  )
}
