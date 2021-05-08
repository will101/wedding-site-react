module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: ({
      'home': "url('../assets/images/bgImages/nessgardens001c-min.jpg')",
      'gallery': "url('../assets/images/bgImages/nessgardens053c-min.jpg')",
      'video': "url('../assets/images/bgImages/nessgardens089-min.jpg')",
      'upload': "url('../assets/images/bgImages/upload.jpg')"
    }),
    fontFamily: {
      'roboto-condensed': ["Roboto Condensed", "sans-serif"],
      'roboto': ['Roboto Mono', "monospace"],
      'fatface': ['Abril Fatface', 'cursive']
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
