import { mergeProps, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main$1 = {
  name: "ArticleCard",
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $props.article.link,
    class: "HomePageArticleCard",
    style: { background: $props.article.background },
    target: "_blank"
  }, _attrs))} data-v-9b3bfe7d><span class="HomePageArticleCard__title" data-v-9b3bfe7d>${ssrInterpolate($props.article.title)}</span><button class="HomePageArticleCard__cta" data-v-9b3bfe7d> View more <span class="HomePageArticleCard__cta__icon" data-v-9b3bfe7d></span></button></a>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticleCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b3bfe7d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleList",
  __ssrInlineRender: true,
  setup(__props) {
    const articles = [
      {
        title: "Data Wrangling",
        link: "abcd-study/data-wrangling",
        background: "linear-gradient(180deg, #4CAF97 0%, #51C6AB 100%)"
      },
      {
        title: "Models for Two Time Points",
        // link: "abcd-study/",
        background: "linear-gradient(180deg, #5A5EB7 0%, #7075EA 100%)"
      },
      {
        title: "Traditional Linear Models",
        link: "abcd-study/traditional-linear-models",
        background: "linear-gradient(180deg, #AF6160 0%, #CA8A89 100%)"
      },
      {
        title: "Traditional Nonlinear Models",
        link: "abcd-study/traditional-nonlinear-models",
        background: "linear-gradient(180deg, #674A98 0%, #A594C3 100%)"
      },
      {
        title: "Structural Equation Models",
        link: "abcd-study/sem-models",
        background: "linear-gradient(180deg, #25879C 0%, #54C3DB 100%)"
      },
      {
        title: "Advanced Structural Equation Models",
        link: "abcd-study/advanced-sem-models",
        background: "linear-gradient(180deg, #4572B6 0%, #789EDA 100%)"
      },
      {
        title: "Neuroimaging Models",
        link: "abcd-study/neuroimaging-models",
        background: "linear-gradient(180deg, #CC733E 0%, #EAA378 100%)"
      },
      {
        title: "Twin and Genetics Models",
        link: "abcd-study/twin-genetics-models",
        background: "linear-gradient(180deg, #F1637C 0%, #E399A6 100%)"
      },
      {
        title: "Additional Model Set to be Added",
        // link: "abcd-study/",
        background: "linear-gradient(180deg, #4572B6 0%, #789EDA 100%)"
      },
      {
        title: "Additional Model Set to be Added",
        // link: "abcd-study/",
        background: "linear-gradient(180deg, #CC733E 0%, #EAA378 100%)"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "articles-grid" }, _attrs))} data-v-b0703833><!--[-->`);
      ssrRenderList(articles, (article, index) => {
        _push(ssrRenderComponent(ArticleCard, {
          key: index,
          article
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticleList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0703833"]]);
export {
  ArticleList as default
};
//# sourceMappingURL=ArticleList-BDLP6qgF.js.map
