const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      emerald: colors.emerald,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      white: colors.white,
    },
    screens: {
      'sm': { 'max': '480px' },
      'md': { 'min': '481px' },
      'lg': { 'min': '765px' },
      'xl': { 'min': '1280px' },
      '2xl': { 'min': '1366px' },
      '3xl': { 'min': '1440px' },
    },
    extend: {},
  },
  variants: {
    extends: {
      fontstyle: ['hover']
    }
  },
  plugins: [],
};
