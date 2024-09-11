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
  group_name: string
  last_completed: string
  is_last_completed: boolean
  last_value: string
  created_date: string
  end_date: string
  assigned: string
  status: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    group_name: 'Group 1',
    last_completed: '32',
    is_last_completed: true,
    last_value: '10',
    created_date: 'Nov 01, 2020',
    end_date: 'Nov 01, 2020',
    assigned: 'Arman Hossing',
    status: 'Approved',
  },
  {
    key: '2',
    id: '#XHU-463',
    group_name: 'Group 1',
    last_completed: '32',
    is_last_completed: false,
    last_value: '10',
    created_date: 'Nov 01, 2020',
    end_date: 'Nov 01, 2020',
    assigned: 'Arman Hossing',
    status: 'Approved',
  },
]

export const DBTable13: React.FC = () => {
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
      title: 'Group name',
      key: 'group_name',
      render: (record) => (
        <Link href="/user/power-dialer/id" className="db-text s-14 black">
          {record.group_name}
        </Link>
      ),
    },
    {
      title: 'Last completed',
      key: 'last_completed',
      render: (record) => (
        <div className="flex items-center gap-2">
          <span className={`text-lg   ${record.is_last_completed ? 'text-blue-500' : 'text-stone-500'}`}>
            <KTIcon iconName="check-circle" iconType="solid" />
          </span>
          <div>
            <span className="db-text s-14 black fw-600">{record.last_value}/</span>
            <span className="db-text s-14 black fw-600">{record.last_completed}</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Created date',
      key: 'created_date',
      render: (record) => <span className="db-text s-14 gray">{record.created_date}</span>,
    },

    {
      title: 'End date',
      key: 'end_date',
      render: (record) => <span className="db-text s-14 gray">{record.end_date}</span>,
    },

    {
      title: 'Assigned',
      key: 'assigned',
      render: (record) => <span className="db-text s-14 gray">{record.assigned}</span>,
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

  return (
    <Table
      rowSelection={{ type: 'checkbox' }}
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ x: 'max-content' }}
    />
  )
}
