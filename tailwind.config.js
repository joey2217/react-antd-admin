module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class' false
  theme: {
    extend: {
      colors: {
        black: '#141414',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
