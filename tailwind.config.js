/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: '#87C425',
        verde_opaco: '#6A9A1D',
        verde_oscuro: '#24340A'
      },
      fontFamily: {
        Ga_Maamli: ["Ga Maamli", "sans-serif"],
      }
    },
  },
  plugins: [],
}

