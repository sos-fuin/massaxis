import type { Meta, StoryObj } from '@storybook/react'
import { DBBar } from './index'
const meta = {
  title: 'Dashboard/Bar',
  component: DBBar,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        typed: 'text',
      },
    },

    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'warning', 'danger', 'success'],
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'lg', 'xl', 'xxl', 'xxxl'],
      },
    },

    className: {
      control: {
        type: 'text',
      },
    },

    gap: {
      control: {
        type: 'select',
        options: ['gap-8px', 'gap-10px', 'gap-16px'],
      },
    },
  },
} satisfies Meta<typeof DBBar>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    children: 'Basic Bar',
    size: 'sm',
    variant: 'default',
    className: '',
    gap: 'gap-10px',
  },
}
