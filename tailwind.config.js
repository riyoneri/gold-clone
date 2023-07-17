/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Graphik-Regular",
        "main-medium": "Graphik-Medium",
        "main-semibold": "Graphik-Semibold",
        "druk-medium": "Druk-Medium",
        "publico-text": "PublicoText-Roman",
      },
      colors: {
        "my-yellow": "#FED100",
        "hover-brown": "#A42017",
        "gray-text": "#333",
        "gray-bg": "#2B2B2B",
        "my-link": "#376ebe",
        "body-bg": "#F6F7F7",
        "deep-text-gray": "#333333"
      },
    },
    container: {
      center: true
    }
  },
  plugins: [],
};

