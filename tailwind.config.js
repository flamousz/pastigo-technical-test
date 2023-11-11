/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-button-1': '#E52138',
        'text-black-1': '#101828',
        'text-grey-1': '#667085',
      }
    },
  },
  plugins: [],
}

