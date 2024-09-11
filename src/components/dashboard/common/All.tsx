import { KTIcon } from '@/helper/icon'
import React from 'react'
import { CountryFlag, UserInfo } from './index'

export default function All() {
  return (
    <div className="db-all-main-fs">
      <div className="all-basic-xhs">
        <UserInfo />
        <CountryFlag />

        <div>
          <div className="flex items-center gap-2 hover:bg-skin-bg-blue p-2 group transition-all w-56">
            <div>
              <KTIcon iconName="pencil" className="text-lg group-hover:text-skin-color-blue-light transition-all" />
            </div>
            <div>
              <p className="text-sm text-skin-color-1 font-medium  group-hover:text-skin-color-blue-light transition-all">
                User Full Info
              </p>
              <p className="text-sm text-skin-color-2 font-medium  ">Edit Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
