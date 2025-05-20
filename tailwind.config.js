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
        firstColor: "rgb(89, 92, 116)",
        titleColor: "rgb(53, 57, 83)",
        textCcolor: "rgb(89, 92, 116)",
        bodyColor: "rgb(246, 245, 255)",
        whiteColor: "rgb(255, 255, 255)",
        sidebarColorHover: "rgb(67, 69, 87)",
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
