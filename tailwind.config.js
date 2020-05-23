const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/*.js", "./components/*.js"],
  theme: {
    fontFamily: {
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
      title: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    margin: ["responsive", "last"],
  },
};
