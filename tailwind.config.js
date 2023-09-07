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
        'leafs': "url(https://res.cloudinary.com/dycitvrpg/image/upload/v1694093148/4dbce400-7035-4548-baf0-99dea16e7f95_1_kcgo3d.png)"
      },
      colors : {
       "gray":"#938F8F"
      },
    },
  },
  plugins: [],
}
