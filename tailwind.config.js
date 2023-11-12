/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-button-1': '#E52138',
        'text-black-1': '#101828',
        'text-black-success-password': '#4F4F4F',
        'text-black-success-password-header': '#101828',
        'text-black-success-password-h1': '#333333',
        'text-grey-1': '#667085',
        'bg-grey-1': '#F2F4F7',
      }
    },
    fontFamily: {
        'google-sans': ['google-sans', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

