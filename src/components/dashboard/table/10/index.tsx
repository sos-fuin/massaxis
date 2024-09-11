'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Table } from 'antd'
import React from 'react'

interface DataType {
  key: string
  user_id: string
  subject: string
  urgency: string
  email: string
  phone_number: string
  Assign: string
  status: string
  common_issue: boolean
  first_name: string
  last_name: string
  created_date: string
  agent_role: string
  contact_list_name: string
}

const data: DataType[] = [
  {
    key: '1',
    user_id: '#XHU-463',
    subject: 'Product Thumbnails  Design',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    Assign: 'Arman Hossing',
    urgency: 'Critical',
    status: 'Active',
    common_issue: true,
    first_name: 'Arman',
    last_name: 'Hossing',
    contact_list_name: 'Hossing',
    created_date: 'Nov 01, 2020',
    agent_role: 'Seals call',
  },
  {
    key: '2',
    user_id: '#XHU-463',
    subject: 'Product Thumbnails  Design',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    Assign: 'Arman Hossing',
    urgency: 'Critical',
    status: 'Active',
    common_issue: true,
    first_name: 'Arman',
    last_name: 'Hossing',
    contact_list_name: 'Hossing',
    created_date: 'Nov 01, 2020',
    agent_role: 'Seals call',
  },
  {
    key: '3',
    user_id: '#XHU-463',
    subject: 'Product Thumbnails  Design',
    email: 'tisexo1312@sablecc.com',
    phone_number: '+97 01548  789',
    Assign: 'Arman Hossing',
    urgency: 'Critical',
    status: 'Active',
    common_issue: true,
    first_name: 'Arman',
    last_name: 'Hossing',
    contact_list_name: 'Hossing',
    created_date: 'Nov 01, 2020',
    agent_role: 'Seals call',
  },
]

export const DBTable10: React.FC = () => {
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
      key: 'user_id',
      render: (record) => <span className="db-text s-14 black fw-600">{record.user_id}</span>,
    },
    {
      title: 'First name',
      key: 'first_name',
      render: (record) => <span className="db-text s-14 gray">{record.first_name}</span>,
    },
    {
      title: 'Last Name',
      key: 'last_name',
      render: (record) => <span className="db-text s-14 gray">{record.last_name}</span>,
    },
    {
      title: 'Phone Number',
      key: 'phone_number',
      render: (record) => <span className="db-text s-14 gray">{record.phone_number}</span>,
    },

    {
      title: 'Email',
      key: 'email',
      render: (record) => <span className="db-text s-14 black fw-600">{record.email}</span>,
    },

    {
      title: 'Agent Role',
      key: 'agent_role',
      render: (record) => <span className="db-text s-14 gray">{record.agent_role}</span>,
    },

    {
      title: 'Creation Date',
      key: 'created_date',
      render: (record) => <span className="db-text s-14 black fw-600">{record.created_date}</span>,
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
