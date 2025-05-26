'use client'

import EmptyCard from '@/components/EmptyCard'
import Footer from '@/components/Footer'
import { useRequest } from '@/contexts/RequestContext'
import { ProfileItems, ProfilePage } from '@/styles/profileStyles'
import { RankingType } from '@/types/Ranking'
import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { FaRankingStar } from 'react-icons/fa6'
import { PiCurrencyEthFill } from 'react-icons/pi'

export default function Ranking() {
  const { fetchRequest } = useRequest()
  const [loading, setLoading] = useState(false)
  const [rankings, setRankings] = useState<RankingType[]>([])

  const getUsersInRanking = async () => {
    setLoading(true)
    try {
      const response = await fetchRequest(`ranking`, {
        method: 'GET',
      })

      setRankings(response || [])
    } catch (error) {
      console.log('Erro na requisição:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsersInRanking()
  }, [])

  return (
    <ProfilePage className="flex flex-col min-h-screen">
      <ProfileItems className="flex-grow flex flex-col gap-4">
        <div className="flex flex-col gap-4 py-2">
          <div className="flex w-full gap-4 items-center justify-center">
            <FaRankingStar size={28} className="text-white mb-2" />

            <span className="text-white font-semibold text-base">RANKING</span>
          </div>

          <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />
        </div>

        <div
          className="flex flex-col gap-2 w-full flex-grow overflow-y-auto"
          style={{
            maxHeight: 'calc(100vh - 250px)',
            overflowY: 'auto',
          }}
          id="list-ranking"
        >
          {rankings?.length > 0 ? (
            <div className="flex flex-col gap-4 w-full">
              {rankings.map((item: RankingType, index) => (
                <div
                  className="grid grid-cols-12 w-full bg-white rounded-lg p-3 gap-4 items-center"
                  key={index}
                >
                  <div className="col-span-8 flex flex-row items-center gap-4">
                    <Avatar
                      alt="user-avatar"
                      sx={{ width: 25, height: 25, background: '#44A1A0', fontSize: '1rem' }}
                    >
                      {index + 1}
                    </Avatar>

                    <span className="font-bold text-sm w-full truncate">{item?.name}</span>
                  </div>

                  <div className="col-span-4 flex flex-col justify-end font-light text-sm">
                    <span className="flex flex-row items-center gap-1">
                      <PiCurrencyEthFill className="text-yellowIcon" size={18} /> {item?.exp} XP
                    </span>

                    {/* <span className="flex flex-row items-center gap-1">
                      <IoTimeOutline className="text-primary-200" size={18} /> {item.time}
                    </span> */}
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
