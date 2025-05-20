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
        primary: "#4A5568", // Modern slate blue-gray
        secondary: "#718096", // Lighter blue-gray
        accent: "#3B82F6", // Vibrant blue
        textPrimary: "#2D3748", // Dark blue-gray for text
        background: "#F7FAFC", // Light cool gray background
        surface: "#FFFFFF", // Pure white
        hover: "#2C5282", // Deep blue for hover states
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
