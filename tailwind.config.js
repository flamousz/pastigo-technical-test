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
        'text-blue-pickup': '#2E90FA',
        'text-grey-1': '#667085',
        'text-red-pickup': '#D92D20',
        'text-green-pickup': '#039855',
        'text-footer-grey': '#A0A4A8',
        'text-switch': '#646E83',
        'text-status-pending': '#F59F00',
        'bg-grey-1': '#F2F4F7',
        'bg-grey-cool': '#7B8CAD',
        'bg-green-pickup': '#ECFDF3',
        'bg-orange-warning': '#FFFAEB',
        'bg-red-pickup': '#FEE4E2',
        'bg-blue-pickup': '#EFF8FF',
        'text-grey-pp-homepage-1': '#475467',
        'gradient-switch-end': '#E8EAEA',
        'bg-status-pending': '#FFF9DB'
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

