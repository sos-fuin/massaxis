'use client'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import React from 'react'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'I am not very good at technology! Is this software easy to use?',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'Do you offer a refund?',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'How does your CRM solution differ from others on the market?',
    children: <p>{text}</p>,
  },
  {
    key: '12',
    label: 'Can I try your CRM before committing?',
    children: <p>{text}</p>,
  },
  {
    key: '22',
    label: 'Is your CRM suitable for businesses of all sizes?',
    children: <p>{text}</p>,
  },
  {
    key: '32',
    label: 'What does the monthly fee cover?',
    children: <p>{text}</p>,
  },
]

export const Faq: React.FC = () => <Collapse className="ms-faq" accordion items={items} />
