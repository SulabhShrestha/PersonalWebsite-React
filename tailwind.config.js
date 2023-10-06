/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        morph: "morph 5s linear infinite alternate",
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
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    base: false,
    darkTheme: "white",
  },
};
