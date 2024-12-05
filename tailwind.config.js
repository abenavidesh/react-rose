/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#E61880',
        'pink-secondary': '#F77777',
        'black-primary': '#191114',
        'black-secondary': '#382931',
      },
    },
  },
  plugins: [],
}
