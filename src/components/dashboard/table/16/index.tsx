'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Table } from 'antd'
import Link from 'next/link'
import React from 'react'
import { SubscriptionEditModal } from '../../modal/subscription-edit-modal'

interface DataType {
  key: string
  id: string
  start_date: string
  end_date: string
  subscription_name: string
  next_payment: string
  type_of_membership: string
  amount: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    start_date: 'Nov 01, 2020',
    end_date: 'Nov 01, 2020',
    subscription_name: 'Subscription Name',
    next_payment: 'Nov 01, 2020',
    type_of_membership: 'Free',
    amount: '$0.00',
  },
]

export const DBTable16: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: <SubscriptionEditModal />,
      key: '0',
    },
    {
      label: (
        <div className="flex items-center gap-2 hover:bg-skin-bg-blue p-2 group transition-all w-56">
          <div>
            <KTIcon iconName="wallet" className="text-lg group-hover:text-skin-color-blue-light transition-all" />
          </div>
          <div>
            <p className="text-sm text-skin-color-1 font-medium  group-hover:text-skin-color-blue-light transition-all">
              Deactivate User
            </p>
            <p className="text-sm text-skin-color-2 font-medium  ">Add membership</p>
          </div>
        </div>
      ),
      key: '1',
    },
  ]
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Id',
      key: 'id',
      render: (record) => <span className="db-text s-14 gray">{record.id}</span>,
    },
    {
      title: 'Subscription Name',
      key: 'subscription_name',
      render: (record) => (
        <Link href={`/admin/users-subscription/id`} className="db-text s-14 black fw-600">
          {record.subscription_name}
        </Link>
      ),
    },
    {
      title: 'Start date',
      key: 'start_date',
      render: (record) => <span className="db-text s-14 gray">{record.start_date}</span>,
    },
    {
      title: 'End date',
      key: 'end_date',
      render: (record) => <span className="db-text s-14 gray">{record.end_date}</span>,
    },
    {
      title: 'Next Payment',
      key: 'next_payment',
      render: (record) => <span className="db-text s-14 gray">{record.next_payment}</span>,
    },
    {
      title: 'Type of Membership',
      key: 'type_of_membership',
      render: (record) => <span className="db-text s-14 gray">{record.type_of_membership}</span>,
    },
    {
      title: 'Amount',
      key: 'amount',
      render: (record) => <span className="db-text s-14 green">{record.amount}</span>,
    },

    {
      title: 'Action',
      dataIndex: '',
      key: '',
      render: () => (
        <Dropdown menu={{ items }} trigger={['click']} className="">
          <a onClick={(e) => e.preventDefault()} className="text-xl text-stone-500 hover:text-blue-500  ">
            <KTIcon iconName="plus-square" />
          </a>
        </Dropdown>
      ),
      width: 60,
    },
  ]

  return <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
}
