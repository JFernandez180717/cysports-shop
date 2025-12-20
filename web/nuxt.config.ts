import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // MUY IMPORTANTE para GitHub Pages
  ssr: false,

  app: {
    baseURL: '/cysports-shop/', // 👈 EXACTO al nombre del repo
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    plugins: [
      // @ ts-expect-error
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  nitro: {
    preset: 'static'
  },

  modules: ['@pinia/nuxt']
})