import { g as _export_sfc, b as __nuxt_component_0$9 } from './server.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/images/r-logo.png");
const _sfc_main$1 = {
  __name: "BookCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    author: String,
    description: String,
    image: String,
    link: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "book" }, _attrs))} data-v-ede2a85d><a${ssrRenderAttr("href", __props.link)} target="_blank" rel="noopener noreferrer" data-v-ede2a85d><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)} class="book-cover" data-v-ede2a85d><h3 data-v-ede2a85d>${ssrInterpolate(__props.title)}</h3><p data-v-ede2a85d><strong data-v-ede2a85d>Author:</strong> ${ssrInterpolate(__props.author)}</p><p data-v-ede2a85d><strong data-v-ede2a85d>Description:</strong> ${ssrInterpolate(__props.description)}</p></a></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BookCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BookCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ede2a85d"]]);
const _sfc_main = {
  __name: "resources_seenote",
  __ssrInlineRender: true,
  setup(__props) {
    const books = ref([
      {
        title: "R for Data Science",
        author: "Hadley Wickham & Garrett Grolemund",
        description: "This book will teach you how to do data science with R, covering the entire data analysis workflow.",
        image: "/images/r-for-data-science-cover.jpg",
        link: "https://r4ds.hadley.nz/"
      },
      {
        title: "Advanced R",
        author: "Hadley Wickham",
        description: "A deep dive into the R language, helping you understand R's data structures and programming paradigms.",
        image: "/images/advanced-r.png",
        link: "https://adv-r.hadley.nz/"
      },
      {
        title: "Efficient R Programming",
        author: "Colin Gillespie & Robin Lovelace",
        description: "This book provides tools and techniques to make your R code more efficient.",
        image: "/images/efficient-r-programming.png",
        link: "https://csgillespie.github.io/efficientR/"
      },
      {
        title: "R Programming for Data Science",
        author: "Roger D. Peng",
        description: "A comprehensive introduction to R programming for data science, covering fundamental concepts and techniques.",
        image: "/images/r-programming-for-data-science.png",
        link: "https://bookdown.org/rdpeng/RProgDA/"
      },
      {
        title: "Hands-On Programming with R",
        author: "Garrett Grolemund",
        description: "This book provides a practical introduction to programming with R, focusing on hands-on experience and real-world examples.",
        image: "/images/hands-on-programming-with-r.jpg",
        link: "https://rstudio-education.github.io/hopr/"
      },
      {
        title: "R Inferno",
        author: "Patrick Burns",
        description: "A guide to the pitfalls of R, providing insights into common errors and how to avoid them.",
        image: "/images/r-inferno.jpg",
        link: "http://www.burns-stat.com/pages/Tutor/R_inferno.pdf"
      },
      {
        title: "Software for Data Analysis with R",
        author: "John M. Chambers",
        description: "This book covers software development for data analysis, with a focus on R and its applications.",
        image: "/images/software-for-data-analysis-with-r.jpg",
        link: "https://bookdown.org/rdpeng/RProgDA/"
      },
      {
        title: "The Pirate's Guide to R",
        author: "Nathaniel D. Phillips",
        description: "A fun and accessible introduction to R, presented in a pirate-themed format to engage readers.",
        image: "/images/yarrr-the-pirates-guide-to-r.jpeg",
        link: "https://bookdown.org/ndphillips/YaRrr/"
      },
      {
        title: "The Art of R Programming",
        author: "Norman Matloff",
        description: "This book provides a comprehensive guide to R programming, covering everything from basic concepts to advanced techniques.",
        image: "/images/the-art-of-r-programming.jpg",
        link: "https://web.cs.ucdavis.edu/~matloff/matloff/public_html/145/PLN/RMaterials/NSPpart.pdf"
      },
      {
        title: "Deep R Programming",
        author: "Roger D. Peng",
        description: "An in-depth exploration of R programming, focusing on advanced topics and techniques.",
        image: "/images/deep-r-programming.png",
        link: "https://deepr.gagolewski.com/"
      }
    ]);
    const videos = ref([
      {
        title: "Introduction to Data Science",
        link: "https://www.youtube.com/embed/example1",
        description: "An introductory video on data science concepts and techniques."
      },
      {
        title: "Advanced R Programming",
        link: "https://www.youtube.com/embed/videoseries?list=PLm-R300a1uRfH-cy2-KuOD7gHzSRFnX-h",
        description: "A deep dive into advanced R programming topics."
      },
      {
        title: "Data Wrangling with R",
        link: "https://www.youtube.com/embed/videoseries?si=dNM2v87Ri3byUhe-&amp;list=PLEiEAq2VkUUKAw0aAJ1W4jpZ1q9LpX4yG",
        description: "Learn the essentials of data wrangling with R."
      }
    ]);
    const tutorials = ref([
      {
        title: "Interactive R Tutorial",
        link: "https://www.example.com/interactive-tutorial",
        description: "An interactive tutorial to learn R programming."
      },
      {
        title: "Another Interactive Tutorial",
        link: "https://www.example.com/another-interactive-tutorial",
        description: "Another great interactive tutorial for learning advanced R programming techniques."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-2e61ab35><header class="r-header flex justify-center items-center text-white h-64" data-v-2e61ab35><div class="r-logo-animation flex items-end" data-v-2e61ab35><img${ssrRenderAttr("src", _imports_0)} alt="Learn R" class="w-32 h-32" data-v-2e61ab35><span class="text-4xl font-bold ml-2" data-v-2e61ab35>esources</span></div></header><header class="header bg-white p-4 text-black h-20" data-v-2e61ab35><nav class="navigation flex justify-center gap-4 h-full items-center" data-v-2e61ab35>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#books",
        class: "nav-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Books `);
          } else {
            return [
              createTextVNode(" Books ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#interactive",
        class: "nav-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Interactive tutorials `);
          } else {
            return [
              createTextVNode(" Interactive tutorials ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#videos",
        class: "nav-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Videos `);
          } else {
            return [
              createTextVNode(" Videos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#cheatsheets",
        class: "nav-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cheatsheets `);
          } else {
            return [
              createTextVNode(" Cheatsheets ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#text-tutorials",
        class: "nav-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blogs `);
          } else {
            return [
              createTextVNode(" Blogs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></header><main class="neve-main" data-v-2e61ab35><section id="books" data-v-2e61ab35><div class="container mx-auto" data-v-2e61ab35><h2 class="text-2xl font-bold text-center mb-4" data-v-2e61ab35>Open Source R</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-v-2e61ab35><!--[-->`);
      ssrRenderList(books.value, (book, index) => {
        _push(ssrRenderComponent(BookCard, {
          key: index,
          title: book.title,
          author: book.author,
          description: book.description,
          image: book.image,
          link: book.link
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section id="videos" class="py-8 bg-gray-200 dark:bg-white" data-v-2e61ab35><div class="container mx-auto" data-v-2e61ab35><h2 class="text-2xl font-bold text-center text-black mb-4" data-v-2e61ab35> Instructional Videos </h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-v-2e61ab35><!--[-->`);
      ssrRenderList(videos.value, (video, index) => {
        _push(`<div class="video" data-v-2e61ab35><iframe${ssrRenderAttr("src", video.link)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-64" data-v-2e61ab35></iframe><h3 class="text-lg font-semibold mt-2" data-v-2e61ab35>${ssrInterpolate(video.title)}</h3><p data-v-2e61ab35>${ssrInterpolate(video.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section id="interactive" data-v-2e61ab35><div class="container mx-auto" data-v-2e61ab35><h2 class="text-2xl font-bold text-center mb-4" data-v-2e61ab35> Interactive Tutorials </h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-v-2e61ab35><!--[-->`);
      ssrRenderList(tutorials.value, (tutorial, index) => {
        _push(`<div class="tutorial" data-v-2e61ab35><a${ssrRenderAttr("href", tutorial.link)} target="_blank" rel="noopener noreferrer" class="block bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg" data-v-2e61ab35><h3 class="text-lg font-semibold" data-v-2e61ab35>${ssrInterpolate(tutorial.title)}</h3><p data-v-2e61ab35>${ssrInterpolate(tutorial.description)}</p></a></div>`);
      });
      _push(`<!--]--></div></div></section><section id="cheatsheets" class="py-8 bg-blue-100 dark:bg-white" data-v-2e61ab35><div class="container mx-auto" data-v-2e61ab35><h2 class="text-2xl font-bold text-center mb-4 text-black" data-v-2e61ab35> Cheatsheets </h2></div></section><section id="additional-tutorials" data-v-2e61ab35><div class="container mx-auto" data-v-2e61ab35><h2 class="text-2xl font-bold text-center mb-4" data-v-2e61ab35> Add additional tutorials </h2></div></section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources_seenote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resources_seenote = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e61ab35"]]);

export { resources_seenote as default };
//# sourceMappingURL=resources_seenote-BVEp4Rt1.mjs.map
