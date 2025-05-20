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
        firstColor: "#595c74",
        titleColor: "#353953",
        textCcolor: "#595c74",
        bodyColor: "#f6f5ff",
        whiteColor: "#ffffff",
        sidebarColorHover: "#434557",
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
