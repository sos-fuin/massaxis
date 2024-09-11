'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import CreatePowerDialer from '@/components/dashboard-ui/user/power-dialer/create-dialer'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable13 } from '@/components/dashboard/table/13'
import { KTIcon } from '@/helper/icon'
import { Input, Space } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title="Power dialer"
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Power dialer', path: '' },
        ]}>
        <CreatePowerDialer />
      </DbBreadCrumb>

      <div>
        <DBCard
          header={
            <div className="flex justify-between items-center w-full">
              <Space.Compact size="middle">
                <Input
                  addonBefore={
                    <span className="search-icon">
                      <KTIcon iconName="magnifier" iconType="solid" />
                    </span>
                  }
                  placeholder="Type name or Number"
                />
              </Space.Compact>
            </div>
          }>
          <div className="">
            <DBTable13 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
