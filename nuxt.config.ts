// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Ensure SSR is enabled (if using dynamic content)
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/image'
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