/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {gridTemplateColumns: {
      'master': '2fr 4fr',
    }},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light","dark"],
  },
}

