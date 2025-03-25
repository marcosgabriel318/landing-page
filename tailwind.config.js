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
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
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
        "bg-hero": "url('/src/images/bg-hero-min.webp')",
        "bg-hero-mobile": "url('/src/images/bg-hero.webp')",
      },
      boxShadow: {
        "img-slider-inner":
          "box-shadow: -3px -4px 65px -4px rgba(0,0,0,0.8) inset;",
        "custom-dark": "0 -1px 30px -8px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
};
