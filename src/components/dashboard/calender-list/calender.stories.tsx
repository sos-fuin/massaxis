import type { Meta, StoryObj } from '@storybook/react'
import { DbCalenderList } from './index'
const meta = {
  title: 'Dashboard/CalenderList',
  component: DbCalenderList,
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
        options: ['default', 'no-border'],
      },
    },
  },
} satisfies Meta<typeof DbCalenderList>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {},
}
