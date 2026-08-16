import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
