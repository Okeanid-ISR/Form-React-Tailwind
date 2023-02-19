/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/10':'10%',
        '9/10':'90%'
      },
    },
  },
  plugins: [],
}

