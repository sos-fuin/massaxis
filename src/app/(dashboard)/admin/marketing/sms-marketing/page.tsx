'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable20 } from '@/components/dashboard/table/20'
import { KTIcon } from '@/helper/icon'
import { Button, DatePicker, Input, Space } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <DbBreadCrumb
        title={`SMS Marketing`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'SMS Marketing', path: '' },
        ]}>
        <Link href="/admin/marketing/sms-marketing/id">
          <Button type="primary">Send Mail</Button>
        </Link>
      </DbBreadCrumb>

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
            <DBTable20 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
