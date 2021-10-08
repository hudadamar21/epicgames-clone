module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '6rem',
        xl: '9rem',
      },
    },
    extend: {
      inset: {
        '13': '3.25rem'
      },
      height: {
        '13': '3.25rem'
      },
      padding: {
        '13': '3.25rem'
      },
      colors: {
        epic: {
          black: '#121212',
          gray: {
            50: '#2F2F2F',
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
