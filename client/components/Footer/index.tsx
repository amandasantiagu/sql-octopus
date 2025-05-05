import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FaRankingStar } from 'react-icons/fa6'
import { IoSettings } from 'react-icons/io5'
import Link from 'next/link'
import { FooterComponent } from '@/styles/footerStyles'

const Footer = () => {
  return (
    <FooterComponent>
      <div className="w-full h-full flex items-center justify-between">
        <Link href="/learn">
          <BiHome size={32} className="text-white" id="icon-home" />
        </Link>

        <div className="flex flex-row gap-6">
          <Link href="/ranking">
            <FaRankingStar size={32} className="text-white" id="icon-ranking" />
          </Link>

          <Link href="/profile">
            <IoSettings size={32} className="text-white" id="icon-profile" />
          </Link>
        </div>
      </div>
    </FooterComponent>
  )
}

export default Footer
