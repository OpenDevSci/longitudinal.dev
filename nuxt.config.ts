// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    'nuxt-og-image'
  ],

  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'ArticleList', 'MethodCardList', 'SimpleCarousel', 'TabComponent', 'TestComponent'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    }
  },

  colorMode: {
    disableTransition: true
  },

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  routeRules: {
    '/api/search.json': { prerender: true }
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/longitudinal/' // Set this to your GitHub repo slug
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  future: {
    compatibilityVersion: 4
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  compatibilityDate: '2024-07-11'
})
