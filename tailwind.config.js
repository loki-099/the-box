/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '744px',
      'laptop': '1024px',
      'desktop': '1140px'
    },
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

