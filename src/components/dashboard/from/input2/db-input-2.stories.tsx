import type { Meta, StoryObj } from '@storybook/react'
import { DbInput2 } from './index'

const meta = {
  title: 'Dashboard/From/Input2',
  component: DbInput2,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DbInput2>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    label: 'Name',
    inputProps: {
      placeholder: 'Type...',
    },
  },
}
