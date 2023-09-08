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

        'messages':"url(/message.png)",
        'envelope':"url(/envelope.png)",
        'map':"url(/map.png)",
        'phone':"url(/phone.png)",

        'hello':"url(/hello.png)",
        'products':"url(/products.png)",

        'bproduct1':"url(/Biodegradable-Additive-Masterbatch.jpg)",
        'bproduct2':"url(/greengp.jpg)",
        "bproduct3":"url(/honey.jpg)"
        

      },
      colors : {
       "gray":"#938F8F",
       "light-gray":"#CCCBD0"
      },
    },
  },
  plugins: [],
}
