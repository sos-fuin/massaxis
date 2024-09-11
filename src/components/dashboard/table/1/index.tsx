'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Switch, Table } from 'antd'
import React from 'react'
import { UserList } from '../../user-box'

interface DataType {
  key: string
  name: string
  people: string[]
  assigned: string
  dueDate: string
  status: boolean
}

const data: DataType[] = [
  {
    key: '1',
    name: 'Acme software development',
    people: ['32', '32', '32'],
    assigned: 'Jon AG',
    dueDate: '24 Aug, 2024',
    status: true,
  },
  {
    key: '2',
    name: 'Acme software development',
    people: ['32', '32', '32'],
    assigned: 'Jon AG',
    dueDate: '24 Aug, 2024',
    status: false,
  },
  {
    key: '3',
    name: 'Acme software development',
    people: ['32', '32', '32'],
    assigned: 'Jon AG',
    dueDate: '24 Aug, 2024',
    status: true,
  },
  {
    key: '4',
    name: 'Acme software development',
    people: ['32', '32', '32'],
    assigned: 'Jon AG',
    dueDate: '24 Aug, 2024',
    status: false,
  },
]

export const DBTable1: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: <a href="#">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="#">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ]
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Status',
      key: 'status',
      render: (record) => <Switch checked={record.status} />,
    },
    {
      title: 'Campaign Name',
      key: 'name',
      render: (record) => <span className="db-text s-14 black fw-600">{record.name}</span>,
    },
    {
      title: 'Assigned',
      key: 'assigned',
      render: (record) => <span className="db-text s-14 gray">{record.assigned}</span>,
    },
    {
      title: 'People',
      key: 'people',
      render: () => <UserList tide="s-1" />,
    },
    {
      title: 'Due Date',
      key: 'dueDate',
      render: (record) => <span className="db-text s-14 gray">{record.dueDate}</span>,
    },
    {
      title: '',
      dataIndex: '',
      key: '',
      render: () => (
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()} className="dropdown-3-dot-btn">
            <KTIcon iconName="dots-vertical" iconType="outline" />
          </a>
        </Dropdown>
      ),
      width: 60,
    },
  ]

  return <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 'max-content' }} />
}
