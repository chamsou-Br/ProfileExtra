module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      "primary" : "#242D49",
      "secondairy" : "#FCA61F",
      "third" : "#FFFFFF",
      "forth" : "#238fe5"
    },
    extend: {
      backgroundImage: {
        'hero-back': "url('/BG.png')",
        'chamsou' : "url('/chamsou.jpg')",
        'card-service' : "url('/back11.jpg')"
       },
       dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
