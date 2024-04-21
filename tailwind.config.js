/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[class="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      height: {
        '450': '450px',
      },
      boxShadow: {
        '3-20': '0 3px 20px #DBDBDB80',
      },
    },
  },
  plugins: [],
};
