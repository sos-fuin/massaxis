'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import DealCard from '@/components/dashboard-ui/user/deal/deal-card'
import { DBCard } from '@/components/dashboard/cards'
import { KTIcon } from '@/helper/icon'
import { Select } from '@/ui/form/select'
import { Reorder, useDragControls } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Page() {
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5])
  const controls = useDragControls()

  return (
    <>
      <DbBreadCrumb
        title="Deals"
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
        ]}
      />

      {/* <TestDnD /> */}
      {/* <TestDnD2 /> */}

      <div>
        <DBCard
          header={
            <div className="flex items-center gap-4 justify-between w-full">
              <div className="flex items-center gap-4 ">
                <h3 className="db-text gray fw-500 text-xs">Showing 24 Users</h3>
                <div className="min-w-32">
                  <Select
                    defaultValue="Option 1"
                    handleChange={() => {}}
                    options={[
                      { label: 'Option 1', value: 'Option 1' },
                      { label: 'Option 2', value: 'Option 2' },
                    ]}
                  />
                </div>
              </div>
              <Link href="/user/deals/create" className="db-button-primary outline">
                <span className="icon">
                  <KTIcon iconName="plus-square" iconType="outline" />
                </span>
                <span>Create New Deals</span>
              </Link>
            </div>
          }>
          <div className="p-4 h-full">
            <div className="gap-5 overflow-y-auto ">
              <Reorder.Group as="ul" className="flex gap-4" axis="x" values={items} onReorder={setItems}>
                {items.map((item) => (
                  <Reorder.Item
                    key={item}
                    value={item}
                    dragListener={false}
                    dragControls={controls}
                    className="max-w-[291px] w-full">
                    <DealCard controls={controls} />
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          </div>
        </DBCard>
      </div>
    </>
  )
}
