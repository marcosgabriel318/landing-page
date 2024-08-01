const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        "initial-font": "#D2AC68",
        "middle-font": "#EEE0B2",
        "final-font": "#B6781E",
        "btn-hero": "#D1B96E",
      },
      backgroundImage: {
        "logo-header": "url('/src/images/logo_dourada.png')",
        "bg-hero": "url('/src/images/background-hero.jpg')",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
