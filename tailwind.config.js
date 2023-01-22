/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'red': {
        400: '#f87171',
        500: '#ef4444'
      },
      'cyan': {
        200: '#a5f3fc',
        300: '#67e8f9',
        500: '#06b6d4'
      },
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#FFC0CB',
      'dark-pink': '#ff49db',
      'orange': {
        300: '#fdba74',
        600: '#ff9470',
      },
      'green': {
        200: '#bbf7d0',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
      },
      'teal': {
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488'
      },
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        '0': '0',
        '1': '1px',
        '15': '15px'
      }
    }
  },
  plugins: [],
}
