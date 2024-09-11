'use client'
import type { TableColumnsType } from 'antd'
import { Table } from 'antd'
import React from 'react'
import { ViewInvoice } from '../../invoice/Invoice-view-modal'

interface DataType {
  key: string
  date: string
  description: string
  amount: string
}

const data: DataType[] = [
  {
    key: '1',
    date: 'Nov 01, 2020',
    description: 'Product Thumbnails  Design',
    amount: '10,000',
  },
  {
    key: '2',
    date: 'Nov 01, 2020',
    description: 'Product Thumbnails  Design',
    amount: '10,000',
  },
]

export const DBTable15: React.FC = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Date',
      key: 'date',
      render: (record) => <span className="db-text s-14 black fw-600">{record.date}</span>,
    },
    {
      title: 'Description',
      key: 'description',
      render: (record) => <span className="db-text s-14 gray">{record.description}</span>,
    },
    {
      title: 'Amount',
      key: 'amount',
      render: (record) => <span className="db-text s-14 gray">{record.amount}</span>,
    },

    {
      title: 'Invoice',
      dataIndex: '',
      key: '',
      render: () => <span className="db-text s-14 gray">PDF</span>,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: '',
      render: () => <ViewInvoice />,
    },
  ]

  return <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 'max-content' }} />
}
