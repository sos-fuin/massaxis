import type { Meta, StoryObj } from '@storybook/react'
import { DbTicketsList } from './index'
const meta = {
  title: 'Dashboard/List/DbTicketsList',
  component: DbTicketsList,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'success', 'warning', 'danger', 'secondary', 'secondary2', 'semi-primary', 'dark'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof DbTicketsList>

export default meta
type Story = StoryObj<typeof meta>

export const Main1: Story = {
  args: {
    type: 'primary',
  },
}
