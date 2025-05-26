import React from 'react'

import { FaHeart } from 'react-icons/fa6'
import DialogCloseLesson from '../Dialog/DialogCloseLesson'
import { HeaderStyles } from '@/styles/headerStyles'
import { useAuth } from '@/contexts/useAuth'

interface Props {
  onClose: () => void
}

const HeaderActivity: React.FC<Props> = ({ onClose }) => {
  const { user } = useAuth()

  const [life, setLifes] = React.useState<number>(user?.life || 0)

  return (
    <HeaderStyles>
      <DialogCloseLesson onClose={onClose} />

      <div className="w-full flex gap-2 justify-center">
        <FaHeart className={life === 3 ? 'text-red-600' : 'text-red-950'} size={30} />
        <FaHeart className={life > 1 ? 'text-red-600' : 'text-red-950'} size={30} />
        <FaHeart className={life === 0 ? 'text-red-950' : 'text-red-600'} size={30} />
      </div>
    </HeaderStyles>
  )
}

export default HeaderActivity
