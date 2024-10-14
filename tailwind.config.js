/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#4DEEEA',
        'neon-green': '#74EE15',
      },
    },
  },
  plugins: [],
}