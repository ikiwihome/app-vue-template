import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  compatibilityDate: '2025-01-04',
  experimental: { appManifest: false },
  nitro: {
    experimental: {
      asyncContext: true
    },
    storage: {}
  },
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    ['@nuxtjs/tailwindcss', {
      cssPath: '~/assets/css/tailwind.css',
      configPath: 'tailwind.config',
      exposeConfig: {
        level: 2
      },
      config: {},
      viewer: false,
    }],
    ['shadcn-nuxt', {
      prefix: '',
      componentDir: './components/ui'
    }]
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false
})
