import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "395px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1680px",
        "3xl": "1860px",
      },
      colors: {
        lightGreen: "#ddf247",
      },
      fontFamily: {
        inter: ["var(--inter-font)"],
        lato: ["var(--lato-font)"],
      },
    },
  },
  plugins: [],
};
export default config;
