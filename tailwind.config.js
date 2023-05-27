/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        exs: "340px",
      },
      content: {
        mappic: 'url("../images/map.svg")',
      },
      colors: {
        "main-bg": "#090913",
        "card-clrs-left": "#140d14",
        "card-clrs-right": "#2a1b2b",
        "card-inner-left": "#322032",
        "card-inner-right": "#462e49",
        light: "#3E2A50",
        primary: "#C7B3FC",
        "login-input": "#372439",
        all: "#C381FC",
      },
      backgroundImage: {
        map: "../images/map.svg",
      },
      fontFamily: {
        codePro: "Code Pro regular",
        codeProLight: "Code Pro light",
        codeProBold: "Code Pro bold",
        Montserrat: "Montserrat",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
  fontDisplay: {},
};
