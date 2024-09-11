'use client'
import { image } from '@/assets'
import { NavSticky } from '@/helper'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import MobileDrawer from './mobile-drawer'
import NavesItems from './naves-items'

export default function Nav() {
  return (
    <NavSticky>
      <div className="ms-nav">
        <div className="ms-nav-logo">
          <Link href="/" className="logo">
            <Image alt="logo" src={image.logo} width={100} height={100} />
          </Link>
        </div>
        <NavesItems />

        <div className="ms-mobile">
          <Link className="ms-btn-outline ms-nav-btn" href="/sign-up">
            <span className="n-text">Start free trial</span>
            <span>
              <Icon icon="hugeicons:arrow-right-01" />
            </span>
          </Link>
          <MobileDrawer />
        </div>
      </div>
    </NavSticky>
  )
}
