/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'regal-gray': '#F5F7F8',
        'gmx-blue': '#1C449B',
      },
        spacing: {
        '128': '32rem',
        '124': '28rem',
        '122': '20rem',
        '120': '50rem',
      },
      backgroundImage: {
        'newof-bg': "url('./src/assets/nwoff/bg-img.png')",
      },
    },
  },
  plugins: [],
}