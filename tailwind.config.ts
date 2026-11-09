import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-ivory": "#F8F2E8",
        "ivory-surface": "#FFFDF9",
        "royal-indigo": "#202447",
        "royal-indigo-dark": "#171A33",
        "royal-indigo-card": "#262B54",
        "sindoor-red": "#C94B3B",
        "sindoor-dark": "#A8382B",
        "marigold": "#E6A83A",
        "marigold-light": "#F7D284",
        "peacock-teal": "#287C78",
        "peacock-dark": "#1D5956",
        "deep-plum": "#70465B",
        "border-subtle": "#E8DDCF",
        "border-dark": "#2E335C",
        "text-muted": "#635F58",
        "text-muted-dark": "#B2ACA3",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        'input': '8px',
        'card': '16px',
        'hero': '24px',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(32, 36, 71, 0.08)',
        'raised': '0 12px 36px -4px rgba(32, 36, 71, 0.14)',
        'dark-card': '0 8px 30px -4px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;

