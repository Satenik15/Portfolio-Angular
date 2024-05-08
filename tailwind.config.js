/** @type {import('tailwindcss').Config} */
 
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: ["class"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#8B5CF6',
        secondary: '#2B478B',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
    },
  },
  plugins: [],
};
