'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Table } from 'antd'
import Link from 'next/link'
import React from 'react'
import { DbBadge } from '../../badge'

interface DataType {
  key: string
  id: string
  email_campaign_name: string
  email: string
  date: string
  status: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    email_campaign_name: 'Holiday Offer',
    email: 'tisexo1312@sablecc.com',
    date: 'Nov 01, 2020',
    status: 'Active',
  },
]

export const DBTable19: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <Link
          href="/admin/marketing/email-marketing/id"
          className="flex items-center gap-2 hover:bg-skin-bg-blue p-2 group transition-all w-56">
          <KTIcon iconName="arrow-up-left" className="text-lg group-hover:text-skin-color-blue-light transition-all" />

          <p className="text-sm text-skin-color-1 font-medium  group-hover:text-skin-color-blue-light transition-all">
            View
          </p>
        </Link>
      ),
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
      title: 'User Id',
      key: 'id',
      render: (record) => <span className="db-text s-14 gray">{record.id}</span>,
    },
    {
      title: 'Email Campaign Name',
      key: 'email_campaign_name',
      render: (record) => (
        <Link href={`/admin/support/id`} className="db-text s-14 gray">
          {record.email_campaign_name}
        </Link>
      ),
    },
    {
      title: 'Email',
      key: 'email',
      render: (record) => (
        <Link href={`/admin/user/id`} className="db-text s-14 black fw-600">
          {record.email}
        </Link>
      ),
    },
    {
      title: 'Date',
      key: 'date',
      render: (record) => (
        <Link href={`/admin/support/id`} className="db-text s-14 gray">
          {record.date}
        </Link>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      render: () => (
        <DbBadge className="success" variant="v2">
          Active
        </DbBadge>
      ),
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
