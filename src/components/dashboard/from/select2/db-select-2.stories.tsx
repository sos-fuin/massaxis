import type { Meta, StoryObj } from '@storybook/react'
import { DbSelect2 } from './index'

const meta = {
  title: 'Dashboard/From/DbSelect2',
  component: DbSelect2,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DbSelect2>

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
