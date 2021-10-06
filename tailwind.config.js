module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        epic: {
          black: '#121212',
          gray: {
            100: '#2A2A2A',
            200: '#202020'
          },
          blue: '#007DFC'
        }
      },
      fontSize : {
        'xxs': '.65rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
