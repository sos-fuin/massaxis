export const userDbPwDialerPieOptions = {
  chart: {
    height: 450,
    type: 'area' as const,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: 'smooth' as const,
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },

  yaxis: {
    min: 30, // Minimum value on the y-axis
    max: 120, // Maximum value on the y-axis (adjust as needed)
    tickAmount: 6, // Number of intervals (max - min) / tickAmount = 15
    labels: {
      formatter: (val: number) => val.toFixed(0), // Format the labels as whole numbers
    },
  },
  fill: {
    type: 'gradient', // Optional: Add a gradient fill for a more dynamic look
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.3,
      opacityTo: 0.5,
    },
  },
  colors: ['#1E90FF', '#28A745'], // Adjust colors as desired
}

export const userDbPwDialerPieSeries = [
  {
    name: 'Page Views',
    data: [65, 80, 80, 63, 63, 47, 47, 77, 77, 69, 69, 92, 92, 78, 78, 61, 61, 50],
  },
  {
    name: 'Sessions',
    data: [75, 100, 100, 93, 93, 67, 67, 97, 97, 89, 89, 112, 112, 98, 98, 81, 81, 70],
  },
]
