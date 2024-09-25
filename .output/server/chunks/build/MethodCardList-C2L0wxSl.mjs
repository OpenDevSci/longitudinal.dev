import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MethodCard",
  __ssrInlineRender: true,
  props: {
    card: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.card.link,
        class: "method-card group",
        style: { "--primary-color": _ctx.card.background }
      }, _attrs))} data-v-42956700><div class="card-content relative isolate" data-v-42956700><div class="card-top" data-v-42956700><h3 data-v-42956700>${ssrInterpolate(_ctx.card.title)}</h3></div><div class="card-bottom" data-v-42956700><p class="view-more-button" data-v-42956700>View more \u2192</p></div></div></a>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MethodCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MethodCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-42956700"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MethodCardList",
  __ssrInlineRender: true,
  setup(__props) {
    const differenceScores = [
      {
        title: "Basic Model",
        link: "/abcd-study/traditional-linear-models/differencescores_pairedttests",
        background: "#D5A05A"
      },
      {
        title: "Simple Regression",
        link: "/abcd-study/traditional-linear-models/differencescores_simpleregression",
        background: "#D5A05A"
      }
    ];
    const residualizedChangeScores = [
      {
        title: "Residualized Change Scores",
        link: "/residualized-change-scores",
        background: "#5A9E6D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#5A9E6D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#5A9E6D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#5A9E6D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#5A9E6D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#5A9E6D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#5A9E6D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#5A9E6D"
      }
    ];
    const linearMixedEffectsModels = [
      {
        title: "Linear Mixed Effects Models",
        link: "/linear-mixed-effects-models",
        background: "#7A3E9D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#7A3E9D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#7A3E9D"
      },
      {
        title: "xxxx",
        link: "/xxxx",
        background: "#7A3E9D"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4518e6a9><div class="section-header" data-v-4518e6a9>Difference Scores</div><div class="method-cards-grid" data-v-4518e6a9><!--[-->`);
      ssrRenderList(differenceScores, (card, index) => {
        _push(ssrRenderComponent(MethodCard, {
          key: index,
          card,
          style: { "--top-color": card.background }
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="section-header mt-8" data-v-4518e6a9>Residualized Change Scores</div><div class="method-cards-grid" data-v-4518e6a9><!--[-->`);
      ssrRenderList(residualizedChangeScores, (card, index) => {
        _push(ssrRenderComponent(MethodCard, {
          key: index,
          card,
          style: { "--top-color": card.background }
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="section-header mt-8" data-v-4518e6a9>Linear Mixed-Effects Models</div><div class="method-cards-grid" data-v-4518e6a9><!--[-->`);
      ssrRenderList(linearMixedEffectsModels, (card, index) => {
        _push(ssrRenderComponent(MethodCard, {
          key: index,
          card,
          style: { "--top-color": card.background }
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MethodCardList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MethodCardList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4518e6a9"]]);

export { MethodCardList as default };
//# sourceMappingURL=MethodCardList-C2L0wxSl.mjs.map
