export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],

  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Open Sans': [400, 700],
        Monserrat: true,
      }
    }]
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/font.scss" as *;`
        }
      }
    }
  },

  compatibilityDate: '2025-04-20'
})