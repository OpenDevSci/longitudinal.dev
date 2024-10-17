export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    'nuxt-og-image',
    '@nuxtjs/tailwindcss',
    ['nuxt-plotly', { inject: true }]
  ],
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'ArticleList', 'SimpleCarousel', 'TabComponent', 'TestComponent'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  colorMode: {
    disableTransition: true
  },
  nitro: {
    prerender: {
      routes: [
        '/' // Home page, you can add more important routes here
      ],
      crawlLinks: true, // Enable crawling to discover other routes
      ignore: [
        // '/tools/6.data-formats',
        // '/api/_content/query/JPfzfXpE83.1728957996020.json'
        '/plotly-view',
        '/contribute',
        '/sandbox',
        '/longitudinal-dev/abcd-study',
        '/longitudinal-dev/general',
        '/longitudinal-dev/about',
        '/longitudinal-dev/resources',
        'longitudinal-dev/playground',
        '/longitudinal-dev/tutorials',
        '/about',
        '/resources_seenote',
        '/longitudinal-dev/resources_seenote',
        '/test',
        '/longitudinal-dev/getting-started',
        '/tutorials/data-visualization/viz_customizing-plots-ggplot2',
        '/longitudinal-dev/tutorials/data-visualization/viz_customizing-plots-ggplot2',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/growth-curve-models/multivariate_latent_growth_curve_models_tutorial',
        '/longitudinal-dev/tutorials',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/growth-curve-models/piecewise_growth_models_tutorial',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/growth-curve-models/multilevel_growth_models_tutorial',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/crosslagged-and-panel-models/autoregressive_cross_lagged_models_tutorial',
        '/longitudinal-dev/abcd-study/resources',
        '/longitudinal-dev/abcd-study/traditional-linear-models',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/time-to-event-and-survival-models/survival_analysis_time_dependent_covariates_tutorial',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/advanced-models/generalized_estimating_equations_tutorial',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/mixture-models/growth_mixture_models_tutorial',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/mixed-effects-and-multilevel/linear-mixedeffects-models',
        '/longitudinal-dev/tools',
        '/longitudinal-dev/tools/programming-languages/r/rtestfile2',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/mixture-models/latent_class_growth_analysis_autorial',
        '/longitudinal-dev/tutorials/special-case-tutorials/advanced_bootstrapping-and-resampling',
        '/longitudinal-dev/tutorials/exploratory-data-analysis/exploratory_diagnostic-plots',
        '/longitudinal-dev/tutorials/data-wrangling/cleaning-and-transforming-data',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/advanced-models/latent-curve-model-with-structured-residuals',
        '/longitudinal-dev/tutorials/longitudinal-analyses-models/advanced-models/random_intercept_cross_lagged_panel_model_tutorial',
        '/longitudinal-dev/abcd-study/traditional-nonlinear-models/examples_signedranktest',
        '/longitudinal-dev/tutorials/exploratory-data-analysis/exploratory_model-evaluation'
        // Add more routes to ignore as needed
      ]
    }
  },
  routeRules: {
    '/api/search.json': { prerender: true }
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/longitudinal-dev/' // Ensure correct base URL, especially for GitHub Pages
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false // Depending on your requirements, you might consider enabling strict mode
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
  content: {
    documentDriven: true, // Ensuring document-driven mode is correctly enabled
    highlight: {
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'md', 'yaml', 'r']
    }
  },
  vite: {
    optimizeDeps: {
      include: ['plotly.js-dist-min']
    }
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/css/main.css'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  plugins: ['~/plugins/customDirectives.js'],
  compatibilityDate: '2024-07-11'
})
