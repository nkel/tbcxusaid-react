/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#09B188',
      black: '#000',
      w: '#fff',
      indigo: '#9289FF',
      bg: {
        20: '#20364B',
        f2: '#F2F4F7',
      },
      gray: {
        70: '#707070',
        97: '#979DA2',
        24: '#24272A',
        f2: '#f2f2f2',
        f8: '#F8F8F8',
        d3: '#d3d3d3',
        e3: '#E3E3E3',
        d8: '#D8DDE4',
      },
      error: '#EB7171',
      warning: '#FBAD29'
    },
    extend: {
      boxShadow: {
        '3-20': '0 3px 20px #DBDBDB80',
      },
    },
  },
  plugins: [],
}

