/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Agregar color personalizado
        vino: "#7A183D",
      },
    },
  },
  plugins: [],
};
