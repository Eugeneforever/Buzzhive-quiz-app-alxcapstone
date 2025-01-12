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
  },
  plugins: [],
}

}