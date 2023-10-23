/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily:{
        'jost':['Jost'],
        'roboto':['Roboto'],
        
      },
      backgroundImage:{
        'forest':"url('./assets/forest.jpg')",
        'fort':"url('./assets/fort.jpeg')",
        'taj':"url('./assets/taj.jpeg')",
        'beach':"url('./assets/beach.jpeg')",

      }
    },
  },
  plugins: [],
}