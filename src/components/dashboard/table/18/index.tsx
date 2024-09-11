'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Table } from 'antd'
import Link from 'next/link'
import React from 'react'

interface DataType {
  key: string
  id: string
  customer: string
  created: string
  role: string
  email: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    customer: 'Jon AG',
    created: 'Nov 01, 2020',
    role: 'Admin',
    email: 'tisexo1312@sablecc.com',
  },
]

export const DBTable18: React.FC = () => {
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
      title: 'Customer',
      key: 'customer',
      render: (record) => (
        <Link href={`#`} className="db-text s-14 black fw-600">
          {record.customer}
        </Link>
      ),
    },
    {
      title: 'Created',
      key: 'created',
      render: (record) => <span className="db-text s-14 gray">{record.created}</span>,
    },
    {
      title: 'Role',
      key: 'role',
      render: (record) => <span className="db-text s-14 gray">{record.role}</span>,
    },
    {
      title: 'Email',
      key: 'email',
      render: (record) => <span className="db-text s-14 black fw-600">{record.email}</span>,
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
