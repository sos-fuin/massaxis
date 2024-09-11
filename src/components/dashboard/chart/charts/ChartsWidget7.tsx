'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */
import ApexCharts, { ApexOptions } from 'apexcharts'
import React, { useEffect, useRef } from 'react'

type Props = {
  className: string
}

const ChartsWidget7: React.FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
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
          <span className="card-label fw-bold fs-3 mb-1">Recent Users</span>

          <span className="text-muted fw-semibold fs-7">More than 500 new users</span>
        </h3>

        {/* begin::Toolbar */}
        <div className="card-toolbar" data-kt-buttons="true">
          <a
            className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
            id="kt_charts_widget_7_year_btn">
            Year
          </a>

          <a
            className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
            id="kt_charts_widget_7_month_btn">
            Month
          </a>

          <a className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4" id="kt_charts_widget_7_week_btn">
            Week
          </a>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body">
        {/* begin::Chart */}
        <div
          ref={chartRef}
          id="kt_charts_widget_7_chart"
          style={{ height: '350px' }}
          className="card-rounded-bottom"></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export default ChartsWidget7

function getChartOptions(height: number): ApexOptions {
  const labelColor = '#777d92'
  const borderColor = '#e4e6ef'

  const strokeColor = '#ffffff'

  const color1 = '#377dff'
  const color1Light = '#377dff'

  const color2 = '#f5f6fa'
  const color2Light = '#f5f6fa'

  const color3 = '#f5f6fa'
  const color3Light = '#f5f6fa'

  return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 30, 50, 50, 35, 35],
      },
      {
        name: 'Revenue',
        data: [55, 20, 20, 20, 70, 70],
      },
      {
        name: 'Expenses',
        data: [60, 60, 40, 40, 30, 30],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 2,
      colors: [color1, 'transparent', 'transparent'],
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
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: strokeColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
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
    colors: [color1, color2, color3],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      colors: [color1Light, color2Light, color3Light],
      strokeColors: [color1, color2, color3],
      strokeWidth: 3,
    },
  }
}
