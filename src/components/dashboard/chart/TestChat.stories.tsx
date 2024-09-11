import type { Meta, StoryObj } from '@storybook/react'

import {
  ChartsWidget1,
  ChartsWidget10,
  ChartsWidget11,
  ChartsWidget12,
  ChartsWidget13,
  ChartsWidget14,
  ChartsWidget16,
  ChartsWidget2,
  ChartsWidget3,
  ChartsWidget4,
  ChartsWidget5,
  ChartsWidget6,
  ChartsWidget7,
  ChartsWidget8,
  ChartsWidget9,
} from './charts'
import TestChartALL from './index'
import { uDbOptions2, uDbSeries1 } from './variable'
import { pieOptions, pieSeries } from './variable/pie'

const meta = {
  title: 'Example/Charts',
  component: TestChartALL,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TestChartALL>

export default meta
type Story = StoryObj<typeof meta>

export const TestAll: Story = {
  args: {
    children: (
      <div className="chart-area-test">
        <ChartsWidget1 className="item" />
        <ChartsWidget2 className="item" />
        <ChartsWidget3 className="item" />
        <ChartsWidget4 className="item" />
        <ChartsWidget5 className="item" />
        <ChartsWidget6 className="item" />
        <ChartsWidget7 className="item" />
        <ChartsWidget8 className="item" />
        <div className="item">
          <ChartsWidget9 />
        </div>
        <div className="item">
          <ChartsWidget10 />
        </div>
        <div className="item">
          <ChartsWidget11 />
        </div>
        <div className="item">
          <ChartsWidget12 />
        </div>
        <div className="item">
          <ChartsWidget13 options={uDbOptions2} height={300} series={uDbSeries1} />
        </div>
        <ChartsWidget14 />
      </div>
    ),
  },
}
export const Charts1: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget1 className="item" />
      </div>
    ),
  },
}
export const Charts2: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget2 className="item" />
      </div>
    ),
  },
}
export const Charts3: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget3 className="item" />
      </div>
    ),
  },
}
export const Charts4: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget4 className="item" />
      </div>
    ),
  },
}
export const Charts5: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget5 className="item" />
      </div>
    ),
  },
}
export const Charts6: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget6 className="item" />
      </div>
    ),
  },
}
export const Charts7: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget7 className="item" />
      </div>
    ),
  },
}
export const Charts8: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget8 className="item" />
      </div>
    ),
  },
}
export const Charts9: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget9 />
      </div>
    ),
  },
}
export const Charts10: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget10 />
      </div>
    ),
  },
}
export const Charts11: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget11 />
      </div>
    ),
  },
}
export const Charts12: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget12 />
      </div>
    ),
  },
}
export const Charts13: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget13 options={uDbOptions2} height={300} series={uDbSeries1} />
      </div>
    ),
  },
}
export const Charts15: Story = {
  args: {
    children: (
      <div>
        <ChartsWidget16 options={pieOptions} height={300} series={pieSeries} />
      </div>
    ),
  },
}
