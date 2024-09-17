/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-green":"#4CAF4F",
        "D-grey":"#4D4D4D",
        "neutral-grey":"#717171",
        "app-orange": "#FF5722",
      }
    },

  },
  plugins: [],
}
