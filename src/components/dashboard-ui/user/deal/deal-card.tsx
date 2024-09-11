'use client'
import { icon } from '@/assets'
import { DbBadge } from '@/components/dashboard/badge'
import Label from '@/components/dashboard/from/label'
import { KTIcon } from '@/helper/icon'
import { Button, Divider, Input, Switch } from 'antd'
import { DragControls, Reorder } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import AddDeal from './add-deal'

export default function DealCard({ controls }: { controls: DragControls }) {
  const [items, setItems] = useState([0, 1, 2])

  return (
    <div className="min-w-56 border border-skin-color-1 rounded-xl shadow px-3 py-4 min-h-[582px] ">
      <div className="mt-1 ms-3 relative">
        <button className="absolute text-xl right-0 cursor-grab" onMouseDown={(e: any) => controls.start(e)}>
          <KTIcon iconName="category" />
        </button>

        <div>
          <Image alt="icon" src={icon.jira} className="w-10" />
        </div>
        <div className="mt-2">
          <p className="text-base text-skin-color-1 font-semibold ">Incoming</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <p className="  ">
            <span className="text-skin-color-3 me-1 font-semibold text-sm">$</span>
            <span className="text-skin-color-1 me-1 font-semibold text-sm">12,706</span>
          </p>
          <p className="flex items-center gap-1  ">
            <KTIcon iconName="notification-on" iconType="outline" className="text-skin-color-blue text-xl" />
            <span className="text-skin-color-3 font-semibold text-sm ">1 Day</span>
          </p>
        </div>
        <Divider />
      </div>

      <div className="flex flex-col gap-3">
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
          {items.map((item) => (
            <Reorder.Item key={item} value={item}>
              <DealCardItem />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      <div className="text-center mt-7">
        <AddDeal />
      </div>
    </div>
  )
}

export const DealCardItem = () => {
  return (
    <div className="border border-skin-color-1 rounded-xl shadow p-3 min-h-[97px] flex flex-col justify-between">
      <p className="flex justify-between ">
        <span className="text-skin-color-1 me-1 font-semibold text-sm">Person Name</span>
        <DbBadge className="danger" variant="v1" size="sm">
          Hot
        </DbBadge>
      </p>
      <div className="flex items-center gap-3 mt-2">
        <p className="  ">
          <span className="text-skin-color-3 me-1 font-semibold text-sm">$</span>
          <span className="text-skin-color-1 me-1 font-semibold text-[10px]">12,706</span>
        </p>
        <p className="flex items-center gap-1  ">
          <KTIcon iconName="notification-on" iconType="outline" className="text-skin-color-blue text-base" />
          <span className="text-skin-color-3 font-semibold text-[10px] ">1 Day</span>
        </p>
      </div>
    </div>
  )
}

export const DealCardCreate = () => {
  return (
    <div className="max-w-[291px] min-w-56 border border-skin-color-1 rounded-xl shadow px-3 py-4 min-h-[750px] w-full opacity-50 hover:opacity-100 transition-all">
      <div className="flex flex-col justify-between gap-3 h-full">
        <div>
          <div className="mt-1 ms-3 !mb-8">
            <div>
              <p className="text-base text-skin-color-1 font-semibold ">Incoming</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <p className="  ">
                <span className="text-skin-color-3 me-1 font-semibold text-sm">$</span>
                <span className="text-skin-color-1 me-1 font-semibold text-sm">12,706</span>
              </p>
              <p className="flex items-center gap-1  ">
                <KTIcon iconName="notification-on" iconType="outline" className="text-skin-color-blue text-xl" />
                <span className="text-skin-color-3 font-semibold text-sm ">1 Day</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-1 flex-col">
                <Label label="Name" />
                <Input size="large" placeholder="Name" className="w-full" />
              </div>
              <div className="flex gap-1 flex-col">
                <Label label="Probability" />
                <Input size="large" placeholder="Name" className="w-full" />
              </div>
              <div className="flex gap-2 flex-col">
                <div className="flex gap-1 items-center">
                  <Switch defaultChecked />
                  <Label label="Probability" />
                </div>
                <Input size="large" placeholder="Name" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button type="primary" danger className="w-full" size="large">
            Deactivate Account
          </Button>
        </div>
      </div>
    </div>
  )
}

export const DealCardCreateInfo = () => {
  return (
    <div className="max-w-[291px] min-w-56 border border-skin-color-1 rounded-xl shadow px-30 py-30 min-h-[750px] w-full ">
      <div>
        <h3 className="text-base text-skin-color-1 font-semibold">Did you need to Create New Deals?</h3>
        <p className="text-sm text-skin-color-3 font-medium mt-3">
          Project management for agile teams, tracking issues and tasks.
        </p>
        <ul className="flex flex-col gap-5 mt-5">
          <li>
            <p className="flex items-center gap-1">
              <KTIcon iconName="check-circle" iconType="outline" className="text-skin-color-green text-base" />
              <span className="text-sm text-skin-color-1 font-medium">Deals Create Proses</span>
            </p>
          </li>
          <li>
            <p className="flex items-center gap-1">
              <KTIcon iconName="check-circle" iconType="outline" className="text-skin-color-green text-base" />
              <span className="text-sm text-skin-color-1 font-medium">Deals Create Proses</span>
            </p>
          </li>
          <li>
            <p className="flex items-center gap-1">
              <KTIcon iconName="check-circle" iconType="outline" className="text-skin-color-green text-base" />
              <span className="text-sm text-skin-color-1 font-medium">Deals Create Proses</span>
            </p>
          </li>
          <li>
            <p className="flex items-center gap-1">
              <KTIcon iconName="check-circle" iconType="outline" className="text-skin-color-green text-base" />
              <span className="text-sm text-skin-color-1 font-medium">Deals Create Proses</span>
            </p>
          </li>
        </ul>
        <div className="!mt-10">
          <button className="db-button-primary w-full justify-center">
            <span className="icon">
              <KTIcon iconName="plus-square" iconType="outline" />
            </span>
            <span>Create New Deals</span>
          </button>
        </div>
      </div>
    </div>
  )
}
