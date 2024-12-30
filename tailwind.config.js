/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        260: "260px",
      },
      height: {
        832: "832px",
        260: "260px",
      },
      rotate: {
        12: "12deg",
      },
      fontSize: {
        120: "120px",
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui"],
        tenada: ["Tenada", "system-ui"],
      },
    },
  },
  plugins: [],
};
