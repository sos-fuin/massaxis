'use client'
import { KTIcon } from '@/helper/icon'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Table } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DbBadge } from '../../badge'

interface DataType {
  key: string
  id: string
  email: string
  start_date: string
  joining_time: string
  deal: string
  ratting: string
}

const data: DataType[] = [
  {
    key: '1',
    id: '#XHU-463',
    email: 'tisexo1312@sablecc.com',
    start_date: 'Nov 01, 2020',
    joining_time: 'Nov 01, 2020',
    deal: '9.2%',
    ratting: '5',
  },
]

export const DBTable23: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <Link
          href="/admin/marketing/sms-marketing/id"
          className="flex items-center gap-2 hover:bg-skin-bg-blue p-2 group transition-all w-56">
          <KTIcon iconName="arrow-up-left" className="text-lg group-hover:text-skin-color-blue-light transition-all" />

          <p className="text-sm text-skin-color-1 font-medium  group-hover:text-skin-color-blue-light transition-all">
            View
          </p>
        </Link>
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
      key: 'id',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0">
            <Image
              alt="user"
              width={50}
              height={50}
              className="rounded-md w-[50px] h-[50px] object-cover"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div>
            <h4 className="db-text s-14 black fw-600">Guy Hawkins</h4>
            <p className="db-text s-14 gray fw-600 mt-1">Haiti</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Email',
      key: 'email',
      render: (record) => <span className="db-text s-14 gray">{record.email}</span>,
    },
    {
      title: 'Start date',
      key: 'start_date',
      render: (record) => <span className="db-text s-14 gray">{record.start_date}</span>,
    },
    {
      title: 'Joining time',
      key: 'joining_time',
      render: (record) => <span className="db-text s-14 gray">{record.joining_time}</span>,
    },

    {
      title: 'Deal',
      key: 'deal ',
      render: (record) => (
        <DbBadge className="success" variant="v2">
          {record.deal}
        </DbBadge>
      ),
    },
    {
      title: 'Ratting',
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
