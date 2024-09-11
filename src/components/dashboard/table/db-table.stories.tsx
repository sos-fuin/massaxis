import type { Meta, StoryObj } from '@storybook/react'
import { DBTable } from './index'
const meta = {
  title: 'Dashboard/Table',
  component: DBTable,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DBTable>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {},
}
