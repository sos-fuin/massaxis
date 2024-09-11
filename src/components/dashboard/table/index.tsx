'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType, TableProps } from 'antd'
import { Dropdown, Table } from 'antd'
import React, { useState } from 'react'
import { DbBadge } from '../badge'
import { CountryFlag, UserInfo } from '../common'

type OnChange = NonNullable<TableProps<DataType>['onChange']>

type GetSingle<T> = T extends (infer U)[] ? U : never
type Sorts = GetSingle<Parameters<OnChange>[2]>

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

export const DBTable: React.FC = () => {
  const [sortedInfo, setSortedInfo] = useState<Sorts>({})

  const handleChange: OnChange = (sorter) => {
    setSortedInfo(sorter as Sorts)
  }

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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
      render: () => <UserInfo />,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      ellipsis: true,
      render: () => (
        <DbBadge variant="v1" className="danger">
          Remote
        </DbBadge>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
      render: () => <CountryFlag />,
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

  return <Table columns={columns} dataSource={data} onChange={handleChange} bordered />
}
