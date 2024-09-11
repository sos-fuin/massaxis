import type { Meta, StoryObj } from '@storybook/react'
import { DbBadge } from './index'
const meta = {
  title: 'Dashboard/Badge',
  component: DbBadge,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'success', 'warning', 'danger'],
    },

    variant: {
      control: {
        type: 'radio',
      },
      options: ['v1', 'v2', 'v3'],
    },

    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg'],
    },

    children: {
      description: 'Content of the card',
    },
  },
} satisfies Meta<typeof DbBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    children: '20.2%',
    className: 'primary',
    size: 'md',
  },
}
