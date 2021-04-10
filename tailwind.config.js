module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto-condensed': ["Roboto Condensed", "sans-serif"],
      'roboto': ['Roboto Mono', "monospace"],
      'fatface': ['Abril Fatface', 'cursive']
    },
    maxWidth: {
      '7xl': '88rem'
    },
    extend: {
      backgroundImage: theme => ({
        'bw-umbrella': "url('../assets/images/home/nessgardens_011.jpg')",
        'colour-umbrella': "url('../assets/images/home/nessgardens_009.jpg')",
        'ring': "url('../assets/images/home/nessgardens_110.jpg')",
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
