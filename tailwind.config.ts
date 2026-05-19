import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Academia / Classical tokens */
        bg:          "#1C1714",
        "bg-alt":    "#251E19",
        fg:          "#E8DFD4",
        muted:       "#3D332B",
        "muted-fg":  "#9C8B7A",
        border:      "#4A3F35",
        accent:      "#C9A962",
        "accent-alt":"#8B2635",
        "brass-light":"#D4B872",
        "brass-dark": "#B8953F",
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        body:    ["Crimson Pro",         "Georgia", "serif"],
        display: ["Cinzel",              "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.65s ease-out forwards",
        "fade-in":    "fadeIn 0.65s ease-out forwards",
        scroll:       "scrollBounce 1.8s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
