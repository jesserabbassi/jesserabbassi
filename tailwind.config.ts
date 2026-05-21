import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07080d",
        panel: "#10131c",
        line: "rgba(255,255,255,0.1)",
        mist: "#aeb7c8",
        ivory: "#f6f0df",
        signal: "#2dd4bf",
        copper: "#f4a261",
        violet: "#9b8cff"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(45, 212, 191, 0.16)",
        card: "0 18px 70px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(45,212,191,0.18), transparent 32rem), radial-gradient(circle at 80% 20%, rgba(244,162,97,0.12), transparent 26rem)"
      }
    }
  },
  plugins: [forms]
};

export default config;
