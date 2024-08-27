module.exports = {
  extends: [
    "expo",
    "prettier",
    "next/core-web-vitals",
    "standard",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
