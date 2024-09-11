import type { Meta, StoryObj } from '@storybook/react'
import { Input1 } from './index'
const meta = {
  title: 'FrontEnd/Input',
  component: Input1,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outline', 'base', 'gradient'],
    },
  },
} satisfies Meta<typeof Input1>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {},
}
