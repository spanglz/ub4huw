import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          850: "#1f2937",
          950: "#0f172a",
        },
        emerald: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(16, 185, 129, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      typography: {
        emerald: {
          css: {
            "--tw-prose-body": "rgb(167 243 208)",
            "--tw-prose-headings": "rgb(52 211 153)",
            "--tw-prose-lead": "rgb(167 243 208)",
            "--tw-prose-links": "rgb(52 211 153)",
            "--tw-prose-bold": "rgb(110 231 183)",
            "--tw-prose-counters": "rgb(52 211 153)",
            "--tw-prose-bullets": "rgb(52 211 153)",
            "--tw-prose-hr": "rgb(6 78 59)",
            "--tw-prose-quotes": "rgb(167 243 208)",
            "--tw-prose-quote-borders": "rgb(6 78 59)",
            "--tw-prose-captions": "rgb(167 243 208)",
            "--tw-prose-code": "rgb(110 231 183)",
            "--tw-prose-pre-code": "rgb(167 243 208)",
            "--tw-prose-pre-bg": "rgb(6 78 59)",
            "--tw-prose-th-borders": "rgb(6 78 59)",
            "--tw-prose-td-borders": "rgb(6 78 59)",
          },
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
