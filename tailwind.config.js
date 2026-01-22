/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff8c00', // Dark Orange
          hover: '#e67e22',
        },
        accent: '#f2f2f2', // Light grey
        text: {
          main: '#1a1a1a', // Dark grey/Black for readability
          muted: '#4a4a4a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'], // For that academic feel if needed
      }
    },
  },
  plugins: [],
}
