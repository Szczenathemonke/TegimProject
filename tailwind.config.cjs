/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "5xl": "4rem",
    },
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
      extend: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",
          secondary: "#A2FF59",
          accent: "#111827",
          neutral: "#3D4451",
          "base-100": "#1D1D1D",
          "base-200": "#151515",
          info: "#a16207",
          success: "#84cc16",
          warning: "#365314",
          error: "#881337",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
