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
  name: string
  last_login_date: string
  email: string
  phone_number: string
  start_date: string
  status: string
  membership: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    name: 'Arman Hossing',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    start_date: 'Nov 01, 2020',
    last_login_date: 'Nov 01, 2020',
    status: 'Active',
    membership: 'Active',
  },
  {
    key: '2',
    id: '#XHU-463',
    name: 'Arman Hossing',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    start_date: 'Nov 01, 2020',
    last_login_date: 'Nov 01, 2020',
    status: 'Active',
    membership: 'Active',
  },
]

export const DBTable7: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <div className="flex items-center gap-2 hover:bg-skin-bg-blue p-2 group transition-all w-56">
          <div>
            <KTIcon iconName="pencil" className="text-lg group-hover:text-skin-color-blue-light transition-all" />
          </div>
          <div>
            <p className="text-sm text-skin-color-1 font-medium  group-hover:text-skin-color-blue-light transition-all">
              User Full Info
            </p>
            <p className="text-sm text-skin-color-2 font-medium  ">Edit Info</p>
          </div>
        </div>
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
      title: 'Id',
      key: 'id',
      render: (record) => <span className="db-text s-14 gray">{record.id}</span>,
    },
    {
      title: 'Name',
      key: 'name',
      render: (record) => (
        <Link href={`/admin/users-subscription/id`} className="db-text s-14 black fw-600">
          {record.name}
        </Link>
      ),
    },
    {
      title: 'Start date',
      key: 'start_date',
      render: (record) => <span className="db-text s-14 gray">{record.start_date}</span>,
    },
    {
      title: 'Email',
      key: 'email',
      render: (record) => (
        <Link href={`/admin/users-subscription/id`} className="db-text s-14 black fw-600">
          {record.email}
        </Link>
      ),
    },

    {
      title: 'Membership',
      key: 'membership',
      render: (record) => (
        <DbBadge className="success" variant="v1">
          {record.membership}
        </DbBadge>
      ),
    },
    {
      title: 'Users Type',
      key: 'status',
      render: (record) => (
        <DbBadge className="success" variant="v1">
          {record.status}
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
