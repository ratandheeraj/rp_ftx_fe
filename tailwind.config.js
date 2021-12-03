module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", // first one will be the default theme
      "dark",
      "forest",
      "synthwave",
    ],
  },
};
