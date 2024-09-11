'use client'
import { KTIcon } from '@/helper/icon'
import type { TableColumnsType } from 'antd'
import { Table } from 'antd'
import React from 'react'
import { DbBadge } from '../../badge'

interface DataType {
  key: string
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
    group_name: 'Sales Call',
    assigned: 'Jon AG',
    status: 'Approved',
    created_date: '24 Aug, 2024',
    end_date: '24 Aug, 2024',
    last_completed: '30',
    last_value: '100',
    is_last_completed: true,
  },
  {
    key: '2',
    group_name: 'FLTD 02',
    assigned: 'Jon AG',
    status: 'Approved ',
    created_date: '24 Aug, 2024',
    end_date: '24 Aug, 2024',
    last_completed: '0',
    last_value: '100',
    is_last_completed: false,
  },
]

export const DBTable2: React.FC = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Group  name',
      key: 'group_name',
      render: (record) => <span className="db-text s-14 gray">{record.group_name}</span>,
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
      render: (record) => (
        <DbBadge className="success" variant="v2">
          {record.status}
        </DbBadge>
      ),
    },
    {
      title: '',
      dataIndex: '',
      key: '',
      render: () => (
        <button type="button" className="text-xl hover:text-blue-500  ">
          <KTIcon iconName="plus-square" />
        </button>
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
