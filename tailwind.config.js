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
        'leafs': "url(/leaf.png)",
        'hello':"url(/hello.png)",
        'products':"url(/products.png)",
        "bioplastic":"url(/biodegrableplastic.png)"
        
      },
      colors : {
       "gray":"#938F8F"
      },
    },
  },
  plugins: [],
}
