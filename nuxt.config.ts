// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@vee-validate/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxt/eslint",
  ],
  compatibilityDate: "2025-03-06",
});