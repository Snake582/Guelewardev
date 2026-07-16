/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07070b",
          900: "#0b0b12",
          800: "#111119",
          700: "#181822",
          600: "#20202c",
          500: "#2a2a38",
        },
        accent: {
          DEFAULT: "#6ee7c8",
          light: "#9df5df",
          dark: "#3fc7a3",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(110, 231, 200, 0.35)",
      },
    },
  },
  plugins: [],
}
