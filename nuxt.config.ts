export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  
  postcss: {
    plugins: {
     '@tailwindcss/postcss': {},
     autoprefixer: {}
    },
  },

  runtimeConfig: {
    public: {
      secretPasswords: process.env.SECRET_KEYS, 
    }
  },

  compatibilityDate: "2025-02-15",
})