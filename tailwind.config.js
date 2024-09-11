/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          'color-1': 'var(--text-color)',
          'color-2': 'var(--text-color-2)',
          'color-3': 'var(--text-color-3)',

          'color-blue': 'var(--blue)',
          'color-bg-blue': 'var(--bg-blue)',
          'color-red': 'var(--red)',
          'color-bg-red': 'var(--bg-red)',
          'color-yellow': 'var(--yellow)',
          'color-bg-yellow': 'var(--bg-yellow)',
          'color-green': 'var(--green)',
          'color-bg-green': 'var(--bg-green)',
          'color-blue-light': 'var(--blue-light)',
        },
      },
      backgroundColor: {
        skin: {
          'color-1': 'var(--background-color)',
          'color-2': 'var(--background-color-2)',
          'color-3': 'var(--background-color-3)',
          'color-4': 'var(--background-color-4)',

          blue: 'var(--blue)',
          'bg-blue': 'var(--bg-blue)',
          red: 'var(--red)',
          'bg-red': 'var(--bg-red)',
          yellow: 'var(--yellow)',
          'bg-yellow': 'var(--bg-yellow)',
          green: 'var(--green)',
          'bg-green': 'var(--bg-green)',
          'blue-light': 'var(--blue-light)',
        },
      },

      borderColor: {
        skin: {
          'color-1': 'var(--border-color)',
          'color-2': 'var(--border-color-2)',
          blue: 'var(--blue)',
          'blue-light': 'var(--blue-light)',
        },
      },
    },
  },
  plugins: [],
}
