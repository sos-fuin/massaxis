import Link from 'next/link'
import React from 'react'
import { menuItems } from '../breadcrumb'
import MobileSidebar from '../sidebar/mobile-sidebar'
import { TopUserInfo } from '../top-user-info'

export function TopBar({ menuItems }: { menuItems: menuItems[] }) {
  return (
    <div className="db-top-bar">
      <MobileSidebar />
      <div className="db-breadcrumb-box">
        {menuItems && (
          <ul className="db-breadcrumb-menu">
            {menuItems.length > 0 &&
              menuItems.map(
                (item) =>
                  item.path && (
                    <li key={item.path}>
                      <Link className={`item ${item.active ? 'active' : ''}`} href={item.path} passHref={!item.path}>
                        {item.title}
                      </Link>
                    </li>
                  ),
              )}
          </ul>
        )}
      </div>
      <TopUserInfo />
    </div>
  )
}
