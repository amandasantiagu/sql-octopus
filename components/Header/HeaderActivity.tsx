import React from 'react'
import { HeaderStyles } from '@/styles/headerStyles'
import { IconButton } from '@mui/material'
import { IoMdClose } from 'react-icons/io'
import { FaHeart } from 'react-icons/fa6'

interface Props {
  currentLife: number
  onClose: () => void
}

const HeaderActivity: React.FC<Props> = ({ currentLife = 2, onClose }) => {
  const [life, setLifes] = React.useState<number>(currentLife)

  return (
    <HeaderStyles>
      <IconButton aria-label="close" onClick={onClose}>
        <IoMdClose className="text-gray-300" />
      </IconButton>

      <div className="w-full flex gap-4 justify-center">
        <FaHeart className={life === 3 ? 'text-red-600' : 'text-red-950'} size={30} />
        <FaHeart className={life > 1 ? 'text-red-600' : 'text-red-950'} size={30} />
        <FaHeart className={life === 0 ? 'text-red-950' : 'text-red-600'} size={30} />
      </div>
    </HeaderStyles>
  )
}

export default HeaderActivity
