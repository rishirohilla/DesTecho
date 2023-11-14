/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/components/Login.js",
    ],
    theme: {
        extend: {
          fontFamily: {
            Paci: ["Pacifico", "cursive"],
            Patua: ["Patua One", "serif"],
            Crete: ["Crete Round", "serif"],
            Lilita: ["Lilita One", "sans-serif"],
            Acme: ["Acme", "sans-serif"],
           },
        },
      },
    plugins: [],
  }