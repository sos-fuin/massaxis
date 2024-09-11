import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'
import { DbBadge } from '../badge'

export default function PaymentCard({ isActive, iconName }: { isActive?: boolean; iconName: any }) {
  return (
    <div className={`p-7 rounded-xl  ${isActive ? 'border border-blue-500' : 'border border-gray-300 border-dashed'}`}>
      <div className="mb-16">
        <p className="flex items-center gap-3 justify-center sm:justify-start ">
          <span className="text-skin-color-1 text-lg font-bold">Marcus Morris</span>
          <DbBadge className="success" size="md" variant="v2">
            Primary
          </DbBadge>
        </p>
      </div>
      <div className="flex items-center sm:gap-2 justify-between flex-col sm:flex-row gap-3">
        <div className="flex items-center gap-2 flex-col sm:flex-row">
          <div className=" w-20 rounded-md bg-skin-color-3 p-2">
            <Image alt="visa card" className="w-full" src={iconName} />
          </div>
          <div>
            <p className="text-skin-color-1 text-base font-bold">Visa **** 1679</p>
            <p className="text-skin-color-3 text-sm font-bold">Card expires at 09/24</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button>Delete</Button>
          <Button type="default">Edit</Button>
        </div>
      </div>
    </div>
  )
}
