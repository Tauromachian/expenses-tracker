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

  modules: ["@vee-validate/nuxt", "@pinia/nuxt", "@nuxt/eslint", "@nuxt/icon"],
  compatibilityDate: "2025-03-06",
});
