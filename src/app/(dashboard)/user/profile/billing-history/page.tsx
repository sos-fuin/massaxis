'use client'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable15 } from '@/components/dashboard/table/15'
import React from 'react'

export default function Page() {
  return (
    <div>
      <DBCard
        header={
          <div className="flex items-center gap-4 ">
            <h3 className="db-text gray fw-500 text-xs">Billing History</h3>
          </div>
        }>
        <div className=" ">
          <DBTable15 />
        </div>
      </DBCard>
    </div>
  )
}
