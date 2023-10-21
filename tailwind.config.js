/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
  },
  container:{
  center: true,
  padding: '1rem'
  },

    extend: {
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        roboto:"'Roboto', sans-serif"
      }
    },
  },
  variants: {
    extend: {
      display:  ['group-hover'],
      visibility: ['group-hover'],
  },
},
  plugins: [
    
  ],
}
