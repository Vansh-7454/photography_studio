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
        // Distinctive Creative-Studio Palette
        "warm-ivory": "#F7F2E9",
        "ivory-surface": "#FFFFFF",
        "ivory-card": "#FAF7F0",
        
        "deep-aubergine": "#392A3B",
        "aubergine-dark": "#281D2A",
        "aubergine-surface": "#453448",
        
        "terracotta": "#C96850",
        "terracotta-dark": "#AF543E",
        "terracotta-light": "#F2E8E4",
        
        "muted-marigold": "#D9A64B",
        "marigold-light": "#F9EDD4",
        
        "soft-sage": "#89947A",
        "sage-light": "#EEF1EC",
        
        "border-subtle": "#E7DFD3",
        "border-dark": "#524055",
        
        "text-muted": "#695D69",
        "text-muted-dark": "#D4CAD4",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "DM Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        'input': '6px',
        'card': '12px',
        'hero': '16px',
      },
      boxShadow: {
        'subtle': '0 2px 12px -2px rgba(57, 42, 59, 0.06)',
        'card': '0 6px 24px -4px rgba(57, 42, 59, 0.08)',
        'raised': '0 16px 40px -8px rgba(57, 42, 59, 0.14)',
        'dark-card': '0 12px 36px -4px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
