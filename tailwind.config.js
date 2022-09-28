/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing:{
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
      }
    },
  },
  plugins: [],
}
