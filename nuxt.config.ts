// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  $production: {
    app: {
      baseURL: '/home-hub/',
      buildAssetsDir: 'assets',
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
})
