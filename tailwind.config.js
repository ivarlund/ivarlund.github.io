module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active'],
      borderRadius: ['hover'],
      borderOpacity: ['hover, active'],
      scale: ['active, group-hover'],
      visibility: ['active', 'group-hover']
    }
  },
  plugins: [],
}
