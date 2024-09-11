import { useEffect, useState } from 'react'

// third-party
import ReactApexChart from 'react-apexcharts'

// chart options
const columnChartOptions = {
  chart: {
    type: 'bar' as const,
    height: 430,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 8,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} thousands`
      },
    },
  },
  legend: {
    show: true,
    fontFamily: `'Public Sans', sans-serif`,
    offsetX: 10,
    offsetY: 10,
    labels: {
      useSeriesColors: false,
    },
    markers: {
      width: 16,
      height: 16,
      radius: '50%',
      offsetX: 2,
      offsetY: 2,
    },
    itemMargin: {
      horizontal: 15,
      vertical: 50,
    },
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false,
        },
      },
    },
  ],
}

// ==============================|| SALES COLUMN CHART ||============================== //

const SalesColumnChart = () => {
  const primary = '#377dff'
  const secondary = '#e4e6ef'
  const line = '#e4e6ef'

  const warning = '#ff9f43'
  const primaryMain = '#377dff'
  const successDark = '#00ab55'

  const [series] = useState([
    {
      name: 'Net Profit',
      data: [180, 90, 135, 114, 120, 145],
    },
    {
      name: 'Revenue',
      data: [120, 45, 78, 150, 168, 99],
    },
  ])

  const [options, setOptions] = useState(columnChartOptions)

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [warning, primaryMain],
      xaxis: {
        categories: prevState.xaxis.categories,
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary],
          },
        },
      },
      yaxis: {
        title: {
          text: 'Y Axis Title',
        },
        labels: {
          style: {
            colors: [secondary],
          },
        },
      },
      grid: {
        borderColor: line,
      },
      tooltip: {
        y: {
          formatter(val) {
            return `$ ${val} thousands`
          },
        },
        theme: 'light',
      },
      legend: {
        show: true,
        fontFamily: `'Public Sans', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: false,
          colors: 'grey.500',
        },
        markers: {
          width: 16,
          height: 16,
          radius: '50%',
          offsetX: 2,
          offsetY: 2,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 50,
        },
        position: 'top',
        horizontalAlign: 'right',
      },
    }))
  }, [primary, secondary, line, warning, primaryMain, successDark])

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={430} />
    </div>
  )
}

export default SalesColumnChart
