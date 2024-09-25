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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))} data-v-fa159d7d><header class="mb-12" data-v-fa159d7d><h1 class="text-4xl font-bold text-center text-gray-300" data-v-fa159d7d>About</h1></header><section class="mb-12" data-v-fa159d7d><h2 class="text-2xl font-semibold mb-4 text-gray-200" data-v-fa159d7d>Our Mission</h2><p class="text-gray-100 leading-relaxed" data-v-fa159d7d> Longitudinal.dev is a collaborative and community-driven hub of resources for longitudinal data science. Whether you\u2019re just starting or seeking to expand your expertise, you\u2019ll find tutorials, open-source tools, code examples, and documentation that may be useful at different stages of research. The platform is fully open source\u2014- feel free to explore and see if you find something useful, or if you have something to share or just want to get involved, take a look at our <a href="https://github.com/OpenDevSci/LongDev-ABCD/blob/main/docs/Contributing.md" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline" data-v-fa159d7d> contribution guide </a>. </p></section><section class="mb-12" data-v-fa159d7d><h2 class="text-2xl font-semibold mb-4 text-gray-200" data-v-fa159d7d>What We Offer</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-fa159d7d><div data-v-fa159d7d><h3 class="text-xl font-medium mb-2 text-gray-300" data-v-fa159d7d>Tutorials</h3><p class="text-gray-100" data-v-fa159d7d> Our step-by-step guides walk through complex methodologies, making advanced longitudinal analysis accessible. From foundational concepts to specialized techniques, our tutorials are crafted to enhance your analytical skills. </p></div><div data-v-fa159d7d><h3 class="text-xl font-medium mb-2 text-gray-300" data-v-fa159d7d> Open-Source Tools </h3><p class="text-gray-100" data-v-fa159d7d> Explore a curated collection of open-source software and packages that streamline your data analysis process and increase your effectiveness in handling longitudinal data. </p></div><div data-v-fa159d7d><h3 class="text-xl font-medium mb-2 text-gray-300" data-v-fa159d7d>Code Examples</h3><p class="text-gray-100" data-v-fa159d7d> Practical code snippets and comprehensive examples in various programming languages illustrate key concepts, enabling you to apply theory to practice. </p></div><div data-v-fa159d7d><h3 class="text-xl font-medium mb-2 text-gray-300" data-v-fa159d7d>Documentation</h3><p class="text-gray-100" data-v-fa159d7d> Access detailed documentation on methodologies, statistical models, and best practices. Our documentation serves as a reliable reference to support your analytical endeavors. </p></div></div></section><section class="mb-12" data-v-fa159d7d><h2 class="text-2xl font-semibold mb-4 text-gray-200" data-v-fa159d7d> Community-Driven Collaboration </h2><p class="text-gray-100 leading-relaxed mb-4" data-v-fa159d7d> Longitudinal.dev is built on the collective expertise and contributions of its community. We believe that shared knowledge fosters innovation and accelerates progress. Everyone is welcome to utilize our resources for personal learning or research, and we encourage you to contribute by sharing your own tools, tutorials, or insights. Your participation enriches our community and supports fellow researchers in their endeavors. </p><div class="flex space-x-4" data-v-fa159d7d><a href="https://github.com/OpenDevSci/LongDev-ABCD/blob/main/docs/Contributing.md" target="_blank" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition" data-v-fa159d7d>Contribute</a><a href="https://longitudinaldev.slack.com" target="_blank" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition" data-v-fa159d7d>Connect</a><a href="#" class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition" data-v-fa159d7d>Collaborate</a></div></section><section class="mb-12" data-v-fa159d7d><h2 class="text-2xl font-semibold mb-4 text-gray-200" data-v-fa159d7d>Acknowledgments</h2><p class="text-gray-100 leading-relaxed mb-4" data-v-fa159d7d> We extend our gratitude to all contributors, supporters, and users who make Longitudinal.dev a valuable resource for the research community. Your dedication and expertise drive our continuous improvement and expansion. </p></section><section data-v-fa159d7d><h2 class="text-2xl font-semibold mb-4 text-gray-200" data-v-fa159d7d>Contact Us</h2><p class="text-gray-100 leading-relaxed mb-4" data-v-fa159d7d> Have questions, suggestions, or ideas for improving Longitudinal.dev? We&#39;d love to hear from you. Reach out to us at <a href="mailto:contact@longitudinal.dev" class="text-blue-500 hover:underline" data-v-fa159d7d>support@longitudinal.dev</a> or connect through our <a href="https://longitudinaldev.slack.com" class="text-blue-500 hover:underline" data-v-fa159d7d>community forums</a> and <a href="https://discord.com/channels/1288111827649171456/1288111940820013139" class="text-blue-500 hover:underline" data-v-fa159d7d>social media channels</a>. </p></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa159d7d"]]);

export { about as default };
//# sourceMappingURL=about-Wzru_b_F.mjs.map
