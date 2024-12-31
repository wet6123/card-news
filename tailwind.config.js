/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        65: "260px",
        95: "380px",
      },
      height: {
        65: "260px",
        95: "380px",
        208: "832px",
        300: "1200px",
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
        aggro: ["Aggro", "Pretendard", "system-ui"],
      },
      fontWeight: {
        "aggro-light": 300,
        "aggro-medium": 500,
        "aggro-bold": 700,
      },
      dropShadow: {
        default: "0px 4px 4px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(to bottom, #FFFFFF 0%, #D6E4FF 30%, #D6E4FF 70%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow": "2px 4px 4px rgba(0,0,0,0.3)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
