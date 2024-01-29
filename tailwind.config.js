const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#ffffff",
      secondary: "#000000",
      white: '#3B81F6',
      text: {
        DEFAULT: "#1F2937",
        light: "#6C7281",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
      },
      sky: "#3B81F6",
      hoverColor: "#DCDCDC"
    },
    extend: {},
  },
  plugins: [],
}
