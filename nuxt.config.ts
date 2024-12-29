export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      script: [{ src: 'https://static.elfsight.com/platform/platform.js', defer: true}],
    },
  },

  runtimeConfig: {
    public: {
      secretPasswords: process.env.SECRET_KEYS, 
    }
  },

  compatibilityDate: "2024-12-29",
})