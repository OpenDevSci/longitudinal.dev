import { defineAsyncComponent, defineComponent, onErrorCaptured, createVNode } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue/index.mjs';
import { c as createError } from './server.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/ofetch/dist/node.mjs';
import '../_/renderer3.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/h3/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/devalue/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/destr/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/ufo/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/ohash/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/hookable/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/klona/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/scule/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/defu/dist/defu.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/pathe/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/shiki/dist/core.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unified/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark-util-character/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/slugify/slugify.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-parse/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-rehype/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/hast-util-to-string/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/github-slugger/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/detab/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-emoji/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-gfm/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/rehype-external-links/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/rehype-raw/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unhead/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unctx/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/cookie-es/dist/index.mjs';

const islandComponents = {
  "BrandedLogo": defineAsyncComponent(() => import(
    './BrandedLogo-DJaHntjk.mjs'
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    './Frame-BFDZL75_.mjs'
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    './Nuxt-DzArWBIO.mjs'
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    './NuxtSeo-pMEYL9De.mjs'
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    './Pergel-1vdfK46m.mjs'
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    './SimpleBlog-CiHNthUV.mjs'
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    './UnJs-C2T8pG7u.mjs'
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    './Wave-DkmQ0nuL.mjs'
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    './WithEmoji-CdhPpvLx.mjs'
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-Bj21wAsm.mjs.map
