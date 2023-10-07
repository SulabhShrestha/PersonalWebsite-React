/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        morph: "morph 5s linear infinite alternate",
        wave: "wave 5s linear infinite",
        handWave: "handWave 1.5s infinite",
      },
      keyframes: {
        morph: {
          "0%": {
            "border-radius": "69% 31% 36% 64% / 38% 77% 23% 62%",
          },

          "100%": {
            "border-radius": "70% 30%/40% 60% 60% 40%",
          },
        },
        handWave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "15%": {
            transform: "rotate(14deg)",
          },
          "30%": {
            transform: "rotate(-8deg)",
          },
          "40%": {
            transform: "rotate(14deg)",
          },
          "50%": {
            transform: "rotate(-4deg)",
          },
          "60%": {
            transform: "rotate(10deg)",
          },
          "70%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    base: false,
    darkTheme: "white",
  },
};
