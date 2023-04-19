/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0px 2px 0px 0px black'
      },
      'border': {
        "border-l": '4px solid blue'
      }
    },
  },
  plugins: [],
}
