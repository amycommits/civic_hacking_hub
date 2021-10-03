const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: '#f7b226ff',
      'primary-dark': '#624104ff',
      secondary: '#537d8dff',
      'secondary-dark': '#a5c0caff',
      tertiary: '#a97d7eff',
      'tertiary-dark': '#805b5fff',
      'accent': '#971024ff',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
