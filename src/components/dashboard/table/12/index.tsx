'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Switch, Table } from 'antd'
import React from 'react'
import { DbBadge } from '../../badge'

interface DataType {
  key: string
  id: string
  status: boolean
  is_last_completed: boolean
  campaign_name: string
  last_completed: string
  last_value: string
  assigned: string
  created_date: string
  status_text: string
}

const data: DataType[] = [
  {
    assigned: 'Arman Hossing',
    campaign_name: 'Product Thumbnails  Design',
    created_date: 'Nov 01, 2020',
    id: '#XHU-463',
    key: '1',
    last_completed: '35',
    last_value: '12 ',
    status: true,
    status_text: 'Active',
    is_last_completed: true,
  },
  {
    assigned: 'Arman Hossing',
    campaign_name: 'Product Thumbnails  Design',
    created_date: 'Nov 01, 2020',
    id: '#XHU-463',
    key: '1',
    last_completed: '35',
    last_value: '12 ',
    status: false,
    status_text: 'Active',
    is_last_completed: false,
  },
]

export const DBTable12: React.FC = () => {
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
      title: 'Status',
      key: 'status',
      render: (record) => <Switch checked={record.status} />,
    },
    {
      title: 'Campaign name ',
      key: 'campaign_name',
      render: (record) => <span className="db-text s-14 black">{record.campaign_name}</span>,
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
      title: 'Assigned',
      key: 'assigned',
      render: (record) => <span className="db-text s-14 gray">{record.assigned}</span>,
    },
    {
      title: 'Created date',
      key: 'created_date',
      render: (record) => <span className="db-text s-14 gray">{record.created_date}</span>,
    },
    {
      title: 'Status',
      key: 'status_text',
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
