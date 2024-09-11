import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

// Define your chart options with ApexOptions type
const initialChartOptions: ApexOptions = {
  chart: {
    height: 340,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1.5,
  },
  grid: {
    strokeDashArray: 4,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-05-19T00:00:00.000Z',
      '2018-06-19T00:00:00.000Z',
      '2018-07-19T01:30:00.000Z',
      '2018-08-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-10-19T04:30:00.000Z',
      '2018-11-19T05:30:00.000Z',
      '2018-12-19T06:30:00.000Z',
    ],
    labels: {
      format: 'MMM',
    },
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
  tooltip: {
    x: {
      format: 'MM',
    },
  },
}

// ==============================|| REPORT AREA CHART ||============================== //

const ReportAreaChart = () => {
  const primary = '#377dff'
  const secondary = '#e4e6ef'
  const line = '#e4e6ef'

  const [options, setOptions] = useState<ApexOptions>(initialChartOptions)

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [primary],
      xaxis: {
        ...prevState.xaxis,
        type: 'category', // Ensure 'category' is a valid type
        labels: {
          format: prevState.xaxis?.labels?.format ?? 'MMM',
          style: {
            colors: Array(prevState.xaxis?.categories?.length ?? 0).fill(secondary),
          },
        },
      },
      grid: {
        ...prevState.grid,
        borderColor: line,
      },
      tooltip: {
        ...prevState.tooltip,
        theme: 'light',
      },
      legend: {
        labels: {
          colors: 'grey', // Adjusted to simple color value
        },
      },
    }))
  }, [primary, secondary, line])

  const [series] = useState([
    {
      name: 'Series 1',
      data: [58, 115, 28, 83, 63, 75, 35, 55],
    },
  ])

  return <ReactApexChart options={options} series={series} type="line" height={345} />
}

export default ReportAreaChart
