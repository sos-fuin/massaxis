'use client'
import { KTIcon } from '@/helper/icon'
import type { TableColumnsType } from 'antd'
import { Table } from 'antd'
import Link from 'next/link'
import React from 'react'

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
  call_duration: string
  email: string
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
    call_duration: '10:32',
    email: '01',
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
    call_duration: '10:32',
    email: '01',
  },
]

export const DBTable14: React.FC = () => {
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
      title: 'Call Duration',
      key: 'call_duration',
      render: (record) => <span className="db-text s-14 gray">{record.call_duration}</span>,
    },

    {
      title: 'Email',
      key: 'email',
      render: (record) => <span className="db-text s-14 gray">{record.assigned}</span>,
    },
    {
      title: 'Assigned',
      key: 'assigned',
      render: (record) => <span className="db-text s-14 gray">{record.assigned}</span>,
    },
  ]

  return <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 'max-content' }} />
}
