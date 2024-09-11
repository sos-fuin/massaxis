'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Checkbox, Dropdown, Table } from 'antd'
import Link from 'next/link'
import React from 'react'
import { DbBadge } from '../../badge'
import { TicketAssignModal } from '../../modal/ticket-assign'

interface DataType {
  key: string
  id: string
  subject: string
  urgency: string
  email: string
  phone_number: string
  Assign: string
  status: string
  common_issue: boolean
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    subject: 'Product Thumbnails  Design',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    Assign: 'Arman Hossing',
    urgency: 'Critical',
    status: 'Active',
    common_issue: true,
  },
  {
    key: '2',
    id: '#XHU-463',
    subject: 'Product Thumbnails  Design',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    Assign: 'Arman Hossing',
    urgency: 'Critical',
    status: 'Active',
    common_issue: false,
  },
]

export const DBTable8: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: <TicketAssignModal />,
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
      title: 'Subject',
      key: 'subject',
      render: (record) => (
        <Link href={`/admin/support/id`} className="db-text s-14 black fw-600">
          {record.subject}
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
      title: 'Assign',
      key: 'Assign',
      render: (record) => <span className="db-text s-14 gray">{record.Assign}</span>,
    },

    {
      title: 'Urgency',
      key: 'urgency',
      render: (record) => <span className="db-text s-14 black fw-600">{record.urgency}</span>,
    },
    {
      title: 'Common Issue',
      key: 'common_issue',
      // eslint-disable-next-line no-console
      render: (record) => <Checkbox onChange={(e) => console.log(e)} checked={record.common_issue} />,
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
