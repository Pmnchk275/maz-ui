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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/MazTabsLayout/MazTabsContent/_main.vue?vue&type=template&id=e529b978&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "maz-base-component maz-overflow-hidden",
      style: [{ height: _vm.height + "px" }]
    },
    [
      _c(
        "div",
        {
          ref: "MazTabsContent",
          staticClass: "maz-tabs-content maz-flex maz-align-start",
          style: [_vm.tabsContainerState]
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/components/MazTabsLayout/MazTabsContent/_main.vue?vue&type=template&id=e529b978&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: external "resize-observer-polyfill"
var external_resize_observer_polyfill_ = __webpack_require__(21);
var external_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_resize_observer_polyfill_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/MazTabsLayout/MazTabsContent/_main.vue?vue&type=script&lang=js&


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

/* harmony default export */ var _mainvue_type_script_lang_js_ = ({
  name: 'MazTabsContent',
  props: {
    // set the current active tab (use it you don't use MazTabsBar)
    activeTab: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      height: 0
    };
  },
  computed: {
    currentTab: function currentTab() {
      var activeTab = this.activeTab;
      if (Number.isInteger(activeTab)) return activeTab - 1;
      var tabsBarComponent = this.$parent.$children.find(function (c) {
        return typeof c.$refs.MazTabsBar !== 'undefined';
      });

      var _ref = tabsBarComponent || {
        valueComputed: 0
      },
          valueComputed = _ref.valueComputed;

      return valueComputed;
    },
    tabsContainerState: function tabsContainerState() {
      return {
        transform: "translateX(-".concat(this.currentTab, "00%)")
      };
    }
  },
  watch: {
    currentTab: {
      handler: function handler() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          var _this$$children$curre, _this$$children$curre2, _this$$children$curre3;

          var currentTab;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.$nextTick();

                case 2:
                  currentTab = _this.currentTab;
                  _this.height = (_this$$children$curre = (_this$$children$curre2 = _this.$children[currentTab]) === null || _this$$children$curre2 === void 0 ? void 0 : (_this$$children$curre3 = _this$$children$curre2.$el) === null || _this$$children$curre3 === void 0 ? void 0 : _this$$children$curre3.offsetHeight) !== null && _this$$children$curre !== void 0 ? _this$$children$curre : 0;

                  _this.resizeObserver();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      immediate: true
    }
  },
  methods: {
    resizeObserver: function resizeObserver() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var $children, currentTab, resizeObserver;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                $children = _this2.$children, currentTab = _this2.currentTab;
                resizeObserver = new external_resize_observer_polyfill_default.a(function (entries) {
                  var _iterator = _createForOfIteratorHelper(entries),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var _entry$target$offsetH, _entry$target2;

                      var entry = _step.value;
                      var _entry$target = entry.target,
                          offsetHeight = _entry$target.offsetHeight,
                          classList = _entry$target.classList;
                      if (offsetHeight && !classList.contains('maz-tabs-content')) _this2.height = (_entry$target$offsetH = entry === null || entry === void 0 ? void 0 : (_entry$target2 = entry.target) === null || _entry$target2 === void 0 ? void 0 : _entry$target2.offsetHeight) !== null && _entry$target$offsetH !== void 0 ? _entry$target$offsetH : 0;
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                });
                $children.forEach(function (d) {
                  return resizeObserver.unobserve(d.$el);
                });
                setTimeout(function () {
                  resizeObserver.observe($children[currentTab].$el);
                }, 500);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./packages/components/MazTabsLayout/MazTabsContent/_main.vue?vue&type=script&lang=js&
 /* harmony default export */ var MazTabsContent_mainvue_type_script_lang_js_ = (_mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/components/MazTabsLayout/MazTabsContent/_main.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MazTabsContent_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/components/MazTabsLayout/MazTabsContent/_main.vue"
/* harmony default export */ var _main = (component.exports);
// CONCATENATED MODULE: ./packages/components/MazTabsLayout/MazTabsContent/index.js


_main.install = function (Vue) {
  Vue.component(_main.name, _main);
};

/* harmony default export */ var MazTabsContent = __webpack_exports__["default"] = (_main);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });