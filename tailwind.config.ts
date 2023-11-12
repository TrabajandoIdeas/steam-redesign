import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      text: {
        main: "#F3F3F3",
        dim: "#76808C"
      },
      bg: {
        main: "#0E141B",
        highlight: "#1E2329",
        hover: "#313843",
        secondary: "#313843",
        tertiary: "#212B45"
      },
      primary: "#66C0F4",
      secondary: "#4B619B",
      accent: {
        green: "#A1CD44",
        red: "#CD5444",
        yellow: "#C1B15F"
      }
    }
  },
  plugins: []
};
export default config;
