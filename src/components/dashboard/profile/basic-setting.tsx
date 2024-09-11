'use client'
import { DBCard } from '@/components/dashboard/cards'
import { DbInput1 } from '@/components/dashboard/from/input'
import ImageUpload from '@/components/dashboard/image-upload'
import { KTIcon } from '@/helper/icon'
import React from 'react'

export default function UserBasicSetting() {
  return (
    <>
      <DBCard
        header={
          <div className="flex items-center justify-between w-full">
            <h3 className="h-text">Basic Settings</h3>
            <button className="db-button-primary outline">
              <span className="icon">
                <KTIcon iconName="plus-square" iconType="outline" />
              </span>
              <span>Edit Info</span>
            </button>
          </div>
        }>
        <div className="wrap">
          <ul className="flex flex-col gap-5">
            <li>
              <div className="flex gap-4 items-center">
                <div className="w-[250px] text-sm text-skin-color-1">Photo</div>
                <div className="w-full flex justify-between items-center">
                  <div>150x150px JPEG, PNG Image</div>
                  <div>
                    <ImageUpload />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <DbInput1 width="w-[250px] " label="Company" inputProps={{ placeholder: 'Basic usage' }} />
            </li>
            <li>
              <DbInput1 width="w-[250px] " label="Phone" inputProps={{ placeholder: 'Basic usage' }} />
            </li>
            <li>
              <DbInput1 width="w-[250px] " label="Country" inputProps={{ placeholder: 'Basic usage' }} />
            </li>
            <li>
              <DbInput1 width="w-[250px] " label="Job Title" inputProps={{ placeholder: 'Basic usage' }} />
            </li>
            <li>
              <DbInput1 width="w-[250px] " label="Phone number" inputProps={{ placeholder: 'Basic usage' }} />
            </li>
          </ul>
          <div className="flex justify-end mt-5">
            <button className="db-button-primary">Save Changes</button>
          </div>
        </div>
      </DBCard>
    </>
  )
}
