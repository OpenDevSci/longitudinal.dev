import { f as useAppConfig, u as useUI, b as __nuxt_component_0$9, _ as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, renderSlot, useSSRContext } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/ofetch/dist/node.mjs';
import '../_/renderer3.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/h3/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/devalue/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/destr/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH4",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const config = computed(() => ({
      wrapper: "scroll-mt-[calc(48px+24px+var(--header-height))] lg:scroll-mt-[calc(24px+var(--header-height))]",
      icon: {
        wrapper: "-ml-6 pr-2 py-1 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute",
        base: "w-4 h-4 text-primary",
        name: appConfig.ui.icons.hash
      }
    }));
    const { ui } = useUI("content.prose.h4", void 0, config, void 0, true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$9;
      const _component_UIcon = __nuxt_component_1$1;
      _push(`<h4${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: unref(ui).wrapper
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: `#${__props.id}`,
        class: "group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(ui).icon.name,
              class: unref(ui).icon.base
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).icon.wrapper
              }, [
                createVNode(_component_UIcon, {
                  name: unref(ui).icon.name,
                  class: unref(ui).icon.base
                }, null, 8, ["name", "class"])
              ], 2),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h4>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseH4-DKhTZCHT.mjs.map
