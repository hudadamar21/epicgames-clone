module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "8.5rem",
      },
    },
    extend: {
      spacing: {
        13: "3.25rem",
      },
      colors: {
        white: '#f5f5f5',
        epic: {
          black: "#121212",
          gray: {
            50: "#2F2F2F",
            100: "#2A2A2A",
            200: "#202020",
          },
          blue: "#007DFC",
        },
      },
      fontSize: {
        xxs: ".65rem",
        sm: "0.813rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
