import type { Meta, StoryObj } from '@storybook/react'
import { TopUserInfo } from './index'
const meta = {
  title: 'Dashboard/TopUserInfo',
  component: TopUserInfo,
  tags: ['autodocs'],
} satisfies Meta<typeof TopUserInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {},
}
