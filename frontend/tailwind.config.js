/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'side-bar-color': '#FCFAF8',
      'check-one': '#0000FF',
      'check-two': '#FF0000',
    }
  },
  plugins: [],
}

