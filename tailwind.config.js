module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3399cc",
        },
        green: {
          DEFAULT: "#75b55e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
