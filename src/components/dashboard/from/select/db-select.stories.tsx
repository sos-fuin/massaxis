import type { Meta, StoryObj } from '@storybook/react'
import { DbSelect } from './index'

const meta = {
  title: 'Dashboard/From/DbSelect',
  component: DbSelect,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DbSelect>

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
