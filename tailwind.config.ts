import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0F0F0F",
          surface: "#181818",
          card: "#202020",
        },
        gold: {
          champagne: "#D4AF37",
          light: "#E5C158",
          muted: "#B08D57",
        },
        alabaster: {
          DEFAULT: "#F7F3EE",
          muted: "#A0A0A0",
        },
        oznior: {
          bg: "#F7F3EE",
          surface: "#FFFFFF",
          primary: "#1A1A1A",
          secondary: "#555555",
          accent: "#B08D57",
          border: "#E7DED2",
          success: "#2F6F4F",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
