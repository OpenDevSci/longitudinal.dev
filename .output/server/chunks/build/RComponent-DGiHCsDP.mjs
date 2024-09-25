import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { g as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "RComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const userCode = ref(`
      library(readr)
      url <- "https://gist.githubusercontent.com/swhawes/447351298561aa1a9d90e87c650977ff/raw/c18a661edeae55718b0aa424273742e977a737da/longitudinal_dataset.csv"
      data <- read_csv(url)
      model <- lm(CogTestScore ~ Education, data = data)
      summary(model)$coefficients
    `);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-c75c3f09><h2 class="title" data-v-c75c3f09>Interactive Regression Example</h2><div data-v-c75c3f09><textarea rows="8" cols="60" class="code-editor" data-v-c75c3f09>${ssrInterpolate(userCode.value)}</textarea><small data-v-c75c3f09>Edit the R code and click &quot;Run&quot; to see the results.</small></div><button class="run-button" data-v-c75c3f09>Run Regression</button><h3 data-v-c75c3f09>Regression Output</h3><div id="regression-output" class="output-box" data-v-c75c3f09> Result will appear here... </div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c75c3f09"]]);

export { RComponent as R };
//# sourceMappingURL=RComponent-DGiHCsDP.mjs.map
