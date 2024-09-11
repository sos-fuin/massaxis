'use client'
import type { TableColumnsType } from 'antd'
import { Table } from 'antd'
import React from 'react'
import { DbBadge } from '../../badge'

interface DataType {
  key: string
  user_ip: string
  user_role: string
  sign_in: string
  email: string
  phone_number: string
  sign_up: string
  status: string
}

const data: DataType[] = [
  {
    key: '1',
    user_ip: '192.162.01',
    user_role: 'Jon AG',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    sign_up: 'Nov 01, 2020',
    sign_in: 'Nov 01, 2020',
    status: 'Active',
  },
  {
    key: '2',
    user_ip: '192.162.01',
    user_role: 'Jon AG',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    sign_up: 'Nov 01, 2020',
    sign_in: 'Nov 01, 2020',
    status: 'Active',
  },
]

export const DBTable4: React.FC = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'User IP',
      key: 'user_ip',
      render: (record) => <span className="db-text s-14 gray">{record.user_ip}</span>,
    },
    {
      title: 'Email',
      key: 'email',
      render: (record) => <span className="db-text s-14 black fw-600">{record.email}</span>,
    },
    {
      title: 'User Role',
      key: 'user_role',
      render: (record) => <span className="db-text s-14 black fw-600">{record.user_role}</span>,
    },

    {
      title: 'Sign Up',
      key: 'sign_up',
      render: (record) => <span className="db-text s-14 gray">{record.sign_up}</span>,
    },
    {
      title: 'Sign In',
      key: 'sign_in',
      render: (record) => <span className="db-text s-14 gray">{record.sign_in}</span>,
    },
    {
      title: 'Status',
      key: 'status',
      render: (record) => (
        <DbBadge className="success" variant="v1">
          {record.status}
        </DbBadge>
      ),
    },
  ]

  return <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
}
