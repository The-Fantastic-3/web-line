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
        ibm: ["var(--font-ibm)"],
      },
      colors: {
        "primary-50": "#FFFFFF",
        "primary-100": "#F1EFFF",
        "primary-200": "#E3E0FF",
        "primary-300": "#D5D0FF",
        "primary-400": "#C7C0FF",
        "primary-500": "#ABA1FE",
        "primary-600": "#8F81FE",
        "primary-700": "#7362FE",
        "primary-800": "#5D4ED6",
        "primary-900": "#322787",
        "primary-1000": "#1C1460",
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
