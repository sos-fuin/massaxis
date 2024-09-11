import { KTIcon } from '@/helper/icon'
import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import { DbBadge } from '../../badge'
import { DBBar } from '../../bar'
import { DbList } from './index'
const meta = {
  title: 'Dashboard/List/First',
  component: DbList,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        disabled: true,
      },
    },

    variant: {
      control: {
        type: 'select',
        options: ['default', 'no-border', 'dot-border'],
      },
    },
  },
} satisfies Meta<typeof DbList>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    children: (
      <>
        <tr>
          <td>List Items</td>
          <td>List Items</td>
        </tr>
        <tr>
          <td>List Items</td>
          <td>List Items</td>
        </tr>
        <tr>
          <td>List Items</td>
          <td>List Items</td>
        </tr>
        <tr>
          <td>List Items</td>
          <td>List Items</td>
        </tr>
      </>
    ),
  },
}
export const NoBorder: Story = {
  args: {
    children: (
      <>
        <tr>
          <td>
            <DBBar className="s-16 fw-600 db-text" gap="gap-16px" size="xxxl" variant="success">
              Basic Bar
            </DBBar>
          </td>
          <td>
            <span className="s-16 fw-600 db-text gray2">72.56%</span>
          </td>
        </tr>
        <tr>
          <td>
            <DBBar className="s-16 fw-600 db-text" gap="gap-16px" size="xxxl" variant="primary">
              Basic Bar
            </DBBar>
          </td>
          <td>
            <span className="s-16 fw-600 db-text gray2">72.56%</span>
          </td>
        </tr>
        <tr>
          <td>
            <DBBar className="s-16 fw-600 db-text" gap="gap-16px" size="xxxl" variant="default">
              Basic Bar
            </DBBar>
          </td>
          <td>
            <span className="s-16 fw-600 db-text gray2">72.56%</span>
          </td>
        </tr>
      </>
    ),
    variant: 'no-border',
  },
}
export const TableList: Story = {
  args: {
    children: (
      <>
        <tr>
          <td>
            <div className="flex items-center gap-5">
              <div>
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="user"
                  width={40}
                  height={40}
                  className="h-[70px] w-[70px] rounded-lg object-cover"
                />
              </div>
              <div>
                <h4 className="db-text fw-600 black s-16 mb-2">Emma Smith</h4>
                <p>
                  <span className="db-text fw-600 black s-14">Email: </span>
                  <span className="db-text fw-600 s-14 gray2 ">smith@kpmg.com</span>
                </p>
              </div>
            </div>
          </td>
          <td>
            <div className="text-right">
              <p className="db-text fw-600 black s-16 mb-1">$560,000</p>
              <p className="db-text fw-600 gray2 s-14">Paid</p>
            </div>
          </td>
          <td className="text-end">
            <p className="db-text fw-600 gray2 s-16 mb-1">Laravel, Metronic</p>
          </td>
          <td className="text-end">
            <DbBadge className="success" variant="v2">
              Approve
            </DbBadge>
          </td>

          <td>
            <div className="flex items-center gap-2 justify-end">
              <button className="db-btn-tbl">
                <KTIcon iconName="switch" />
              </button>
              <button className="db-btn-tbl">
                <KTIcon iconName="pencil" />
              </button>
              <button className="db-btn-tbl">
                <KTIcon iconName="trash" />
              </button>
            </div>
          </td>
        </tr>
      </>
    ),
    variant: 'no-border',
  },
}
