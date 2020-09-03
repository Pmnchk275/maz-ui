module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/MazTabsLayout/MazTabsBar/_main.vue?vue&type=template&id=3ecad75e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "MazTabsBar",
      staticClass: "maz-base-component maz-tabs-bar",
      class: {
        "maz-is-dark": _vm.dark,
        "align-left": _vm.alignLeft
      }
    },
    [
      _vm._l(_vm.items, function(ref, i) {
        var label = ref.label
        var disabled = ref.disabled
        return _c(
          "MazBtn",
          {
            key: i,
            ref: "MazTabsBarItem",
            refInFor: true,
            staticClass: "maz-tabs-bar__item",
            class: { active: _vm.valueComputed === i, disabled: disabled },
            attrs: {
              "no-shadow": "",
              color: "transparent",
              to: _vm.noUseAnchor ? null : "#" + _vm.labelNormalize(label)
            },
            nativeOn: {
              click: function($event) {
                $event.preventDefault()
                disabled ? null : _vm.setValue($event, i)
              }
            }
          },
          [_vm._v("\n    " + _vm._s(label) + "\n  ")]
        )
      }),
      _c(
        "div",
        {
          staticClass: "maz-tabs-bar__indicator",
          style: _vm.tabsIndicatorState
        },
        [_c("div", { staticClass: "maz-sub-bar" })]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/components/MazTabsLayout/MazTabsBar/_main.vue?vue&type=template&id=3ecad75e&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/MazTabsLayout/MazTabsBar/_main.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var toSnakeCase = function toSnakeCase(string) {
  return string.replace(/\W+/g, ' ').split(/ |\B(?=[A-Z])/).map(function (word) {
    return word.toLowerCase();
  }).join('_');
};

var getIndexOfCurrentAnchor = function getIndexOfCurrentAnchor(tabs) {
  if (typeof window === 'undefined') return 0;
  var anchor = window.location.hash.replace('#', '');
  var index = tabs.findIndex(function (_ref) {
    var label = _ref.label;
    return toSnakeCase(label) === anchor;
  });
  return index === -1 ? 0 : index;
};

/* harmony default export */ var _mainvue_type_script_lang_js_ = ({
  name: 'MazTabsBar',
  props: {
    // tabs objects - ex: `[ { label: 'First Tab' }, { label: 'Second Tab', disabled: true }]`
    items: {
      type: Array,
      required: true
    },
    // current tab active
    value: {
      type: Number,
      default: null
    },
    // set the dark theme
    dark: {
      type: Boolean,
      default: false
    },
    // the tabs bar will be align on left
    alignLeft: {
      type: Boolean,
      default: false
    },
    // you should use the history mode with VueRouter && do not use `v-model` value
    noUseAnchor: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentTab: this.noUseAnchor ? 0 : getIndexOfCurrentAnchor(this.items),
      tabsIndicatorState: {}
    };
  },
  computed: {
    valueComputed: {
      get: function get() {
        var value = this.value;
        return value ? value - 1 : this.currentTab;
      },
      set: function set(value) {
        this.getTabsIndicatorState();
        this.currentTab = value; // return the number of current active tab
        // @arg Number

        this.$emit('input', value + 1);
      }
    }
  },
  watch: {
    value: {
      handler: function handler(value) {
        this.tabActive = value - 1;
        this.getTabsIndicatorState();
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    this.getTabsIndicatorState();
  },
  methods: {
    setValue: function setValue(e, i) {
      e.preventDefault();
      this.valueComputed = i;
    },
    labelNormalize: function labelNormalize(label) {
      return toSnakeCase(label);
    },
    getTabsIndicatorState: function getTabsIndicatorState() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var tabsItem, indicatorWidth, translateXValue;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$nextTick();

              case 2:
                tabsItem = _this.$refs.MazTabsBarItem ? _this.$refs.MazTabsBarItem[_this.valueComputed] : null;
                indicatorWidth = tabsItem ? tabsItem.$el.clientWidth : 0;
                translateXValue = tabsItem ? tabsItem.$el.offsetLeft : 0;
                _this.tabsIndicatorState = {
                  transform: "translateX(".concat(translateXValue, "px)"),
                  width: "".concat(indicatorWidth, "px")
                };

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./packages/components/MazTabsLayout/MazTabsBar/_main.vue?vue&type=script&lang=js&
 /* harmony default export */ var MazTabsBar_mainvue_type_script_lang_js_ = (_mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/components/MazTabsLayout/MazTabsBar/_main.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MazTabsBar_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/components/MazTabsLayout/MazTabsBar/_main.vue"
/* harmony default export */ var _main = (component.exports);
// CONCATENATED MODULE: ./packages/components/MazTabsLayout/MazTabsBar/index.js


_main.install = function (Vue) {
  Vue.component(_main.name, _main);
};

/* harmony default export */ var MazTabsBar = __webpack_exports__["default"] = (_main);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });