import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button2 } from './Button2'

const meta = {
  title: 'Example/Button22',
  component: Button2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button2>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}
