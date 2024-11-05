/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
      primary: colors.indigo,
      error: colors.red,
      success: colors.green,
      alert: colors.yellow,
      info: colors.blue
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
