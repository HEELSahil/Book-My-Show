module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bharti: {
          50: '#f8e5ff',
          100: '#e1b5fe',
          200: '#cb85fa',
          300: '#b655f7',
          400: '#a225f3',
          500: '#880dda',
          600: '#6a08aa',
          700: '#4c057b',
          800: '#2d024b',
          900: '#12001d',
        },
        bms: {
          50: '#edf1fc',
          100: '#d2d5e1',
          200: '#b6b8c8',
          300: '#999cb2',
          400: '#7d809b',
          500: '#636681',
          600: '#4d4f65',
          700: '#373949',
          800: '#2b3147',
          900: '#0a0a16',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
