// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/DSoftwareArtist/',
    buildAssetsDir: '/assets/',
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  image: {
    dir: 'public'
}

})