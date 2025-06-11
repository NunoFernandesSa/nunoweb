/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#271966",
        secondary: "#718096",
        accent: "#3B82F6",
        textPrimary: "#FFFFFF",
        background: "#E6E6E6",
        surface: "#FFFFFF",
        hover: "#2C5282",
      },
      fontSize: {
        biggestFontSize: "2.25rem",
        h1FontSize: "1.5rem",
        h2FontSize: "1.25rem",
        h3FontSize: "1rem",
        smallFontSize: "0.875rem",
        smallerFontSize: "0.75rem",
      },
    },
  },

  plugins: [tailwindScrollbar],
};
