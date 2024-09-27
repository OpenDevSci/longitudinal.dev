import { R as RComponent } from "./RComponent-lJZ8ucJQ.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  components: {
    RComponent
  },
  layout: "playground"
  // Specify the layout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RComponent = RComponent;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Contribute Page</h1>`);
  _push(ssrRenderComponent(_component_RComponent, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contribute.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contribute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contribute as default
};
//# sourceMappingURL=contribute-zUuI97Aa.js.map
