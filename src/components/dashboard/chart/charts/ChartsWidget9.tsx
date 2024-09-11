'use client'

// third-party
import ReactApexChart from 'react-apexcharts'

// chart options
export const options = {
  chart: {
    height: 450,
    type: 'area' as const,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth' as const,
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },
}

export const series = [
  {
    name: 'Page Views',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35],
  },
  {
    name: 'Sessions',
    data: [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41],
  },
]
const ChartsWidget9 = ({ options, series, height }: any) => {
  return <ReactApexChart options={options} series={series} type="area" height={height} />
}

export default ChartsWidget9
