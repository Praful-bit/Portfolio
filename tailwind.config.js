/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        ...defaultTheme.screens, // Restores sm, md, lg, xl, etc.
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/herobg.png')", // Fixed relative path
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Optional: enables `font-poppins` class
      },
    },
  },
  plugins: [],
};
