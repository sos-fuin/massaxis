'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import UserAddContact from '@/components/dashboard-ui/user/contact/add-contact'
import ContactListCreate from '@/components/dashboard-ui/user/contact/contact-list-create'
import UserImportCreateList from '@/components/dashboard-ui/user/contact/import-type'
import PowerDialerListCreate from '@/components/dashboard-ui/user/contact/power-dialer-list-create'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable9 } from '@/components/dashboard/table/9'
import { KTIcon } from '@/helper/icon'
import { DatePicker, Input, Space } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title="Contacts "
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Contacts', path: '' },
        ]}>
        <div className="flex gap-4">
          <UserImportCreateList />
          <UserAddContact />
        </div>
      </DbBreadCrumb>

      <div>
        <DBCard
          header={
            <div className="flex justify-between items-center w-full flex-wrap gap-2">
              <div className="flex items-center gap-4 flex-wrap">
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

              <div>
                <div className="flex items-center gap-1 flex-wrap">
                  <PowerDialerListCreate />
                  <ContactListCreate />
                </div>
              </div>
            </div>
          }>
          <div className=" ">
            <DBTable9 />
          </div>
        </DBCard>
      </div>
    </>
  )
}
