/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xsm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
      chelsea: ["Chelsea-Market", "cursive"],
    },
    colors: {
      
    }
  },
  plugins: [],
};
