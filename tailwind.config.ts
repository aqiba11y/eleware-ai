import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0E0E1A",
          surface: "#13131F",
          card: "#1A1A2E",
          purple: "#7C5CFF",
          "purple-bright": "#8B7AFF",
          "purple-deep": "#5B3FE0",
        },
        text: {
          primary: "#FFFFFF",
          body: "#C4C4D0",
          muted: "#6B6B7B",
        },
        border: {
          subtle: "rgba(124, 92, 255, 0.15)",
          accent: "rgba(124, 92, 255, 0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-geist)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["88px", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "hero-mobile": ["48px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "section-desktop": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section-mobile": ["36px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "stat-value": ["52px", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        eyebrow: ["13px", { lineHeight: "1.4", letterSpacing: "0.15em" }],
      },
      spacing: {
        section: "140px",
        "section-mobile": "80px",
        container: "96px",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(135deg, #7C5CFF 0%, #5B3FE0 100%)",
        "glow-purple": "radial-gradient(ellipse at center, rgba(124, 92, 255, 0.25) 0%, transparent 70%)",
        "glow-purple-intense": "radial-gradient(ellipse at center, rgba(124, 92, 255, 0.4) 0%, transparent 60%)",
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(124, 92, 255, 0.3)",
        "glow-purple-sm": "0 0 20px rgba(124, 92, 255, 0.2)",
        "card-border": "0 0 0 1px rgba(124, 92, 255, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "spin-slow": "spin 60s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        aurora: "aurora 20s ease infinite",
        meteor: "meteor 5s linear infinite",
        "moving-border": "moving-border 4s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scale-pulse": "scale-pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        aurora: {
          "0%, 100%": { backgroundPosition: "50% 50%, 50% 50%" },
          "50%": { backgroundPosition: "350% 50%, 350% 50%" },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "moving-border": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 30px rgba(124, 92, 255, 0.4)" },
          "50%": { boxShadow: "0 0 60px rgba(124, 92, 255, 0.7)" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
