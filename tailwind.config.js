/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutronコーポレート: 深宇宙ブルー × 重力ゴールド
        deep: "#0A0F2C",
        deep2: "#111845",
        ink: "#070B22",
        card: "#121941",
        paper: "#F5F7FA",
        gold: "#C9A86A",
        goldd: "#A8874E",
        // cryptoEngineプロダクト配色（実ダッシュボードと同一）
        navy: {
          950: "#070C18",
          900: "#0B1220",
          850: "#0E1728",
          800: "#131E33",
          700: "#1A2945",
        },
        accent: {
          DEFAULT: "#10B981",
          soft: "#34D399",
          pale: "#A7F3D0",
          deep: "#059669",
        },
        up: "#26A69A",
        down: "#EF5350",
      },
      letterSpacing: { phi: "0.22em" },
      maxWidth: { phi: "1080px" },
      fontFamily: { script: ["var(--font-script)", "cursive"] },
    },
  },
  plugins: [],
};
