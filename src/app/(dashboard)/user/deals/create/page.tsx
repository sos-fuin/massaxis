'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DealCardCreate, DealCardCreateInfo } from '@/components/dashboard-ui/user/deal/deal-card'
import { DBCard } from '@/components/dashboard/cards'
import { KTIcon } from '@/helper/icon'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <DbBreadCrumb
        title="Deals Create"
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          {
            title: 'Dashboard',
            path: '/user',
          },
          {
            title: 'Deals',
            path: '',
          },
        ]}>
        <Link href={'/user/deals'} className="text-3xl text-center">
          <KTIcon iconName="cross-circle" className="text-skin-color-red" />
        </Link>
      </DbBreadCrumb>

      <div>
        <DBCard>
          <div className="p-4 h-full">
            <div className="flex gap-5 overflow-y-auto">
              <DealCardCreate />
              <DealCardCreate />
              <DealCardCreate />
              <DealCardCreate />
              <DealCardCreateInfo />
            </div>
          </div>
        </DBCard>
      </div>
    </>
  )
}
