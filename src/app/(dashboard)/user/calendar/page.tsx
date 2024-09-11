import { DbBreadCrumb } from '@/components/dashboard'
import Calender from '@/components/dashboard/calender'
import React from 'react'

export default function page() {
  return (
    <>
      <DbBreadCrumb title="Calender" subTitle="Central Hub for Personal Customization" />
      <Calender />
    </>
  )
}
