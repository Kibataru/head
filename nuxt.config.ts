export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],

  modules: [
    'nuxt-swiper',
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
          additionalData:
            '@use "@/assets/styles/variables.scss" as *;' +
            '@use "@/assets/styles/mixins.scss"    as *;',
          
        }
      }
    }
  },

  compatibilityDate: '2025-04-20'
})