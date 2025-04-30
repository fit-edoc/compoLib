/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        'blob': '59% 41% 73% 27% / 30% 30% 70% 70%',
        'top': '25% 27% 25% 25% / 25% 25% 0% 0%;'
        
      },
      fontFamily:{
        logo:["logo"]
      }
    },
  },
  plugins: [],
}

