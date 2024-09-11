'use client'
/* eslint-disable jsx-a11y/anchor-is-valid */
import { KTIcon } from '@/helper/icon'
import ApexCharts, { ApexOptions } from 'apexcharts'
import React, { useEffect, useRef } from 'react'

type Props = {
  className: string
}

const ChartsWidget1: React.FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef])

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, getChartOptions(500))
    if (chart) {
      chart.render()
    }

    return chart
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Recent Statistics</span>

          <span className="text-muted fw-semibold fs-7">More than 400 new members</span>
        </h3>
        {/* end::Title */}

        {/* begin::Toolbar */}
        <div className="card-toolbar">
          {/* begin::Menu */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end">
            <KTIcon iconName="category" className="fs-2" />
          </button>
          {/* <Dropdown1 /> */}
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body">
        {/* begin::Chart */}
        <div ref={chartRef} id="kt_charts_widget_1_chart" style={{ height: '350px' }} />
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

function getChartOptions(height: number): ApexOptions {
  const labelColor = '#777d92'
  const borderColor = '#e4e6ef'
  const baseColor = '#377dff'
  const secondaryColor = '#f5f6fa'

  return {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
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
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}

export default ChartsWidget1
