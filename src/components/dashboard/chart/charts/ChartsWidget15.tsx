import React from 'react'
import Chart from 'react-apexcharts'

const ChartsWidget15 = () => {
  const series = [44, 55, 41, 17, 15]
  const options = {
    chart: {
      type: 'donut' as const,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%', // Adjust size to fit better within the container
        },
      },
    },
    legend: {
      position: 'right' as const,
      verticalAlign: 'middle',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
            height: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    dataLabels: {
      enabled: false, // Hides data labels to save space
    },
    // Adjusting the margin and padding
    grid: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  }

  return (
    <div style={{ width: '100%', height: '205px', overflow: 'hidden' }}>
      <Chart options={options} series={series} type="donut" width="100%" height="100%" />
    </div>
  )
}

export default ChartsWidget15
