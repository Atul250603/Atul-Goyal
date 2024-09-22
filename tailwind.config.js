/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid': 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px', 
      },
      colors:{
        'custom-yellow':"#FF9C1A",
        'custom-red':"#EC1B09"
      },
      backgroundColor:{
        'custom-bg':'#f2f5f9',
        'custom-blue':"#f2f7fC"
      },
      screens:{
        'xs':'500px',
        'xxs':'310px'
      }
    },
  },
  plugins: [],
}