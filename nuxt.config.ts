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

  app: {
    head: {
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2956202931956867",
          async: true,
          crossorigin: "anonymous"
        }
      ]
    }
  }
})