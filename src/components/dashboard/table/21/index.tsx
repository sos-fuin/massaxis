'use client'
import type { TableColumnsType } from 'antd'
import { Button, Table } from 'antd'
import Link from 'next/link'
import React from 'react'

interface DataType {
  key: string
  id: string
  name: string
  last_login_date: string
  email: string
  phone_number: string
  start_date: string
  status: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    name: 'Jon AG',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    start_date: 'Nov 01, 2020',
    last_login_date: 'Nov 01, 2020',
    status: 'Active',
  },
  {
    key: '2',
    id: '#XHU-463',
    name: 'Jon AG',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    start_date: 'Nov 01, 2020',
    last_login_date: 'Nov 01, 2020',
    status: 'Active',
  },
]

export const DBTable21: React.FC = () => {
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
        <Link href={`/admin/user/id`} className="db-text s-14 black fw-600">
          {record.name}
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
      title: 'Phone numbers',
      key: 'phone_number',
      render: (record) => <span className="db-text s-14 gray">{record.phone_number}</span>,
    },
    {
      title: 'Date',
      key: 'start_date',
      render: (record) => <span className="db-text s-14 gray">{record.start_date}</span>,
    },

    {
      title: 'Action',
      dataIndex: '',
      key: '',
      render: () => (
        <Button size="small" type="primary">
          Accept User
        </Button>
      ),
      width: 60,
    },
  ]

  return <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
}
