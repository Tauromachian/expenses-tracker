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

  modules: ["@vee-validate/nuxt", "nuxt-icon", "@pinia/nuxt"],
  compatibilityDate: "2025-03-06",
});
