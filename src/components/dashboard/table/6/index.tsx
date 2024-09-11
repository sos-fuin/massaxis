'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Table } from 'antd'
import React from 'react'

interface DataType {
  key: string
  id: string
  campaign_name: string
  end_date: string
  gmail: string
  create_date: string
  start_date: string
  status: string
  user_name: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    campaign_name: 'Product Thumbnails  Design',
    gmail: 'tisexo1312@sablecc.com',
    create_date: '+97 01548  789',
    start_date: 'Nov 01, 2020',
    end_date: 'Nov 01, 2020',
    status: 'Active',
    user_name: 'Arman',
  },
  {
    key: '2',
    id: '#XHU-463',
    campaign_name: 'Product Thumbnails  Design',
    gmail: 'tisexo1312@sablecc.com',
    create_date: '+97 01548  789',
    start_date: 'Nov 01, 2020',
    end_date: 'Nov 01, 2020',
    status: 'Active',
    user_name: 'Arman',
  },
]

export const DBTable6: React.FC = () => {
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
      title: 'Id',
      key: 'id',
      render: (record) => <span className="db-text s-14 gray">{record.id}</span>,
    },
    {
      title: 'Campaign Name',
      key: 'campaign_name',
      render: (record) => <span className="db-text s-14 black fw-600">{record.campaign_name}</span>,
    },

    {
      title: 'Create date',
      key: 'create_date',
      render: (record) => <span className="db-text s-14 gray">{record.create_date}</span>,
    },
    {
      title: 'Start date',
      key: 'start_date',
      render: (record) => <span className="db-text s-14 gray">{record.start_date}</span>,
    },
    {
      title: 'End date',
      key: 'end_date',
      render: (record) => <span className="db-text s-14 gray">{record.end_date}</span>,
    },
    {
      title: 'User Name',
      key: 'user_name',
      render: (record) => <span className="db-text s-14 gray">{record.user_name}</span>,
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

  return <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
}
