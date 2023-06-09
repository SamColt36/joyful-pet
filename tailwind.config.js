/** @type {import(tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        98: "28rem",
        100: "32rem",
        102: "34rem",
        110: "40rem",
        bdm: "calc(100vw - 2.5rem)",
      },
      screens: {
        xl: { min: "1024px" },
        // => @media and (min-width: 1024px) and (max-width: 1279px)

        lg: { min: "768px", max: "1023px" },
        // => @media and (min-width: 768px) and (max-width: 1023px)

        md: { min: "426px", max: "767px" },
        // => @media and (min-width: 426px) and (max-width: 767px)

        sm: { min: "300px", max: "425px" },
        // => @media and (min-width: 300px) and (max-width: 425px)
      },
      colors: {
        azul: "#89E8EC",
        laranja: "#E9473C",
        coral: "#FFD8D8",
        coraldark: "#F1ADAD",
        footer: "#757575",
      },
    },
  },
  plugins: [],
};
