/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    mode: "jit",
    extend: {
      colors: {
        green: "#28a745",
        white: "#fff",
        navColor: "rgba(108, 117, 125,0.5)",
      },
      fontSize: {
        "2xl": "65px",
        "3xl": "75px",
      },
      fontWeight: {
        extraBold: 700,
      },
      lineHeight: {
        2: "30px",
        9: "85px",
      },
      fontFamily: {
        mons: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
