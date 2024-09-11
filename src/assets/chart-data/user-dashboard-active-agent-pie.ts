export const userDbAgentsPieSeries = [44, 55, 41, 17, 15]
export const userDbAgentsPieOptions = {
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
    show: false,
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
