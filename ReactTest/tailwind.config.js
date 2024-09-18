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
        "L-grey":"#89939E",
        "grey-blue":"#89939E",
        "bgc-base": "#F5F7FA",
        "app-black": "#263238",
      }
    },

  },
  plugins: [],
}
