'use client'
import { ButtonWithLoading } from '@/components/ButtonWithLoading'
import CustomTextField from '@/components/CustomTextField'
import EmptyCard from '@/components/EmptyCard'
import Footer from '@/components/Footer'
import { ProfileItems, ProfilePage } from '@/styles/profileStyles'
import { RankingType } from '@/types/Ranking'
import { Avatar } from '@mui/material'
import { FaRankingStar } from 'react-icons/fa6'
import { IoTimeOutline } from 'react-icons/io5'
import { PiCurrencyEthFill } from 'react-icons/pi'

export default function Ranking() {
  const rankings: RankingType[] = [
    {
      id: '1',
      user: { id: 'u1', name: 'Amanda Santiago', email: 'amandasantiagu@ufsc.br' },
      time: '10:30',
      exp: 1500,
      createdAt: new Date('2025-02-24T10:00:00Z'),
      updatedAt: new Date('2025-02-24T10:30:00Z'),
    },
    {
      id: '2',
      user: { id: 'u2', name: 'Carlos Silva', email: 'carlos.silva@exemplo.com' },
      time: '12:00',
      exp: 2000,
      createdAt: new Date('2025-02-24T11:00:00Z'),
      updatedAt: new Date('2025-02-24T12:00:00Z'),
    },
    {
      id: '3',
      user: { id: 'u3', name: 'Lucia Oliveira', email: 'lucia.oliveira@exemplo.com' },
      time: '14:00',
      exp: 1800,
      createdAt: new Date('2025-02-24T13:00:00Z'),
      updatedAt: new Date('2025-02-24T14:00:00Z'),
    },
    {
      id: '4',
      user: { id: 'u4', name: 'Renato Souza', email: 'renato.souza@exemplo.com' },
      time: '16:00',
      exp: 1200,
      createdAt: new Date('2025-02-24T15:00:00Z'),
      updatedAt: new Date('2025-02-24T16:00:00Z'),
    },
    {
      id: '5',
      user: { id: 'u5', name: 'Tatiane Costa', email: 'tatiane.costa@exemplo.com' },
      time: '18:00',
      exp: 2200,
      createdAt: new Date('2025-02-24T17:00:00Z'),
      updatedAt: new Date('2025-02-24T18:00:00Z'),
    },
    {
      id: '2',
      user: { id: 'u2', name: 'Carlos Silva', email: 'carlos.silva@exemplo.com' },
      time: '12:00',
      exp: 2000,
      createdAt: new Date('2025-02-24T11:00:00Z'),
      updatedAt: new Date('2025-02-24T12:00:00Z'),
    },
    {
      id: '3',
      user: { id: 'u3', name: 'Lucia Oliveira', email: 'lucia.oliveira@exemplo.com' },
      time: '14:00',
      exp: 1800,
      createdAt: new Date('2025-02-24T13:00:00Z'),
      updatedAt: new Date('2025-02-24T14:00:00Z'),
    },
    {
      id: '4',
      user: { id: 'u4', name: 'Renato Souza', email: 'renato.souza@exemplo.com' },
      time: '16:00',
      exp: 1200,
      createdAt: new Date('2025-02-24T15:00:00Z'),
      updatedAt: new Date('2025-02-24T16:00:00Z'),
    },
    {
      id: '5',
      user: { id: 'u5', name: 'Tatiane Costa', email: 'tatiane.costa@exemplo.com' },
      time: '18:00',
      exp: 2200,
      createdAt: new Date('2025-02-24T17:00:00Z'),
      updatedAt: new Date('2025-02-24T18:00:00Z'),
    },
    {
      id: '2',
      user: { id: 'u2', name: 'Carlos Silva', email: 'carlos.silva@exemplo.com' },
      time: '12:00',
      exp: 2000,
      createdAt: new Date('2025-02-24T11:00:00Z'),
      updatedAt: new Date('2025-02-24T12:00:00Z'),
    },
    {
      id: '3',
      user: { id: 'u3', name: 'Lucia Oliveira', email: 'lucia.oliveira@exemplo.com' },
      time: '14:00',
      exp: 1800,
      createdAt: new Date('2025-02-24T13:00:00Z'),
      updatedAt: new Date('2025-02-24T14:00:00Z'),
    },
    {
      id: '4',
      user: { id: 'u4', name: 'Renato Souza', email: 'renato.souza@exemplo.com' },
      time: '16:00',
      exp: 1200,
      createdAt: new Date('2025-02-24T15:00:00Z'),
      updatedAt: new Date('2025-02-24T16:00:00Z'),
    },
    {
      id: '5',
      user: { id: 'u5', name: 'Tatiane Costa', email: 'tatiane.costa@exemplo.com' },
      time: '18:00',
      exp: 2200,
      createdAt: new Date('2025-02-24T17:00:00Z'),
      updatedAt: new Date('2025-02-24T18:00:00Z'),
    },
  ]

  return (
    <ProfilePage className="flex flex-col min-h-screen">
      <ProfileItems>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex w-full gap-6 items-center justify-center">
            <FaRankingStar size={32} className="text-white" />

            <span className="text-white font-semibold text-base">RANKING</span>
          </div>

          <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />
        </div>

        <div className="flex flex-col gap-2 w-full">
          {rankings?.length > 0 ? (
            <div className="flex flex-col gap-4 w-full">
              {rankings.map((item: RankingType, index) => (
                <div
                  className="grid grid-cols-12 w-full bg-white rounded-lg p-3 gap-4 items-center"
                  key={index}
                >
                  <div className="col-span-8 flex flex-row items-center gap-4">
                    <span className="font-bold text-xl">{index}</span>

                    <Avatar alt="user-avatar" sx={{ width: 40, height: 40, background: '#44A1A0' }}>
                      {item.user.name.charAt(0)}
                    </Avatar>

                    <span className="font-bold text-base w-full truncate">{item.user.name}</span>
                  </div>

                  <div className="col-span-4 flex flex-col justify-end font-light text-sm">
                    <span className="flex flex-row items-center gap-1">
                      <PiCurrencyEthFill className="text-yellowIcon" size={18} /> {item.exp} XP
                    </span>

                    <span className="flex flex-row items-center gap-1">
                      <IoTimeOutline className="text-primary-200" size={18} /> {item.time}{' '}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyCard message="Ainda não há rankings registrados" />
          )}
        </div>
      </ProfileItems>

      <Footer />
    </ProfilePage>
  )
}
