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

        'bp1':"url(/goli.png)",
        'bp2':"url(/greengp.png)",
        "bp3":"url(/honey.png)",
        
        "form":"url(/form.png)"

      },
      colors : {
       "gray":"#938F8F",
       "light-gray":"#CCCBD0"
      },
    },
  },
  plugins: [],
}
