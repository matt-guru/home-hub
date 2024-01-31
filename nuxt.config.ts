// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
