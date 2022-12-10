/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dark : "#272C34",
        nuevoBlue : "#358DE6",
        opacidad : "#AAAAAA"
      }
    },
  },
  plugins: [],
}
