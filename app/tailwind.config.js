/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-blue':'#1A54A9',
        'logo-yellow':'#debc6b',
        'dark-yellow':'#977f48',
      }
    },
  },
  plugins: [],
}

