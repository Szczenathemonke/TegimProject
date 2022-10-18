/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "5xl": [
        "64px",
        {
          lineHeight: "72px",
          fontWeight: "700",
        },
      ],
      "2xl": ["24px", "36px"],
      "2xl": [
        "21px",
        {
          lineHeight: "34px",
          fontWeight: "400",
        },
      ],
    },
    lineHeight: { 11: "4.5rem" },
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
      custom2: ["Custom-2", "sans-serif"],
      custom3: ["Custom-3", "sans-serif"],
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

          "--btn-text-case": "capitalise",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
