import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { R as RComponent } from "./RComponent-DGiHCsDP.js";
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
  __name: "MeanComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const descStatsCode = ref(`
    library(tidyverse)
    url <- "https://gist.githubusercontent.com/swhawes/447351298561aa1a9d90e87c650977ff/raw/c18a661edeae55718b0aa424273742e977a737da/longitudinal_dataset.csv"
    data <- read_csv(url) %>% as_tibble()
    desc_stats <- data %>%
      summarise(
        mean_Age = mean(Age, na.rm = TRUE),
        mean_Education = mean(Education, na.rm = TRUE),
        mean_CogTestScore = mean(CogTestScore, na.rm = TRUE)
      )
    desc_stats
  `);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-9593bd47><h2 class="title" data-v-9593bd47>Calculate Descriptive Statistics with Tidyverse</h2><p data-v-9593bd47> Click &quot;Run&quot; to calculate and display the descriptive statistics for the selected variables (Age, Education, CogTestScore). </p><textarea rows="8" cols="60" class="code-editor" data-v-9593bd47>${ssrInterpolate(descStatsCode.value)}</textarea><small data-v-9593bd47>Edit the R code and click &quot;Run&quot; to see the results.</small><button class="run-button" data-v-9593bd47>Run</button><h3 data-v-9593bd47>Descriptive Statistics</h3><div id="desc-output" class="output-box" data-v-9593bd47> Descriptive statistics will appear here... </div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MeanComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MeanComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9593bd47"]]);
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
//# sourceMappingURL=sandbox-2tXFN0ID.js.map
