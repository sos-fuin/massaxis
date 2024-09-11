import type { Meta, StoryObj } from '@storybook/react'
import { DBColoredCard } from './index'
const meta = {
  title: 'Dashboard/cards/Colored',
  component: DBColoredCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['v2', 'v1'],
      },
    },

    color: {
      control: {
        type: 'select',
        options: ['blue', 'red'],
      },
    },
  },
} satisfies Meta<typeof DBColoredCard>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {},
}
