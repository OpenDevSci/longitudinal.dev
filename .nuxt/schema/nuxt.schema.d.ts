export interface NuxtCustomSchema {
 appConfig?: {
  /**
   * Nuxt Icon
   * 
   * Configure Nuxt Icon module preferences.
   * 
  */
  nuxtIcon?: {
   /**
    * Icon Size
    * 
    * Set the default icon size. Set to false to disable the sizing of icon in style.
    * 
    * @default "1em"
    * 
    * @studioIcon material-symbols:format-size-rounded
   */
   size?: string | false,

   /**
    * CSS Class
    * 
    * Set the default CSS class.
    * 
    * @default ""
    * 
    * @studioIcon material-symbols:css
   */
   class?: string,

   /**
    * Icon aliases
    * 
    * Define Icon aliases to update them easily without code changes.
    * 
    * 
    * @studioIcon material-symbols:star-rounded
   */
   aliases?: { [alias: string]: string },

   /**
    * Iconify API Options
    * 
    * Define preferences for Iconify API fetch.
    * 
    * 
    * @studioIcon material-symbols:tv-options-input-settings
   */
   iconifyApiOptions?: {
    /**
     * Iconify API URL
     * 
     * Define a custom Iconify API URL. Useful if you want to use a self-hosted Iconify API. Learn more: https://iconify.design/docs/api.
     * 
     * @default "https://api.iconify.design"
     * 
     * @studioIcon material-symbols:api
    */
    url?: string,

    /**
     * Public Iconify API fallback
     * 
     * Define if the public Iconify API should be used as fallback.
     * 
     * @default false
     * 
     * @studioIcon material-symbols:public
    */
    publicApiFallback?: boolean,
   },
  },

  /**
   * UI
   * 
   * UI Customization.
   * 
   * 
   * @studioIcon i-mdi-palette-outline
  */
  ui?: {
   /**
    * Icons
    * 
    * Manage icons used in UI Pro.
    * 
    * 
    * @studioIcon i-mdi-application-settings-outline
   */
   icons?: {
    /**
     * Search Bar
     * 
     * Icon to display in the search bar.
     * 
     * @default "i-heroicons-magnifying-glass-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-magnify
    */
    search?: string,

    /**
     * Dark mode
     * 
     * Icon of color mode button for dark mode.
     * 
     * @default "i-heroicons-moon-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-moon-waning-crescent
    */
    dark?: string,

    /**
     * Light mode
     * 
     * Icon of color mode button for light mode.
     * 
     * @default "i-heroicons-sun-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-white-balance-sunny
    */
    light?: string,

    /**
     * External Link
     * 
     * Icon for external link.
     * 
     * @default "i-heroicons-arrow-up-right-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-arrow-top-right
    */
    external?: string,

    /**
     * Chevron
     * 
     * Icon for chevron.
     * 
     * @default "i-heroicons-chevron-down-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-chevron-down
    */
    chevron?: string,

    /**
     * Hash
     * 
     * Icon for hash anchors.
     * 
     * @default "i-heroicons-hashtag-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-ph-hash
    */
    hash?: string,
   },

   /**
    * Primary
    * 
    * Primary color of your UI.
    * 
    * @default "green"
    * 
    * @required sky,mint,rose,amber,violet,emerald,fuchsia,indigo,lime,orange,pink,purple,red,teal,yellow,green,blue,cyan,gray,white,black
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-palette-outline
   */
   primary?: string,

   /**
    * Gray
    * 
    * Gray color of your UI.
    * 
    * @default "slate"
    * 
    * @required slate,cool,zinc,neutral,stone
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-palette-outline
   */
   gray?: string,
  },

  /**
   * SEO
   * 
   * SEO configuration.
   * 
   * 
   * @studioIcon i-ph-app-window
  */
  seo?: {
   /**
    * Site Name
    * 
    * Name used in ogSiteName and used as second part of your page title (My page title - Nuxt UI Pro).
    * 
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-web
   */
   siteName?: string,
  },

  /**
   * Header
   * 
   * Header configuration.
   * 
   * 
   * @studioIcon i-mdi-page-layout-header
  */
  header?: {
   /**
    * Logo
    * 
    * Header logo configuration.
    * 
    * 
    * @studioIcon i-mdi-image-filter-center-focus-strong-outline
   */
   logo?: {
    /**
     * Light Mode Logo
     * 
     * Pick an image from your gallery.
     * 
     * @default ""
     * 
     * @studioInput media
     * 
     * @studioIcon i-mdi-white-balance-sunny
    */
    light?: string,

    /**
     * Dark Mode Logo
     * 
     * Pick an image from your gallery.
     * 
     * @default ""
     * 
     * @studioInput media
     * 
     * @studioIcon i-mdi-moon-waning-crescent
    */
    dark?: string,

    /**
     * Alt
     * 
     * Alt to display for accessibility.
     * 
     * @default ""
     * 
     * @studioInput string
     * 
     * @studioIcon i-mdi-alphabet-latin
    */
    alt?: string,
   },

   /**
    * Search Bar
    * 
    * Hide or display the search bar.
    * 
    * @default true
    * 
    * @studioInput boolean
    * 
    * @studioIcon i-mdi-magnify
   */
   search?: boolean,

   /**
    * Color Mode
    * 
    * Hide or display the color mode button in your header.
    * 
    * @default true
    * 
    * @studioInput boolean
    * 
    * @studioIcon i-mdi-moon-waning-crescent
   */
   colorMode?: boolean,

   /**
    * Links
    * 
    * Array of link object displayed in header.
    * 
    * 
    * @studioInput array
    * 
    * @studioIcon i-mdi-link-variant
   */
   links?: Array<any>,
  },

  /**
   * Footer
   * 
   * Footer configuration.
   * 
   * 
   * @studioIcon i-mdi-page-layout-footer
  */
  footer?: {
   /**
    * Footer credits section
    * 
    * Text to display as credits in the footer.
    * 
    * @default ""
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-circle-edit-outline
   */
   credits?: string,

   /**
    * Color Mode
    * 
    * Hide or display the color mode button in the footer.
    * 
    * @default false
    * 
    * @studioInput boolean
    * 
    * @studioIcon i-mdi-moon-waning-crescent
   */
   colorMode?: boolean,

   /**
    * Links
    * 
    * Array of link object displayed in footer.
    * 
    * 
    * @studioInput array
    * 
    * @studioIcon i-mdi-link-variant
   */
   links?: Array<any>,
  },

  /**
   * Table of contents
   * 
   * TOC configuration.
   * 
   * 
   * @studioIcon i-mdi-table-of-contents
  */
  toc?: {
   /**
    * Title
    * 
    * Text to display as title of the main toc.
    * 
    * @default ""
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-format-title
   */
   title?: string,

   /**
    * Bottom
    * 
    * Bottom TOC configuration.
    * 
    * 
    * @studioIcon i-mdi-table-of-contents
   */
   bottom?: {
    /**
     * Title
     * 
     * Text to display as title of the bottom toc.
     * 
     * @default ""
     * 
     * @studioInput string
     * 
     * @studioIcon i-mdi-format-title
    */
    title?: string,

    /**
     * Edit Page Link
     * 
     * URL of your repository content folder.
     * 
     * @default ""
     * 
     * @studioInput string
     * 
     * @studioIcon i-ph-note-pencil
    */
    edit?: string,

    /**
     * Links
     * 
     * Array of link object displayed in bottom toc.
     * 
     * 
     * @studioInput array
     * 
     * @studioIcon i-mdi-link-variant
    */
    links?: Array<any>,
   },
  },
 },
}
export type CustomAppConfig = Exclude<NuxtCustomSchema['appConfig'], undefined>
type _CustomAppConfig = CustomAppConfig

declare module '@nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}
