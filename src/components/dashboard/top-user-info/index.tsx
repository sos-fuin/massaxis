'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import Image from 'next/image'
import React from 'react'
import { ThemeToggle } from '../theme'
import u from './1.png'
export function TopUserInfo() {
  const items: MenuProps['items'] = [
    {
      label: <a href="#">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="#">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ]
  return (
    <ul className="db-top-nav-list">
      <li className="l-item icon">
        <button className="icon">
          <KTIcon iconName="notification-status" />
        </button>
      </li>
      <li className="l-item icon">
        <ThemeToggle />
      </li>
      <li>
        <div className="l-item">
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Image className="u-image" src={u} alt="user" />
            </a>
          </Dropdown>
        </div>
      </li>
    </ul>
  )
}
