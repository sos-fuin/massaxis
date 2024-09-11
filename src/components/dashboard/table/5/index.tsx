'use client'
import type { TableColumnsType } from 'antd'
import { Table } from 'antd'
import React from 'react'
import { DbBadge } from '../../badge'

interface DataType {
  key: string
  id: string
  user_role: string
  start_date: string
  transition_type: string
  phone_number: string
  transition_id: string
  status: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    user_role: 'Jon AG',
    transition_type: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    transition_id: 'Nov 01, 2020',
    start_date: 'Nov 01, 2020',
    status: 'Active',
  },
  {
    key: '2',
    id: '#XHU-463',
    user_role: 'Jon AG',
    transition_type: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    transition_id: 'Nov 01, 2020',
    start_date: 'Nov 01, 2020',
    status: 'Active',
  },
]

export const DBTable5: React.FC = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Id',
      key: 'id',
      render: (record) => <span className="db-text s-14 gray">{record.id}</span>,
    },
    {
      title: 'Transition Type',
      key: 'transition_type',
      render: (record) => <span className="db-text s-14 black fw-600">{record.transition_type}</span>,
    },

    {
      title: 'Transition ID',
      key: 'transition_id',
      render: (record) => <span className="db-text s-14 gray">{record.transition_id}</span>,
    },

    {
      title: 'Subscription',
      key: 'status',
      render: (record) => (
        <DbBadge className="success" variant="v1">
          {record.status}
        </DbBadge>
      ),
    },
    {
      title: 'Start date',
      key: 'start_date',
      render: (record) => <span className="db-text s-14 gray">{record.start_date}</span>,
    },
  ]

  return <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
}
