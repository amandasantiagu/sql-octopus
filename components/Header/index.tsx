import React from 'react'
import { HeaderStyles } from '@/styles/headerStyles'
import Image from 'next/image'
import MenuHearth from '../Menus/MenuHearth'
import MenuExp from '../Menus/MenuExp'

const Header = () => {
  return (
    <HeaderStyles>
      <Image src="/logo.png" alt="SqlOctopus" width={130} height={130} />

      <div className="flex flex-row gap-6">
        <MenuHearth />

        <MenuExp />
      </div>
    </HeaderStyles>
  )
}

export default Header
