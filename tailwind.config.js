/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009EDD',
        success: '#039B00',
        dark: '#2F2E41',
        gray_light: '#999999'
      },
    },
  },
  plugins: [],
}
