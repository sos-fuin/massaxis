import type { Meta, StoryObj } from '@storybook/react'
import { DbInput1 } from './index'

const meta = {
  title: 'Dashboard/From/Input1',
  component: DbInput1,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DbInput1>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    width: 'w-[300px]',
    label: 'Name',
    inputProps: {
      placeholder: 'Type...',
    },
  },
}
