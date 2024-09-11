'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DbBadge } from '@/components/dashboard/badge'
import { DBCard } from '@/components/dashboard/cards'
import { KTIcon } from '@/helper/icon'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function UserLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { id } = params
  const pathname = usePathname()

  return (
    <>
      <DbBreadCrumb
        title={`User Profile`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'User', path: '' },
        ]}
      />

      <DBCard>
        <div className="wrap !pb-0">
          <div className="flex gap-6 flex-col md:flex-row ">
            <div className="flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="user"
                height={300}
                width={300}
                className="w-[120px] h-[120px] rounded-xl object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex gap-[10px] items-center">
                <h3 className="text-lg text-skin-color-1 font-semibold">Max Smith</h3>
                <KTIcon iconName="verify" className="text-2xl text-skin-color-blue-light" />
                <DbBadge variant="v3" className="success">
                  Upgrade to Pro
                </DbBadge>
              </div>

              <ul className="flex items-center flex-wrap gap-4 mt-[10px]">
                <li>
                  <div className="flex items-center gap-1">
                    <KTIcon iconName="profile-circle" className="text-skin-color-3 text-lg" />
                    <span className="text-skin-color-3 text-base font-semibold">Developer</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <KTIcon iconName="geolocation" className="text-skin-color-3 text-lg" />
                    <span className="text-skin-color-3 text-base font-semibold">SF, Bay Area</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <KTIcon iconName="sms" className="text-skin-color-3 text-lg" />
                    <span className="text-skin-color-3 text-base font-semibold">max@kt.com</span>
                  </div>
                </li>
              </ul>

              <ul className="grid grid-cols-2 sm:flex items-center gap-3 lg:gap-5 mt-[30px] flex-wrap">
                <li>
                  <div className="p-[10px] border !border-dashed !border-skin-color-2">
                    <p className="text-skin-color-1 text-base font-semibold">12</p>
                    <p className="text-skin-color-3 text-xs font-semibold mt-2">number of Campaigns</p>
                  </div>
                </li>
                <li>
                  <div className="p-[10px] border !border-dashed !border-skin-color-2">
                    <p className="text-skin-color-1 text-base font-semibold">12</p>
                    <p className="text-skin-color-3 text-xs font-semibold mt-2">number of Campaigns</p>
                  </div>
                </li>
                <li>
                  <div className="p-[10px] border !border-dashed !border-skin-color-2">
                    <p className="text-skin-color-1 text-base font-semibold">12</p>
                    <p className="text-skin-color-3 text-xs font-semibold mt-2">number of Campaigns</p>
                  </div>
                </li>
                <li>
                  <div className="p-[10px] border !border-dashed !border-skin-color-2">
                    <p className="text-skin-color-1 text-base font-semibold">12</p>
                    <p className="text-skin-color-3 text-xs font-semibold mt-2">number of Campaigns</p>
                  </div>
                </li>
                <li>
                  <div className="p-[10px] border !border-dashed !border-skin-color-2">
                    <p className="text-skin-color-1 text-base font-semibold">12</p>
                    <p className="text-skin-color-3 text-xs font-semibold mt-2">number of Campaigns</p>
                  </div>
                </li>
              </ul>

              <nav className="!mt-10 flex items-center gap-2 md:gap-5">
                <Link
                  href={`/admin/user/${id}/user-full-info`}
                  className={`text-skin-color-3 text-sm md:text-base font-medium md:font-semibold pb-5 inline-block border-b-2 border-transparent ${
                    pathname.endsWith('user-full-info') ? 'text-skin-color-blue-light border-skin-blue-light' : ''
                  }`}>
                  User Full Info
                </Link>
                <Link
                  href={`/admin/user/${id}/login-frequency`}
                  className={`text-skin-color-3 text-sm md:text-base font-medium md:font-semibold pb-5 inline-block border-b-2 border-transparent ${
                    pathname.endsWith('login-frequency') ? 'text-skin-color-blue-light border-skin-blue-light' : ''
                  }`}>
                  Login frequency
                </Link>
                <Link
                  href={`/admin/user/${id}/user-payment-method`}
                  className={`text-skin-color-3 text-sm md:text-base font-medium md:font-semibold pb-5 inline-block border-b-2 border-transparent ${
                    pathname.endsWith('user-payment-method') ? 'text-skin-color-blue-light border-skin-blue-light' : ''
                  }`}>
                  User Payment Method
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </DBCard>

      <div className="mt-5">{children}</div>
    </>
  )
}
