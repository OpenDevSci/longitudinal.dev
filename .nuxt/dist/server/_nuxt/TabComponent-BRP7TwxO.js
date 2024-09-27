import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { f as _export_sfc } from "../server.mjs";
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
  __name: "TabComponent",
  __ssrInlineRender: true,
  emits: ["update:activeTab"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f8926015><button class="${ssrRenderClass({ active: _ctx.activeTab === "tab1" })}" data-v-f8926015>Tab 1</button><button class="${ssrRenderClass({ active: _ctx.activeTab === "tab2" })}" data-v-f8926015>Tab 2</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/TabComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TabComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8926015"]]);
export {
  TabComponent as default
};
//# sourceMappingURL=TabComponent-BRP7TwxO.js.map
