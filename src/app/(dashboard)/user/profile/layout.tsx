'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  return (
    <>
      <DbBreadCrumb
        title={`Profile`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Support', path: '' },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 sm:col-span-4 lg:col-span-3">
          <ul className="flex flex-col gap-3 p-3 rounded-xl border border-skin-color-1 bg-skin-color-1">
            <li>
              <Link
                className={`w-full px-3 py-2 rounded-xl block ${
                  pathName === '/user/profile/basic-setting' ? 'bg-skin-color-2' : ''
                }`}
                href="/user/profile/basic-setting">
                Basic Setting
              </Link>
            </li>
            <li>
              <Link
                className={`w-full px-3 py-2 rounded-xl block ${
                  pathName === '/user/profile/payment-method' ? 'bg-skin-color-2' : ''
                }`}
                href="/user/profile/payment-method">
                Payment Method
              </Link>
            </li>
            <li>
              <Link
                className={`w-full px-3 py-2 rounded-xl block ${
                  pathName === '/user/profile/billing-history' ? 'bg-skin-color-2' : ''
                }`}
                href="/user/profile/billing-history">
                Billing History
              </Link>
            </li>
            {/* <li>
              <Link
                className={`w-full px-3 py-2 rounded-xl block ${
                  pathName === '/user/profile/password' ? 'bg-skin-color-2' : ''
                }`}
                href="/user/profile/password">
                Password
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-8 lg:col-span-9">{children}</div>
      </div>
    </>
  )
}
