/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',]
  ,
  theme: {
    extend: {
      color:  'gradient(90deg, #7E90FE 0 %, #9873FF 100 %)'
    },
  },
  plugins: [require("daisyui")],
}

