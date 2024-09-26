import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { R as RComponent } from "./RComponent-lJZ8ucJQ.js";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`test`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MeanComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MeanComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "sandbox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sandbox-container" }, _attrs))} data-v-f21d66f6><h1 class="sandbox-title" data-v-f21d66f6>Sandbox: Interactive R Playground</h1><p class="sandbox-description" data-v-f21d66f6> Welcome to the interactive R playground. Here, you can test and run your R code directly in the browser. Modify the provided R code and see the output instantly. </p><div data-v-f21d66f6>`);
      _push(ssrRenderComponent(MeanComponent, null, null, _parent));
      _push(`</div><div data-v-f21d66f6>test</div><div class="r-component-wrapper" data-v-f21d66f6>`);
      _push(ssrRenderComponent(RComponent, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sandbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sandbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f21d66f6"]]);
export {
  sandbox as default
};
//# sourceMappingURL=sandbox-BlKKuqaQ.js.map
