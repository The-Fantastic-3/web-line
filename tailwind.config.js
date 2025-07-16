import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "primary-50": "#DBF5FF",
        "primary-100": "#C5EAF7",
        "primary-200": "#B0DEEF",
        "primary-300": "#9AD3E7",
        "primary-400": "#84C8DF",
        "primary-500": "#59B1D0",
        "primary-600": "#2D9AC0",
        "primary-700": "#0083B0",
        "primary-800": "#02698D",
        "primary-900": "#014F6A",
        "primary-1000": "#013446",
        grey: "#6E6E6E",
        "light-grey": "#8D8D8D",
        "lighter-grey": "#C8C8C8",
        "deeper-grey": "#494949",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
