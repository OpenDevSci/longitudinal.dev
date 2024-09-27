import { a as buildAssetsURL } from '../_/renderer.mjs';
import { openBlock, createBlock, withKeys, withModifiers, renderSlot, createVNode, withDirectives, Fragment, renderList, toDisplayString, vShow, createCommentVNode, Transition, withCtx, createTextVNode, defineComponent, ref, computed, provide, onMounted, onUnmounted, watchEffect, nextTick, inject, useSSRContext, h as h$1, unref, resolveDynamicComponent, resolveComponent, mergeProps } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue/index.mjs';
import { ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderVNode, ssrRenderStyle, ssrRenderClass, ssrRenderAttrs } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue/server-renderer/index.mjs';
import { D as w$2, E as w$4, F as h, C as o$1, G as t$2, H as u$5, I as i$1, J as A$2, K as I$1, L as s$3, M as l$2, N as N$4, f as _export_sfc, B as i$3, O as o$2, P as v$2, Q as N$5, R as _, Y as Ye, T as Ge$1, S as O$1 } from './server.mjs';
import { _ as _imports_1$1 } from './python-logo-CMYPSWWH.mjs';
import { Bars3Icon, XMarkIcon } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@heroicons/vue/24/outline/esm/index.js';
import { ChevronRightIcon, ChevronLeftIcon, CalendarIcon, MapPinIcon, EllipsisHorizontalIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowPathIcon } from 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@heroicons/vue/20/solid/esm/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/h3/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/devalue/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/ufo/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/destr/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/hookable/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/klona/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/scule/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/defu/dist/defu.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/ohash/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/pathe/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/shiki/dist/core.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unified/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark-util-character/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/slugify/slugify.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-parse/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-rehype/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/hast-util-to-string/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/github-slugger/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/detab/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-emoji/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/remark-gfm/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/rehype-external-links/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/rehype-raw/index.js';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unhead/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/unctx/dist/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/shawes/git/opendevsci/longitudinal.dev/node_modules/cookie-es/dist/index.mjs';

function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

function not (fun) {
  return (...params) => !fun(...params)
}

function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1
}

function filterOptions (options, search, label, customLabel) {
  return search ? options
    .filter((option) => includes(customLabel(option, label), search))
    .sort((a, b) => customLabel(a, label).length - customLabel(b, label).length) : options
}

