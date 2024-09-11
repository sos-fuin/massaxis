'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import AddNewVideoModal from '@/components/dashboard/modal/add-new-video-modal'
import { KTIcon } from '@/helper/icon'
import { Input, Select, Space } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <DbBreadCrumb
        title="App Integration"
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Campaign List', path: '' },
        ]}>
        <AddNewVideoModal />
      </DbBreadCrumb>
      <DBCard>
        <div className="wrap">
          <div className="flex gap-2">
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
            <Select
              defaultValue="lucy"
              className="w-32"
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-24 gap-3 lg:gap-9">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="px-20 py-30 rounded-xl bg-skin-color-2">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 flex justify-center items-center rounded-md bg-gray-100">
                    <KTIcon iconName="file-up" className="text-skin-color-blue-light text-[30px]" />
                  </div>
                  <div>
                    <h3 className="text-skin-color-1 text-lg font-semibold">Finance Deprt - Annual Report</h3>
                    <p className="text-skin-color-3 text-sm font-semibold">Yeastarday at 5:06 PM</p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-skin-color-2 text-sm font-medium">
                    You can either decide on your final headline before outstanding you write the most of the rest of
                    your creative post
                  </p>
                  <div className="text-right mt-3">
                    <Link className="text-skin-color-blue-light text-sm font-medium" href="#">
                      Reed More
                    </Link>
                  </div>
                </div>
                <div className="mt-30">
                  <iframe
                    width="409"
                    height="230"
                    className="rounded-xl"
                    src="https://www.youtube.com/embed/zEYpkollcJk?si=qWf7LVw2Ew2rhuAc&amp;controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DBCard>
    </>
  )
}
