module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
      colors: {
        blue: {
          DEFAULT: "#3399cc",
        },
        green: {
          DEFAULT: "#75b55e",
        },
        black: {
          DEFAULT: "#444444",
        },
        purple: {
          DEFAULT: "#b248fc",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("./node_modules/tw-elements/dist/plugin"),
  ],
  future: {
    purgeLayersByDefault: true,
  },
};
