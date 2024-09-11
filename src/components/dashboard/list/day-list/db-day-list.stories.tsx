import type { Meta, StoryObj } from '@storybook/react'
import { DbDayList } from './index'
const meta = {
  title: 'Dashboard/List/DbDayList',
  component: DbDayList,
  tags: ['autodocs'],
  argTypes: {
    className: {
      options: ['primary', 'success', 'semi-primary', 'warning', 'danger'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof DbDayList>

export default meta
type Story = StoryObj<typeof meta>

export const Main1: Story = {
  args: {
    className: 'primary',
  },
}
