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
  campaign_name: string
  number: string
  name: string
  date: string
  status: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    campaign_name: 'Holiday Offer',
    name: 'Arman Hossing',
    number: '0148----789',
    date: 'Nov 01, 2020',
    status: 'Active',
  },
]

export const DBTable20: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <Link
          href="/admin/marketing/sms-marketing/id"
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
      title: 'Campaign Name',
      key: 'campaign_name',
      render: (record) => (
        <Link href={`/admin/support/id`} className="db-text s-14 gray">
          {record.campaign_name}
        </Link>
      ),
    },
    {
      title: 'Name',
      key: 'name',
      render: (record) => (
        <Link href={`/admin/user/id`} className="db-text s-14 black fw-600">
          {record.name}
        </Link>
      ),
    },
    {
      title: 'Number',
      key: 'number',
      render: (record) => (
        <Link href={`/admin/user/id`} className="db-text s-14 black fw-600">
          {record.number}
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
