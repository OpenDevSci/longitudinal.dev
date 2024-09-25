import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { g as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

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

export { SimpleCarousel as default };
//# sourceMappingURL=SimpleCarousel-O-inhhmQ.mjs.map
