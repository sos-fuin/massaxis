'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable21 } from '@/components/dashboard/table/21'
import { KTIcon } from '@/helper/icon'
import { DatePicker, Input, Space } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title={`Pending Users`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Users', path: '' },
        ]}
      />

      <div>
        <DBCard
          header={
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap ">
              <h3 className="db-text gray fw-500 text-xs">Membership Filter</h3>
              <div className="min-w-32">
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

              <DatePicker />
            </div>
          }>
          <div className=" ">
            <DBTable21 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
