/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "font-Inter": ["Inter", "sans-serif"],
      "font-Jost": ["Jost", "sans-serif"],
    },
    colors: {
      primary: "#1BA8B1",
      secondary: "#FF6F06",
      dark: "#323232",
      white: "#FFFFFF",
      "mid-dark": "#37474F",
      "dim-dark": "#ABABAB",
    },
    extend: {
      backgroundImage: {
        "footer-image": "url('/images/4.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
