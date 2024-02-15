/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'one': 'DM Sans, sans-serif',
        'two': 'Work Sans, sans-serif',
        'three': 'Montserrat, sans-serif',
        'four': 'Plus Jakarta Sans, sans-serif',
        'five': 'Figtree, sans-serif',
      }
    }
  },
  plugins: [],
}

