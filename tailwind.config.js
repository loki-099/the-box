/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        primaryBlack: '#040406',
        primaryWhite: '#f5f5f5'
      }
    },
  },
  plugins: [],
}

