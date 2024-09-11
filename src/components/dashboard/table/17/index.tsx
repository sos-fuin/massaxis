'use client'
import { KTIcon } from '@/helper/icon'
import type { MenuProps, TableColumnsType } from 'antd'
import { Dropdown, Table } from 'antd'
import Image from 'next/image'
import React from 'react'

interface DataType {
  key: string
  id: string
  thumbnail: string
  blog_title: string
  category: string
  create_date: string
}

const data: DataType[] = [
  {
    id: '1',
    key: '1',
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    blog_title: '10 Tips for Creating an Effective Email Marketing Strategy',
    category: 'Marketing',
    create_date: 'Nov 01, 2020',
  },
  {
    id: '2',
    key: '2',
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    blog_title: '10 Tips for Creating an Effective Email Marketing Strategy',
    category: 'Marketing',
    create_date: 'Nov 01, 2020',
  },
  {
    id: '3',
    key: '3',
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    blog_title: '10 Tips for Creating an Effective Email Marketing Strategy',
    category: 'Marketing',
    create_date: 'Nov 01, 2020',
  },
]

export const DBTable17: React.FC = () => {
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
      width: 100,
    },
    {
      title: 'Thumbnail',
      key: 'campaign_name',
      render: (record) => (
        <Image
          alt="blog"
          src={record.thumbnail}
          width={100}
          height={100}
          className="w-16 h-9 rounded-md object-cover"
        />
      ),
      width: 200,
    },

    {
      title: 'Blog Title',
      key: 'blog_title',
      render: (record) => <span className="db-text s-14 gray">{record.blog_title}</span>,
      width: 400,
    },
    {
      title: 'Category',
      key: 'category',
      render: (record) => <span className="db-text s-14 gray">{record.category}</span>,
    },
    {
      title: 'Create date',
      key: 'create_date',
      render: (record) => <span className="db-text s-14 gray">{record.create_date}</span>,
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
