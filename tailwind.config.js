module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto-condensed': ["Roboto Condensed", "sans-serif"],
      'roboto': ['Roboto Mono', "monospace"],
      'fatface': ['Abril Fatface', 'cursive']
    },
    extend: {
      backgroundImage: theme => ({
        'sky': "url('../assets/images/home/nessgardens_001c.jpg')",
        'gallery': "url('../assets/images/home/nessgardens_053c.jpg')",
        'video': "url('../assets/images/home/nessgardens_089.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
