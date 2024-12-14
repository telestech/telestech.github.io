/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            logoyellow: "#debc6b",
            logodarkyellow: "#977f48",
            enquirygray: "rgb(209 213 219)",
            footergray: "rgb(107 114 128)"
        },
    },
  },
  plugins: [],
}

