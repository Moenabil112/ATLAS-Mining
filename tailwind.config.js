/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Alexandria", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Deep graphite command-room background
        graphite: {
          950: "#0a0d0f",
          900: "#10151a",
          850: "#161c22",
          800: "#1c242c",
          700: "#2a343d",
          600: "#3a4651",
        },
        // Copper accents
        copper: {
          50: "#fbf2ec",
          100: "#f3dcc9",
          200: "#e6b794",
          300: "#d6905f",
          400: "#c87b45",
          500: "#b86a34",
          600: "#9c5526",
          700: "#7d431f",
        },
        // Mineral green highlights
        mineral: {
          50: "#eef7f1",
          100: "#cdead6",
          200: "#97d3ad",
          300: "#5cb884",
          400: "#36a169",
          500: "#1f8a54",
          600: "#157044",
          700: "#0f5836",
        },
        // Moroccan earth tones
        earth: {
          100: "#e8dccb",
          200: "#cdb893",
          300: "#b3925f",
          400: "#94703e",
        },
      },
      boxShadow: {
        room: "0 10px 40px -12px rgba(0,0,0,0.55)",
        card: "0 4px 18px -6px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "graphite-radial":
          "radial-gradient(1200px 600px at 20% -10%, rgba(184,106,52,0.10), transparent 55%), radial-gradient(900px 500px at 95% 10%, rgba(31,138,84,0.10), transparent 55%)",
      },
    },
  },
  plugins: [],
};
