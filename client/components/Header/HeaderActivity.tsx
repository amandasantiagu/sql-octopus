import React from 'react'

import { FaHeart } from 'react-icons/fa6'
import DialogCloseLesson from '../Dialog/DialogCloseLesson'
import { HeaderStyles } from '@/styles/headerStyles'
import { useAuth } from '@/contexts/useAuth'
import { Chip } from '@mui/material'

interface Props {
  type?: 'view' | 'redo' | 'start' | null
  onClose: () => void
}

const HeaderActivity: React.FC<Props> = ({ type, onClose }) => {
  const { user } = useAuth()

  return (
    <HeaderStyles>
      <DialogCloseLesson onClose={onClose} />

      {type === 'view' ? (
        <div className="w-full flex gap-2 justify-start">
          <Chip label="Modo visualização" color="info" />
        </div>
      ) : (
        <div className="w-full flex gap-2 justify-center">
          <FaHeart className={user?.life === 3 ? 'text-red-600' : 'text-red-950'} size={30} />
          <FaHeart
            className={user?.life && user?.life > 1 ? 'text-red-600' : 'text-red-950'}
            size={30}
          />
          <FaHeart className={user?.life === 0 ? 'text-red-950' : 'text-red-600'} size={30} />
        </div>
      )}
    </HeaderStyles>
  )
}

export default HeaderActivity
