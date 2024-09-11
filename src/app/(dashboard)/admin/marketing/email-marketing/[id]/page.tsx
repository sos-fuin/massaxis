'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import { DbInput2 } from '@/components/dashboard/from/input2'
import { DbSelect } from '@/components/dashboard/from/select'
import { DbTextarea } from '@/components/dashboard/from/textarea'
import { Button } from 'antd'
import React from 'react'

export default function Page() {
  return (
    <>
      <DbBreadCrumb
        title={`Email Marketing`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Email Marketing', path: '' },
        ]}
      />

      <DBCard>
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DbSelect
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Name"
            />
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Name"
            />
            <DbTextarea inputProps={{ placeholder: 'Type...', rows: 5 }} label="Long Description" />
            <div></div>
            <div className="flex items-center gap-2">
              <Button size="large">Cancel</Button>
              <Button size="large" type="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </DBCard>
    </>
  )
}
