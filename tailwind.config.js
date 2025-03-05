/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        // Corporate colors
        corporate: {
          blue: "#1f40c3", // Persian Blue 700 - Primary
          peach: "#ffc7b3", // Wax Flower 300 - Secondary
          cream: "#fffadd", // Scotch Mist 50 - Tertiary
          teal: "#49bf9f", // Puerto Rico 400 - Quaternary
          dark: "#1c1c1c", // Woodsmoke 950 - Dark
          white: "#ffffff", // White
        },
        // Extended color palettes
        blue: {
          50: "#eff5ff",
          100: "#dce8fd",
          200: "#c1d7fc",
          300: "#96bffa",
          400: "#649cf6",
          500: "#4078f1",
          600: "#2a5ae6",
          700: "#1f40c3", // Primary
          800: "#223aab",
          900: "#213587",
          950: "#192352",
        },
        peach: {
          50: "#fef5f2",
          100: "#ffe9e1",
          200: "#ffd6c8",
          300: "#ffc7b3", // Secondary
          400: "#fd926c",
          500: "#f56e3e",
          600: "#e25320",
          700: "#be4317",
          800: "#9d3a17",
          900: "#82351a",
          950: "#471908",
        },
        cream: {
          50: "#fffadd", // Tertiary
          100: "#fff7c0",
          200: "#ffed85",
          300: "#ffdb3f",
          400: "#ffc40b",
          500: "#f4aa00",
          600: "#d38100",
          700: "#a85a00",
          800: "#8a4609",
          900: "#75390e",
          950: "#451c03",
        },
        teal: {
          50: "#f2fbf8",
          100: "#d2f5e8",
          200: "#a6e9d2",
          300: "#71d7b8",
          400: "#49bf9f", // Quaternary
          500: "#2aa284",
          600: "#1f826b",
          700: "#1d6857",
          800: "#1c5348",
          900: "#1b463d",
          950: "#0a2923",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        comet: {
          "0%": { transform: "translateX(0) translateY(0)", opacity: 0 },
          "10%": { opacity: 1 },
          "100%": {
            transform: "translateX(-100vw) translateY(100vh)",
            opacity: 0,
          },
        },
        meteor: {
          "0%": { transform: "translateX(0) translateY(0)", opacity: 0 },
          "10%": { opacity: 1 },
          "100%": {
            transform: "translateX(-80vw) translateY(80vh)",
            opacity: 0,
          },
        },
        "rocket-move": {
          "0%": {
            transform: "translateX(0) translateY(0) rotate(45deg)",
            opacity: 0,
          },
          "10%": { opacity: 1 },
          "100%": {
            transform: "translateX(100vw) translateY(-100vh) rotate(45deg)",
            opacity: 0,
          },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
        "galaxy-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        spin: "spin 20s linear infinite",
        comet: "comet 10s ease-out forwards",
        meteor: "meteor 8s ease-out forwards",
        "rocket-move": "rocket-move 15s ease-out forwards",
        orbit: "orbit 20s linear infinite",
        "galaxy-spin": "galaxy-spin 60s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-white":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        "grid-dark":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
