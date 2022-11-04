/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        md: "0 0px 20px rgba(0, 0, 0, 0.6)",
      },
      fontSize: {
        "5xl": [
          "64px",
          {
            lineHeight: "72px",
            fontWeight: "700",
          },
        ],
        "3xl": ["32px", "37.75px"],
        "2xl": ["24px", "36px"],
        xl: [
          "21px",
          {
            lineHeight: "34px",
            fontWeight: "400",
          },
        ],
        lg: ["24px", "24px"],
        xs: ["12px", "16px"],
      },
      lineHeight: { 11: "4.5rem" },
      fontFamily: {
        sans: ["Mundial-Regular", "sans-serif"],
        custom1: ["AbhayaLibre-Regular", "sans-serif"],
        custom2: ["AbhayaLibre-Bold", "sans-serif"],
        custom3: ["Mundial-Regular", "sans-serif"],
        custom4: ["Mundial-Light", "sans-serif"],
        custom5: ["Mundial-DemiBold", "sans-serif"],
      },
      backgroundImage: {
        section1: 'url("/src/assets/cardvector-1.svg")',
        section2: 'url("/src/assets/cardvector-2.svg")',
        section3: 'url("/src/assets/cardvector-3.svg")',
        section4: 'url("/src/assets/cardvector-4.svg")',
      },
      content: {
        pointer: 'url("/src/assets/navbar-pointer.svg")',
      },
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
          warning: "#FC4545",
          error: "#881337",

          "--btn-text-case": "capitalise",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
