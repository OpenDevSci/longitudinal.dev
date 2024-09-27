import { H as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, createElementBlock, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
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
const __nuxt_component_1 = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "plotly-view",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_pie_chart = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Table View</h1><h1>nuxt-plotly module playground!</h1>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_pie_chart, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/plotly-view.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=plotly-view-CtuaG_PZ.js.map
