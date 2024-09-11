'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBTable18 } from '@/components/dashboard/table/18'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title={`Manage Role`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Manage Role', path: '' },
        ]}></DbBreadCrumb>
      <div>
        <DBTable18 />
      </div>
    </>
  )
}
