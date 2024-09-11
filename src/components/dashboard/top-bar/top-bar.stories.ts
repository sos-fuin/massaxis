import type { Meta, StoryObj } from '@storybook/react'
import { TopBar } from './index'
const meta = {
  title: 'Dashboard/TopBar',
  component: TopBar,
  tags: ['autodocs'],
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    menuItems: [],
  },
}
