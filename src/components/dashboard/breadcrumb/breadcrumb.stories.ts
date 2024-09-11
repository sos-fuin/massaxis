import type { Meta, StoryObj } from '@storybook/react'
import { DbBreadCrumb } from './index'
const meta = {
  title: 'Dashboard/Breadcrumb',
  component: DbBreadCrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof DbBreadCrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {},
}
