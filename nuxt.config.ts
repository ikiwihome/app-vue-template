import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: '/',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  devtools: { enabled: false },
  experimental: { appManifest: false },
  modules: ['@nuxt/icon'],

  nitro: {
    compressPublicAssets: true,
    minify: true
  },
  compatibilityDate: '2025-01-08',
  ssr: true
})