import React from 'react'
import { HeaderStyles } from '@/styles/headerStyles'
import Image from 'next/image'
import MenuHearth from '../Menus/MenuHearth'
import MenuExp from '../Menus/MenuExp'
import Link from 'next/link'

const Header = () => {
  return (
    <HeaderStyles>
      <Link href="/guide">
        <Image src="/logo.png" alt="SqlOctopus" width={60} height={60} className="cursor-pointer" />
      </Link>

      <div className="flex flex-row gap-6">
        <MenuHearth />

        <MenuExp />
      </div>
    </HeaderStyles>
  )
}

export default Header
