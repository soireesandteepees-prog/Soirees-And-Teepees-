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

      fontFamily: {
        heading: 'var(--font-pacifico)',
        body: 'var(--font-inter)',
        playfair: ['var(--font-playfair)'],
      },

      colors: {
        bloomPink: '#FF6FA3',
        sunshine: '#FFDD57',
        skyBlue: '#6EC3F4',
        minty: '#A3F7BF',
        peach: '#FFD1BA',
        pastelYellow: '#fce89f',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

