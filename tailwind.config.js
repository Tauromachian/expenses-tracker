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
    },
  },
  plugins: [require("tailwind-scrollbar"), require("flowbite/plugin")],
};
