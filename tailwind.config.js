module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'charm': ['Charm', 'Serif'],
      'open-sans': ['Open Sans', 'serif'],
      'roboto-condensed': ["Roboto Condensed", "sans-serif"],
      'roboto': ['Roboto Mono', "monospace"],
      'zilla': ['Zilla Slab Highlight', "cursive"],
      'fatface': ['Abril Fatface', 'cursive']
    },
    extend: {
      backgroundImage: theme => ({
        'bw-umbrella': "url('../assets/images/home/nessgardens_011.jpg')",
        'colour-umbrella': "url('../assets/images/home/nessgardens_009.jpg')",
        'ring': "url('../assets/images/home/nessgardens_110.jpg')",
        'sky': "url('../assets/images/home/nessgardens_001c.jpg')",
        'gallery': "url('../assets/images/home/nessgardens_053.jpg')",
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
