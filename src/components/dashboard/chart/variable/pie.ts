export const pieSeries = [44, 55, 41, 17, 15]
export const pieOptions = {
  chart: {
    width: 380,
    type: 'donut' as const,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient' as const,
  },
  legend: {
    formatter: function (val: string, opts: any) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
    },
  },
  title: {
    text: 'Gradient Donut with custom Start-angle',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom' as const,
        },
      },
    },
  ],
}
