'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */
import ApexCharts, { ApexOptions } from 'apexcharts'
import React, { useEffect, useRef } from 'react'

type Props = {
  className: string
}

const ChartsWidget6: React.FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, getChartOptions())
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Recent Orders</span>

          <span className="text-muted fw-semibold fs-7">More than 500+ new orders</span>
        </h3>

        {/* begin::Toolbar */}
        <div className="card-toolbar" data-kt-buttons="true">
          <a
            className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
            id="kt_charts_widget_6_sales_btn">
            Sales
          </a>

          <a
            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
            id="kt_charts_widget_6_expenses_btn">
            Expenses
          </a>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body">
        {/* begin::Chart */}
        <div ref={chartRef} id="kt_charts_widget_6_chart" style={{ height: '350px' }}></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export default ChartsWidget6

function getChartOptions(): ApexOptions {
  const baseLightColor = '#E4E6EF'
  const labelColor = '#777d92'
  const borderColor = '#e4e6ef'
  const baseColor = '#377dff'
  const secondaryColor = '#f5f6fa'

  return {
    series: [
      {
        name: 'Net Profit',
        type: 'bar',
        data: [40, 50, 65, 70, 50, 30],
      },
      {
        name: 'Revenue',
        type: 'bar',
        data: [20, 20, 25, 30, 30, 20],
      },
      {
        name: 'Expenses',
        type: 'area',
        data: [50, 80, 60, 90, 50, 70],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      stacked: true,
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '12%',
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      max: 120,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
    },
    colors: [baseColor, secondaryColor, baseLightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  }
}
