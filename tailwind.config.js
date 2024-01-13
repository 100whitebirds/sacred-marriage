/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '1px',
      'md': '762px',
      'lg': '1440px',
    },
  },
  plugins: [],
}

