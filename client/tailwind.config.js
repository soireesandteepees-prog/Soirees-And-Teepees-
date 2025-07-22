/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.25)',
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.3)',
        lg: '4px 4px 6px rgba(0,0,0,0.4)',
      },

      colors: {
        primary_button: '#f4985f',
        secondary_button: '#FFB88C',
        primary_background: '#FFD3B8',
        secondary_background: '#FFFAF7',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

