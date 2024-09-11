'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import UserAddCampaign from '@/components/dashboard-ui/user/campaign'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable12 } from '@/components/dashboard/table/12'
import { KTIcon } from '@/helper/icon'
import { Input, Space } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title="Campaign List"
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Campaign List', path: '' },
        ]}>
        <div className="flex gap-4">
          <UserAddCampaign />
        </div>
      </DbBreadCrumb>

      <div>
        <DBCard
          header={
            <div className=" ">
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
            </div>
          }>
          <div className=" ">
            <DBTable12 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