function stripGroups (options) {
  return options.filter((option) => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

function filterGroups (search, label, values, groupLabel, customLabel) {
  return (groups) =>
    groups.map((group) => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`);
        return []
      }
      const groupOptions = filterOptions(group[values], search, label, customLabel);

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var multiselectMixin = {
  data () {
    return {
      search: '',
      isOpen: false,
      preferredOpenDirection: 'below',
      optimizedHeight: this.maxHeight
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default (option, label) {
        if (isEmpty(option)) return ''
        return label ? option[label] : option
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
    */
    preventAutofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    /* istanbul ignore else */
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
    }
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue () {
      return this.modelValue || this.modelValue === 0
        ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue]
        : []
    },
    filteredOptions () {
      const search = this.search || '';
      const normalizedSearch = search.toLowerCase().trim();

      let options = this.options.concat();

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      options = this.hideSelected
        ? options.filter(not(this.isSelected))
        : options;

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({isTag: true, label: search});
        } else {
          options.unshift({isTag: true, label: search});
        }
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy])
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.multiple
        ? this.searchable ? '' : this.placeholder
        : this.internalValue.length
          ? this.getOptionLabel(this.internalValue[0])
          : this.searchable ? '' : this.placeholder
    }
  },
  watch: {
    internalValue: {
      handler () {
      /* istanbul ignore else */
        if (this.resetAfter && this.internalValue.length) {
          this.search = '';
          this.$emit('update:modelValue', this.multiple ? [] : null);
        }
      },
      deep: true
    },
    search () {
      this.$emit('search-change', this.search);
    }
  },
  emits: ['open', 'search-change', 'close', 'select', 'update:modelValue', 'remove', 'tag'],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue () {
      return this.multiple
        ? this.internalValue
        : this.internalValue.length === 0
          ? null
          : this.internalValue[0]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch (query) {
      this.search = query;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption (query) {
      return !this.options
        ? false
        : this.optionKeys.indexOf(query) > -1
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected (option) {
      const opt = this.trackBy
        ? option[this.trackBy]
        : option;
      return this.valueKeys.indexOf(opt) > -1
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled (option) {
      return !!option.$isDisabled
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      const label = this.customLabel(option, this.label);
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return
      }
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        const isSelected = this.isSelected(option);

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return
        }

        if (this.multiple) {
          this.$emit('update:modelValue', this.internalValue.concat([option]));
        } else {
          this.$emit('update:modelValue', option);
        }

        this.$emit('select', option, this.id);

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = '';
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id);

        const groupValues = this.trackBy ? group[this.groupValues].map(val => val[this.trackBy]) : group[this.groupValues];
        const newValue = this.internalValue.filter(
          option => groupValues.indexOf(this.trackBy ? option[this.trackBy] : option) === -1
        );

        this.$emit('update:modelValue', newValue);
      } else {
        let optionsToAdd = group[this.groupValues].filter(
          option => !(this.isOptionDisabled(option) || this.isSelected(option))
        );

        // if max is defined then just select options respecting max
        if (this.max) {
          optionsToAdd.splice(this.max - this.internalValue.length);
        }

        this.$emit('select', optionsToAdd, this.id);
        this.$emit(
          'update:modelValue',
          this.internalValue.concat(optionsToAdd)
        );
      }

      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every((option) => this.isSelected(option) || this.isOptionDisabled(option)
      )
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled (group) {
      return group[this.groupValues].every(this.isOptionDisabled)
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement (option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return
      /* istanbul ignore else */
      if (option.$isDisabled) return
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return
      }

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option);

      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', null);
      }
      this.$emit('remove', option, this.id);

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      this.adjustPosition();
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = '';
        if (!this.preventAutofocus) this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else if (!this.preventAutofocus) {
        if (typeof this.$el !== 'undefined') this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      this.isOpen = false;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (this.$refs.search !== null && typeof this.$refs.search !== 'undefined') this.$refs.search.blur();
      } else {
        if (typeof this.$el !== 'undefined') this.$el.blur();
      }
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition () {
      return
    }
  }
};

var pointerMixin = {
  data () {
    return {
      pointer: 0,
      pointerDirty: false
    }
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition () {
      return this.pointer * this.optionHeight
    },
    visibleElements () {
      return this.optimizedHeight / this.optionHeight
    }
  },
  watch: {
    filteredOptions () {
      this.pointerAdjust();
    },
    isOpen () {
      this.pointerDirty = false;
    },
    pointer () {
      this.$refs.search && this.$refs.search.setAttribute('aria-activedescendant', this.id + '-' + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          'multiselect__option--disabled',
          {'multiselect__option--group': selectedGroup.$isLabel}
        ]
      }

      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      return group && !this.wholeGroupDisabled(group) ? [
        'multiselect__option--group',
        {'multiselect__option--highlight': index === this.pointer && this.showPointer},
        {'multiselect__option--group-selected': this.wholeGroupSelected(group)}
      ] : 'multiselect__option--disabled'
    },
    addPointerElement ({key} = 'Enter') {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward () {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        /* istanbul ignore next */
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--;
        /* istanbul ignore else */
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerBackward();
      } else {
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[0].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset () {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return
      this.pointer = 0;
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust () {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0;
      }

      if (this.filteredOptions.length > 0 &&
        this.filteredOptions[this.pointer].$isLabel &&
        !this.groupSelect
      ) {
        this.pointerForward();
      }
    },
    pointerSet (index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};

var script = {
  name: 'vue-multiselect',
  mixins: [multiselectMixin, pointerMixin],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: false
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ''
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default () {
        return []
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: false
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ''
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    hasOptionGroup () {
      return this.groupValues && this.groupLabel && this.groupSelect
    },
    isSingleLabelVisible () {
      return (
        (this.singleValue || this.singleValue === 0) &&
          (!this.isOpen || !this.searchable) &&
          !this.visibleValues.length
      )
    },
    isPlaceholderVisible () {
      return !this.internalValue.length && (!this.searchable || !this.isOpen)
    },
    visibleValues () {
      return this.multiple ? this.internalValue.slice(0, this.limit) : []
    },
    singleValue () {
      return this.internalValue[0]
    },
    deselectLabelText () {
      return this.showLabels ? this.deselectLabel : ''
    },
    deselectGroupLabelText () {
      return this.showLabels ? this.deselectGroupLabel : ''
    },
    selectLabelText () {
      return this.showLabels ? this.selectLabel : ''
    },
    selectGroupLabelText () {
      return this.showLabels ? this.selectGroupLabel : ''
    },
    selectedLabelText () {
      return this.showLabels ? this.selectedLabel : ''
    },
    inputStyle () {
      if (
        this.searchable ||
          (this.multiple && this.modelValue && this.modelValue.length)
      ) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? {width: '100%'}
          : {width: '0', position: 'absolute', padding: '0'}
      }
      return ''
    },
    contentStyle () {
      return this.options.length
        ? {display: 'inline-block'}
        : {display: 'block'}
    },
    isAbove () {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (
        this.openDirection === 'below' ||
          this.openDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    showSearchInput () {
      return (
        this.searchable &&
          (this.hasSingleSelectedSlot &&
            (this.visibleSingleValue || this.visibleSingleValue === 0)
            ? this.isOpen
            : true)
      )
    }
  }
};

const _hoisted_1 = {
  ref: "tags",
  class: "multiselect__tags"
};
const _hoisted_2 = { class: "multiselect__tags-wrap" };
const _hoisted_3 = { class: "multiselect__spinner" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "multiselect__option" };
const _hoisted_6 = { class: "multiselect__option" };
const _hoisted_7 = /*#__PURE__*/createTextVNode("No elements found. Consider changing the search query.");
const _hoisted_8 = { class: "multiselect__option" };
const _hoisted_9 = /*#__PURE__*/createTextVNode("List is empty.");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: [{ 'multiselect--active': _ctx.isOpen, 'multiselect--disabled': $props.disabled, 'multiselect--above': $options.isAbove, 'multiselect--has-options-group': $options.hasOptionGroup }, "multiselect"],
    onFocus: _cache[14] || (_cache[14] = $event => (_ctx.activate())),
    onBlur: _cache[15] || (_cache[15] = $event => (_ctx.searchable ? false : _ctx.deactivate())),
    onKeydown: [
      _cache[16] || (_cache[16] = withKeys(withModifiers($event => (_ctx.pointerForward()), ["self","prevent"]), ["down"])),
      _cache[17] || (_cache[17] = withKeys(withModifiers($event => (_ctx.pointerBackward()), ["self","prevent"]), ["up"]))
    ],
    onKeypress: _cache[18] || (_cache[18] = withKeys(withModifiers($event => (_ctx.addPointerElement($event)), ["stop","self"]), ["enter","tab"])),
    onKeyup: _cache[19] || (_cache[19] = withKeys($event => (_ctx.deactivate()), ["esc"])),
    role: "combobox",
    "aria-owns": 'listbox-'+_ctx.id
  }, [
    renderSlot(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => [
      createVNode("div", {
        onMousedown: _cache[1] || (_cache[1] = withModifiers($event => (_ctx.toggle()), ["prevent","stop"])),
        class: "multiselect__select"
      }, null, 32 /* HYDRATE_EVENTS */)
    ]),
    renderSlot(_ctx.$slots, "clear", { search: _ctx.search }),
    createVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "selection", {
        search: _ctx.search,
        remove: _ctx.removeElement,
        values: $options.visibleValues,
        isOpen: _ctx.isOpen
      }, () => [
        withDirectives(createVNode("div", _hoisted_2, [
          (openBlock(true), createBlock(Fragment, null, renderList($options.visibleValues, (option, index) => {
            return renderSlot(_ctx.$slots, "tag", {
              option: option,
              search: _ctx.search,
              remove: _ctx.removeElement
            }, () => [
              (openBlock(), createBlock("span", {
                class: "multiselect__tag",
                key: index
              }, [
                createVNode("span", {
                  textContent: toDisplayString(_ctx.getOptionLabel(option))
                }, null, 8 /* PROPS */, ["textContent"]),
                createVNode("i", {
                  tabindex: "1",
                  onKeypress: withKeys(withModifiers($event => (_ctx.removeElement(option)), ["prevent"]), ["enter"]),
                  onMousedown: withModifiers($event => (_ctx.removeElement(option)), ["prevent"]),
                  class: "multiselect__tag-icon"
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["onKeypress", "onMousedown"])
              ]))
            ])
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 512 /* NEED_PATCH */), [
          [vShow, $options.visibleValues.length > 0]
        ]),
        (_ctx.internalValue && _ctx.internalValue.length > $props.limit)
          ? renderSlot(_ctx.$slots, "limit", { key: 0 }, () => [
              createVNode("strong", {
                class: "multiselect__strong",
                textContent: toDisplayString($props.limitText(_ctx.internalValue.length - $props.limit))
              }, null, 8 /* PROPS */, ["textContent"])
            ])
          : createCommentVNode("v-if", true)
      ]),
      createVNode(Transition, { name: "multiselect__loading" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "loading", {}, () => [
            withDirectives(createVNode("div", _hoisted_3, null, 512 /* NEED_PATCH */), [
              [vShow, $props.loading]
            ])
          ])
        ]),
        _: 3 /* FORWARDED */
      }),
      (_ctx.searchable)
        ? (openBlock(), createBlock("input", {
            key: 0,
            ref: "search",
            name: $props.name,
            id: _ctx.id,
            type: "text",
            autocomplete: "off",
            spellcheck: false,
            placeholder: _ctx.placeholder,
            style: $options.inputStyle,
            value: _ctx.search,
            disabled: $props.disabled,
            tabindex: $props.tabindex,
            onInput: _cache[2] || (_cache[2] = $event => (_ctx.updateSearch($event.target.value))),
            onFocus: _cache[3] || (_cache[3] = withModifiers($event => (_ctx.activate()), ["prevent"])),
            onBlur: _cache[4] || (_cache[4] = withModifiers($event => (_ctx.deactivate()), ["prevent"])),
            onKeyup: _cache[5] || (_cache[5] = withKeys($event => (_ctx.deactivate()), ["esc"])),
            onKeydown: [
              _cache[6] || (_cache[6] = withKeys(withModifiers($event => (_ctx.pointerForward()), ["prevent"]), ["down"])),
              _cache[7] || (_cache[7] = withKeys(withModifiers($event => (_ctx.pointerBackward()), ["prevent"]), ["up"])),
              _cache[9] || (_cache[9] = withKeys(withModifiers($event => (_ctx.removeLastElement()), ["stop"]), ["delete"]))
            ],
            onKeypress: _cache[8] || (_cache[8] = withKeys(withModifiers($event => (_ctx.addPointerElement($event)), ["prevent","stop","self"]), ["enter"])),
            class: "multiselect__input",
            "aria-controls": 'listbox-'+_ctx.id
          }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"]))
        : createCommentVNode("v-if", true),
      ($options.isSingleLabelVisible)
        ? (openBlock(), createBlock("span", {
            key: 1,
            class: "multiselect__single",
            onMousedown: _cache[10] || (_cache[10] = withModifiers((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            renderSlot(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => [
              createTextVNode(toDisplayString(_ctx.currentOptionLabel), 1 /* TEXT */)
            ])
          ], 32 /* HYDRATE_EVENTS */))
        : createCommentVNode("v-if", true),
      ($options.isPlaceholderVisible)
        ? (openBlock(), createBlock("span", {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: _cache[11] || (_cache[11] = withModifiers((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            renderSlot(_ctx.$slots, "placeholder", {}, () => [
              createTextVNode(toDisplayString(_ctx.placeholder), 1 /* TEXT */)
            ])
          ], 32 /* HYDRATE_EVENTS */))
        : createCommentVNode("v-if", true)
    ], 512 /* NEED_PATCH */),
    createVNode(Transition, { name: "multiselect" }, {
      default: withCtx(() => [
        withDirectives(createVNode("div", {
          class: "multiselect__content-wrapper",
          onFocus: _cache[12] || (_cache[12] = (...args) => (_ctx.activate && _ctx.activate(...args))),
          tabindex: "-1",
          onMousedown: _cache[13] || (_cache[13] = withModifiers(() => {}, ["prevent"])),
          style: { maxHeight: _ctx.optimizedHeight + 'px' },
          ref: "list"
        }, [
          createVNode("ul", {
            class: "multiselect__content",
            style: $options.contentStyle,
            role: "listbox",
            id: 'listbox-'+_ctx.id
          }, [
            renderSlot(_ctx.$slots, "beforeList"),
            (_ctx.multiple && _ctx.max === _ctx.internalValue.length)
              ? (openBlock(), createBlock("li", _hoisted_4, [
                  createVNode("span", _hoisted_5, [
                    renderSlot(_ctx.$slots, "maxElements", {}, () => [
                      createTextVNode("Maximum of " + toDisplayString(_ctx.max) + " options selected. First remove a selected option to select another.", 1 /* TEXT */)
                    ])
                  ])
                ]))
              : createCommentVNode("v-if", true),
            (!_ctx.max || _ctx.internalValue.length < _ctx.max)
              ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.filteredOptions, (option, index) => {
                  return (openBlock(), createBlock("li", {
                    class: "multiselect__element",
                    key: index,
                    id: _ctx.id + '-' + index,
                    role: !(option && (option.$isLabel || option.$isDisabled)) ? 'option' : null
                  }, [
                    (!(option && (option.$isLabel || option.$isDisabled)))
                      ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: [_ctx.optionHighlight(index, option), "multiselect__option"],
                          onClick: withModifiers($event => (_ctx.select(option)), ["stop"]),
                          onMouseenter: withModifiers($event => (_ctx.pointerSet(index)), ["self"]),
                          "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                          "data-selected": $options.selectedLabelText,
                          "data-deselect": $options.deselectLabelText
                        }, [
                          renderSlot(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            createVNode("span", null, toDisplayString(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"]))
                      : createCommentVNode("v-if", true),
                    (option && (option.$isLabel || option.$isDisabled))
                      ? (openBlock(), createBlock("span", {
                          key: 1,
                          "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
                          "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
                          class: [_ctx.groupHighlight(index, option), "multiselect__option"],
                          onMouseenter: withModifiers($event => (_ctx.groupSelect && _ctx.pointerSet(index)), ["self"]),
                          onMousedown: withModifiers($event => (_ctx.selectGroup(option)), ["prevent"])
                        }, [
                          renderSlot(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            createVNode("span", null, toDisplayString(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["data-select", "data-deselect", "onMouseenter", "onMousedown"]))
                      : createCommentVNode("v-if", true)
                  ], 8 /* PROPS */, ["id", "role"]))
                }), 128 /* KEYED_FRAGMENT */))
              : createCommentVNode("v-if", true),
            withDirectives(createVNode("li", null, [
              createVNode("span", _hoisted_6, [
                renderSlot(_ctx.$slots, "noResult", { search: _ctx.search }, () => [
                  _hoisted_7
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [vShow, $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading)]
            ]),
            withDirectives(createVNode("li", null, [
              createVNode("span", _hoisted_8, [
                renderSlot(_ctx.$slots, "noOptions", {}, () => [
                  _hoisted_9
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [vShow, $props.showNoOptions && ((_ctx.options.length === 0 || ($options.hasOptionGroup === true && _ctx.filteredOptions.length === 0)) && !_ctx.search && !$props.loading)]
            ]),
            renderSlot(_ctx.$slots, "afterList")
          ], 12 /* STYLE, PROPS */, ["id"])
        ], 36 /* STYLE, HYDRATE_EVENTS */), [
          [vShow, _ctx.isOpen]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["tabindex", "aria-owns"]))
}

script.render = render;

function r(e) {
  return [e.screenX, e.screenY];
}
function u$1() {
  let e = ref([-1, -1]);
  return { wasMoved(n) {
    let t2 = r(n);
    return e.value[0] === t2[0] && e.value[1] === t2[1] ? false : (e.value = t2, true);
  }, update(n) {
    e.value = r(n);
  } };
}
function i({ container: e, accept: t2, walk: d, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = i$3(e);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n.nextNode(); )
      d(n.currentNode);
  });
}
function u(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f(l2, n) {
  let t2 = n.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n.resolveActiveIndex(), s2 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e = 0; e < t2.length; ++e)
        if (!n.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 1: {
      s2 === -1 && (s2 = t2.length);
      for (let e = s2 - 1; e >= 0; --e)
        if (!n.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 2: {
      for (let e = s2 + 1; e < t2.length; ++e)
        if (!n.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 3: {
      for (let e = t2.length - 1; e >= 0; --e)
        if (!n.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 4: {
      for (let e = 0; e < t2.length; ++e)
        if (n.resolveId(t2[e], e, t2) === l2.id)
          return e;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l2);
  }
}
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e) {
  var r2, i2;
  let n = (r2 = e.innerText) != null ? r2 : "", t2 = e.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t2 = e.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e = o$1(a2);
    if (!e)
      return "";
    let l2 = e.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
var Z = ((i2) => (i2[i2.Open = 0] = "Open", i2[i2.Closed = 1] = "Closed", i2))(Z || {}), ee = ((i2) => (i2[i2.Pointer = 0] = "Pointer", i2[i2.Other = 1] = "Other", i2))(ee || {});
function te(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let A = Symbol("MenuContext");
function O(o2) {
  let M = inject(A, null);
  if (M === null) {
    let i2 = new Error(`<${o2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i2, O), i2;
  }
  return M;
}
let ge = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(o2, { slots: M, attrs: i2 }) {
  let I2 = ref(1), p2 = ref(null), e = ref(null), r2 = ref([]), f$1 = ref(""), d = ref(null), g2 = ref(1);
  function b(t2 = (a2) => a2) {
    let a2 = d.value !== null ? r2.value[d.value] : null, n = O$1(t2(r2.value.slice()), (v2) => o$1(v2.dataRef.domRef)), s2 = a2 ? n.indexOf(a2) : null;
    return s2 === -1 && (s2 = null), { items: n, activeItemIndex: s2 };
  }
  let l2 = { menuState: I2, buttonRef: p2, itemsRef: e, items: r2, searchQuery: f$1, activeItemIndex: d, activationTrigger: g2, closeMenu: () => {
    I2.value = 1, d.value = null;
  }, openMenu: () => I2.value = 0, goToItem(t2, a2, n) {
    let s2 = b(), v2 = f(t2 === c.Specific ? { focus: c.Specific, id: a2 } : { focus: t2 }, { resolveItems: () => s2.items, resolveActiveIndex: () => s2.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.disabled });
    f$1.value = "", d.value = v2, g2.value = n != null ? n : 1, r2.value = s2.items;
  }, search(t2) {
    let n = f$1.value !== "" ? 0 : 1;
    f$1.value += t2.toLowerCase();
    let v2 = (d.value !== null ? r2.value.slice(d.value + n).concat(r2.value.slice(0, d.value + n)) : r2.value).find((h2) => h2.dataRef.textValue.startsWith(f$1.value) && !h2.dataRef.disabled), u2 = v2 ? r2.value.indexOf(v2) : -1;
    u2 === -1 || u2 === d.value || (d.value = u2, g2.value = 1);
  }, clearSearch() {
    f$1.value = "";
  }, registerItem(t2, a2) {
    let n = b((s2) => [...s2, { id: t2, dataRef: a2 }]);
    r2.value = n.items, d.value = n.activeItemIndex, g2.value = 1;
  }, unregisterItem(t2) {
    let a2 = b((n) => {
      let s2 = n.findIndex((v2) => v2.id === t2);
      return s2 !== -1 && n.splice(s2, 1), n;
    });
    r2.value = a2.items, d.value = a2.activeItemIndex, g2.value = 1;
  } };
  return w$2([p2, e], (t2, a2) => {
    var n;
    l2.closeMenu(), w$4(a2, h.Loose) || (t2.preventDefault(), (n = o$1(p2)) == null || n.focus());
  }, computed(() => I2.value === 0)), provide(A, l2), t$2(computed(() => u$5(I2.value, { [0]: i$1.Open, [1]: i$1.Closed }))), () => {
    let t2 = { open: I2.value === 0, close: l2.closeMenu };
    return A$2({ ourProps: {}, theirProps: o2, slot: t2, slots: M, attrs: i2, name: "Menu" });
  };
} }), Se = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: M, slots: i2, expose: I$1$1 }) {
  var b;
  let p2 = (b = o2.id) != null ? b : `headlessui-menu-button-${I$1()}`, e = O("MenuButton");
  I$1$1({ el: e.buttonRef, $el: e.buttonRef });
  function r2(l2) {
    switch (l2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        l2.preventDefault(), l2.stopPropagation(), e.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$1(e.itemsRef)) == null || t2.focus({ preventScroll: true }), e.goToItem(c.First);
        });
        break;
      case o$2.ArrowUp:
        l2.preventDefault(), l2.stopPropagation(), e.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$1(e.itemsRef)) == null || t2.focus({ preventScroll: true }), e.goToItem(c.Last);
        });
        break;
    }
  }
  function f2(l2) {
    switch (l2.key) {
      case o$2.Space:
        l2.preventDefault();
        break;
    }
  }
  function d(l2) {
    o2.disabled || (e.menuState.value === 0 ? (e.closeMenu(), nextTick(() => {
      var t2;
      return (t2 = o$1(e.buttonRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })) : (l2.preventDefault(), e.openMenu(), te(() => {
      var t2;
      return (t2 = o$1(e.itemsRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })));
  }
  let g2 = s$3(computed(() => ({ as: o2.as, type: M.type })), e.buttonRef);
  return () => {
    var n;
    let l2 = { open: e.menuState.value === 0 }, { ...t2 } = o2, a2 = { ref: e.buttonRef, id: p2, type: g2.value, "aria-haspopup": "menu", "aria-controls": (n = o$1(e.itemsRef)) == null ? void 0 : n.id, "aria-expanded": e.menuState.value === 0, onKeydown: r2, onKeyup: f2, onClick: d };
    return A$2({ ourProps: a2, theirProps: t2, slot: l2, attrs: M, slots: i2, name: "MenuButton" });
  };
} }), Me = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: M, slots: i$12, expose: I$1$1 }) {
  var l$1;
  let p2 = (l$1 = o2.id) != null ? l$1 : `headlessui-menu-items-${I$1()}`, e = O("MenuItems"), r2 = ref(null);
  I$1$1({ el: e.itemsRef, $el: e.itemsRef }), i({ container: computed(() => o$1(e.itemsRef)), enabled: computed(() => e.menuState.value === 0), accept(t2) {
    return t2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t2) {
    t2.setAttribute("role", "none");
  } });
  function f2(t2) {
    var a2;
    switch (r2.value && clearTimeout(r2.value), t2.key) {
      case o$2.Space:
        if (e.searchQuery.value !== "")
          return t2.preventDefault(), t2.stopPropagation(), e.search(t2.key);
      case o$2.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e.activeItemIndex.value !== null) {
          let s2 = e.items.value[e.activeItemIndex.value];
          (a2 = o$1(s2.dataRef.domRef)) == null || a2.click();
        }
        e.closeMenu(), _(o$1(e.buttonRef));
        break;
      case o$2.ArrowDown:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(c.Next);
      case o$2.ArrowUp:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(c.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(c.First);
      case o$2.End:
      case o$2.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(c.Last);
      case o$2.Escape:
        t2.preventDefault(), t2.stopPropagation(), e.closeMenu(), nextTick(() => {
          var n;
          return (n = o$1(e.buttonRef)) == null ? void 0 : n.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        t2.preventDefault(), t2.stopPropagation(), e.closeMenu(), nextTick(() => v$2(o$1(e.buttonRef), t2.shiftKey ? N$5.Previous : N$5.Next));
        break;
      default:
        t2.key.length === 1 && (e.search(t2.key), r2.value = setTimeout(() => e.clearSearch(), 350));
        break;
    }
  }
  function d(t2) {
    switch (t2.key) {
      case o$2.Space:
        t2.preventDefault();
        break;
    }
  }
  let g2 = l$2(), b = computed(() => g2 !== null ? (g2.value & i$1.Open) === i$1.Open : e.menuState.value === 0);
  return () => {
    var s2, v2;
    let t2 = { open: e.menuState.value === 0 }, { ...a2 } = o2, n = { "aria-activedescendant": e.activeItemIndex.value === null || (s2 = e.items.value[e.activeItemIndex.value]) == null ? void 0 : s2.id, "aria-labelledby": (v2 = o$1(e.buttonRef)) == null ? void 0 : v2.id, id: p2, onKeydown: f2, onKeyup: d, role: "menu", tabIndex: 0, ref: e.itemsRef };
    return A$2({ ourProps: n, theirProps: a2, slot: t2, attrs: M, slots: i$12, features: N$4.RenderStrategy | N$4.Static, visible: b.value, name: "MenuItems" });
  };
} }), be = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: M, attrs: i2, expose: I$1$1 }) {
  var v2;
  let p$1 = (v2 = o2.id) != null ? v2 : `headlessui-menu-item-${I$1()}`, e = O("MenuItem"), r2 = ref(null);
  I$1$1({ el: r2, $el: r2 });
  let f2 = computed(() => e.activeItemIndex.value !== null ? e.items.value[e.activeItemIndex.value].id === p$1 : false), d = p(r2), g2 = computed(() => ({ disabled: o2.disabled, get textValue() {
    return d();
  }, domRef: r2 }));
  onMounted(() => e.registerItem(p$1, g2)), onUnmounted(() => e.unregisterItem(p$1)), watchEffect(() => {
    e.menuState.value === 0 && f2.value && e.activationTrigger.value !== 0 && nextTick(() => {
      var u2, h2;
      return (h2 = (u2 = o$1(r2)) == null ? void 0 : u2.scrollIntoView) == null ? void 0 : h2.call(u2, { block: "nearest" });
    });
  });
  function b(u2) {
    if (o2.disabled)
      return u2.preventDefault();
    e.closeMenu(), _(o$1(e.buttonRef));
  }
  function l2() {
    if (o2.disabled)
      return e.goToItem(c.Nothing);
    e.goToItem(c.Specific, p$1);
  }
  let t2 = u$1();
  function a2(u2) {
    t2.update(u2);
  }
  function n(u2) {
    t2.wasMoved(u2) && (o2.disabled || f2.value || e.goToItem(c.Specific, p$1, 0));
  }
  function s2(u2) {
    t2.wasMoved(u2) && (o2.disabled || f2.value && e.goToItem(c.Nothing));
  }
  return () => {
    let { disabled: u2, ...h2 } = o2, C = { active: f2.value, disabled: u2, close: e.closeMenu };
    return A$2({ ourProps: { id: p$1, ref: r2, role: "menuitem", tabIndex: u2 === true ? void 0 : -1, "aria-disabled": u2 === true ? true : void 0, onClick: b, onFocus: l2, onPointerenter: a2, onMouseenter: a2, onPointermove: n, onMousemove: n, onPointerleave: s2, onMouseleave: s2 }, theirProps: { ...i2, ...h2 }, slot: C, attrs: i2, slots: M, name: "MenuItem" });
  };
} });
const _sfc_main$1 = {
  components: { Multiselect: script },
  data() {
    return {
      selectedQueryType: null,
      selectedQueryValue: null,
      queryOptions: [],
      metadata: [],
      metadataResults: [],
      error: null,
      queryTypes: [
        { name: "Variable Name", value: "var_name" },
        { name: "Table Name", value: "table_name" },
        { name: "Variable Label", value: "var_label" },
        { name: "Condition", value: "condition" }
      ]
    };
  },
  async created() {
    try {
      const gistUrl = "https://gist.githubusercontent.com/swhawes/0bb1b51f1d108296e8a96e9cfb149368/raw/87a603717b71e30c0636a2a5433c984e827ac071/metadata.json";
      const response = await fetch(gistUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      console.log("Fetched JSON text:", text);
      this.metadata = JSON.parse(text);
      console.log("Parsed metadata:", this.metadata);
    } catch (err) {
      this.error = `Failed to fetch metadata: ${err.message}`;
      console.error(this.error);
    }
  },
  methods: {
    onQueryTypeChange() {
      this.queryOptions = [];
      this.selectedQueryValue = null;
      if (this.selectedQueryType) {
        const options = this.metadata.map((item) => item[this.selectedQueryType.value]).filter(
          (value, index, self) => value && self.indexOf(value) === index
        );
        console.log("Options derived from metadata:", options);
        this.queryOptions = options.map((value) => ({ name: value, value }));
        console.log("Query options:", this.queryOptions);
      }
    },
    fetchMetadata() {
      if (!this.selectedQueryType || !this.selectedQueryValue)
        return;
      this.metadataResults = this.metadata.filter(
        (item) => item[this.selectedQueryType.value] === this.selectedQueryValue.value
      );
      console.log("Metadata results:", this.metadataResults);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_multiselect = resolveComponent("multiselect");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg" }, _attrs))}><h2 class="text-2xl font-bold mb-4">Metadata Query Tool</h2><div class="mb-4"><label class="block text-gray-700 text-sm font-bold mb-2">Select Query Type:</label>`);
  _push(ssrRenderComponent(_component_multiselect, {
    modelValue: $data.selectedQueryType,
    "onUpdate:modelValue": ($event) => $data.selectedQueryType = $event,
    options: $data.queryTypes,
    placeholder: "Select a query type",
    label: "name",
    "track-by": "value",
    onInput: $options.onQueryTypeChange
  }, null, _parent));
  _push(`</div>`);
  if ($data.selectedQueryType) {
    _push(`<div class="mb-4"><label class="block text-gray-700 text-sm font-bold mb-2">Select ${ssrInterpolate($data.selectedQueryType.name)}:</label>`);
    _push(ssrRenderComponent(_component_multiselect, {
      modelValue: $data.selectedQueryValue,
      "onUpdate:modelValue": ($event) => $data.selectedQueryValue = $event,
      options: $data.queryOptions,
      placeholder: "Select a value",
      label: "name",
      "track-by": "value",
      searchable: true,
      "close-on-select": true,
      "show-labels": true
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Query </button>`);
  if ($data.metadataResults.length) {
    _push(`<div class="mt-4"><h3 class="text-xl font-semibold mb-2">Results</h3><!--[-->`);
    ssrRenderList($data.metadataResults, (result) => {
      _push(`<div class="p-4 mb-4 bg-gray-100 rounded-lg shadow"><p><strong>Table Name:</strong> ${ssrInterpolate(result.table_name)}</p><p><strong>Variable Name:</strong> ${ssrInterpolate(result.var_name)}</p><p><strong>Variable Label:</strong> ${ssrInterpolate(result.var_label)}</p><p><strong>Notes:</strong> ${ssrInterpolate(result.notes)}</p><p><strong>Condition:</strong> ${ssrInterpolate(result.condition)}</p><p><strong>Table Name NDA:</strong> ${ssrInterpolate(result.table_name_nda)}</p></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.error) {
    _push(`<div class="mt-4 text-red-500"><h3 class="text-xl font-semibold mb-2">Error</h3><pre>${ssrInterpolate($data.error)}</pre></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FetchJson.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("tree.DNLI_NNH.svg");
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='2500'%20height='2500'%20viewBox='-0.006%202.335%2064.006%2059.33'%3e%3cpath%20d='M14.518%2061.665C6.493%2061.656-.006%2055.144%200%2047.12s6.515-14.526%2014.54-14.523%2014.53%206.51%2014.53%2014.534c-.01%208.03-6.52%2014.534-14.55%2014.534z'%20fill='%23ca3c32'/%3e%3cpath%20d='M49.45%2061.665c-8.025-.01-14.524-6.52-14.518-14.545s6.515-14.526%2014.54-14.523S64%2039.105%2064%2047.13c-.01%208.03-6.52%2014.534-14.55%2014.534z'%20fill='%239259a3'/%3e%3cpath%20d='M31.992%2031.404c-8.027%200-14.534-6.507-14.534-14.534S23.965%202.335%2031.992%202.335%2046.526%208.843%2046.526%2016.87a14.52%2014.52%200%200%201-14.534%2014.534z'%20fill='%23399746'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const meetings = [
      {
        id: 1,
        date: "January 10th, 2022",
        time: "5:00 PM",
        datetime: "2022-01-10T17:00",
        name: "Leslie Alexander",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        location: "Starbucks"
      },
      {
        id: 2,
        date: "January 10th, 2022",
        time: "5:00 PM",
        datetime: "2022-01-10T17:00",
        name: "Leslie Alexander",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        location: "Starbucks"
      },
      {
        id: 3,
        date: "January 10th, 2022",
        time: "5:00 PM",
        datetime: "2022-01-10T17:00",
        name: "Leslie Alexander",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        location: "Starbucks"
      }
      // More meetings...
    ];
    const days = [
      { date: "2021-12-27" },
      { date: "2021-12-28" },
      { date: "2021-12-29" },
      { date: "2021-12-30" },
      { date: "2021-12-31" },
      { date: "2022-01-01", isCurrentMonth: true },
      { date: "2022-01-02", isCurrentMonth: true },
      { date: "2022-01-03", isCurrentMonth: true },
      { date: "2022-01-04", isCurrentMonth: true },
      { date: "2022-01-05", isCurrentMonth: true },
      { date: "2022-01-06", isCurrentMonth: true },
      { date: "2022-01-07", isCurrentMonth: true },
      { date: "2022-01-08", isCurrentMonth: true },
      { date: "2022-01-09", isCurrentMonth: true },
      { date: "2022-01-10", isCurrentMonth: true },
      { date: "2022-01-11", isCurrentMonth: true },
      { date: "2022-01-12", isCurrentMonth: true, isToday: true },
      { date: "2022-01-13", isCurrentMonth: true },
      { date: "2022-01-14", isCurrentMonth: true },
      { date: "2022-01-15", isCurrentMonth: true },
      { date: "2022-01-16", isCurrentMonth: true },
      { date: "2022-01-17", isCurrentMonth: true },
      { date: "2022-01-18", isCurrentMonth: true },
      { date: "2022-01-19", isCurrentMonth: true },
      { date: "2022-01-20", isCurrentMonth: true },
      { date: "2022-01-21", isCurrentMonth: true },
      { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
      { date: "2022-01-23", isCurrentMonth: true },
      { date: "2022-01-24", isCurrentMonth: true },
      { date: "2022-01-25", isCurrentMonth: true },
      { date: "2022-01-26", isCurrentMonth: true },
      { date: "2022-01-27", isCurrentMonth: true },
      { date: "2022-01-28", isCurrentMonth: true },
      { date: "2022-01-29", isCurrentMonth: true },
      { date: "2022-01-30", isCurrentMonth: true },
      { date: "2022-01-31", isCurrentMonth: true },
      { date: "2022-02-01" },
      { date: "2022-02-02" },
      { date: "2022-02-03" },
      { date: "2022-02-04" },
      { date: "2022-02-05" },
      { date: "2022-02-06" }
    ];
    const people = [
      {
        name: "Leslie Alexander",
        email: "leslie.alexander@example.com",
        role: "Co-Founder / CEO",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z"
      },
      {
        name: "Michael Foster",
        email: "michael.foster@example.com",
        role: "Co-Founder / CTO",
        imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z"
      },
      {
        name: "Dries Vincent",
        email: "dries.vincent@example.com",
        role: "Business Relations",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: null
      },
      {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        role: "Front-end Developer",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z"
      },
      {
        name: "Courtney Henry",
        email: "courtney.henry@example.com",
        role: "Designer",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z"
      },
      {
        name: "Tom Cook",
        email: "tom.cook@example.com",
        role: "Director of Product",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: null
      }
    ];
    const navigation = [
      { name: "Product", href: "#" },
      { name: "Features", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Company", href: "#" }
    ];
    const primaryFeatures = [
      {
        name: "Push to deploy.",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
        icon: CloudArrowUpIcon
      },
      {
        name: "SSL certificates.",
        description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: LockClosedIcon
      },
      {
        name: "Database backups.",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
        icon: ServerIcon
      }
    ];
    const secondaryFeatures = [
      {
        name: "Push to deploy",
        description: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
        href: "#",
        icon: CloudArrowUpIcon
      },
      {
        name: "SSL certificates",
        description: "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
        href: "#",
        icon: LockClosedIcon
      },
      {
        name: "Simple queues",
        description: "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
        href: "#",
        icon: ArrowPathIcon
      }
    ];
    const featuredTestimonial = {
      body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
      author: {
        name: "Brenna Goyette",
        handle: "brennagoyette",
        imageUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
        logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
      }
    };
    const testimonials = [
      [
        [
          {
            body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
            author: {
              name: "Leslie Alexander",
              handle: "lesliealexander",
              imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          }
          // More testimonials...
        ],
        [
          {
            body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
            author: {
              name: "Lindsay Walton",
              handle: "lindsaywalton",
              imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          }
          // More testimonials...
        ]
      ],
      [
        [
          {
            body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
            author: {
              name: "Tom Cook",
              handle: "tomcook",
              imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          }
          // More testimonials...
        ],
        [
          {
            body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
            author: {
              name: "Leonard Krasner",
              handle: "leonardkrasner",
              imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          }
          // More testimonials...
        ]
      ]
    ];
    const footerNavigation = {
      solutions: [
        { name: "Marketing", href: "#" },
        { name: "Analytics", href: "#" },
        { name: "Commerce", href: "#" },
        { name: "Insights", href: "#" }
      ],
      support: [
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Status", href: "#" }
      ],
      company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" }
      ],
      legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" }
      ],
      social: [
        {
          name: "Facebook",
          href: "#",
          icon: defineComponent({
            render: () => h$1("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h$1("path", {
                "fill-rule": "evenodd",
                "d": "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Instagram",
          href: "#",
          icon: defineComponent({
            render: () => h$1("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h$1("path", {
                "fill-rule": "evenodd",
                "d": "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "X",
          href: "#",
          icon: defineComponent({
            render: () => h$1("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h$1("path", {
                d: "M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
              })
            ])
          })
        },
        {
          name: "GitHub",
          href: "#",
          icon: defineComponent({
            render: () => h$1("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h$1("path", {
                "fill-rule": "evenodd",
                "d": "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "YouTube",
          href: "#",
          icon: defineComponent({
            render: () => h$1("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h$1("path", {
                "fill-rule": "evenodd",
                "d": "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
                "clip-rule": "evenodd"
              })
            ])
          })
        }
      ]
    };
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FetchJson = __nuxt_component_0;
      _push(`<!--[--><section data-v-09013526><svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" data-v-09013526><image${ssrRenderAttr("href", _imports_0)} width="800" height="800" data-v-09013526></image><a href="https://www.linux.org" target="_blank" data-v-09013526><image${ssrRenderAttr("href", _imports_1)} x="200" y="300" width="100" height="100" data-v-09013526></image></a><a href="https://www.python.org" target="_blank" data-v-09013526><image${ssrRenderAttr("href", _imports_1$1)} x="500" y="300" width="100" height="100" data-v-09013526></image></a></svg></section><div class="bg-white" data-v-09013526><div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl" data-v-09013526><div class="relative overflow-hidden rounded-lg lg:h-96" data-v-09013526><div class="absolute inset-0" data-v-09013526><img src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg" alt="" class="h-full w-full object-cover object-center" data-v-09013526></div><div aria-hidden="true" class="relative h-96 w-full lg:hidden" data-v-09013526></div><div aria-hidden="true" class="relative h-32 w-full lg:hidden" data-v-09013526></div><div class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg" data-v-09013526><div data-v-09013526><h2 class="text-xl font-bold text-white" data-v-09013526> Open Source Tools </h2><p class="mt-1 text-sm text-gray-300" data-v-09013526> Upgrade your desk with objects that keep you organized and clear-minded. </p></div><a href="#" class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full" data-v-09013526>View the collection</a></div></div></div></div><section data-v-09013526><ul role="list" class="divide-y divide-gray-800" data-v-09013526><!--[-->`);
      ssrRenderList(people, (person) => {
        _push(`<li class="flex justify-between gap-x-6 py-5" data-v-09013526><div class="flex min-w-0 gap-x-4" data-v-09013526><img class="h-12 w-12 flex-none rounded-full bg-gray-800"${ssrRenderAttr("src", person.imageUrl)} alt="" data-v-09013526><div class="min-w-0 flex-auto" data-v-09013526><p class="text-sm font-semibold leading-6 text-white" data-v-09013526>${ssrInterpolate(person.name)}</p><p class="mt-1 truncate text-xs leading-5 text-gray-400" data-v-09013526>${ssrInterpolate(person.email)}</p></div></div><div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end" data-v-09013526><p class="text-sm leading-6 text-white" data-v-09013526>${ssrInterpolate(person.role)}</p>`);
        if (person.lastSeen) {
          _push(`<p class="mt-1 text-xs leading-5 text-gray-400" data-v-09013526> Last seen <time${ssrRenderAttr("datetime", person.lastSeenDateTime)} data-v-09013526>${ssrInterpolate(person.lastSeen)}</time></p>`);
        } else {
          _push(`<div class="mt-1 flex items-center gap-x-1.5" data-v-09013526><div class="flex-none rounded-full bg-emerald-500/20 p-1" data-v-09013526><div class="h-1.5 w-1.5 rounded-full bg-emerald-500" data-v-09013526></div></div><p class="text-xs leading-5 text-gray-400" data-v-09013526> Online </p></div>`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></section><section data-v-09013526><ul role="list" class="divide-y divide-gray-200 bg-white" data-v-09013526><!--[-->`);
      ssrRenderList(people, (person) => {
        _push(`<li class="flex justify-between gap-x-6 py-5" data-v-09013526><div class="flex min-w-0 gap-x-4" data-v-09013526><img class="h-12 w-12 flex-none rounded-full bg-gray-50"${ssrRenderAttr("src", person.imageUrl)} alt="" data-v-09013526><div class="min-w-0 flex-auto" data-v-09013526><p class="text-sm font-semibold leading-6 text-gray-900" data-v-09013526>${ssrInterpolate(person.name)}</p><p class="mt-1 truncate text-xs leading-5 text-gray-500" data-v-09013526>${ssrInterpolate(person.email)}</p></div></div><div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end" data-v-09013526><p class="text-sm leading-6 text-gray-900" data-v-09013526>${ssrInterpolate(person.role)}</p>`);
        if (person.lastSeen) {
          _push(`<p class="mt-1 text-xs leading-5 text-gray-500" data-v-09013526> Last seen <time${ssrRenderAttr("datetime", person.lastSeenDateTime)} data-v-09013526>${ssrInterpolate(person.lastSeen)}</time></p>`);
        } else {
          _push(`<div class="mt-1 flex items-center gap-x-1.5" data-v-09013526><div class="flex-none rounded-full bg-emerald-500/20 p-1" data-v-09013526><div class="h-1.5 w-1.5 rounded-full bg-emerald-500" data-v-09013526></div></div><p class="text-xs leading-5 text-gray-500" data-v-09013526> Online </p></div>`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></section><section data-v-09013526><div class="bg-white" data-v-09013526><header class="absolute inset-x-0 top-0 z-50" data-v-09013526><nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global" data-v-09013526><div class="flex lg:flex-1" data-v-09013526><a href="#" class="-m-1.5 p-1.5" data-v-09013526><span class="sr-only" data-v-09013526>Your Company</span><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" data-v-09013526></a></div><div class="flex lg:hidden" data-v-09013526><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" data-v-09013526><span class="sr-only" data-v-09013526>Open main menu</span>`);
      _push(ssrRenderComponent(unref(Bars3Icon), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div><div class="hidden lg:flex lg:gap-x-12" data-v-09013526><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-sm font-semibold leading-6 text-gray-900" data-v-09013526>${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div><div class="hidden lg:flex lg:flex-1 lg:justify-end" data-v-09013526><a href="#" class="text-sm font-semibold leading-6 text-gray-900" data-v-09013526>Log in <span aria-hidden="true" data-v-09013526>\u2192</span></a></div></nav>`);
      _push(ssrRenderComponent(unref(Ye), {
        class: "lg:hidden",
        open: mobileMenuOpen.value,
        onClose: ($event) => mobileMenuOpen.value = false
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-50" data-v-09013526${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Ge$1), { class: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between" data-v-09013526${_scopeId2}><a href="#" class="-m-1.5 p-1.5" data-v-09013526${_scopeId2}><span class="sr-only" data-v-09013526${_scopeId2}>Your Company</span><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" data-v-09013526${_scopeId2}></a><button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" data-v-09013526${_scopeId2}><span class="sr-only" data-v-09013526${_scopeId2}>Close menu</span>`);
                  _push3(ssrRenderComponent(unref(XMarkIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flow-root" data-v-09013526${_scopeId2}><div class="-my-6 divide-y divide-gray-500/10" data-v-09013526${_scopeId2}><div class="space-y-2 py-6" data-v-09013526${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(`<a${ssrRenderAttr("href", item.href)} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" data-v-09013526${_scopeId2}>${ssrInterpolate(item.name)}</a>`);
                  });
                  _push3(`<!--]--></div><div class="py-6" data-v-09013526${_scopeId2}><a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" data-v-09013526${_scopeId2}>Log in</a></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("a", {
                        href: "#",
                        class: "-m-1.5 p-1.5"
                      }, [
                        createVNode("span", { class: "sr-only" }, "Your Company"),
                        createVNode("img", {
                          class: "h-8 w-auto",
                          src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                          alt: ""
                        })
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        createVNode("span", { class: "sr-only" }, "Close menu"),
                        createVNode(unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mt-6 flow-root" }, [
                      createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                        createVNode("div", { class: "space-y-2 py-6" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                            return createVNode("a", {
                              key: item.name,
                              href: item.href,
                              class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            }, toDisplayString(item.name), 9, ["href"]);
                          }), 64))
                        ]),
                        createVNode("div", { class: "py-6" }, [
                          createVNode("a", {
                            href: "#",
                            class: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          }, "Log in")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-50" }),
              createVNode(unref(Ge$1), { class: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("a", {
                      href: "#",
                      class: "-m-1.5 p-1.5"
                    }, [
                      createVNode("span", { class: "sr-only" }, "Your Company"),
                      createVNode("img", {
                        class: "h-8 w-auto",
                        src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                        alt: ""
                      })
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, [
                      createVNode("span", { class: "sr-only" }, "Close menu"),
                      createVNode(unref(XMarkIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "mt-6 flow-root" }, [
                    createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                      createVNode("div", { class: "space-y-2 py-6" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                          return createVNode("a", {
                            key: item.name,
                            href: item.href,
                            class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          }, toDisplayString(item.name), 9, ["href"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "py-6" }, [
                        createVNode("a", {
                          href: "#",
                          class: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        }, "Log in")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><main data-v-09013526><div class="relative isolate pt-14" data-v-09013526><svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true" data-v-09013526><defs data-v-09013526><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse" data-v-09013526><path d="M100 200V.5M.5 .5H200" fill="none" data-v-09013526></path></pattern></defs><svg x="50%" y="-1" class="overflow-visible fill-gray-50" data-v-09013526><path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" data-v-09013526></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" data-v-09013526></rect></svg><div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40" data-v-09013526><div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto" data-v-09013526><div class="flex" data-v-09013526><div class="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20" data-v-09013526><span class="font-semibold text-indigo-600" data-v-09013526>We\u2019re hiring</span><span class="h-4 w-px bg-gray-900/10" aria-hidden="true" data-v-09013526></span><a href="#" class="flex items-center gap-x-1" data-v-09013526><span class="absolute inset-0" aria-hidden="true" data-v-09013526></span> See open positions `);
      _push(ssrRenderComponent(unref(ChevronRightIcon), {
        class: "-mr-2 h-5 w-5 text-gray-400",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</a></div></div><h1 class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" data-v-09013526> A better way to ship your projects </h1><p class="mt-6 text-lg leading-8 text-gray-600" data-v-09013526> Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit. </p><div class="mt-10 flex items-center gap-x-6" data-v-09013526><a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-v-09013526>Get started</a><a href="#" class="text-sm font-semibold leading-6 text-gray-900" data-v-09013526>Learn more <span aria-hidden="true" data-v-09013526>\u2192</span></a></div></div><div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow" data-v-09013526><svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl" data-v-09013526><title data-v-09013526>App screenshot</title><defs data-v-09013526><clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332" data-v-09013526><rect width="316" height="684" rx="36" data-v-09013526></rect></clipPath></defs><path fill="#4B5563" d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" data-v-09013526></path><path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" data-v-09013526></path><foreignObject width="316" height="684" transform="translate(24 24)" clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)" data-v-09013526><img src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png" alt="" data-v-09013526></foreignObject></svg></div></div></div><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-09013526><div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5" data-v-09013526><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg" alt="Transistor" width="158" height="48" data-v-09013526><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg" alt="Reform" width="158" height="48" data-v-09013526><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg" alt="Tuple" width="158" height="48" data-v-09013526><img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg" alt="SavvyCal" width="158" height="48" data-v-09013526><img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg" alt="Statamic" width="158" height="48" data-v-09013526></div></div><div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8" data-v-09013526><div class="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24" data-v-09013526><div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0" data-v-09013526><div class="lg:row-start-2 lg:max-w-md" data-v-09013526><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl" data-v-09013526> Boost your productivity.<br data-v-09013526>Start using our app today. </h2><p class="mt-6 text-lg leading-8 text-gray-300" data-v-09013526> Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla. Ac euismod vel sit maecenas. </p></div><img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none" width="2432" height="1442" data-v-09013526><div class="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10" data-v-09013526><dl class="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none" data-v-09013526><!--[-->`);
      ssrRenderList(primaryFeatures, (feature) => {
        _push(`<div class="relative" data-v-09013526><dt class="ml-9 inline-block font-semibold text-white" data-v-09013526>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), {
          class: "absolute left-1 top-1 h-5 w-5 text-indigo-500",
          "aria-hidden": "true"
        }, null), _parent);
        _push(` ${ssrInterpolate(feature.name)}</dt> ${ssrInterpolate(" ")} <dd class="inline" data-v-09013526>${ssrInterpolate(feature.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div><div class="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu" aria-hidden="true" data-v-09013526><div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}" data-v-09013526></div></div></div></div><div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8" data-v-09013526><div class="mx-auto max-w-2xl lg:text-center" data-v-09013526><h2 class="text-base font-semibold leading-7 text-indigo-600" data-v-09013526> Deploy faster </h2><p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-v-09013526> Everything you need to deploy your app </p><p class="mt-6 text-lg leading-8 text-gray-600" data-v-09013526> Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc. </p></div><div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none" data-v-09013526><dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3" data-v-09013526><!--[-->`);
      ssrRenderList(secondaryFeatures, (feature) => {
        _push(`<div class="flex flex-col" data-v-09013526><dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900" data-v-09013526>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), {
          class: "h-5 w-5 flex-none text-indigo-600",
          "aria-hidden": "true"
        }, null), _parent);
        _push(` ${ssrInterpolate(feature.name)}</dt><dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600" data-v-09013526><p class="flex-auto" data-v-09013526>${ssrInterpolate(feature.description)}</p><p class="mt-6" data-v-09013526><a${ssrRenderAttr("href", feature.href)} class="text-sm font-semibold leading-6 text-indigo-600" data-v-09013526>Learn more <span aria-hidden="true" data-v-09013526>\u2192</span></a></p></dd></div>`);
      });
      _push(`<!--]--></dl></div></div><div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8" data-v-09013526><div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32" data-v-09013526><h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl" data-v-09013526> Get notified when we\u2019re launching. </h2><p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300" data-v-09013526> Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa. </p><form class="mx-auto mt-10 flex max-w-md gap-x-4" data-v-09013526><label for="email-address" class="sr-only" data-v-09013526>Email address</label><input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" data-v-09013526><button type="submit" class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" data-v-09013526> Notify me </button></form><svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true" data-v-09013526><circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" data-v-09013526></circle><defs data-v-09013526><radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)" data-v-09013526><stop stop-color="#7775D6" data-v-09013526></stop><stop offset="1" stop-color="#E935C1" stop-opacity="0" data-v-09013526></stop></radialGradient></defs></svg></div></div><div class="relative isolate mt-32 sm:mt-56 sm:pt-32" data-v-09013526><svg class="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block" aria-hidden="true" data-v-09013526><defs data-v-09013526><pattern id="55d3d46d-692e-45f2-becd-d8bdc9344f45" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse" data-v-09013526><path d="M.5 200V.5H200" fill="none" data-v-09013526></path></pattern></defs><svg x="50%" y="0" class="overflow-visible fill-gray-50" data-v-09013526><path d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z" stroke-width="0" data-v-09013526></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" data-v-09013526></rect></svg><div class="relative" data-v-09013526><div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true" data-v-09013526><div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}" data-v-09013526></div></div><div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end" aria-hidden="true" data-v-09013526><div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}" data-v-09013526></div></div><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-09013526><div class="mx-auto max-w-xl sm:text-center" data-v-09013526><h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600" data-v-09013526> Testimonials </h2><p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-v-09013526> We have worked with thousands of amazing people </p></div><div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4" data-v-09013526><figure class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1" data-v-09013526><blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900" data-v-09013526><p data-v-09013526>${ssrInterpolate(`\u201C${featuredTestimonial.body}\u201D`)}</p></blockquote><figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4" data-v-09013526><img class="h-10 w-10 flex-none rounded-full bg-gray-50"${ssrRenderAttr("src", featuredTestimonial.author.imageUrl)} alt="" data-v-09013526><div class="flex-auto" data-v-09013526><div class="font-semibold" data-v-09013526>${ssrInterpolate(featuredTestimonial.author.name)}</div><div class="text-gray-600" data-v-09013526>${ssrInterpolate(`@${featuredTestimonial.author.handle}`)}</div></div><img class="h-10 w-auto flex-none"${ssrRenderAttr("src", featuredTestimonial.author.logoUrl)} alt="" data-v-09013526></figcaption></figure><!--[-->`);
      ssrRenderList(testimonials, (columnGroup, columnGroupIdx) => {
        _push(`<div class="space-y-8 xl:contents xl:space-y-0" data-v-09013526><!--[-->`);
        ssrRenderList(columnGroup, (column, columnIdx) => {
          _push(`<div class="${ssrRenderClass([columnGroupIdx === 0 && columnIdx === 0 || columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1 ? "xl:row-span-2" : "xl:row-start-1", "space-y-8"])}" data-v-09013526><!--[-->`);
          ssrRenderList(column, (testimonial) => {
            _push(`<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5" data-v-09013526><blockquote class="text-gray-900" data-v-09013526><p data-v-09013526>${ssrInterpolate(`\u201C${testimonial.body}\u201D`)}</p></blockquote><figcaption class="mt-6 flex items-center gap-x-4" data-v-09013526><img class="h-10 w-10 rounded-full bg-gray-50"${ssrRenderAttr("src", testimonial.author.imageUrl)} alt="" data-v-09013526><div data-v-09013526><div class="font-semibold" data-v-09013526>${ssrInterpolate(testimonial.author.name)}</div><div class="text-gray-600" data-v-09013526>${ssrInterpolate(`@${testimonial.author.handle}`)}</div></div></figcaption></figure>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></div></main><footer class="mt-32 bg-gray-900 sm:mt-56" aria-labelledby="footer-heading" data-v-09013526><h2 id="footer-heading" class="sr-only" data-v-09013526> Footer </h2><div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32" data-v-09013526><div class="xl:grid xl:grid-cols-3 xl:gap-8" data-v-09013526><img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Company name" data-v-09013526><div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0" data-v-09013526><div class="md:grid md:grid-cols-2 md:gap-8" data-v-09013526><div data-v-09013526><h3 class="text-sm font-semibold leading-6 text-white" data-v-09013526> Solutions </h3><ul role="list" class="mt-6 space-y-4" data-v-09013526><!--[-->`);
      ssrRenderList(footerNavigation.solutions, (item) => {
        _push(`<li data-v-09013526><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white" data-v-09013526>${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-10 md:mt-0" data-v-09013526><h3 class="text-sm font-semibold leading-6 text-white" data-v-09013526> Support </h3><ul role="list" class="mt-6 space-y-4" data-v-09013526><!--[-->`);
      ssrRenderList(footerNavigation.support, (item) => {
        _push(`<li data-v-09013526><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white" data-v-09013526>${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="md:grid md:grid-cols-2 md:gap-8" data-v-09013526><div data-v-09013526><h3 class="text-sm font-semibold leading-6 text-white" data-v-09013526> Company </h3><ul role="list" class="mt-6 space-y-4" data-v-09013526><!--[-->`);
      ssrRenderList(footerNavigation.company, (item) => {
        _push(`<li data-v-09013526><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white" data-v-09013526>${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-10 md:mt-0" data-v-09013526><h3 class="text-sm font-semibold leading-6 text-white" data-v-09013526> Legal </h3><ul role="list" class="mt-6 space-y-4" data-v-09013526><!--[-->`);
      ssrRenderList(footerNavigation.legal, (item) => {
        _push(`<li data-v-09013526><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white" data-v-09013526>${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between" data-v-09013526><div data-v-09013526><h3 class="text-sm font-semibold leading-6 text-white" data-v-09013526> Subscribe to our newsletter </h3><p class="mt-2 text-sm leading-6 text-gray-300" data-v-09013526> The latest news, articles, and resources, sent to your inbox weekly. </p></div><form class="mt-6 sm:flex sm:max-w-md lg:mt-0" data-v-09013526><label for="email-address" class="sr-only" data-v-09013526>Email address</label><input id="email-address" type="email" name="email-address" autocomplete="email" required="" class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6" placeholder="Enter your email" data-v-09013526><div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0" data-v-09013526><button type="submit" class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" data-v-09013526> Subscribe </button></div></form></div><div class="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between" data-v-09013526><div class="flex space-x-6 md:order-2" data-v-09013526><!--[-->`);
      ssrRenderList(footerNavigation.social, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-gray-500 hover:text-gray-400" data-v-09013526><span class="sr-only" data-v-09013526>${ssrInterpolate(item.name)}</span>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div><p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0" data-v-09013526> \xA9 2020 Your Company, Inc. All rights reserved. </p></div></div></footer></div></section><section data-v-09013526><div class="bg-white" data-v-09013526><header class="absolute inset-x-0 top-0 z-50" data-v-09013526><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global" data-v-09013526><div class="flex lg:flex-1" data-v-09013526><a href="#" class="-m-1.5 p-1.5" data-v-09013526><span class="sr-only" data-v-09013526>Your Company</span><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" data-v-09013526></a></div><div class="flex lg:hidden" data-v-09013526><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" data-v-09013526><span class="sr-only" data-v-09013526>Open main menu</span>`);
      _push(ssrRenderComponent(unref(Bars3Icon), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div><div class="hidden lg:flex lg:gap-x-12" data-v-09013526><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-sm font-semibold leading-6 text-gray-900" data-v-09013526>${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div><div class="hidden lg:flex lg:flex-1 lg:justify-end" data-v-09013526><a href="#" class="text-sm font-semibold leading-6 text-gray-900" data-v-09013526>Log in <span aria-hidden="true" data-v-09013526>\u2192</span></a></div></nav>`);
      _push(ssrRenderComponent(unref(Ye), {
        class: "lg:hidden",
        open: mobileMenuOpen.value,
        onClose: ($event) => mobileMenuOpen.value = false
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-50" data-v-09013526${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Ge$1), { class: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between" data-v-09013526${_scopeId2}><a href="#" class="-m-1.5 p-1.5" data-v-09013526${_scopeId2}><span class="sr-only" data-v-09013526${_scopeId2}>Your Company</span><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" data-v-09013526${_scopeId2}></a><button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" data-v-09013526${_scopeId2}><span class="sr-only" data-v-09013526${_scopeId2}>Close menu</span>`);
                  _push3(ssrRenderComponent(unref(XMarkIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flow-root" data-v-09013526${_scopeId2}><div class="-my-6 divide-y divide-gray-500/10" data-v-09013526${_scopeId2}><div class="space-y-2 py-6" data-v-09013526${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(`<a${ssrRenderAttr("href", item.href)} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" data-v-09013526${_scopeId2}>${ssrInterpolate(item.name)}</a>`);
                  });
                  _push3(`<!--]--></div><div class="py-6" data-v-09013526${_scopeId2}><a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" data-v-09013526${_scopeId2}>Log in</a></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("a", {
                        href: "#",
                        class: "-m-1.5 p-1.5"
                      }, [
                        createVNode("span", { class: "sr-only" }, "Your Company"),
                        createVNode("img", {
                          class: "h-8 w-auto",
                          src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                          alt: ""
                        })
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        createVNode("span", { class: "sr-only" }, "Close menu"),
                        createVNode(unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mt-6 flow-root" }, [
                      createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                        createVNode("div", { class: "space-y-2 py-6" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                            return createVNode("a", {
                              key: item.name,
                              href: item.href,
                              class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            }, toDisplayString(item.name), 9, ["href"]);
                          }), 64))
                        ]),
                        createVNode("div", { class: "py-6" }, [
                          createVNode("a", {
                            href: "#",
                            class: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          }, "Log in")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-50" }),
              createVNode(unref(Ge$1), { class: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("a", {
                      href: "#",
                      class: "-m-1.5 p-1.5"
                    }, [
                      createVNode("span", { class: "sr-only" }, "Your Company"),
                      createVNode("img", {
                        class: "h-8 w-auto",
                        src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                        alt: ""
                      })
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, [
                      createVNode("span", { class: "sr-only" }, "Close menu"),
                      createVNode(unref(XMarkIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "mt-6 flow-root" }, [
                    createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                      createVNode("div", { class: "space-y-2 py-6" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                          return createVNode("a", {
                            key: item.name,
                            href: item.href,
                            class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          }, toDisplayString(item.name), 9, ["href"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "py-6" }, [
                        createVNode("a", {
                          href: "#",
                          class: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        }, "Log in")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><main class="isolate" data-v-09013526><div class="relative isolate -z-10" data-v-09013526><svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true" data-v-09013526><defs data-v-09013526><pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse" data-v-09013526><path d="M.5 200V.5H200" fill="none" data-v-09013526></path></pattern></defs><svg x="50%" y="-1" class="overflow-visible fill-gray-50" data-v-09013526><path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" data-v-09013526></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" data-v-09013526></rect></svg><div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true" data-v-09013526><div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="${ssrRenderStyle({ "clip-path": "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" })}" data-v-09013526></div></div><div class="overflow-hidden" data-v-09013526><div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32" data-v-09013526><div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center" data-v-09013526><div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl" data-v-09013526><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" data-v-09013526> We\u2019re changing the way people connect. </h1><p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none" data-v-09013526> Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua. </p></div><div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0" data-v-09013526><div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80" data-v-09013526><div class="relative" data-v-09013526><img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-09013526><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-09013526></div></div></div><div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36" data-v-09013526><div class="relative" data-v-09013526><img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-09013526><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-09013526></div></div><div class="relative" data-v-09013526><img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.4&amp;w=396&amp;h=528&amp;q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-09013526><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-09013526></div></div></div><div class="w-44 flex-none space-y-8 pt-32 sm:pt-0" data-v-09013526><div class="relative" data-v-09013526><img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=left&amp;w=400&amp;h=528&amp;q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-09013526><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-09013526></div></div><div class="relative" data-v-09013526><img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" data-v-09013526><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" data-v-09013526></div></div></div></div></div></div></div></div><div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8" data-v-09013526><div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none" data-v-09013526><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-v-09013526> Our mission </h2><div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row" data-v-09013526><div class="lg:w-full lg:max-w-2xl lg:flex-auto" data-v-09013526><p class="text-xl leading-8 text-gray-600" data-v-09013526> Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien. </p><div class="mt-10 max-w-xl text-base leading-7 text-gray-700" data-v-09013526><p data-v-09013526>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p><p class="mt-10" data-v-09013526> Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci. </p></div></div><div class="lg:flex lg:flex-auto lg:justify-center" data-v-09013526><dl class="w-64 space-y-8 xl:w-80" data-v-09013526><!--[-->`);
      ssrRenderList(_ctx.stats, (stat) => {
        _push(`<div class="flex flex-col-reverse gap-y-4" data-v-09013526><dt class="text-base leading-7 text-gray-600" data-v-09013526>${ssrInterpolate(stat.label)}</dt><dd class="text-5xl font-semibold tracking-tight text-gray-900" data-v-09013526>${ssrInterpolate(stat.value)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div></div></div><div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8" data-v-09013526><img src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&amp;w=3000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl" data-v-09013526></div><div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8" data-v-09013526><div class="mx-auto max-w-2xl lg:mx-0" data-v-09013526><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-v-09013526> Our values </h2><p class="mt-6 text-lg leading-8 text-gray-600" data-v-09013526> Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam. </p></div><dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3" data-v-09013526><!--[-->`);
      ssrRenderList(_ctx.values, (value) => {
        _push(`<div data-v-09013526><dt class="font-semibold text-gray-900" data-v-09013526>${ssrInterpolate(value.name)}</dt><dd class="mt-1 text-gray-600" data-v-09013526>${ssrInterpolate(value.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div><div class="relative isolate -z-10 mt-32 sm:mt-48" data-v-09013526><div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]" data-v-09013526><svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true" data-v-09013526><defs data-v-09013526><pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)" data-v-09013526><path d="M.5 200V.5H200" fill="none" data-v-09013526></path></pattern></defs><svg x="50%" y="50%" class="overflow-visible fill-gray-50" data-v-09013526><path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" data-v-09013526></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" data-v-09013526></rect></svg></div><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-09013526><h2 class="text-center text-lg font-semibold leading-8 text-gray-900" data-v-09013526> Trusted by the world\u2019s most innovative teams </h2><div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5" data-v-09013526><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" data-v-09013526><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" data-v-09013526><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" data-v-09013526><img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" data-v-09013526><img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" data-v-09013526></div></div></div><div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8" data-v-09013526><div class="mx-auto max-w-2xl lg:mx-0" data-v-09013526><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-v-09013526> Our team </h2><p class="mt-6 text-lg leading-8 text-gray-600" data-v-09013526> Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere repellendus ut eos dolores similique. </p></div><ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6" data-v-09013526><!--[-->`);
      ssrRenderList(_ctx.team, (person) => {
        _push(`<li data-v-09013526><img class="mx-auto h-24 w-24 rounded-full"${ssrRenderAttr("src", person.imageUrl)} alt="" data-v-09013526><h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900" data-v-09013526>${ssrInterpolate(person.name)}</h3><p class="text-sm leading-6 text-gray-600" data-v-09013526>${ssrInterpolate(person.role)}</p></li>`);
      });
      _push(`<!--]--></ul></div><div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8" data-v-09013526><div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none" data-v-09013526><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-v-09013526> From the blog </h2><p class="mt-2 text-lg leading-8 text-gray-600" data-v-09013526> Vel dolorem qui facilis soluta sint aspernatur totam cumque. </p></div><div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3" data-v-09013526><!--[-->`);
      ssrRenderList(_ctx.blogPosts, (post) => {
        _push(`<article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80" data-v-09013526><img${ssrRenderAttr("src", post.imageUrl)} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" data-v-09013526><div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" data-v-09013526></div><div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" data-v-09013526></div><div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300" data-v-09013526><time${ssrRenderAttr("datetime", post.datetime)} class="mr-8" data-v-09013526>${ssrInterpolate(post.date)}</time><div class="-ml-4 flex items-center gap-x-4" data-v-09013526><svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50" data-v-09013526><circle cx="1" cy="1" r="1" data-v-09013526></circle></svg><div class="flex gap-x-2.5" data-v-09013526><img${ssrRenderAttr("src", post.author.imageUrl)} alt="" class="h-6 w-6 flex-none rounded-full bg-white/10" data-v-09013526> ${ssrInterpolate(post.author.name)}</div></div></div><h3 class="mt-3 text-lg font-semibold leading-6 text-white" data-v-09013526><a${ssrRenderAttr("href", post.href)} data-v-09013526><span class="absolute inset-0" data-v-09013526></span> ${ssrInterpolate(post.title)}</a></h3></article>`);
      });
      _push(`<!--]--></div></div></main><footer class="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8" data-v-09013526><nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer" data-v-09013526><!--[-->`);
      ssrRenderList(footerNavigation.main, (item) => {
        _push(`<div class="pb-6" data-v-09013526><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-600 hover:text-gray-900" data-v-09013526>${ssrInterpolate(item.name)}</a></div>`);
      });
      _push(`<!--]--></nav><div class="mt-10 flex justify-center space-x-10" data-v-09013526><!--[-->`);
      ssrRenderList(footerNavigation.social, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-gray-400 hover:text-gray-500" data-v-09013526><span class="sr-only" data-v-09013526>${ssrInterpolate(item.name)}</span>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div><p class="mt-10 text-center text-xs leading-5 text-gray-500" data-v-09013526> \xA9 2020 Your Company, Inc. All rights reserved. </p></footer></div></section><section data-v-09013526><div class="bg-gray-900 py-24 sm:py-32" data-v-09013526><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-09013526><div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3" data-v-09013526><div class="bg-white/5 p-8 sm:p-10" data-v-09013526><img class="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" width="158" height="48" data-v-09013526></div><div class="bg-white/5 p-6 sm:p-10" data-v-09013526><img class="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" width="158" height="48" data-v-09013526></div><div class="bg-white/5 p-6 sm:p-10" data-v-09013526><img class="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width="158" height="48" data-v-09013526></div><div class="bg-white/5 p-6 sm:p-10" data-v-09013526><img class="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="Laravel" width="158" height="48" data-v-09013526></div><div class="bg-white/5 p-6 sm:p-10" data-v-09013526><img class="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" width="158" height="48" data-v-09013526></div><div class="bg-white/5 p-6 sm:p-10" data-v-09013526><img class="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" width="158" height="48" data-v-09013526></div></div></div></div></section><section data-v-09013526><div data-v-09013526><h2 class="text-base font-semibold leading-6 text-gray-900" data-v-09013526> Upcoming meetings </h2><div class="lg:grid lg:grid-cols-12 lg:gap-x-16" data-v-09013526><div class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9" data-v-09013526><div class="flex items-center text-gray-900" data-v-09013526><button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" data-v-09013526><span class="sr-only" data-v-09013526>Previous month</span>`);
      _push(ssrRenderComponent(unref(ChevronLeftIcon), {
        class: "h-5 w-5",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button><div class="flex-auto text-sm font-semibold" data-v-09013526> January </div><button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" data-v-09013526><span class="sr-only" data-v-09013526>Next month</span>`);
      _push(ssrRenderComponent(unref(ChevronRightIcon), {
        class: "h-5 w-5",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div><div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500" data-v-09013526><div data-v-09013526>M</div><div data-v-09013526>T</div><div data-v-09013526>W</div><div data-v-09013526>T</div><div data-v-09013526>F</div><div data-v-09013526>S</div><div data-v-09013526>S</div></div><div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200" data-v-09013526><!--[-->`);
      ssrRenderList(days, (day, dayIdx) => {
        _push(`<button type="button" class="${ssrRenderClass(["py-1.5 hover:bg-gray-100 focus:z-10", day.isCurrentMonth ? "bg-white" : "bg-gray-50", (day.isSelected || day.isToday) && "font-semibold", day.isSelected && "text-white", !day.isSelected && day.isCurrentMonth && !day.isToday && "text-gray-900", !day.isSelected && !day.isCurrentMonth && !day.isToday && "text-gray-400", day.isToday && !day.isSelected && "text-indigo-600", dayIdx === 0 && "rounded-tl-lg", dayIdx === 6 && "rounded-tr-lg", dayIdx === days.length - 7 && "rounded-bl-lg", dayIdx === days.length - 1 && "rounded-br-lg"])}" data-v-09013526><time${ssrRenderAttr("datetime", day.date)} class="${ssrRenderClass(["mx-auto flex h-7 w-7 items-center justify-center rounded-full", day.isSelected && day.isToday && "bg-indigo-600", day.isSelected && !day.isToday && "bg-gray-900"])}" data-v-09013526>${ssrInterpolate(day.date.split("-").pop().replace(/^0/, ""))}</time></button>`);
      });
      _push(`<!--]--></div><button type="button" class="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-v-09013526> Add event </button></div><ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8" data-v-09013526><!--[-->`);
      ssrRenderList(meetings, (meeting) => {
        _push(`<li class="relative flex space-x-6 py-6 xl:static" data-v-09013526><img${ssrRenderAttr("src", meeting.imageUrl)} alt="" class="h-14 w-14 flex-none rounded-full" data-v-09013526><div class="flex-auto" data-v-09013526><h3 class="pr-10 font-semibold text-gray-900 xl:pr-0" data-v-09013526>${ssrInterpolate(meeting.name)}</h3><dl class="mt-2 flex flex-col text-gray-500 xl:flex-row" data-v-09013526><div class="flex items-start space-x-3" data-v-09013526><dt class="mt-0.5" data-v-09013526><span class="sr-only" data-v-09013526>Date</span>`);
        _push(ssrRenderComponent(unref(CalendarIcon), {
          class: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</dt><dd data-v-09013526><time${ssrRenderAttr("datetime", meeting.datetime)} data-v-09013526>${ssrInterpolate(meeting.date)} at ${ssrInterpolate(meeting.time)}</time></dd></div><div class="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5" data-v-09013526><dt class="mt-0.5" data-v-09013526><span class="sr-only" data-v-09013526>Location</span>`);
        _push(ssrRenderComponent(unref(MapPinIcon), {
          class: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</dt><dd data-v-09013526>${ssrInterpolate(meeting.location)}</dd></div></dl></div>`);
        _push(ssrRenderComponent(unref(ge), {
          as: "div",
          class: "absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-09013526${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Se), { class: "-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600" }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="sr-only" data-v-09013526${_scopeId2}>Open options</span>`);
                    _push3(ssrRenderComponent(unref(EllipsisHorizontalIcon), {
                      class: "h-5 w-5",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", { class: "sr-only" }, "Open options"),
                      createVNode(unref(EllipsisHorizontalIcon), {
                        class: "h-5 w-5",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(unref(Me), { class: "absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="py-1" data-v-09013526${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(be), null, {
                      default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="#" class="${ssrRenderClass([active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"])}" data-v-09013526${_scopeId3}>Edit</a>`);
                        } else {
                          return [
                            createVNode("a", {
                              href: "#",
                              class: [active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"]
                            }, "Edit", 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(be), null, {
                      default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="#" class="${ssrRenderClass([active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"])}" data-v-09013526${_scopeId3}>Cancel</a>`);
                        } else {
                          return [
                            createVNode("a", {
                              href: "#",
                              class: [active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"]
                            }, "Cancel", 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "py-1" }, [
                        createVNode(unref(be), null, {
                          default: withCtx(({ active }) => [
                            createVNode("a", {
                              href: "#",
                              class: [active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"]
                            }, "Edit", 2)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(be), null, {
                          default: withCtx(({ active }) => [
                            createVNode("a", {
                              href: "#",
                              class: [active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"]
                            }, "Cancel", 2)
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", null, [
                  createVNode(unref(Se), { class: "-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "sr-only" }, "Open options"),
                      createVNode(unref(EllipsisHorizontalIcon), {
                        class: "h-5 w-5",
                        "aria-hidden": "true"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(Transition, {
                  "enter-active-class": "transition ease-out duration-100",
                  "enter-from-class": "transform opacity-0 scale-95",
                  "enter-to-class": "transform opacity-100 scale-100",
                  "leave-active-class": "transition ease-in duration-75",
                  "leave-from-class": "transform opacity-100 scale-100",
                  "leave-to-class": "transform opacity-0 scale-95"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Me), { class: "absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "py-1" }, [
                          createVNode(unref(be), null, {
                            default: withCtx(({ active }) => [
                              createVNode("a", {
                                href: "#",
                                class: [active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"]
                              }, "Edit", 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(be), null, {
                            default: withCtx(({ active }) => [
                              createVNode("a", {
                                href: "#",
                                class: [active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"]
                              }, "Cancel", 2)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ol></div></div></section><section data-v-09013526>`);
      _push(ssrRenderComponent(_component_FetchJson, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09013526"]]);

export { test as default };
//# sourceMappingURL=test-Dgbjt50P.mjs.map
