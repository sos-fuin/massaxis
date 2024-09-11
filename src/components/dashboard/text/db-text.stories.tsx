import type { Meta, StoryObj } from '@storybook/react'
import { DbText } from './index'

const meta = {
  title: 'Dashboard/Text',
  component: DbText,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
  },
  argTypes: {
    className: {
      description: 'Class Names',
      control: {
        type: 'check',
      },
      options: [
        'db-text',
        'variant-1',
        'fw-700',
        'fw-600',
        's-16',
        's-24',
        's-22',
        's-18',
        's-38',
        'gray',
        'blue',
        'center',
        'left',
        'right',
      ],
      mapping: {
        'db-text': 'db-text',
        'variant-1': 'v-1',
        'fw-700': 'fw-700',
        'fw-600': 'fw-600',
        's-16': 's-16',
        's-24': 's-24',
        's-22': 's-22',
        's-18': 's-18',
        's-38': 's-38',
        gray: 'gray',
        gray2: 'gray2',
        blue: 'blue',
        center: 'center',
        left: 'left',
        right: 'right',
      },
    },
    children: {
      description: 'Content of the card',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof DbText>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    children: 'This is Text',
    className: ['db-text'], // Default selection as an array
  },
}
