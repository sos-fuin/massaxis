import type { Meta, StoryObj } from '@storybook/react'
import { DbTextarea } from './index'

const meta = {
  title: 'Dashboard/From/Textarea',
  component: DbTextarea,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DbTextarea>

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
