const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}", "./src/*{html,js}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px", // Desfoque pequeno
        sm: "4px", // Desfoque pequeno-médio
        md: "8px", // Desfoque médio
        lg: "12px", // Desfoque grande
        xl: "16px", // Desfoque extra grande
      },
      backdropBrightness: {
        75: "75%",
        90: "90%",
      },
      backdropContrast: {
        75: "75%",
        90: "90%",
      },
      backdropSaturate: {
        50: "50%",
        150: "150%",
      },
      keyframes: {
        pulse: {
          "0%": { "box-shadow": "0 0 0 0 #D1B96E" },
          "100%": { "box-shadow": "0 0 0 14px #D1B96E00" },
        },
      },
      animation: {
        buttonPulse: "pulse 1.5s infinite ease-in-out",
      },
      colors: {
        "initial-font": "#D2AC68",
        "middle-font": "#EEE0B2",
        "final-font": "#B6781E",
        "btn-hero": "#D1B96E",
        "custom-blue": "rgba(0, 123, 255, 0.5)",
      },
      backgroundImage: {
        "logo-header": "url('/src/images/logo_dourada.png')",
        "bg-hero": "url('/src/images/background-hero-edited-azul.jpg')",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
};
