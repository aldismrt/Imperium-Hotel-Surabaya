import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c8a96e",
          light: "#e2c992",
          dark: "#9a7b43",
        },
        navy: {
          DEFAULT: "#0b1522",
          mid: "#132038",
          light: "#1e3255",
        },
        cream: {
          DEFAULT: "#f5ede0",
          dark: "#e6d5be",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        body: ["var(--font-body)", "Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
