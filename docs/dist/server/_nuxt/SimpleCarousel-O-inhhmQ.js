import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel-container" }, _attrs))} data-v-f88a965c><input type="radio" name="position" checked data-v-f88a965c><input type="radio" name="position" data-v-f88a965c><input type="radio" name="position" data-v-f88a965c><input type="radio" name="position" data-v-f88a965c><input type="radio" name="position" data-v-f88a965c><main id="carousel" data-v-f88a965c><div class="item" data-v-f88a965c><h2 data-v-f88a965c>Nested Models</h2><p data-v-f88a965c> Include random effects at multiple levels for within-group and between-group variability. </p></div><div class="item" data-v-f88a965c><h2 data-v-f88a965c>Time-Varying Covariates</h2><p data-v-f88a965c> Model how changes in covariates like stress or income influence outcomes over time. </p></div><div class="item" data-v-f88a965c><h2 data-v-f88a965c>Interaction Terms</h2><p data-v-f88a965c> Examine how predictor effects vary using interaction terms in random slopes. </p></div><div class="item" data-v-f88a965c><h2 data-v-f88a965c>Model Selection</h2><p data-v-f88a965c> Use AIC, BIC, or penalization techniques to choose the best model. </p></div><div class="item" data-v-f88a965c><h2 data-v-f88a965c>Bayesian Models</h2><p data-v-f88a965c> Bayesian methods offer flexible alternatives for linear mixed models. </p></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SimpleCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SimpleCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f88a965c"]]);
export {
  SimpleCarousel as default
};
//# sourceMappingURL=SimpleCarousel-O-inhhmQ.js.map
