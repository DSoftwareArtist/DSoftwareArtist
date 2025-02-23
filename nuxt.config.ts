// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/themes/default.scss',
    '~/assets/css/fontStyles.scss',
    '~/assets/css/global.scss'
  ],
  devtools: { enabled: true },
  base: '/dsoftwareartist/'
})
