module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        3: "0.8",
      },
      letterSpacing: {
        tighter: "-1rem",
        tighterer: "-0.4rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.6)",
        xs: "0 10px 15px -3px  rgb(0 ,0 ,0 ,0.4), 0 4px 6px -4px rgb(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
