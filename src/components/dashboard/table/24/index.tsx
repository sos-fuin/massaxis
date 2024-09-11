'use client'
import { KTIcon } from '@/helper/icon'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { TableColumnsType } from 'antd'
import { Button, Table } from 'antd'
import React from 'react'
import { DbBadge } from '../../badge'

interface DataType {
  key: string
  id: string
  email: string
  start_date: string
  joining_time: string
  status: string
  ratting: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    email: 'tisexo1312@sablecc.com',
    start_date: 'Nov 01, 2020',
    joining_time: 'Nov 01, 2020',
    status: 'Approved',
    ratting: '5',
  },
  {
    key: '2',
    id: '#XHU-463',
    email: 'tisexo1312@sablecc.com',
    start_date: 'Nov 01, 2020',
    joining_time: 'Nov 01, 2020',
    status: 'Approved',
    ratting: '5',
  },
  {
    key: '3',
    id: '#XHU-463',
    email: 'tisexo1312@sablecc.com',
    start_date: 'Nov 01, 2020',
    joining_time: 'Nov 01, 2020',
    status: 'Approved',
    ratting: '5',
  },
  {
    key: '4',
    id: '#XHU-463',
    email: 'tisexo1312@sablecc.com',
    start_date: 'Nov 01, 2020',
    joining_time: 'Nov 01, 2020',
    status: 'Approved',
    ratting: '5',
  },
]

export const DBTable24: React.FC = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'User Name/Email',
      key: 'id',
      render: () => (
        <div>
          <h4 className="db-text s-14 black fw-600">Guy Hawkins</h4>
          <p className=" mt-1">
            <span className="db-text s-14 black fw-600">Email: </span>
            <span className="db-text s-14 gray fw-600  ">melody@altbox.com</span>
          </p>
        </div>
      ),
    },
    {
      title: 'Sell Amount',
      key: 'email',
      render: () => (
        <div>
          <h4 className="db-text s-14 black fw-600">$560,000</h4>
          <p className="db-text s-14 gray fw-600 mt-1">Paid</p>
        </div>
      ),
    },
    {
      title: 'Feed Back',
      key: 'ratting',
      render: () => (
        <div className="flex text-center">
          <Icon icon="ph:star-fill" className="text-skin-color-yellow" />
          <Icon icon="ph:star-fill" className="text-skin-color-yellow" />
          <Icon icon="ph:star-fill" className="text-skin-color-yellow" />
          <Icon icon="ph:star-fill" className="text-skin-color-yellow" />
          <Icon icon="ph:star-fill" className="text-skin-color-yellow" />
        </div>
      ),
    },

    {
      title: 'Status',
      key: 'status ',
      render: (record) => (
        <DbBadge className="success" variant="v2">
          {record.status}
        </DbBadge>
      ),
    },

    {
      title: 'Action',
      dataIndex: '',
      key: '',
      render: () => (
        <div className="flex items-center gap-2">
          <Button icon={<KTIcon iconName="switch" />}></Button>
          <Button icon={<KTIcon iconName="trash" />}></Button>
        </div>
      ),
      width: 60,
    },
  ]

  return <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
}
