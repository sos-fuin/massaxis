import React from 'react'
import Chart from 'react-apexcharts'

const ChartsWidget14 = () => {
  const series = [
    {
      name: 'series-1',
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ]
  const options = {
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    chart: {
      height: 350,
    },
  }
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Chart options={options} series={series} type="bar" width="100%" height="100%" />
    </div>
  )
}

export default ChartsWidget14
