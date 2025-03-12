/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
      screens: {
        mobile: "449px",
      },
      colors: {
        primary: {
          100: "#bbf6f2",
          200: "#8ef1e9",
          300: "#61ebe0",
          400: "#33e5d7",
          500: "#0F766E",
          600: "#1accbe",
          700: "#149e94",
          800: "#0e7169",
          900: "#09443f",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("flowbite/plugin")],
};
