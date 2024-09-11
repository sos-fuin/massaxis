import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './index'
const meta = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      description: 'The default value of the select',
    },
    handleChange: {
      description: 'The function that will be called when the select value changes',
    },
    options: {
      description: 'The options of the select',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    handleChange: () => {
      // console.log(value)
    },
    defaultValue: 'Option 1',
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ],
  },
}
