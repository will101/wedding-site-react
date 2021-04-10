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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
