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
  service_name: string
  service_description: string
  urgency: string
  email: string
  phone_number: string
  date: string
  status: string
  common_issue: boolean
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    service_name: 'Product Thumbnails  Design',
    service_description: `I'm here! Digging for apples, yer honour!' (He pronounced it 'arrum.') 'An arm, you goose! `,
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    date: '18/02/24',
    urgency: 'Critical',
    status: 'Active',
    common_issue: true,
  },
  {
    key: '2',
    id: '#XHU-463',
    service_name: 'Product Thumbnails  Design',
    service_description: `I'm here! Digging for apples, yer honour!' (He pronounced it 'arrum.') 'An arm, you goose! `,
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    date: '18/02/24',
    urgency: 'Critical',
    status: 'Active',
    common_issue: false,
  },
]

export const DBTable11: React.FC = () => {
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
      title: 'User Id',
      key: 'id',
      render: (record) => <span className="db-text s-14 gray">{record.id}</span>,
    },
    {
      title: 'Service Name',
      key: 'service_name',
      render: (record) => (
        <Link href={`/user/support/id`} className="db-text s-14 black fw-600">
          {record.service_name}
        </Link>
      ),
    },

    {
      title: 'Service Description',
      key: 'service_description',
      render: (record) => <span className="db-text s-14 gray max-w-[400px] ">{record.service_description}</span>,
      // width: '100%',
    },
    {
      title: 'Date',
      key: 'date',
      render: (record) => <span className="db-text s-14 gray">{record.date}</span>,
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

  return <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 'max-content' }} />
}
