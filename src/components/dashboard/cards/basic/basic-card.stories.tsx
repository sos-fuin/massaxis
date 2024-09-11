import { KTIcon } from '@/helper/icon'
import { Select } from '@/ui/form/select'
import type { Meta, StoryObj } from '@storybook/react'
import { Col, DatePicker, Row } from 'antd'
import Link from 'next/link'
import { DbBadge } from '../../badge'
import { ChartsWidget13, ChartsWidget9 } from '../../chart/charts'
import { options, series } from '../../chart/charts/ChartsWidget9'
import { uDbOptions1, uDbSeries1 } from '../../chart/variable'
import { DbList } from '../../list/first'
import { UserList } from '../../user-box'
import { DBCard } from './index'
const meta = {
  title: 'Dashboard/cards/DBCard',
  component: DBCard,
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: {
        type: 'text',
      },
    },
    children: {
      description: 'Content of the card',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof DBCard>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    header: <h4 className="h-text">Basic Card</h4>,
    children: <div className="wrap">Basic Card</div>,
  },
}
export const WithoutHeader: Story = {
  args: {
    children: <div className="wrap">Basic Card</div>,
  },
}
export const Variant1: Story = {
  args: {
    header: (
      <div className="variant-1">
        <h3 className="h-text">Pipeline Value</h3>
        <div className="selected">
          <Select
            handleChange={() => {}}
            defaultValue="Option 1"
            options={[
              { value: 'Option 1', label: 'Option 1' },
              { value: 'Option 2', label: 'Option 2' },
            ]}
          />
        </div>
        <p className="date">Fri, Jul 24th - Mon, Jan 25th</p>
      </div>
    ),
    children: (
      <Row>
        <Col md={12}>
          <DbList>
            <tr>
              <td>Basic Card</td>
              <td className="db-text right">Basic Card 1</td>
            </tr>
            <tr>
              <td>Basic Card</td>
              <td className="db-text right">Basic Card 1</td>
            </tr>
            <tr>
              <td>Basic Card</td>
              <td className="db-text right">Basic Card 1</td>
            </tr>
            <tr>
              <td>Basic Card</td>
              <td className="db-text right">Basic Card 1</td>
            </tr>
          </DbList>
        </Col>

        <Col md={12}>
          <div className="flex justify-center items-center h-full  flex-col">
            <p className="db-text s-38">
              <sup className="db-text s-22">$</sup>
              <span className="db-text fw-700 s-38 black">12,706</span>
            </p>
            <p className="db-text gray s-16 mt-12">Target for April</p>
          </div>
        </Col>
      </Row>
    ),
  },
}
export const Variant2: Story = {
  args: {
    header: <h3 className="h-text">Agents</h3>,
    children: (
      <div className="variant-2 wrap">
        <div className="agent-wrap">
          <div className="agent-sep">
            <h3 className="db-text fw-800 black s-24">03</h3>
            <h3 className="db-text s-12 mt-8"> Active Agents</h3>
          </div>
          <UserList />
        </div>
        <div className="agent-wrap-footer">
          <h4 className="db-text fw-500 black s-14">Agents</h4>
          <Link href="#" className="agent-sep-arrow">
            <KTIcon iconName="arrow-up-right" className="arrow" />
            <span className="db-text s-12 gray">of 0 Active </span>
          </Link>
        </div>
      </div>
    ),
  },
}
export const Variant3: Story = {
  args: {
    header: <h3 className="h-text">Pipeline Value</h3>,
    children: (
      <>
        <div className="wrap">
          <h3 className="db-text fw-800 black s-24 flex item-center gap-2">
            <span> 1,836</span>
            <DbBadge className="danger">20.2%</DbBadge>
          </h3>
          <p className="db-text s-30"> Active Agents</p>
        </div>
        <div className="chart-behind">
          <ChartsWidget13 options={uDbOptions1} series={uDbSeries1} height={120} />
        </div>
      </>
    ),
  },
}
export const Variant4: Story = {
  args: {
    children: (
      <div className="wrap">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="db-text  s-18 fw-600  ">1,836</h3>
            <p className="db-text  s-14 fw-600 gray mt-8"> Active Agents</p>
          </div>
          <div>
            <DbBadge className="danger">20.2%</DbBadge>
          </div>
        </div>

        <div></div>
      </div>
    ),
  },
}

export const Variant5: Story = {
  args: {
    header: (
      <div className="variant-1">
        <div>
          <h3 className="h-text">Pipeline Value</h3>
          <p className="db-text fw-600 s-14 gray2 mt-10">Pipeline Value</p>
        </div>
        <div className="selected">
          <DatePicker />
        </div>
      </div>
    ),
    children: (
      <>
        <ChartsWidget9 options={options} series={series} height={500} />
      </>
    ),
  },
}
