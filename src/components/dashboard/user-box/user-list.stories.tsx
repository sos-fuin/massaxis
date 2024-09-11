import type { Meta, StoryObj } from '@storybook/react'
import { UserList } from './index'
const meta = {
  title: 'Dashboard/User List',
  component: UserList,
  tags: ['autodocs'],
  argTypes: {
    tide: {
      options: ['s-1', 's-2', 'default'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof UserList>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    tide: 'default',
  },
}
