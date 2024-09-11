'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable22 } from '@/components/dashboard/table/22'
import { KTIcon } from '@/helper/icon'
import { DatePicker, Input, Space } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title={`Deals`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Deals', path: '' },
        ]}
      />
      <div>
        <DBCard
          header={
            <div className="flex items-center gap-4 ">
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
            <DBTable22 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
