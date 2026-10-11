/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f7f4',
          100: '#e6ede5',
          200: '#cddccb',
          300: '#a9c3a6',
          400: '#7da37a',
          500: '#5c8659',
          600: '#476b45',
          700: '#385538',
          800: '#2e442e',
          900: '#263827',
        },
        cream: '#faf8f3',
        gold:  '#c9a96e',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
