import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { g as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "ufo";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
import "@vueuse/core";
import "klona";
import "tailwind-merge";
import "ohash";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "scule";
import "destr";
import "cookie-es";
const _sfc_main = {
  __name: "CardComponent1",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("tab1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-41b4b2aa><button data-v-41b4b2aa>Tab 1</button><button data-v-41b4b2aa>Tab 2</button><button data-v-41b4b2aa>Tab 3</button>`);
      if (activeTab.value === "tab1") {
        _push(`<div data-v-41b4b2aa>`);
        ssrRenderSlot(_ctx.$slots, "tab1-content", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "tab2") {
        _push(`<div data-v-41b4b2aa>`);
        ssrRenderSlot(_ctx.$slots, "tab2-content", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "tab3") {
        _push(`<div data-v-41b4b2aa>`);
        ssrRenderSlot(_ctx.$slots, "tab3-content", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/CardComponent1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardComponent1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41b4b2aa"]]);
export {
  CardComponent1 as default
};
//# sourceMappingURL=CardComponent1-CUBt7ISL.js.map
