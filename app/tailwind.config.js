/** @type {import('tailwindcss').Config} */
import OurColors from './colorsDefinitions'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: OurColors
        
    },
  },
  plugins: [],
}

