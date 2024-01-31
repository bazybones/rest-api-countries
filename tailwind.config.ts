import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],

  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209,23%,22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "dark-gray": " hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
