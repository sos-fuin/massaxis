'use client'

import { image } from '@/assets'
import { KTIcon } from '@/helper/icon'
import { i_children } from '@/types/ReactTypes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AdminMenuItems, UserMenuItems } from './_ctx'

const Sidebar = ({ children }: i_children) => {
  const pathname = usePathname()

  const checkSidebar = pathname.startsWith('/admin') ? AdminMenuItems : UserMenuItems

  const [openSubmenuKey, setOpenSubmenuKey] = useState<null | string>(null)

  const toggleSubmenu = (key: string | null) => {
    setOpenSubmenuKey((prevKey) => (prevKey === key ? null : key))
  }
  return (
    <div className="ms-sidebar-db">
      <div className="ms-sidebar">
        {/* LOGO  */}

        <Link href="/" className="ms-sidebar-logo">
          <div className="img">
            <Image alt="logo" src={image.logo} />
          </div>
          <div className="text-ar">
            <h1 className="title">MASS AXIS</h1>
          </div>
        </Link>

        {/* DASHBOARD   */}
        <div className="ms-db-link">
          <Link href={pathname.startsWith('/admin') ? '/admin' : '/user'} className="ms-db-menu-link active">
            <div className="content-ar">
              <KTIcon iconName="category" className="icon" />
              <span className="txt">Dashboard</span>
            </div>
            <span className="ct"></span>
          </Link>
        </div>

        {/* MENU  */}
        <ul className="ms-db-menus">
          {checkSidebar.map((menu) => (
            <li key={menu.key}>
              <p className="ms-db-menu-title">{menu.label}</p>
              <ul className="ms-db-sub-menus">
                {menu.sub.map((sub) => (
                  <li key={sub.key}>
                    {!sub.href && (
                      <div className="ms-db-menu-link" onClick={() => toggleSubmenu(sub.key)}>
                        <div className="content-ar">
                          <KTIcon iconName={sub.icon} className="icon" />
                          <span className="txt">{sub.label}</span>
                        </div>
                        {sub?.subItems && sub?.subItems?.length > 0 && (
                          <KTIcon
                            className={`dropdown-arrow ${openSubmenuKey === sub.key ? 'open' : ''}`}
                            iconName={openSubmenuKey === sub.key ? 'minus-square' : 'plus-square'}
                          />
                        )}
                      </div>
                    )}
                    {sub.href && (
                      <Link href={sub.href} className="ms-db-menu-link">
                        <div className="content-ar">
                          <KTIcon iconName={sub.icon} className="icon" />
                          <span className="txt">{sub.label}</span>
                        </div>
                        <span className="ct"></span>
                      </Link>
                    )}
                    {sub?.subItems && sub?.subItems?.length > 0 && openSubmenuKey === sub.key && (
                      <ul className="ms-db-dropdown-sub-menus">
                        {sub?.subItems?.map((subItem) => (
                          <li key={subItem.key}>
                            <Link href={subItem.href} className="ms-db-sub-menu-link">
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {/* <ul className="ms-db-menus">
          {checkSidebar.map((menu) => (
            <li key={menu.key}>
              <p className="ms-db-menu-title">{menu.label}</p>
              <ul className="ms-db-sub-menus">
                {menu.sub.map((sub) => (
                  <li key={sub.key}>
                    <Link href={sub.href} className="ms-db-menu-link">
                      <div className="content-ar">
                        <KTIcon iconName={sub.icon} className="icon" />
                        <span className="txt">{sub.label}</span>
                      </div>
                      <span className="ct"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul> */}
      </div>
      {children}
    </div>
  )
}

export default Sidebar
