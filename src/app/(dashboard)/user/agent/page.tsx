'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import UserAddAgent from '@/components/dashboard-ui/user/agent/add-agent'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable10 } from '@/components/dashboard/table/10'
import { KTIcon } from '@/helper/icon'
import { DatePicker, Input, Space } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title="Agent "
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Agent', path: '' },
        ]}>
        <div className="flex gap-4">
          <UserAddAgent />
        </div>
      </DbBreadCrumb>

      <div>
        <DBCard
          header={
            <div className="flex items-center gap-4 ">
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
          <div className="w-full">
            <DBTable10 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
