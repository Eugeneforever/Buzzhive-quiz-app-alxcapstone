/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#FCC822',
        primaryBlack: '#333333',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'poppins', 'Roboto'],
    },
    screens: {
      'md-': '741px',
      // => @media (min-width: 741px) { ... }
      'beforesm': '386px',
      // => @media (min-width: 386px) { ... }
      'md+': '808px',
      // => @media (min-width: 808px) { ... }
      'lg+': '1164px',
      // => @media (min-width: 1164px) { ... }
      
    },
    
  },
  plugins: [],
}

}