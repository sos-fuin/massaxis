'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import SupportCreate from '@/components/dashboard-ui/user/support/support-create'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable11 } from '@/components/dashboard/table/11'
import { KTIcon } from '@/helper/icon'
import { Button, DatePicker, Input, Space } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title={`Support`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Support', path: '' },
        ]}>
        <div className="flex items-center gap-2">
          <Link href="/user/support">
            <Button type="default">All ticket</Button>
          </Link>
          <SupportCreate />
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
          <div className=" ">
            <DBTable11 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
