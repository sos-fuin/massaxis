import { KTIcon } from '@/helper/icon'
import React from 'react'
interface DbListProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'secondary' | 'secondary2' | 'semi-primary' | 'dark'
}
export function DbTicketsList({ type }: DbListProps) {
  return (
    <div className={`flex items-center gap-5 justify-between DbTicketsList ${type} `}>
      <div className="flex items-center gap-4">
        <div>
          <KTIcon iconName="abstract-26" className={`text-4xl db-text ${type}`} />
        </div>
        <div>
          <p className="db-text fw-600 gray s-14 mb-1">$560,000</p>
          <p className="db-text fw-600 gray2 s-12">Paid</p>
        </div>
      </div>
      <div>
        <p className={`db-text fw-600 s-12 ${type}`}>Pending</p>
      </div>
    </div>
  )
}
