'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable19 } from '@/components/dashboard/table/19'
import { KTIcon } from '@/helper/icon'
import { Button, DatePicker, Input, Space } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <DbBreadCrumb
        title={`Email Marketing`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Email Marketing', path: '' },
        ]}>
        <Link href="/admin/marketing/email-marketing/id">
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
            <DBTable19 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
