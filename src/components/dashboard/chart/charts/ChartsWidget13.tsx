import React from 'react'

import Chart from 'react-apexcharts'

const ApexChart = ({ options, series, height }: any) => {
  return <Chart options={options} series={series} type="area" height={height} />
}
export default ApexChart

/*
const options = {
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  chart: {
    height: 350,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
}
const series = [
  {
    name: 'series-1',
    data: [30, 40, 25, 50, 49, 21, 70, 51],
  },
  {
    name: 'series-2',
    data: [23, 12, 54, 61, 32, 56, 81, 19],
  },
  {
    name: 'series-3',
    data: [24, 20, 5, 75, 42, 79, 72, 35],
  },
]

*/
