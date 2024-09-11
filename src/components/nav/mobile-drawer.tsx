'use client'
import { image } from '@/assets'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Drawer } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavesItems from './naves-items'

const MobileDrawer: React.FC = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button onClick={showDrawer} className="ms-nav-btn mobile">
        <Icon icon="hugeicons:menu-square" />
      </button>

      <Drawer className="ms-drawer-mobile" placement="right" closable={false} onClose={onClose} open={open}>
        <div className="mobile-drawer-header">
          <div className="logo">
            <Link href="/">
              <Image src={image.logo} alt="logo" width={100} height={100} />
            </Link>
          </div>
          <button className="ms-btn-outline close" onClick={onClose}>
            <Icon icon="heroicons:x-mark-16-solid" />
          </button>
        </div>
        <div className="mobile-drawer-body ">
          <NavesItems />
        </div>
      </Drawer>
    </>
  )
}

export default MobileDrawer
