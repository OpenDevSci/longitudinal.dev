// Generated by nuxt-og-image

declare module 'nitropack' {
  interface NitroRouteRules {
    ogImage?: false | import('../../node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRouteConfig {
    ogImage?: false | import('../../node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRuntimeHooks {
    'nuxt-og-image:context': (ctx: import('../../node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
    'nuxt-og-image:satori:vnodes': (vnodes: import('../../node_modules/nuxt-og-image/dist/runtime/types').VNode, ctx: import('../../node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
  }
}

declare module '#nuxt-og-image/components' {
  export interface OgImageComponents {
    'BrandedLogo': typeof import('../..')['default']
    'Frame': typeof import('../..')['default']
    'Nuxt': typeof import('../..')['default']
    'NuxtSeo': typeof import('../..')['default']
    'Pergel': typeof import('../..')['default']
    'SimpleBlog': typeof import('../..')['default']
    'UnJs': typeof import('../..')['default']
    'Wave': typeof import('../..')['default']
    'WithEmoji': typeof import('../..')['default']
  }
}
declare module '#nuxt-og-image/unocss-config' {
  export type theme = any
}

export {}
