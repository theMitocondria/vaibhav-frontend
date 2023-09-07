/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(https://placekitten.com/1400)"
      },
      colors : {
       "kala":"#f5f9dc"
      },
    },
  },
  plugins: [],
}
