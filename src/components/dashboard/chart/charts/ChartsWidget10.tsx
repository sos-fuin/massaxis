'use client'
import { useEffect, useState } from 'react'

// third-party
import ReactApexChart from 'react-apexcharts'

// chart options
const barChartOptions = {
  chart: {
    type: 'bar' as const,
    height: 365,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
}

// ==============================|| MONTHLY BAR CHART ||============================== //

const MonthlyBarChart = () => {
  const [series] = useState([
    {
      data: [80, 95, 70, 42, 65, 55, 78],
    },
  ])

  const [options, setOptions] = useState(barChartOptions)

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: ['#377dff'],
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true, // or any other configuration you need for the labels
        },
      },
      tooltip: {
        theme: 'light',
      },
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={365} />
    </div>
  )
}

export default MonthlyBarChart
