import { u as useUI, a8 as useToast, a as __nuxt_component_0$4 } from './server.mjs';
import { useClipboard } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@vueuse/core/index.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue/server-renderer/index.mjs';
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
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/cookie-es/dist/index.mjs';

function useCopyToClipboard(options = {}) {
  const { copy: copyToClipboard, isSupported } = useClipboard();
  const toast = useToast();
  function copy(text, success = {}, failure = {}) {
    if (!isSupported) {
      return;
    }
    copyToClipboard(text).then(() => {
      if (!success.title && !success.description) {
        return;
      }
      toast.add({ ...success, ...options });
    }, function(e) {
      toast.add({
        ...failure,
        description: failure.description || e.message,
        ...options
      });
    });
  }
  return {
    copy
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCodeButton",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const config = {
      icon: {
        copy: "i-heroicons-clipboard-document",
        copied: "i-heroicons-clipboard-document-check"
      }
    };
    const { ui } = useUI("content.prose.code.button", void 0, config, void 0, true);
    const clipboard = useCopyToClipboard({ timeout: 2e3 });
    const icon = ref(ui.value.icon.copy);
    function copy() {
      clipboard.copy(props.code, { title: "Copied to clipboard!" });
      icon.value = ui.value.icon.copied;
      setTimeout(() => {
        icon.value = ui.value.icon.copy;
      }, 2e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$4;
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        icon: unref(icon),
        color: "gray",
        variant: "link",
        size: "xs",
        "aria-label": "Copy code to clipboard",
        tabindex: "-1",
        onClick: copy
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseCodeButton-CrZM48we.mjs.map
