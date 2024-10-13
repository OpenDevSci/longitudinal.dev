import { useSSRContext } from 'file:///Users/shawes/git/opendevsci/longitudinal-dev/node_modules/vue/index.mjs';
import { g as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`test`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { RComponent as R };
//# sourceMappingURL=RComponent-lJZ8ucJQ.mjs.map
