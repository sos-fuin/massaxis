'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import { DbInput2 } from '@/components/dashboard/from/input2'
import { KTIcon } from '@/helper/icon'
import { Button } from 'antd'
import React from 'react'

export default function Page() {
  return (
    <>
      <DbBreadCrumb
        title={`Setting`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Setting', path: '/admin/setting/term-condition' },
        ]}></DbBreadCrumb>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <DBCard header={<h1 className="h-text">Terms of Use</h1>}>
          <div className="wrap ">
            <div className="flex flex-col gap-5">
              <DbInput2
                inputProps={{
                  placeholder: 'Type...',
                }}
                label="Heading One"
              />
              <DbInput2
                inputProps={{
                  placeholder: 'Type...',
                }}
                label="Description"
              />
            </div>
          </div>
        </DBCard>
        <DBCard header={<h1 className="h-text">CTA</h1>}>
          <div className="wrap ">
            <div className="flex flex-col gap-5">
              <DbInput2
                inputProps={{
                  placeholder: 'Type...',
                }}
                label="Heading One"
              />
              <DbInput2
                inputProps={{
                  placeholder: 'Type...',
                }}
                label="Description "
              />

              <div className="flex justify-end items-center gap-2">
                <span>Add New Points</span>
                <button className="text-4xl text-skin-color-blue-light">
                  <KTIcon iconName="plus-circle" />
                </button>
              </div>
              <div className="flex justify-end">
                <Button type="primary">Add card</Button>
              </div>
            </div>
          </div>
        </DBCard>
      </div>
    </>
  )
}
