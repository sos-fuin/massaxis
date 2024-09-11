import type { Meta, StoryObj } from '@storybook/react'
import All from './All'

const meta = {
  title: 'Example/Common',
  component: All,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof All>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {}
