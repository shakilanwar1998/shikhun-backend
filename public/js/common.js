(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/layout-helpers.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/layout-helpers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(window,
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 2);
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./resources/assets/vendor/js/layout-helpers.js":
  /*!******************************************************!*\
    !*** ./resources/assets/vendor/js/layout-helpers.js ***!
    \******************************************************/

  /*! exports provided: layoutHelpers */

  /***/
  function resourcesAssetsVendorJsLayoutHelpersJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "layoutHelpers", function () {
      return layoutHelpers;
    });

    function _toArray(arr) {
      return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    } // Constants


    var TRANSITION_EVENTS = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd'];
    var TRANSITION_PROPERTIES = ['transition', 'MozTransition', 'webkitTransition', 'WebkitTransition', 'OTransition'];
    var INLINE_STYLE = "\n.layout-fixed .layout-1 .layout-sidenav,\n.layout-fixed-offcanvas .layout-1 .layout-sidenav {\n  top: {navbarHeight}px !important;\n}\n.layout-container {\n  padding-top: {navbarHeight}px !important;\n}\n.layout-content {\n  padding-bottom: {footerHeight}px !important;\n}"; // Guard

    function requiredParam(name) {
      throw new Error("Parameter required".concat(name ? ': `' + name + '`' : ''));
    }

    var layoutHelpers = {
      // Root container
      CONTAINER: typeof window !== 'undefined' ? document.documentElement : null,
      // Large screens breakpoint
      LAYOUT_BREAKPOINT: 992,
      // Resize delay in milliseconds
      RESIZE_DELAY: 200,
      // Internal variables
      _curStyle: null,
      _styleEl: null,
      _resizeTimeout: null,
      _resizeCallback: null,
      _transitionCallback: null,
      _transitionCallbackTimeout: null,
      _listeners: [],
      _initialized: false,
      _autoUpdate: false,
      _lastWindowHeight: 0,
      // *******************************************************************************
      // * Utilities
      // ---
      // Add class
      _addClass: function _addClass(cls) {
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.CONTAINER;
        cls.split(' ').forEach(function (c) {
          return el.classList.add(c);
        });
      },
      // ---
      // Remove class
      _removeClass: function _removeClass(cls) {
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.CONTAINER;
        cls.split(' ').forEach(function (c) {
          return el.classList.remove(c);
        });
      },
      // ---
      // Has class
      _hasClass: function _hasClass(cls) {
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.CONTAINER;
        var result = false;
        cls.split(' ').forEach(function (c) {
          if (el.classList.contains(c)) result = true;
        });
        return result;
      },
      // ---
      // Check for transition support
      _supportsTransitionEnd: function _supportsTransitionEnd() {
        if (window.QUnit) return false;
        var el = document.body || document.documentElement;
        if (!el) return false;
        var result = false;
        TRANSITION_PROPERTIES.forEach(function (evnt) {
          if (typeof el.style[evnt] !== 'undefined') result = true;
        });
        return result;
      },
      // ---
      // Get animation duration of element
      _getAnimationDuration: function _getAnimationDuration(el) {
        var duration = window.getComputedStyle(el).transitionDuration;
        return parseFloat(duration) * (duration.indexOf('ms') !== -1 ? 1 : 1000);
      },
      // ---
      // Trigger window event
      _triggerWindowEvent: function _triggerWindowEvent(name) {
        if (typeof window === 'undefined') return;

        if (document.createEvent) {
          var event;

          if (typeof Event === 'function') {
            event = new Event(name);
          } else {
            event = document.createEvent('Event');
            event.initEvent(name, false, true);
          }

          window.dispatchEvent(event);
        } else {
          window.fireEvent("on".concat(name), document.createEventObject());
        }
      },
      // ---
      // Trigger event
      _triggerEvent: function _triggerEvent(name) {
        this._triggerWindowEvent("layout".concat(name));

        this._listeners.filter(function (listener) {
          return listener.event === name;
        }).forEach(function (listener) {
          return listener.callback.call(null);
        });
      },
      // ---
      // Update style
      _updateInlineStyle: function _updateInlineStyle() {
        var navbarHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var footerHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (!this._styleEl) {
          this._styleEl = document.createElement('style');
          this._styleEl.type = 'text/css';
          document.head.appendChild(this._styleEl);
        }

        var newStyle = INLINE_STYLE.replace(/\{navbarHeight\}/ig, navbarHeight).replace(/\{footerHeight\}/ig, footerHeight);

        if (this._curStyle !== newStyle) {
          this._curStyle = newStyle;
          this._styleEl.textContent = newStyle;
        }
      },
      // ---
      // Remove style
      _removeInlineStyle: function _removeInlineStyle() {
        if (this._styleEl) document.head.removeChild(this._styleEl);
        this._styleEl = null;
        this._curStyle = null;
      },
      // ---
      // Redraw layout sidenav (Safari bugfix)
      _redrawLayoutSidenav: function _redrawLayoutSidenav() {
        var layoutSidenav = this.getLayoutSidenav();

        if (layoutSidenav && layoutSidenav.querySelector('.sidenav')) {
          var inner = layoutSidenav.querySelector('.sidenav-inner');
          var scrollTop = inner.scrollTop;
          var pageScrollTop = document.documentElement.scrollTop;
          layoutSidenav.style.display = 'none';
          layoutSidenav.offsetHeight;
          layoutSidenav.style.display = '';
          inner.scrollTop = scrollTop;
          document.documentElement.scrollTop = pageScrollTop;
          return true;
        }

        return false;
      },
      // ---
      // Calculate current navbar height
      _getNavbarHeight: function _getNavbarHeight() {
        var _this = this;

        var layoutNavbar = this.getLayoutNavbar();
        if (!layoutNavbar) return 0;
        if (!this.isSmallScreen()) return layoutNavbar.getBoundingClientRect().height; // Needs some logic to get navbar height on small screens

        var clonedEl = layoutNavbar.cloneNode(true);
        clonedEl.id = null;
        clonedEl.style.visibility = 'hidden';
        clonedEl.style.position = 'absolute';
        Array.prototype.slice.call(clonedEl.querySelectorAll('.collapse.show')).forEach(function (el) {
          return _this._removeClass('show', el);
        });
        layoutNavbar.parentNode.insertBefore(clonedEl, layoutNavbar);
        var navbarHeight = clonedEl.getBoundingClientRect().height;
        clonedEl.parentNode.removeChild(clonedEl);
        return navbarHeight;
      },
      // ---
      // Get current footer height
      _getFooterHeight: function _getFooterHeight() {
        var layoutFooter = this.getLayoutFooter();
        if (!layoutFooter) return 0;
        return layoutFooter.getBoundingClientRect().height;
      },
      // ---
      // Add layout sivenav toggle animationEnd event
      _bindLayoutAnimationEndEvent: function _bindLayoutAnimationEndEvent(modifier, cb) {
        var _this2 = this;

        var sidenav = this.getSidenav();
        var duration = sidenav ? this._getAnimationDuration(sidenav) + 50 : 0;

        if (!duration) {
          modifier.call(this);
          cb.call(this);
          return;
        }

        this._transitionCallback = function (e) {
          if (e.target !== sidenav) return;

          _this2._unbindLayoutAnimationEndEvent();

          cb.call(_this2);
        };

        TRANSITION_EVENTS.forEach(function (e) {
          sidenav.addEventListener(e, _this2._transitionCallback, false);
        });
        modifier.call(this);
        this._transitionCallbackTimeout = setTimeout(function () {
          _this2._transitionCallback.call(_this2, {
            target: sidenav
          });
        }, duration);
      },
      // ---
      // Remove layout sivenav toggle animationEnd event
      _unbindLayoutAnimationEndEvent: function _unbindLayoutAnimationEndEvent() {
        var _this3 = this;

        var sidenav = this.getSidenav();

        if (this._transitionCallbackTimeout) {
          clearTimeout(this._transitionCallbackTimeout);
          this._transitionCallbackTimeout = null;
        }

        if (sidenav && this._transitionCallback) {
          TRANSITION_EVENTS.forEach(function (e) {
            sidenav.removeEventListener(e, _this3._transitionCallback, false);
          });
        }

        if (this._transitionCallback) {
          this._transitionCallback = null;
        }
      },
      // ---
      // Bind delayed window resize event
      _bindWindowResizeEvent: function _bindWindowResizeEvent() {
        var _this4 = this;

        this._unbindWindowResizeEvent();

        var cb = function cb() {
          if (_this4._resizeTimeout) {
            clearTimeout(_this4._resizeTimeout);
            _this4._resizeTimeout = null;
          }

          _this4._triggerEvent('resize');
        };

        this._resizeCallback = function () {
          if (_this4._resizeTimeout) clearTimeout(_this4._resizeTimeout);
          _this4._resizeTimeout = setTimeout(cb, _this4.RESIZE_DELAY);
        };

        window.addEventListener('resize', this._resizeCallback, false);
      },
      // ---
      // Unbind delayed window resize event
      _unbindWindowResizeEvent: function _unbindWindowResizeEvent() {
        if (this._resizeTimeout) {
          clearTimeout(this._resizeTimeout);
          this._resizeTimeout = null;
        }

        if (this._resizeCallback) {
          window.removeEventListener('resize', this._resizeCallback, false);
          this._resizeCallback = null;
        }
      },
      // ---
      // Set sidenav hover state
      _setSidenavHoverState: function _setSidenavHoverState(hovered) {
        this[hovered ? '_addClass' : '_removeClass']('layout-sidenav-hover');
      },
      // ---
      // Toggle collapsed
      _setCollapsed: function _setCollapsed(collapsed) {
        var _this5 = this;

        if (this.isSmallScreen()) {
          if (collapsed) {
            this._removeClass('layout-expanded');
          } else {
            setTimeout(function () {
              _this5._addClass('layout-expanded');
            }, this._redrawLayoutSidenav() ? 5 : 0);
          }
        } else {
          this[collapsed ? '_addClass' : '_removeClass']('layout-collapsed');
        }
      },
      _findParent: function _findParent(el, cls) {
        if (el && el.tagName.toUpperCase() === 'BODY') return null;
        el = el.parentNode;

        while (el && el.tagName.toUpperCase() !== 'BODY' && !el.classList.contains(cls)) {
          el = el.parentNode;
        }

        el = el && el.tagName.toUpperCase() !== 'BODY' ? el : null;
        return el;
      },
      _bindSidenavMouseEvents: function _bindSidenavMouseEvents() {
        var _this6 = this;

        if (this._sidenavMouseEnter && this._sidenavMouseLeave && this._windowTouchStart) return;
        var layoutSidenav = this.getLayoutSidenav();
        if (!layoutSidenav) return this._unbindSidenavMouseEvents();

        if (!this._sidenavMouseEnter) {
          this._sidenavMouseEnter = function () {
            if (_this6.isSmallScreen() || !_this6._hasClass('layout-collapsed') || _this6.isOffcanvas() || _this6._hasClass('layout-transitioning')) {
              return _this6._setSidenavHoverState(false);
            }

            _this6._setSidenavHoverState(true);
          };

          layoutSidenav.addEventListener('mouseenter', this._sidenavMouseEnter, false);
          layoutSidenav.addEventListener('touchstart', this._sidenavMouseEnter, false);
        }

        if (!this._sidenavMouseLeave) {
          this._sidenavMouseLeave = function () {
            _this6._setSidenavHoverState(false);
          };

          layoutSidenav.addEventListener('mouseleave', this._sidenavMouseLeave, false);
        }

        if (!this._windowTouchStart) {
          this._windowTouchStart = function (e) {
            if (!e || !e.target || !_this6._findParent(e.target, '.layout-sidenav')) {
              _this6._setSidenavHoverState(false);
            }
          };

          window.addEventListener('touchstart', this._windowTouchStart, true);
        }
      },
      _unbindSidenavMouseEvents: function _unbindSidenavMouseEvents() {
        if (!this._sidenavMouseEnter && !this._sidenavMouseLeave && !this._windowTouchStart) return;
        var layoutSidenav = this.getLayoutSidenav();

        if (this._sidenavMouseEnter) {
          if (layoutSidenav) {
            layoutSidenav.removeEventListener('mouseenter', this._sidenavMouseEnter, false);
            layoutSidenav.removeEventListener('touchstart', this._sidenavMouseEnter, false);
          }

          this._sidenavMouseEnter = null;
        }

        if (this._sidenavMouseLeave) {
          if (layoutSidenav) {
            layoutSidenav.removeEventListener('mouseleave', this._sidenavMouseLeave, false);
          }

          this._sidenavMouseLeave = null;
        }

        if (this._windowTouchStart) {
          if (layoutSidenav) {
            window.addEventListener('touchstart', this._windowTouchStart, true);
          }

          this._windowTouchStart = null;
        }

        this._setSidenavHoverState(false);
      },
      // *******************************************************************************
      // * Getters
      getLayoutSidenav: function getLayoutSidenav() {
        return document.querySelector('.layout-sidenav');
      },
      getSidenav: function getSidenav() {
        var layoutSidenav = this.getLayoutSidenav();
        if (!layoutSidenav) return null;
        return !this._hasClass('sidenav', layoutSidenav) ? layoutSidenav.querySelector('.sidenav') : layoutSidenav;
      },
      getLayoutNavbar: function getLayoutNavbar() {
        return document.querySelector('.layout-navbar');
      },
      getLayoutFooter: function getLayoutFooter() {
        return document.querySelector('.layout-footer');
      },
      getLayoutContainer: function getLayoutContainer() {
        return document.querySelector('.layout-container');
      },
      // *******************************************************************************
      // * Tests
      isMobileDevice: function isMobileDevice() {
        return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1;
      },
      isSmallScreen: function isSmallScreen() {
        return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < this.LAYOUT_BREAKPOINT;
      },
      isLayout1: function isLayout1() {
        return !!document.querySelector('.layout-wrapper.layout-1');
      },
      isCollapsed: function isCollapsed() {
        if (this.isSmallScreen()) {
          return !this._hasClass('layout-expanded');
        } else {
          return this._hasClass('layout-collapsed');
        }
      },
      isFixed: function isFixed() {
        return this._hasClass('layout-fixed layout-fixed-offcanvas');
      },
      isOffcanvas: function isOffcanvas() {
        return this._hasClass('layout-offcanvas layout-fixed-offcanvas');
      },
      isNavbarFixed: function isNavbarFixed() {
        return this._hasClass('layout-navbar-fixed') || !this.isSmallScreen() && this.isFixed() && this.isLayout1();
      },
      isFooterFixed: function isFooterFixed() {
        return this._hasClass('layout-footer-fixed');
      },
      isReversed: function isReversed() {
        return this._hasClass('layout-reversed');
      },
      // *******************************************************************************
      // * Methods
      // ---
      // Collapse / expand layout
      setCollapsed: function setCollapsed() {
        var _this7 = this;

        var collapsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('collapsed');
        var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var layoutSidenav = this.getLayoutSidenav();
        if (!layoutSidenav) return;

        this._unbindLayoutAnimationEndEvent();

        if (animate && this._supportsTransitionEnd()) {
          this._addClass('layout-transitioning');

          if (collapsed) this._setSidenavHoverState(false);

          this._bindLayoutAnimationEndEvent(function () {
            // Collapse / Expand
            _this7._setCollapsed(collapsed);
          }, function () {
            _this7._removeClass('layout-transitioning');

            _this7._triggerWindowEvent('resize');

            _this7._triggerEvent('toggle');

            _this7._setSidenavHoverState(false);
          });
        } else {
          this._addClass('layout-no-transition');

          if (collapsed) this._setSidenavHoverState(false); // Collapse / Expand

          this._setCollapsed(collapsed);

          setTimeout(function () {
            _this7._removeClass('layout-no-transition');

            _this7._triggerWindowEvent('resize');

            _this7._triggerEvent('toggle');

            _this7._setSidenavHoverState(false);
          }, 1);
        }
      },
      // ---
      // Toggle layout
      toggleCollapsed: function toggleCollapsed() {
        var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.setCollapsed(!this.isCollapsed(), animate);
      },
      // ---
      // Set layout positioning
      setPosition: function setPosition() {
        var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('fixed');
        var offcanvas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requiredParam('offcanvas');

        this._removeClass('layout-offcanvas layout-fixed layout-fixed-offcanvas');

        if (!fixed && offcanvas) {
          this._addClass('layout-offcanvas');
        } else if (fixed && !offcanvas) {
          this._addClass('layout-fixed');

          this._redrawLayoutSidenav();
        } else if (fixed && offcanvas) {
          this._addClass('layout-fixed-offcanvas');

          this._redrawLayoutSidenav();
        }

        this.update();
      },
      setNavbarFixed: function setNavbarFixed() {
        var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('fixed');
        this[fixed ? '_addClass' : '_removeClass']('layout-navbar-fixed');
        this.update();
      },
      setFooterFixed: function setFooterFixed() {
        var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('fixed');
        this[fixed ? '_addClass' : '_removeClass']('layout-footer-fixed');
        this.update();
      },
      setReversed: function setReversed() {
        var reversed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('reversed');
        this[reversed ? '_addClass' : '_removeClass']('layout-reversed');
      },
      // *******************************************************************************
      // * Update
      update: function update() {
        if (this.getLayoutNavbar() && (!this.isSmallScreen() && this.isLayout1() && this.isFixed() || this.isNavbarFixed()) || this.getLayoutFooter() && this.isFooterFixed()) {
          this._updateInlineStyle(this._getNavbarHeight(), this._getFooterHeight());
        }

        this._bindSidenavMouseEvents();
      },
      setAutoUpdate: function setAutoUpdate() {
        var _this8 = this;

        var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('enable');

        if (enable && !this._autoUpdate) {
          this.on('resize.layoutHelpers:autoUpdate', function () {
            return _this8.update();
          });
          this._autoUpdate = true;
        } else if (!enable && this._autoUpdate) {
          this.off('resize.layoutHelpers:autoUpdate');
          this._autoUpdate = false;
        }
      },
      // *******************************************************************************
      // * Events
      on: function on() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('event');
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requiredParam('callback');

        var _event$split = event.split('.'),
            _event$split2 = _toArray(_event$split),
            _event = _event$split2[0],
            namespace = _event$split2.slice(1);

        namespace = namespace.join('.') || null;

        this._listeners.push({
          event: _event,
          namespace: namespace,
          callback: callback
        });
      },
      off: function off() {
        var _this9 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('event');

        var _event$split3 = event.split('.'),
            _event$split4 = _toArray(_event$split3),
            _event = _event$split4[0],
            namespace = _event$split4.slice(1);

        namespace = namespace.join('.') || null;

        this._listeners.filter(function (listener) {
          return listener.event === _event && listener.namespace === namespace;
        }).forEach(function (listener) {
          return _this9._listeners.splice(_this9._listeners.indexOf(listener), 1);
        });
      },
      // *******************************************************************************
      // * Life cycle
      init: function init() {
        var _this10 = this;

        if (this._initialized) return;
        this._initialized = true; // Initialize `style` element

        this._updateInlineStyle(0); // Bind window resize event


        this._bindWindowResizeEvent(); // Bind init event


        this.off('init._layoutHelpers');
        this.on('init._layoutHelpers', function () {
          _this10.off('resize._layoutHelpers:redrawSidenav');

          _this10.on('resize._layoutHelpers:redrawSidenav', function () {
            _this10.isSmallScreen() && !_this10.isCollapsed() && _this10._redrawLayoutSidenav();
          }); // Force repaint in IE 10


          if (typeof document.documentMode === 'number' && document.documentMode < 11) {
            _this10.off('resize._layoutHelpers:ie10RepaintBody');

            _this10.on('resize._layoutHelpers:ie10RepaintBody', function () {
              if (_this10.isFixed()) return;
              var scrollTop = document.documentElement.scrollTop;
              document.body.style.display = 'none';
              document.body.offsetHeight;
              document.body.style.display = 'block';
              document.documentElement.scrollTop = scrollTop;
            });
          }
        });

        this._triggerEvent('init');
      },
      destroy: function destroy() {
        var _this11 = this;

        if (!this._initialized) return;
        this._initialized = false;

        this._removeClass('layout-transitioning');

        this._removeInlineStyle();

        this._unbindLayoutAnimationEndEvent();

        this._unbindWindowResizeEvent();

        this._unbindSidenavMouseEvents();

        this.setAutoUpdate(false);
        this.off('init._layoutHelpers'); // Remove all listeners except `init`

        this._listeners.filter(function (listener) {
          return listener.event !== 'init';
        }).forEach(function (listener) {
          return _this11._listeners.splice(_this11._listeners.indexOf(listener), 1);
        });
      }
    }; // *******************************************************************************
    // * Initialization

    if (typeof window !== 'undefined') {
      layoutHelpers.init();

      if (layoutHelpers.isMobileDevice() && window.chrome) {
        document.documentElement.classList.add('layout-sidenav-100vh');
      } // Update layout after page load


      if (document.readyState === 'complete') layoutHelpers.update();else document.addEventListener('DOMContentLoaded', function onContentLoaded() {
        layoutHelpers.update();
        document.removeEventListener('DOMContentLoaded', onContentLoaded);
      });
    } // ---

    /***/

  },

  /***/
  2:
  /*!************************************************************!*\
    !*** multi ./resources/assets/vendor/js/layout-helpers.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\js\layout-helpers.js */
    "./resources/assets/vendor/js/layout-helpers.js");
    /***/
  }
  /******/

}));

/***/ }),

/***/ "./resources/assets/js/material-ripple.js":
/*!************************************************!*\
  !*** ./resources/assets/js/material-ripple.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(window,
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 3);
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/node-waves/dist/waves.css":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--81-1!./node_modules/postcss-loader/src??ref--81-2!./node_modules/node-waves/dist/waves.css ***!
    \**********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesNodeWavesDistWavesCss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "/*!\n * Waves v0.7.6\n * http://fian.my.id/Waves \n * \n * Copyright 2014-2018 Alfiana E. Sibuea and other contributors \n * Released under the MIT license \n * https://github.com/fians/Waves/blob/master/LICENSE */\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  background: -webkit-radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n  background: -o-radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n  background: -moz-radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n  background: radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n  -webkit-transition: all 0.5s ease-out;\n  -moz-transition: all 0.5s ease-out;\n  -o-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  -webkit-transition-property: -webkit-transform, opacity;\n  -moz-transition-property: -moz-transform, opacity;\n  -o-transition-property: -o-transform, opacity;\n  transition-property: transform, opacity;\n  -webkit-transform: scale(0) translate(0, 0);\n  -moz-transform: scale(0) translate(0, 0);\n  -ms-transform: scale(0) translate(0, 0);\n  -o-transform: scale(0) translate(0, 0);\n  transform: scale(0) translate(0, 0);\n  pointer-events: none;\n}\n.waves-effect.waves-light .waves-ripple {\n  background: rgba(255, 255, 255, 0.4);\n  background: -webkit-radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n  background: -o-radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n  background: -moz-radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n  background: radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}\n.waves-effect.waves-classic .waves-ripple {\n  background: rgba(0, 0, 0, 0.2);\n}\n.waves-effect.waves-classic.waves-light .waves-ripple {\n  background: rgba(255, 255, 255, 0.4);\n}\n.waves-notransition {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n.waves-button,\n.waves-circle {\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n.waves-button,\n.waves-button:hover,\n.waves-button:visited,\n.waves-button-input {\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: inherit;\n  background-color: rgba(0, 0, 0, 0);\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  text-decoration: none;\n  z-index: 1;\n}\n.waves-button {\n  padding: 0.85em 1.1em;\n  border-radius: 0.2em;\n}\n.waves-button-input {\n  margin: 0;\n  padding: 0.85em 1.1em;\n}\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n.waves-input-wrapper.waves-button {\n  padding: 0;\n}\n.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n}\n.waves-float {\n  -webkit-mask-image: none;\n  -webkit-box-shadow: 0px 1px 1.5px 1px rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 1px 1.5px 1px rgba(0, 0, 0, 0.12);\n  -webkit-transition: all 300ms;\n  -moz-transition: all 300ms;\n  -o-transition: all 300ms;\n  transition: all 300ms;\n}\n.waves-float:active {\n  -webkit-box-shadow: 0px 8px 20px 1px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 8px 20px 1px rgba(0, 0, 0, 0.3);\n}\n.waves-block {\n  display: block;\n}\n", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/lib/css-base.js":
  /*!*************************************************!*\
    !*** ./node_modules/css-loader/lib/css-base.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderLibCssBaseJs(module, exports) {
    /*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media " + item[2] + "{" + content + "}";
          } else {
            return content;
          }
        }).join("");
      }; // import a list of modules into the list


      list.i = function (modules, mediaQuery) {
        if (typeof modules === "string") modules = [[null, modules, ""]];
        var alreadyImportedModules = {};

        for (var i = 0; i < this.length; i++) {
          var id = this[i][0];
          if (typeof id === "number") alreadyImportedModules[id] = true;
        }

        for (i = 0; i < modules.length; i++) {
          var item = modules[i]; // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          //  when a module is imported multiple times with different media queries.
          //  I hope this will never occur (Hey this way we have smaller bundles)

          if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
            if (mediaQuery && !item[2]) {
              item[2] = mediaQuery;
            } else if (mediaQuery) {
              item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
            }

            list.push(item);
          }
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || '';
      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
      return '/*# ' + data + ' */';
    }
    /***/

  },

  /***/
  "./node_modules/node-waves/dist/waves.css":
  /*!************************************************!*\
    !*** ./node_modules/node-waves/dist/waves.css ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNodeWavesDistWavesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../css-loader??ref--81-1!../../postcss-loader/src??ref--81-2!./waves.css */
    "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/node-waves/dist/waves.css");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/node-waves/dist/waves.js":
  /*!***********************************************!*\
    !*** ./node_modules/node-waves/dist/waves.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesNodeWavesDistWavesJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * Waves v0.7.6
      * http://fian.my.id/Waves
      *
      * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
      * Released under the MIT license
      * https://github.com/fians/Waves/blob/master/LICENSE
      */


      ;

      (function (window, factory) {
        'use strict'; // AMD. Register as an anonymous module.  Wrap in function so we have access
        // to root via `this`.

        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            window.Waves = factory.call(window);
            return window.Waves;
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } // Node. Does not work with strict CommonJS, but only CommonJS-like
        // environments that support module.exports, like Node.
        else {}
      })(_typeof(global) === 'object' ? global : this, function () {
        'use strict';

        var Waves = Waves || {};
        var $$ = document.querySelectorAll.bind(document);
        var toString = Object.prototype.toString;
        var isTouchAvailable = ('ontouchstart' in window); // Find exact position of element

        function isWindow(obj) {
          return obj !== null && obj === obj.window;
        }

        function getWindow(elem) {
          return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
        }

        function isObject(value) {
          var type = _typeof(value);

          return type === 'function' || type === 'object' && !!value;
        }

        function isDOMNode(obj) {
          return isObject(obj) && obj.nodeType > 0;
        }

        function getWavesElements(nodes) {
          var stringRepr = toString.call(nodes);

          if (stringRepr === '[object String]') {
            return $$(nodes);
          } else if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {
            return nodes;
          } else if (isDOMNode(nodes)) {
            return [nodes];
          }

          return [];
        }

        function offset(elem) {
          var docElem,
              win,
              box = {
            top: 0,
            left: 0
          },
              doc = elem && elem.ownerDocument;
          docElem = doc.documentElement;

          if (_typeof(elem.getBoundingClientRect) !== ( true ? "undefined" : undefined)) {
            box = elem.getBoundingClientRect();
          }

          win = getWindow(doc);
          return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
          };
        }

        function convertStyle(styleObj) {
          var style = '';

          for (var prop in styleObj) {
            if (styleObj.hasOwnProperty(prop)) {
              style += prop + ':' + styleObj[prop] + ';';
            }
          }

          return style;
        }

        var Effect = {
          // Effect duration
          duration: 750,
          // Effect delay (check for scroll before showing effect)
          delay: 200,
          show: function show(e, element, velocity) {
            // Disable right click
            if (e.button === 2) {
              return false;
            }

            element = element || this; // Create ripple

            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple waves-rippling';
            element.appendChild(ripple); // Get click coordinate and element width

            var pos = offset(element);
            var relativeY = 0;
            var relativeX = 0; // Support for touch devices

            if ('touches' in e && e.touches.length) {
              relativeY = e.touches[0].pageY - pos.top;
              relativeX = e.touches[0].pageX - pos.left;
            } //Normal case
            else {
                relativeY = e.pageY - pos.top;
                relativeX = e.pageX - pos.left;
              } // Support for synthetic events


            relativeX = relativeX >= 0 ? relativeX : 0;
            relativeY = relativeY >= 0 ? relativeY : 0;
            var scale = 'scale(' + element.clientWidth / 100 * 3 + ')';
            var translate = 'translate(0,0)';

            if (velocity) {
              translate = 'translate(' + velocity.x + 'px, ' + velocity.y + 'px)';
            } // Attach data to element


            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-translate', translate); // Set ripple position

            var rippleStyle = {
              top: relativeY + 'px',
              left: relativeX + 'px'
            };
            ripple.classList.add('waves-notransition');
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.classList.remove('waves-notransition'); // Scale the ripple

            rippleStyle['-webkit-transform'] = scale + ' ' + translate;
            rippleStyle['-moz-transform'] = scale + ' ' + translate;
            rippleStyle['-ms-transform'] = scale + ' ' + translate;
            rippleStyle['-o-transform'] = scale + ' ' + translate;
            rippleStyle.transform = scale + ' ' + translate;
            rippleStyle.opacity = '1';
            var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
            rippleStyle['-webkit-transition-duration'] = duration + 'ms';
            rippleStyle['-moz-transition-duration'] = duration + 'ms';
            rippleStyle['-o-transition-duration'] = duration + 'ms';
            rippleStyle['transition-duration'] = duration + 'ms';
            ripple.setAttribute('style', convertStyle(rippleStyle));
          },
          hide: function hide(e, element) {
            element = element || this;
            var ripples = element.getElementsByClassName('waves-rippling');

            for (var i = 0, len = ripples.length; i < len; i++) {
              removeRipple(e, element, ripples[i]);
            }

            if (isTouchAvailable) {
              element.removeEventListener('touchend', Effect.hide);
              element.removeEventListener('touchcancel', Effect.hide);
            }

            element.removeEventListener('mouseup', Effect.hide);
            element.removeEventListener('mouseleave', Effect.hide);
          }
        };
        /**
         * Collection of wrapper for HTML element that only have single tag
         * like <input> and <img>
         */

        var TagWrapper = {
          // Wrap <input> tag so it can perform the effect
          input: function input(element) {
            var parent = element.parentNode; // If input already have parent just pass through

            if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
              return;
            } // Put element class and style to the specified parent


            var wrapper = document.createElement('i');
            wrapper.className = element.className + ' waves-input-wrapper';
            element.className = 'waves-button-input'; // Put element as child

            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element); // Apply element color and background color to wrapper

            var elementStyle = window.getComputedStyle(element, null);
            var color = elementStyle.color;
            var backgroundColor = elementStyle.backgroundColor;
            wrapper.setAttribute('style', 'color:' + color + ';background:' + backgroundColor);
            element.setAttribute('style', 'background-color:rgba(0,0,0,0);');
          },
          // Wrap <img> tag so it can perform the effect
          img: function img(element) {
            var parent = element.parentNode; // If input already have parent just pass through

            if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
              return;
            } // Put element as child


            var wrapper = document.createElement('i');
            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element);
          }
        };
        /**
         * Hide the effect and remove the ripple. Must be
         * a separate function to pass the JSLint...
         */

        function removeRipple(e, el, ripple) {
          // Check if the ripple still exist
          if (!ripple) {
            return;
          }

          ripple.classList.remove('waves-rippling');
          var relativeX = ripple.getAttribute('data-x');
          var relativeY = ripple.getAttribute('data-y');
          var scale = ripple.getAttribute('data-scale');
          var translate = ripple.getAttribute('data-translate'); // Get delay beetween mousedown and mouse leave

          var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
          var delay = 350 - diff;

          if (delay < 0) {
            delay = 0;
          }

          if (e.type === 'mousemove') {
            delay = 150;
          } // Fade out ripple after delay


          var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
          setTimeout(function () {
            var style = {
              top: relativeY + 'px',
              left: relativeX + 'px',
              opacity: '0',
              // Duration
              '-webkit-transition-duration': duration + 'ms',
              '-moz-transition-duration': duration + 'ms',
              '-o-transition-duration': duration + 'ms',
              'transition-duration': duration + 'ms',
              '-webkit-transform': scale + ' ' + translate,
              '-moz-transform': scale + ' ' + translate,
              '-ms-transform': scale + ' ' + translate,
              '-o-transform': scale + ' ' + translate,
              'transform': scale + ' ' + translate
            };
            ripple.setAttribute('style', convertStyle(style));
            setTimeout(function () {
              try {
                el.removeChild(ripple);
              } catch (e) {
                return false;
              }
            }, duration);
          }, delay);
        }
        /**
         * Disable mousedown event for 500ms during and after touch
         */


        var TouchHandler = {
          /* uses an integer rather than bool so there's no issues with
           * needing to clear timeouts if another touch event occurred
           * within the 500ms. Cannot mouseup between touchstart and
           * touchend, nor in the 500ms after touchend. */
          touches: 0,
          allowEvent: function allowEvent(e) {
            var allow = true;

            if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
              allow = false;
            }

            return allow;
          },
          registerEvent: function registerEvent(e) {
            var eType = e.type;

            if (eType === 'touchstart') {
              TouchHandler.touches += 1; // push
            } else if (/^(touchend|touchcancel)$/.test(eType)) {
              setTimeout(function () {
                if (TouchHandler.touches) {
                  TouchHandler.touches -= 1; // pop after 500ms
                }
              }, 500);
            }
          }
        };
        /**
         * Delegated click handler for .waves-effect element.
         * returns null when .waves-effect element not in "click tree"
         */

        function getWavesEffectElement(e) {
          if (TouchHandler.allowEvent(e) === false) {
            return null;
          }

          var element = null;
          var target = e.target || e.srcElement;

          while (target.parentElement) {
            if (!(target instanceof SVGElement) && target.classList.contains('waves-effect')) {
              element = target;
              break;
            }

            target = target.parentElement;
          }

          return element;
        }
        /**
         * Bubble the click and show effect if .waves-effect elem was found
         */


        function showEffect(e) {
          // Disable effect if element has "disabled" property on it
          // In some cases, the event is not triggered by the current element
          // if (e.target.getAttribute('disabled') !== null) {
          //     return;
          // }
          var element = getWavesEffectElement(e);

          if (element !== null) {
            // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
            if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {
              return;
            }

            TouchHandler.registerEvent(e);

            if (e.type === 'touchstart' && Effect.delay) {
              var hidden = false;
              var timer = setTimeout(function () {
                timer = null;
                Effect.show(e, element);
              }, Effect.delay);

              var hideEffect = function hideEffect(hideEvent) {
                // if touch hasn't moved, and effect not yet started: start effect now
                if (timer) {
                  clearTimeout(timer);
                  timer = null;
                  Effect.show(e, element);
                }

                if (!hidden) {
                  hidden = true;
                  Effect.hide(hideEvent, element);
                }

                removeListeners();
              };

              var touchMove = function touchMove(moveEvent) {
                if (timer) {
                  clearTimeout(timer);
                  timer = null;
                }

                hideEffect(moveEvent);
                removeListeners();
              };

              element.addEventListener('touchmove', touchMove, false);
              element.addEventListener('touchend', hideEffect, false);
              element.addEventListener('touchcancel', hideEffect, false);

              var removeListeners = function removeListeners() {
                element.removeEventListener('touchmove', touchMove);
                element.removeEventListener('touchend', hideEffect);
                element.removeEventListener('touchcancel', hideEffect);
              };
            } else {
              Effect.show(e, element);

              if (isTouchAvailable) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
              }

              element.addEventListener('mouseup', Effect.hide, false);
              element.addEventListener('mouseleave', Effect.hide, false);
            }
          }
        }

        Waves.init = function (options) {
          var body = document.body;
          options = options || {};

          if ('duration' in options) {
            Effect.duration = options.duration;
          }

          if ('delay' in options) {
            Effect.delay = options.delay;
          }

          if (isTouchAvailable) {
            body.addEventListener('touchstart', showEffect, false);
            body.addEventListener('touchcancel', TouchHandler.registerEvent, false);
            body.addEventListener('touchend', TouchHandler.registerEvent, false);
          }

          body.addEventListener('mousedown', showEffect, false);
        };
        /**
         * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
         * waves classes to a set of elements. Set drag to true if the ripple mouseover
         * or skimming effect should be applied to the elements.
         */


        Waves.attach = function (elements, classes) {
          elements = getWavesElements(elements);

          if (toString.call(classes) === '[object Array]') {
            classes = classes.join(' ');
          }

          classes = classes ? ' ' + classes : '';
          var element, tagName;

          for (var i = 0, len = elements.length; i < len; i++) {
            element = elements[i];
            tagName = element.tagName.toLowerCase();

            if (['input', 'img'].indexOf(tagName) !== -1) {
              TagWrapper[tagName](element);
              element = element.parentElement;
            }

            if (element.className.indexOf('waves-effect') === -1) {
              element.className += ' waves-effect' + classes;
            }
          }
        };
        /**
         * Cause a ripple to appear in an element via code.
         */


        Waves.ripple = function (elements, options) {
          elements = getWavesElements(elements);
          var elementsLen = elements.length;
          options = options || {};
          options.wait = options.wait || 0;
          options.position = options.position || null; // default = centre of element

          if (elementsLen) {
            var element,
                pos,
                off,
                centre = {},
                i = 0;
            var mousedown = {
              type: 'mousedown',
              button: 1
            };

            var hideRipple = function hideRipple(mouseup, element) {
              return function () {
                Effect.hide(mouseup, element);
              };
            };

            for (; i < elementsLen; i++) {
              element = elements[i];
              pos = options.position || {
                x: element.clientWidth / 2,
                y: element.clientHeight / 2
              };
              off = offset(element);
              centre.x = off.left + pos.x;
              centre.y = off.top + pos.y;
              mousedown.pageX = centre.x;
              mousedown.pageY = centre.y;
              Effect.show(mousedown, element);

              if (options.wait >= 0 && options.wait !== null) {
                var mouseup = {
                  type: 'mouseup',
                  button: 1
                };
                setTimeout(hideRipple(mouseup, element), options.wait);
              }
            }
          }
        };
        /**
         * Remove all ripples from an element.
         */


        Waves.calm = function (elements) {
          elements = getWavesElements(elements);
          var mouseup = {
            type: 'mouseup',
            button: 1
          };

          for (var i = 0, len = elements.length; i < len; i++) {
            Effect.hide(mouseup, elements[i]);
          }
        };
        /**
         * Deprecated API fallback
         */


        Waves.displayEffect = function (options) {
          console.error('Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect');
          Waves.init(options);
        };

        return Waves;
      });
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./../../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/style-loader/lib/addStyles.js":
  /*!****************************************************!*\
    !*** ./node_modules/style-loader/lib/addStyles.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderLibAddStylesJs(module, exports, __webpack_require__) {
    /*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
    var stylesInDom = {};

    var memoize = function memoize(fn) {
      var memo;
      return function () {
        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
        return memo;
      };
    };

    var isOldIE = memoize(function () {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      return window && document && document.all && !window.atob;
    });

    var getTarget = function getTarget(target, parent) {
      if (parent) {
        return parent.querySelector(target);
      }

      return document.querySelector(target);
    };

    var getElement = function (fn) {
      var memo = {};
      return function (target, parent) {
        // If passing function in options, then use it for resolve "head" element.
        // Useful for Shadow Root style i.e
        // {
        //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
        // }
        if (typeof target === 'function') {
          return target();
        }

        if (typeof memo[target] === "undefined") {
          var styleTarget = getTarget.call(this, target, parent); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var singleton = null;
    var singletonCounter = 0;
    var stylesInsertedAtTop = [];

    var fixUrls = __webpack_require__(
    /*! ./urls */
    "./node_modules/style-loader/lib/urls.js");

    module.exports = function (list, options) {
      if (typeof DEBUG !== "undefined" && DEBUG) {
        if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
      }

      options = options || {};
      options.attrs = _typeof(options.attrs) === "object" ? options.attrs : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE(); // By default, add <style> tags to the <head> element

      if (!options.insertInto) options.insertInto = "head"; // By default, add <style> tags to the bottom of the target

      if (!options.insertAt) options.insertAt = "bottom";
      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];
          domStyle.refs--;
          mayRemove.push(domStyle);
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var i = 0; i < mayRemove.length; i++) {
          var domStyle = mayRemove[i];

          if (domStyle.refs === 0) {
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j]();
            }

            delete stylesInDom[domStyle.id];
          }
        }
      };
    };

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];

        if (domStyle) {
          domStyle.refs++;

          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (var j = 0; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };
        if (!newStyles[id]) styles.push(newStyles[id] = {
          id: id,
          parts: [part]
        });else newStyles[id].parts.push(part);
      }

      return styles;
    }

    function insertStyleElement(options, style) {
      var target = getElement(options.insertInto);

      if (!target) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      }

      var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

      if (options.insertAt === "top") {
        if (!lastStyleElementInsertedAtTop) {
          target.insertBefore(style, target.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
          target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
        } else {
          target.appendChild(style);
        }

        stylesInsertedAtTop.push(style);
      } else if (options.insertAt === "bottom") {
        target.appendChild(style);
      } else if (_typeof(options.insertAt) === "object" && options.insertAt.before) {
        var nextSibling = getElement(options.insertAt.before, target);
        target.insertBefore(style, nextSibling);
      } else {
        throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      }
    }

    function removeStyleElement(style) {
      if (style.parentNode === null) return false;
      style.parentNode.removeChild(style);
      var idx = stylesInsertedAtTop.indexOf(style);

      if (idx >= 0) {
        stylesInsertedAtTop.splice(idx, 1);
      }
    }

    function createStyleElement(options) {
      var style = document.createElement("style");

      if (options.attrs.type === undefined) {
        options.attrs.type = "text/css";
      }

      if (options.attrs.nonce === undefined) {
        var nonce = getNonce();

        if (nonce) {
          options.attrs.nonce = nonce;
        }
      }

      addAttrs(style, options.attrs);
      insertStyleElement(options, style);
      return style;
    }

    function createLinkElement(options) {
      var link = document.createElement("link");

      if (options.attrs.type === undefined) {
        options.attrs.type = "text/css";
      }

      options.attrs.rel = "stylesheet";
      addAttrs(link, options.attrs);
      insertStyleElement(options, link);
      return link;
    }

    function addAttrs(el, attrs) {
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
    }

    function getNonce() {
      if (false) {}

      return __webpack_require__.nc;
    }

    function addStyle(obj, options) {
      var style, update, remove, result; // If a transform function was defined, run it on the css

      if (options.transform && obj.css) {
        result = typeof options.transform === 'function' ? options.transform(obj.css) : options.transform["default"](obj.css);

        if (result) {
          // If transform returns a value, use that instead of the original css.
          // This allows running runtime transformations on the css.
          obj.css = result;
        } else {
          // If the transform function returns a falsy value, don't add this css.
          // This allows conditional loading of css
          return function () {// noop
          };
        }
      }

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = createStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
        style = createLinkElement(options);
        update = updateLink.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
          if (style.href) URL.revokeObjectURL(style.href);
        };
      } else {
        style = createStyleElement(options);
        update = applyToTag.bind(null, style);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    var replaceText = function () {
      var textStore = [];
      return function (index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? "" : obj.css;

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;
        if (childNodes[index]) style.removeChild(childNodes[index]);

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, obj) {
      var css = obj.css;
      var media = obj.media;

      if (media) {
        style.setAttribute("media", media);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    function updateLink(link, options, obj) {
      var css = obj.css;
      var sourceMap = obj.sourceMap;
      /*
      	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
      	and there is no publicPath defined then lets turn convertToAbsoluteUrls
      	on by default.  Otherwise default to the convertToAbsoluteUrls option
      	directly
      */

      var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

      if (options.convertToAbsoluteUrls || autoFixUrls) {
        css = fixUrls(css);
      }

      if (sourceMap) {
        // http://stackoverflow.com/a/26603875
        css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
      }

      var blob = new Blob([css], {
        type: "text/css"
      });
      var oldSrc = link.href;
      link.href = URL.createObjectURL(blob);
      if (oldSrc) URL.revokeObjectURL(oldSrc);
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/lib/urls.js":
  /*!***********************************************!*\
    !*** ./node_modules/style-loader/lib/urls.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderLibUrlsJs(module, exports) {
    /**
     * When source maps are enabled, `style-loader` uses a link element with a data-uri to
     * embed the css on the page. This breaks all relative urls because now they are relative to a
     * bundle instead of the current page.
     *
     * One solution is to only use full urls, but that may be impossible.
     *
     * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
     *
     * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
     *
     */
    module.exports = function (css) {
      // get current location
      var location = typeof window !== "undefined" && window.location;

      if (!location) {
        throw new Error("fixUrls requires window.location");
      } // blank or null?


      if (!css || typeof css !== "string") {
        return css;
      }

      var baseUrl = location.protocol + "//" + location.host;
      var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

      /*
      This regular expression is just a way to recursively match brackets within
      a string.
      	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
         (  = Start a capturing group
           (?:  = Start a non-capturing group
               [^)(]  = Match anything that isn't a parentheses
               |  = OR
               \(  = Match a start parentheses
                   (?:  = Start another non-capturing groups
                       [^)(]+  = Match anything that isn't a parentheses
                       |  = OR
                       \(  = Match a start parentheses
                           [^)(]*  = Match anything that isn't a parentheses
                       \)  = Match a end parentheses
                   )  = End Group
                   *\) = Match anything and then a close parens
               )  = Close non-capturing group
               *  = Match anything
            )  = Close capturing group
       \)  = Match a close parens
      	 /gi  = Get all matches, not the first.  Be case insensitive.
       */

      var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
        // strip quotes (if they exist)
        var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
          return $1;
        }).replace(/^'(.*)'$/, function (o, $1) {
          return $1;
        }); // already a full url? no change

        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
          return fullMatch;
        } // convert the url to a full url


        var newUrl;

        if (unquotedOrigUrl.indexOf("//") === 0) {
          //TODO: should we add protocol?
          newUrl = unquotedOrigUrl;
        } else if (unquotedOrigUrl.indexOf("/") === 0) {
          // path should be relative to the base url
          newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
        } else {
          // path should be relative to current directory
          newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
        } // send back the fixed url(...)


        return "url(" + JSON.stringify(newUrl) + ")";
      }); // send back the fixed css

      return fixedCss;
    };
    /***/

  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./resources/assets/vendor/js/material-ripple.js":
  /*!*******************************************************!*\
    !*** ./resources/assets/vendor/js/material-ripple.js ***!
    \*******************************************************/

  /*! exports provided: attachMaterialRipple, attachMaterialRippleOnLoad, detachMaterialRipple */

  /***/
  function resourcesAssetsVendorJsMaterialRippleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "attachMaterialRipple", function () {
      return attachMaterialRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "attachMaterialRippleOnLoad", function () {
      return attachMaterialRippleOnLoad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "detachMaterialRipple", function () {
      return detachMaterialRipple;
    });
    /* harmony import */


    var node_waves_dist_waves_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! node-waves/dist/waves.css */
    "./node_modules/node-waves/dist/waves.css");
    /* harmony import */


    var node_waves_dist_waves_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_waves_dist_waves_css__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var node_waves_dist_waves_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! node-waves/dist/waves.js */
    "./node_modules/node-waves/dist/waves.js");
    /* harmony import */


    var node_waves_dist_waves_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_waves_dist_waves_js__WEBPACK_IMPORTED_MODULE_1__);

    function isElementWithRipple(el) {
      var cls = (el.className || '').split(' ');
      return cls.indexOf('btn') !== -1 || cls.indexOf('page-link') !== -1 || cls.indexOf('dropdown-item') !== -1 || el.tagName && el.tagName.toUpperCase() === 'A' && el.parentNode.tagName.toUpperCase() === 'LI' && (el.parentNode.parentNode.className.indexOf('dropdown-menu') !== -1 || el.parentNode.parentNode.className.indexOf('pagination') !== -1);
    }

    function getElementWithRipple(target) {
      if (!target) return null;
      if (typeof target.className.indexOf !== 'function' || target.className.indexOf('waves-effect') !== -1) return null;
      if (isElementWithRipple(target)) return target;
      var el = target.parentNode;

      while (el && el.tagName.toUpperCase() !== 'BODY' && el.className.indexOf('waves-effect') === -1) {
        if (isElementWithRipple(el)) return el;
        el = el.parentNode;
      }

      return null;
    }

    function attachWaves(e) {
      if (e.button === 2) return;
      var el = getElementWithRipple(e.target);
      el && node_waves_dist_waves_js__WEBPACK_IMPORTED_MODULE_1___default.a.attach(el);
    }

    function attachMaterialRipple() {
      if (typeof window === 'undefined') return;
      if (typeof document['documentMode'] === 'number' && document['documentMode'] < 11) return;
      document.body.addEventListener('mousedown', attachWaves, false);
      if ('ontouchstart' in window) document.body.addEventListener('touchstart', attachWaves, false);
      node_waves_dist_waves_js__WEBPACK_IMPORTED_MODULE_1___default.a.init({
        duration: 500
      });
    }

    function attachMaterialRippleOnLoad() {
      if (document.body) {
        attachMaterialRipple();
      } else {
        window.addEventListener('DOMContentLoaded', function windowOnLoad() {
          attachMaterialRipple();
          window.removeEventListener('DOMContentLoaded', windowOnLoad);
        });
      }
    }

    function detachMaterialRipple() {
      if (typeof window === 'undefined' || !document.body) return;
      if (typeof document['documentMode'] === 'number' && document['documentMode'] < 11) return;
      document.body.removeEventListener('mousedown', attachWaves, false);
      if ('ontouchstart' in window) document.body.removeEventListener('touchstart', attachWaves, false);
      node_waves_dist_waves_js__WEBPACK_IMPORTED_MODULE_1___default.a.calm('.waves-effect');
    }
    /***/

  },

  /***/
  3:
  /*!*************************************************************!*\
    !*** multi ./resources/assets/vendor/js/material-ripple.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\js\material-ripple.js */
    "./resources/assets/vendor/js/material-ripple.js");
    /***/
  }
  /******/

}));

/***/ }),

/***/ "./resources/assets/js/theme-settings.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/theme-settings.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(window,
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 8);
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/assets/vendor/js/_theme-settings/_theme-settings.scss":
  /*!**************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--82-2!./node_modules/sass-loader/dist/cjs.js??ref--82-3!./resources/assets/vendor/js/_theme-settings/_theme-settings.scss ***!
    \**************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderIndexJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsResourcesAssetsVendorJs_themeSettings_themeSettingsScss(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../../node_modules/css-loader/lib/css-base.js */
    "./node_modules/css-loader/lib/css-base.js")(false); // imports
    // module

    exports.push([module.i, "#theme-settings {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\" !important;\n  font-size: 13px !important;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  z-index: 99999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 230px;\n  background: #fff;\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.2s ease-in;\n  -o-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n  -webkit-transform: translateX(250px);\n  -ms-transform: translateX(250px);\n  transform: translateX(250px);\n}\n#theme-settings h5 {\n  position: relative;\n  font-size: 11px;\n  font-weight: 600;\n}\n#theme-settings .theme-settings-header {\n  font-size: 11px;\n}\n#theme-settings .disabled {\n  color: #d1d2d3 !important;\n}\n#theme-settings.theme-settings-open {\n  -webkit-transition-delay: 0.1s;\n  -o-transition-delay: 0.1s;\n  transition-delay: 0.1s;\n  -webkit-transform: none !important;\n  -ms-transform: none !important;\n  transform: none !important;\n}\n#theme-settings .theme-settings-open-btn {\n  position: absolute;\n  top: 90px;\n  left: 0;\n  z-index: -1;\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  background: #444;\n  color: #fff !important;\n  text-align: center;\n  font-size: 20px !important;\n  line-height: 40px;\n  opacity: 1;\n  -webkit-transition: all 0.1s linear 0.2s;\n  -o-transition: all 0.1s linear 0.2s;\n  transition: all 0.1s linear 0.2s;\n  -webkit-transform: translateX(-60px);\n  -ms-transform: translateX(-60px);\n  transform: translateX(-60px);\n}\n#theme-settings .theme-settings-open-btn::before {\n  content: \"\";\n  width: 18px;\n  height: 18px;\n  display: block;\n  background-size: 100% 100%;\n  position: absolute;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BJREFUeNrUml1IFFEUx8fNh6jMkkjY2pDAaokksVrItGLXhQiUPiDIjOg58CmISPt4EyIK3yKQEKIPhKJeCnM/lMyHonop6CUKE01Eow+Mxe1/6AytSzvec+fOpH/4gei952NmnHvuuVOUzWYtF1oHDoGDIAHaFeddAntBD/NJOwJKQIM4GMjO1k8QVpgb5rG2ZkAaxHRikU6oY2eFNApqHObT38Yc5idArZcJOAVvKwO6QQNYyzTw7zIK8/skMRULn7gnoG6OMYvAMUZHvZLBAaHxKct7ffUygVIfEij1MoH9PiSwTzK4SLAORMBzHxKggLaDFyYTWMEG11v+6D0nMWXiEaJb+sbH4EmV4DWIS+7AHnAW9IExsBrEQNT6v+plvoByjuci6M9PgH6xy1oYSoPduY9QfAEFT6oHDbkJnDNkeAY8BCfABrAMLAYVoAl0gW+GfLXb1WiIK0K36gVbFOqXcnA9a0YhMthqwFAHCAgLw+a8slpHraoVppOuaO4piCMufafpf2AATGs+h8/AaRfP8R1wTXMuxZyyr8TmOTYahRRxcfVtVoIJod9RjtnK3y1lBEb6DQRvc1ngl2Lcas/NLSWo1rktuIUPDL7XJbZugVeFaqGbAkMvDSYgsdXtVMy9Exj6bDCB74Ld3lunBGYkewnD5UHAxKSwYG7QYPBLQYni2E1OCbQInG4zmIDE1vFCCVSBowJDTQYTkNiiGKvzW4sbwYjGQrbTwBpQBiY1FrKwvZC1gR+atcggKHaZQKemb4q5jQwkXRZUnS6Cb3HpOxHg9rYbnQJXuaUo0Ulww6XvHroKawxtaOhOVitc9SDoMuCPYg7am/qkvUk20JR6DO5zqT0CfvGaQW+5RnAALDHgK0WdFDuBqLQrPA9EMffltlVM3QU/lOQjqll9Ier7n+dbM86NrajCeYDXon7VU262reKLfIF3kkonNI1gOOu/htm3Y3yqzd0y3vBU+HTVP4AaMGGqhJ0Q1klu1awSvLQGHwRDPgQ/xK9gTzYRj3xIQORjPh7yTXqZQIkPCSz3MoGYYof6LpcNlQz9fE9xzy07UBGWv/Ug5fDuHgc7HOZHeEwhpdiHZ58a2ES5+sytYqdBlcLcKh47q0mr+7GH5Jj1XwpZfz63OcxL+xnFeR2g1vr7uc1H3QB+CzAA7A9pvcD5g+8AAAAASUVORK5CYII=\");\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  margin-left: 2px;\n}\n[dir=rtl] #theme-settings .theme-settings-open-btn {\n  border-radius: 0;\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n[dir=rtl] #theme-settings .theme-settings-open-btn::before {\n  margin-left: -2px;\n}\n#theme-settings.theme-settings-open .theme-settings-open-btn {\n  opacity: 0;\n  -webkit-transition-delay: 0s;\n  -o-transition-delay: 0s;\n  transition-delay: 0s;\n  -webkit-transform: none !important;\n  -ms-transform: none !important;\n  transform: none !important;\n}\n#theme-settings .theme-settings-close-btn {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  display: block;\n  font-size: 20px;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n#theme-settings > h5 {\n  flex: 0 0 auto;\n}\n#theme-settings .theme-settings-inner {\n  position: relative;\n  overflow: auto;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  opacity: 1;\n  -webkit-transition: opacity 0.2s;\n  -o-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n#theme-settings .theme-settings-inner > div:first-child > hr:first-of-type {\n  display: none !important;\n}\n#theme-settings .theme-settings-inner > div:first-child > h5:first-of-type {\n  padding-top: 0 !important;\n}\n#theme-settings .theme-settings-themes-inner {\n  position: relative;\n  opacity: 1;\n  -webkit-transition: opacity 0.2s;\n  -o-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n#theme-settings .theme-settings-theme-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -ms-flex-align: center;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 0 24px;\n  width: 100%;\n  cursor: pointer;\n}\n#theme-settings .theme-settings-theme-item input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n#theme-settings .theme-settings-theme-item input ~ span {\n  opacity: 0.25;\n  -webkit-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n}\n#theme-settings .theme-settings-theme-item .theme-settings-theme-checkmark {\n  display: inline-block;\n  width: 6px;\n  height: 12px;\n  border-right: 1px solid;\n  border-bottom: 1px solid;\n  opacity: 0;\n  -webkit-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n[dir=rtl] #theme-settings .theme-settings-theme-item .theme-settings-theme-checkmark {\n  border-right: none;\n  border-left: 1px solid;\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n#theme-settings .theme-settings-theme-item input:checked:not([disabled]) ~ span, #theme-settings .theme-settings-theme-item:hover input:not([disabled]) ~ span {\n  opacity: 1;\n}\n#theme-settings .theme-settings-theme-item input:checked:not([disabled]) ~ span .theme-settings-theme-checkmark {\n  opacity: 1;\n}\n#theme-settings .theme-settings-theme-colors span {\n  display: block;\n  margin: 0 1px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n}\n#theme-settings.theme-settings-loading .theme-settings-inner, #theme-settings.theme-settings-loading-theme .theme-settings-themes-inner {\n  opacity: 0.2;\n}\n#theme-settings.theme-settings-loading .theme-settings-inner::after, #theme-settings.theme-settings-loading-theme .theme-settings-themes-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  display: block;\n}\n#theme-settings .theme-settings-navbarBg-inner[disabled] .theme-settings-bg-item,\n#theme-settings .theme-settings-sidenavBg-inner[disabled] .theme-settings-bg-item,\n#theme-settings .theme-settings-bg-item.disabled {\n  opacity: 0.2;\n  cursor: default;\n}\n#theme-settings .theme-settings-bg-item {\n  display: block;\n  float: left;\n  margin: 3px;\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n  cursor: pointer;\n}\n#theme-settings .theme-settings-bg-item.active {\n  -webkit-box-shadow: 0 0 0 2px #000;\n  box-shadow: 0 0 0 2px #000;\n}\n#theme-settings .theme-settings-bg-item input {\n  position: absolute;\n  visibility: hidden;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.layout-sidenav-100vh #theme-settings {\n  height: 100vh;\n}\n\n[dir=rtl] #theme-settings {\n  right: auto;\n  left: 0;\n  -webkit-transform: translateX(-250px);\n  -ms-transform: translateX(-250px);\n  transform: translateX(-250px);\n}\n[dir=rtl] #theme-settings .theme-settings-open-btn {\n  right: 0;\n  left: auto;\n  -webkit-transform: translateX(60px);\n  -ms-transform: translateX(60px);\n  transform: translateX(60px);\n}\n[dir=rtl] #theme-settings .theme-settings-close-btn {\n  right: auto;\n  left: 0;\n}\n[dir=rtl] #theme-settings .theme-settings-bg-item {\n  float: right;\n}", ""]); // exports

    /***/
  },

  /***/
  "./node_modules/css-loader/lib/css-base.js":
  /*!*************************************************!*\
    !*** ./node_modules/css-loader/lib/css-base.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderLibCssBaseJs(module, exports) {
    /*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media " + item[2] + "{" + content + "}";
          } else {
            return content;
          }
        }).join("");
      }; // import a list of modules into the list


      list.i = function (modules, mediaQuery) {
        if (typeof modules === "string") modules = [[null, modules, ""]];
        var alreadyImportedModules = {};

        for (var i = 0; i < this.length; i++) {
          var id = this[i][0];
          if (typeof id === "number") alreadyImportedModules[id] = true;
        }

        for (i = 0; i < modules.length; i++) {
          var item = modules[i]; // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          //  when a module is imported multiple times with different media queries.
          //  I hope this will never occur (Hey this way we have smaller bundles)

          if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
            if (mediaQuery && !item[2]) {
              item[2] = mediaQuery;
            } else if (mediaQuery) {
              item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
            }

            list.push(item);
          }
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || '';
      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
      return '/*# ' + data + ' */';
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/lib/addStyles.js":
  /*!****************************************************!*\
    !*** ./node_modules/style-loader/lib/addStyles.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderLibAddStylesJs(module, exports, __webpack_require__) {
    /*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
    var stylesInDom = {};

    var memoize = function memoize(fn) {
      var memo;
      return function () {
        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
        return memo;
      };
    };

    var isOldIE = memoize(function () {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      return window && document && document.all && !window.atob;
    });

    var getTarget = function getTarget(target, parent) {
      if (parent) {
        return parent.querySelector(target);
      }

      return document.querySelector(target);
    };

    var getElement = function (fn) {
      var memo = {};
      return function (target, parent) {
        // If passing function in options, then use it for resolve "head" element.
        // Useful for Shadow Root style i.e
        // {
        //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
        // }
        if (typeof target === 'function') {
          return target();
        }

        if (typeof memo[target] === "undefined") {
          var styleTarget = getTarget.call(this, target, parent); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var singleton = null;
    var singletonCounter = 0;
    var stylesInsertedAtTop = [];

    var fixUrls = __webpack_require__(
    /*! ./urls */
    "./node_modules/style-loader/lib/urls.js");

    module.exports = function (list, options) {
      if (typeof DEBUG !== "undefined" && DEBUG) {
        if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
      }

      options = options || {};
      options.attrs = _typeof(options.attrs) === "object" ? options.attrs : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE(); // By default, add <style> tags to the <head> element

      if (!options.insertInto) options.insertInto = "head"; // By default, add <style> tags to the bottom of the target

      if (!options.insertAt) options.insertAt = "bottom";
      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];
          domStyle.refs--;
          mayRemove.push(domStyle);
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var i = 0; i < mayRemove.length; i++) {
          var domStyle = mayRemove[i];

          if (domStyle.refs === 0) {
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j]();
            }

            delete stylesInDom[domStyle.id];
          }
        }
      };
    };

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];

        if (domStyle) {
          domStyle.refs++;

          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (var j = 0; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };
        if (!newStyles[id]) styles.push(newStyles[id] = {
          id: id,
          parts: [part]
        });else newStyles[id].parts.push(part);
      }

      return styles;
    }

    function insertStyleElement(options, style) {
      var target = getElement(options.insertInto);

      if (!target) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      }

      var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

      if (options.insertAt === "top") {
        if (!lastStyleElementInsertedAtTop) {
          target.insertBefore(style, target.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
          target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
        } else {
          target.appendChild(style);
        }

        stylesInsertedAtTop.push(style);
      } else if (options.insertAt === "bottom") {
        target.appendChild(style);
      } else if (_typeof(options.insertAt) === "object" && options.insertAt.before) {
        var nextSibling = getElement(options.insertAt.before, target);
        target.insertBefore(style, nextSibling);
      } else {
        throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      }
    }

    function removeStyleElement(style) {
      if (style.parentNode === null) return false;
      style.parentNode.removeChild(style);
      var idx = stylesInsertedAtTop.indexOf(style);

      if (idx >= 0) {
        stylesInsertedAtTop.splice(idx, 1);
      }
    }

    function createStyleElement(options) {
      var style = document.createElement("style");

      if (options.attrs.type === undefined) {
        options.attrs.type = "text/css";
      }

      if (options.attrs.nonce === undefined) {
        var nonce = getNonce();

        if (nonce) {
          options.attrs.nonce = nonce;
        }
      }

      addAttrs(style, options.attrs);
      insertStyleElement(options, style);
      return style;
    }

    function createLinkElement(options) {
      var link = document.createElement("link");

      if (options.attrs.type === undefined) {
        options.attrs.type = "text/css";
      }

      options.attrs.rel = "stylesheet";
      addAttrs(link, options.attrs);
      insertStyleElement(options, link);
      return link;
    }

    function addAttrs(el, attrs) {
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
    }

    function getNonce() {
      if (false) {}

      return __webpack_require__.nc;
    }

    function addStyle(obj, options) {
      var style, update, remove, result; // If a transform function was defined, run it on the css

      if (options.transform && obj.css) {
        result = typeof options.transform === 'function' ? options.transform(obj.css) : options.transform["default"](obj.css);

        if (result) {
          // If transform returns a value, use that instead of the original css.
          // This allows running runtime transformations on the css.
          obj.css = result;
        } else {
          // If the transform function returns a falsy value, don't add this css.
          // This allows conditional loading of css
          return function () {// noop
          };
        }
      }

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = createStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
        style = createLinkElement(options);
        update = updateLink.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
          if (style.href) URL.revokeObjectURL(style.href);
        };
      } else {
        style = createStyleElement(options);
        update = applyToTag.bind(null, style);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    var replaceText = function () {
      var textStore = [];
      return function (index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? "" : obj.css;

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;
        if (childNodes[index]) style.removeChild(childNodes[index]);

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, obj) {
      var css = obj.css;
      var media = obj.media;

      if (media) {
        style.setAttribute("media", media);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    function updateLink(link, options, obj) {
      var css = obj.css;
      var sourceMap = obj.sourceMap;
      /*
      	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
      	and there is no publicPath defined then lets turn convertToAbsoluteUrls
      	on by default.  Otherwise default to the convertToAbsoluteUrls option
      	directly
      */

      var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

      if (options.convertToAbsoluteUrls || autoFixUrls) {
        css = fixUrls(css);
      }

      if (sourceMap) {
        // http://stackoverflow.com/a/26603875
        css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
      }

      var blob = new Blob([css], {
        type: "text/css"
      });
      var oldSrc = link.href;
      link.href = URL.createObjectURL(blob);
      if (oldSrc) URL.revokeObjectURL(oldSrc);
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/lib/urls.js":
  /*!***********************************************!*\
    !*** ./node_modules/style-loader/lib/urls.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderLibUrlsJs(module, exports) {
    /**
     * When source maps are enabled, `style-loader` uses a link element with a data-uri to
     * embed the css on the page. This breaks all relative urls because now they are relative to a
     * bundle instead of the current page.
     *
     * One solution is to only use full urls, but that may be impossible.
     *
     * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
     *
     * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
     *
     */
    module.exports = function (css) {
      // get current location
      var location = typeof window !== "undefined" && window.location;

      if (!location) {
        throw new Error("fixUrls requires window.location");
      } // blank or null?


      if (!css || typeof css !== "string") {
        return css;
      }

      var baseUrl = location.protocol + "//" + location.host;
      var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

      /*
      This regular expression is just a way to recursively match brackets within
      a string.
      	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
         (  = Start a capturing group
           (?:  = Start a non-capturing group
               [^)(]  = Match anything that isn't a parentheses
               |  = OR
               \(  = Match a start parentheses
                   (?:  = Start another non-capturing groups
                       [^)(]+  = Match anything that isn't a parentheses
                       |  = OR
                       \(  = Match a start parentheses
                           [^)(]*  = Match anything that isn't a parentheses
                       \)  = Match a end parentheses
                   )  = End Group
                   *\) = Match anything and then a close parens
               )  = Close non-capturing group
               *  = Match anything
            )  = Close capturing group
       \)  = Match a close parens
      	 /gi  = Get all matches, not the first.  Be case insensitive.
       */

      var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
        // strip quotes (if they exist)
        var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
          return $1;
        }).replace(/^'(.*)'$/, function (o, $1) {
          return $1;
        }); // already a full url? no change

        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
          return fullMatch;
        } // convert the url to a full url


        var newUrl;

        if (unquotedOrigUrl.indexOf("//") === 0) {
          //TODO: should we add protocol?
          newUrl = unquotedOrigUrl;
        } else if (unquotedOrigUrl.indexOf("/") === 0) {
          // path should be relative to the base url
          newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
        } else {
          // path should be relative to current directory
          newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
        } // send back the fixed url(...)


        return "url(" + JSON.stringify(newUrl) + ")";
      }); // send back the fixed css

      return fixedCss;
    };
    /***/

  },

  /***/
  "./resources/assets/vendor/js/_theme-settings/_theme-settings-bg-item.html":
  /*!*********************************************************************************!*\
    !*** ./resources/assets/vendor/js/_theme-settings/_theme-settings-bg-item.html ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorJs_themeSettings_themeSettingsBgItemHtml(module, exports) {
    module.exports = "<label class=\"theme-settings-bg-item\">\n  <input type=\"radio\">\n  <span class=\"theme-settings-bg-name\"></span>\n</label>\n";
    /***/
  },

  /***/
  "./resources/assets/vendor/js/_theme-settings/_theme-settings-theme-item.html":
  /*!************************************************************************************!*\
    !*** ./resources/assets/vendor/js/_theme-settings/_theme-settings-theme-item.html ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorJs_themeSettings_themeSettingsThemeItemHtml(module, exports) {
    module.exports = "<label class=\"theme-settings-theme-item custom-controls-stacked\">\n  <input type=\"radio\" name=\"theme-settings-current-theme\">\n  <span class=\"d-block mr-auto\">\n    <span class=\"theme-settings-theme-checkmark\"></span> &nbsp;&nbsp;\n    <span class=\"theme-settings-theme-name\"></span>\n  </span>\n  <span class=\"theme-settings-theme-colors d-flex\"></span>\n</label>\n";
    /***/
  },

  /***/
  "./resources/assets/vendor/js/_theme-settings/_theme-settings.html":
  /*!*************************************************************************!*\
    !*** ./resources/assets/vendor/js/_theme-settings/_theme-settings.html ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorJs_themeSettings_themeSettingsHtml(module, exports) {
    module.exports = "<div id=\"theme-settings\">\n  <a href=\"javascript:void(0)\" class=\"theme-settings-open-btn\" tabindex=\"-1\"></a>\n\n  <h5 class=\"p-4 m-0 line-height-1 font-weight-bolder bg-light theme-settings-header\">\n    <span class=\"theme-settings-t-panel_header\"></span>\n    <a href=\"javascript:void(0)\" class=\"theme-settings-close-btn font-weight-light px-4 py-2 text-dark\" tabindex=\"-1\">&times;</a>\n  </h5>\n\n  <div class=\"theme-settings-inner pt-4\">\n\n    <label class=\"m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-rtl\">\n      <div class=\"media-body\"><span class=\"theme-settings-t-rtl_switcher\"></span></div>\n      <div class=\"switcher switcher-sm d-block m-0\">\n        <input class=\"switcher-input\" type=\"checkbox\">\n        <span class=\"switcher-indicator\">\n          <span class=\"switcher-yes\"></span>\n          <span class=\"switcher-no\"></span>\n        </span>\n      </div>\n    </label>\n\n    <label class=\"m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-material\">\n      <div class=\"media-body\"><span class=\"theme-settings-t-material_switcher\"></span></div>\n      <div class=\"switcher switcher-sm d-block m-0\">\n        <input class=\"switcher-input\" type=\"checkbox\">\n        <span class=\"switcher-indicator\">\n          <span class=\"switcher-yes\"></span>\n          <span class=\"switcher-no\"></span>\n        </span>\n      </div>\n    </label>\n\n    <div class=\"theme-settings-layout\">\n      <hr class=\"m-0 border-light\">\n\n      <h5 class=\"m-0 px-4 py-3 line-height-1 text-light d-block\">\n        <span class=\"theme-settings-t-layout_header\"></span>\n      </h5>\n\n      <label class=\"m-0 px-4 pb-3 d-block theme-settings-layoutPosition\">\n        <select class=\"custom-select custom-select-sm d-block w-100\">\n          <option value=\"static\" class=\"theme-settings-t-layout_static\"></option>\n          <option value=\"static-offcanvas\" class=\"theme-settings-t-layout_offcanvas\"></option>\n          <option value=\"fixed\" class=\"theme-settings-t-layout_fixed\"></option>\n          <option value=\"fixed-offcanvas\" class=\"theme-settings-t-layout_fixed_offcanvas\"></option>\n        </select>\n      </label>\n\n      <label class=\"m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutNavbarFixed\">\n        <div class=\"media-body\"><span class=\"theme-settings-t-layout_navbar_swicher\"></span></div>\n        <div class=\"switcher switcher-sm d-block m-0\">\n          <input class=\"switcher-input\" type=\"checkbox\">\n          <span class=\"switcher-indicator\">\n            <span class=\"switcher-yes\"></span>\n            <span class=\"switcher-no\"></span>\n          </span>\n        </div>\n      </label>\n\n      <label class=\"m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutFooterFixed\">\n        <div class=\"media-body\"><span class=\"theme-settings-t-layout_footer_swicher\"></span></div>\n        <div class=\"switcher switcher-sm d-block m-0\">\n          <input class=\"switcher-input\" type=\"checkbox\">\n          <span class=\"switcher-indicator\">\n            <span class=\"switcher-yes\"></span>\n            <span class=\"switcher-no\"></span>\n          </span>\n        </div>\n      </label>\n\n      <label class=\"m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutReversed\">\n        <div class=\"media-body\"><span class=\"theme-settings-t-layout_reversed_swicher\"></span></div>\n        <div class=\"switcher switcher-sm d-block m-0\">\n          <input class=\"switcher-input\" type=\"checkbox\">\n          <span class=\"switcher-indicator\">\n            <span class=\"switcher-yes\"></span>\n            <span class=\"switcher-no\"></span>\n          </span>\n        </div>\n      </label>\n    </div>\n\n    <div class=\"theme-settings-navbarBg\">\n      <hr class=\"m-0 border-light\">\n\n      <h5 class=\"m-0 px-4 py-3 line-height-1 text-light d-block \">\n        <span class=\"theme-settings-t-navbar_bg_header\"></span>\n      </h5>\n\n      <fieldset class=\"m-0 px-4 pb-3 d-block clearfix theme-settings-navbarBg-inner\"></fieldset>\n    </div>\n\n    <div class=\"theme-settings-sidenavBg\">\n      <hr class=\"m-0 border-light\">\n\n      <h5 class=\"m-0 px-4 py-3 line-height-1 text-light d-block\">\n        <span class=\"theme-settings-t-sidenav_bg_header\"></span>\n      </h5>\n\n      <fieldset class=\"m-0 px-4 pb-3 d-block clearfix theme-settings-sidenavBg-inner\"></fieldset>\n    </div>\n\n    <div class=\"theme-settings-footerBg\">\n      <hr class=\"m-0 border-light\">\n\n      <h5 class=\"m-0 px-4 py-3 line-height-1 text-light d-block\">\n        <span class=\"theme-settings-t-footer_bg_header\"></span>\n      </h5>\n\n      <fieldset class=\"m-0 px-4 pb-3 d-block clearfix theme-settings-footerBg-inner\"></fieldset>\n    </div>\n\n    <div class=\"theme-settings-themes\">\n      <hr class=\"m-0 border-light\">\n\n      <h5 class=\"m-0 px-4 py-3 line-height-1 text-light d-block\">\n        <span class=\"theme-settings-t-theme_header\"></span>\n      </h5>\n\n      <div class=\"theme-settings-themes-inner\"></div>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./resources/assets/vendor/js/_theme-settings/_theme-settings.scss":
  /*!*************************************************************************!*\
    !*** ./resources/assets/vendor/js/_theme-settings/_theme-settings.scss ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorJs_themeSettings_themeSettingsScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--82-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--82-3!./_theme-settings.scss */
    "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/assets/vendor/js/_theme-settings/_theme-settings.scss");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./resources/assets/vendor/js/theme-settings.js":
  /*!******************************************************!*\
    !*** ./resources/assets/vendor/js/theme-settings.js ***!
    \******************************************************/

  /*! exports provided: ThemeSettings */

  /***/
  function resourcesAssetsVendorJsThemeSettingsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeSettings", function () {
      return ThemeSettings;
    });
    /* harmony import */


    var _theme_settings_theme_settings_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./_theme-settings/_theme-settings.scss */
    "./resources/assets/vendor/js/_theme-settings/_theme-settings.scss");
    /* harmony import */


    var _theme_settings_theme_settings_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_settings_theme_settings_scss__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _theme_settings_theme_settings_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_theme-settings/_theme-settings.html */
    "./resources/assets/vendor/js/_theme-settings/_theme-settings.html");
    /* harmony import */


    var _theme_settings_theme_settings_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_settings_theme_settings_html__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _theme_settings_theme_settings_theme_item_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_theme-settings/_theme-settings-theme-item.html */
    "./resources/assets/vendor/js/_theme-settings/_theme-settings-theme-item.html");
    /* harmony import */


    var _theme_settings_theme_settings_theme_item_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_settings_theme_settings_theme_item_html__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _theme_settings_theme_settings_bg_item_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_theme-settings/_theme-settings-bg-item.html */
    "./resources/assets/vendor/js/_theme-settings/_theme-settings-bg-item.html");
    /* harmony import */


    var _theme_settings_theme_settings_bg_item_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_settings_theme_settings_bg_item_html__WEBPACK_IMPORTED_MODULE_3__);

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    var DEFAULT_THEME = 1;
    var CSS_FILENAME_PATTERN = '%name%.css';
    var CONTROLS = ['rtl', 'material', 'layoutPosition', 'layoutNavbarFixed', 'layoutFooterFixed', 'layoutReversed', 'navbarBg', 'sidenavBg', 'footerBg', 'themes'];
    var DEFAULT_NAVBAR_BG = 'navbar-theme';
    var DEFAULT_SIDENAV_BG = 'sidenav-theme';
    var DEFAULT_FOOTER_BG = 'footer-theme';

    var ThemeSettings = /*#__PURE__*/function () {
      function ThemeSettings(_ref) {
        var cssPath = _ref.cssPath,
            themesPath = _ref.themesPath,
            cssFilenamePattern = _ref.cssFilenamePattern,
            controls = _ref.controls,
            sidenavBgs = _ref.sidenavBgs,
            defaultSidenavBg = _ref.defaultSidenavBg,
            navbarBgs = _ref.navbarBgs,
            defaultNavbarBg = _ref.defaultNavbarBg,
            footerBgs = _ref.footerBgs,
            defaultFooterBg = _ref.defaultFooterBg,
            availableThemes = _ref.availableThemes,
            defaultTheme = _ref.defaultTheme,
            pathResolver = _ref.pathResolver,
            onSettingsChange = _ref.onSettingsChange,
            lang = _ref.lang;

        _classCallCheck(this, ThemeSettings);

        if (this._ssr) return;
        if (!window.layoutHelpers) throw new Error('window.layoutHelpers required.');
        this.settings = {};
        this.settings.cssPath = cssPath;
        this.settings.themesPath = themesPath;
        this.settings.cssFilenamePattern = cssFilenamePattern || CSS_FILENAME_PATTERN;
        this.settings.navbarBgs = navbarBgs || ThemeSettings.NAVBAR_BGS;
        this.settings.defaultNavbarBg = defaultNavbarBg || DEFAULT_NAVBAR_BG;
        this.settings.sidenavBgs = sidenavBgs || ThemeSettings.SIDENAV_BGS;
        this.settings.defaultSidenavBg = defaultSidenavBg || DEFAULT_SIDENAV_BG;
        this.settings.footerBgs = footerBgs || ThemeSettings.FOOTER_BGS;
        this.settings.defaultFooterBg = defaultFooterBg || DEFAULT_FOOTER_BG;
        this.settings.availableThemes = availableThemes || ThemeSettings.AVAILABLE_THEMES;
        this.settings.defaultTheme = this._getDefaultTheme(typeof defaultTheme !== 'undefined' ? defaultTheme : DEFAULT_THEME);
        this.settings.controls = controls || CONTROLS;
        this.settings.lang = lang || 'en';

        this.pathResolver = pathResolver || function (p) {
          return p;
        };

        this.settings.onSettingsChange = typeof onSettingsChange === 'function' ? onSettingsChange : function () {};

        this._loadSettings();

        this._listeners = [];
        this._controls = {};

        this._initDirection();

        this._initStyle();

        this._initTheme();

        this.setLayoutPosition(this.settings.layoutPosition, false);
        this.setLayoutNavbarFixed(this.settings.layoutNavbarFixed, false);
        this.setLayoutFooterFixed(this.settings.layoutFooterFixed, false);
        this.setLayoutReversed(this.settings.layoutReversed, false);

        this._setup();

        this._waitForNavs();
      }

      _createClass(ThemeSettings, [{
        key: "setRtl",
        value: function setRtl(rtl) {
          if (!this._hasControls('rtl')) return;

          this._setSetting('Rtl', String(rtl));

          window.location.reload();
        }
      }, {
        key: "setMaterial",
        value: function setMaterial(material) {
          if (!this._hasControls('material')) return;

          this._setSetting('Material', String(material));

          window.location.reload();
        }
      }, {
        key: "setTheme",
        value: function setTheme(themeName) {
          var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          if (!this._hasControls('themes')) return;

          var theme = this._getThemeByName(themeName);

          if (!theme) return;
          this.settings.theme = theme;
          if (updateStorage) this._setSetting('Theme', themeName);
          var themeUrl = this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace('%name%', themeName + (this.settings.material ? '-material' : '')));

          this._loadStylesheets(_defineProperty({}, themeUrl, document.querySelector('.theme-settings-theme-css')), cb || function () {});

          if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
        }
      }, {
        key: "setLayoutPosition",
        value: function setLayoutPosition(pos) {
          var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          if (!this._hasControls('layoutPosition')) return;
          if (pos !== 'static' && pos !== 'static-offcanvas' && pos !== 'fixed' && pos !== 'fixed-offcanvas') return;
          this.settings.layoutPosition = pos;
          if (updateStorage) this._setSetting('LayoutPosition', pos);
          window.layoutHelpers.setPosition(pos === 'fixed' || pos === 'fixed-offcanvas', pos === 'static-offcanvas' || pos === 'fixed-offcanvas');
          if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
        }
      }, {
        key: "setLayoutNavbarFixed",
        value: function setLayoutNavbarFixed(fixed) {
          var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          if (!this._hasControls('layoutNavbarFixed')) return;
          this.settings.layoutNavbarFixed = fixed;
          if (updateStorage) this._setSetting('FixedNavbar', fixed);
          window.layoutHelpers.setNavbarFixed(fixed);
          if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
        }
      }, {
        key: "setLayoutFooterFixed",
        value: function setLayoutFooterFixed(fixed) {
          var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          if (!this._hasControls('layoutFooterFixed')) return;
          this.settings.layoutFooterFixed = fixed;
          if (updateStorage) this._setSetting('FixedFooter', fixed);
          window.layoutHelpers.setFooterFixed(fixed);
          if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
        }
      }, {
        key: "setLayoutReversed",
        value: function setLayoutReversed(reversed) {
          var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          if (!this._hasControls('layoutReversed')) return;
          this.settings.layoutReversed = reversed;
          if (updateStorage) this._setSetting('LayoutReversed', reversed);
          window.layoutHelpers.setReversed(reversed);
          if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
        }
      }, {
        key: "setNavbarBg",
        value: function setNavbarBg(bg) {
          var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          var _container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

          if (!this._hasControls('navbarBg')) return;
          if (this.settings.navbarBgs.indexOf(bg) === -1) return;
          this.settings.navbarBg = bg;
          if (updateStorage) this._setSetting('NavbarBg', bg);

          var navbar = _container.querySelector('.layout-navbar.navbar, .layout-navbar .navbar');

          if (!navbar) return;
          navbar.className = navbar.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/ig, '');
          navbar.classList.remove('navbar-light');
          navbar.classList.remove('navbar-dark');
          var classes = bg.split(' ');
          navbar.classList.add("bg-".concat(classes[0]));

          for (var i = 1, l = classes.length; i < l; i++) {
            navbar.classList.add(classes[i]);
          }

          if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
        }
      }, {
        key: "setSidenavBg",
        value: function setSidenavBg(bg) {
          var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          var _container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

          if (!this._hasControls('sidenavBg')) return;
          if (this.settings.sidenavBgs.indexOf(bg) === -1) return;
          this.settings.sidenavBg = bg;
          if (updateStorage) this._setSetting('SidenavBg', bg);

          var sidenav = _container.querySelector('.layout-sidenav.sidenav, .layout-sidenav .sidenav, .layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav');

          if (!sidenav) return;
          sidenav.className = sidenav.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/ig, '');
          sidenav.classList.remove('sidenav-light');
          sidenav.classList.remove('sidenav-dark');
          var classes = bg.split(' ');

          if (sidenav.classList.contains('sidenav-horizontal')) {
            classes = classes.join(' ').replace(' sidenav-dark', '').replace(' sidenav-light', '').split(' ');
            classes[0] = classes[0].replace(/-darke?r?$/, '');
          }

          sidenav.classList.add("bg-".concat(classes[0]));

          for (var i = 1, l = classes.length; i < l; i++) {
            sidenav.classList.add(classes[i]);
          }

          if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
        }
      }, {
        key: "setFooterBg",
        value: function setFooterBg(bg) {
          var updateStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          var _container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

          if (!this._hasControls('footerBg')) return;
          if (this.settings.footerBgs.indexOf(bg) === -1) return;
          this.settings.footerBg = bg;
          if (updateStorage) this._setSetting('FooterBg', bg);

          var footer = _container.querySelector('.layout-footer.footer, .layout-footer .footer');

          if (!footer) return;
          footer.className = footer.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/ig, '');
          footer.classList.remove('footer-light');
          footer.classList.remove('footer-dark');
          var classes = bg.split(' ');
          footer.classList.add("bg-".concat(classes[0]));

          for (var i = 1, l = classes.length; i < l; i++) {
            footer.classList.add(classes[i]);
          }

          if (updateStorage) this.settings.onSettingsChange.call(this, this.settings);
        }
      }, {
        key: "setLang",
        value: function setLang(lang) {
          var _this = this;

          var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (lang === this.settings.lang && !force) return;
          if (!ThemeSettings.LANGUAGES[lang]) throw new Error("Language \"".concat(lang, "\" not found!"));
          var t = ThemeSettings.LANGUAGES[lang];
          ['panel_header', 'rtl_switcher', 'material_switcher', 'layout_header', 'layout_static', 'layout_offcanvas', 'layout_fixed', 'layout_fixed_offcanvas', 'layout_navbar_swicher', 'layout_footer_swicher', 'layout_reversed_swicher', 'navbar_bg_header', 'sidenav_bg_header', 'footer_bg_header', 'theme_header'].forEach(function (key) {
            var el = _this.container.querySelector(".theme-settings-t-".concat(key));

            el && (el.textContent = t[key]);
          });
          var tt = t.themes || {};
          var themes = this.container.querySelectorAll('.theme-settings-theme-item') || [];

          for (var i = 0, l = themes.length; i < l; i++) {
            var themeName = themes[i].querySelector('input[type="radio"]').value;
            themes[i].querySelector('.theme-settings-theme-name').textContent = tt[themeName] || this._getThemeByName(themeName).title;
          }

          this.settings.lang = lang;
        }
      }, {
        key: "update",
        value: function update() {
          if (this._ssr) return;
          var hasNavbar = !!document.querySelector('.layout-navbar');
          var hasSidenav = !!document.querySelector('.layout-sidenav');
          var hasHorizontalSidenav = !!document.querySelector('.layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav');
          var isLayout1 = !!document.querySelector('.layout-wrapper.layout-1');
          var hasFooter = !!document.querySelector('.layout-footer');

          if (this._controls.layoutReversed) {
            if (!hasSidenav) {
              this._controls.layoutReversed.setAttribute('disabled', 'disabled');

              this._controls.layoutReversedW.classList.add('disabled');
            } else {
              this._controls.layoutReversed.removeAttribute('disabled');

              this._controls.layoutReversedW.classList.remove('disabled');
            }
          }

          if (this._controls.layoutNavbarFixed) {
            if (!hasNavbar) {
              this._controls.layoutNavbarFixed.setAttribute('disabled', 'disabled');

              this._controls.layoutNavbarFixedW.classList.add('disabled');
            } else {
              this._controls.layoutNavbarFixed.removeAttribute('disabled');

              this._controls.layoutNavbarFixedW.classList.remove('disabled');
            }
          }

          if (this._controls.layoutFooterFixed) {
            if (!hasFooter) {
              this._controls.layoutFooterFixed.setAttribute('disabled', 'disabled');

              this._controls.layoutFooterFixedW.classList.add('disabled');
            } else {
              this._controls.layoutFooterFixed.removeAttribute('disabled');

              this._controls.layoutFooterFixedW.classList.remove('disabled');
            }
          }

          if (this._controls.layoutPosition) {
            if (!hasSidenav) {
              this._controls.layoutPosition.querySelector('[value="static-offcanvas"]').setAttribute('disabled', 'disabled');

              this._controls.layoutPosition.querySelector('[value="fixed-offcanvas"]').setAttribute('disabled', 'disabled');
            } else {
              this._controls.layoutPosition.querySelector('[value="static-offcanvas"]').removeAttribute('disabled');

              this._controls.layoutPosition.querySelector('[value="fixed-offcanvas"]').removeAttribute('disabled');
            }

            if (!hasNavbar && !hasSidenav || !hasSidenav && !isLayout1) {
              this._controls.layoutPosition.setAttribute('disabled', 'disabled');
            } else {
              this._controls.layoutPosition.removeAttribute('disabled');
            }
          }

          if (this._controls.navbarBgWInner) {
            if (!hasNavbar) {
              this._controls.navbarBgWInner.setAttribute('disabled', 'disabled');
            } else {
              this._controls.navbarBgWInner.removeAttribute('disabled');
            }
          }

          if (this._controls.sidenavBgWInner) {
            var items = Array.prototype.slice.call(document.querySelectorAll('.theme-settings-sidenavBg-inner .theme-settings-bg-item'));

            if (!hasSidenav && !hasHorizontalSidenav) {
              items.forEach(function (item) {
                item.classList.add('disabled');
                item.querySelector('input').setAttribute('disabled', 'disabled');
              });
            } else {
              items.forEach(function (item) {
                item.classList.remove('disabled');
                item.querySelector('input').removeAttribute('disabled');
              });
              if (hasHorizontalSidenav) items.forEach(function (item) {
                if (!/-darke?r?/.test(item.className) || /bg-dark/.test(item.className)) return;
                item.classList.add('disabled');
                item.querySelector('input').setAttribute('disabled', 'disabled');
              });
            }
          }

          if (this._controls.footerBgWInner) {
            if (!hasFooter) {
              this._controls.footerBgWInner.setAttribute('disabled', 'disabled');
            } else {
              this._controls.footerBgWInner.removeAttribute('disabled');
            }
          }
        }
      }, {
        key: "updateNavbarBg",
        value: function updateNavbarBg() {
          var _container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

          this.setNavbarBg(this.settings.navbarBg, false, _container);
        }
      }, {
        key: "updateSidenavBg",
        value: function updateSidenavBg() {
          var _container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

          this.setSidenavBg(this.settings.sidenavBg, false, _container);
        }
      }, {
        key: "updateFooterBg",
        value: function updateFooterBg() {
          var _container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

          this.setFooterBg(this.settings.footerBg, false, _container);
        }
      }, {
        key: "clearLocalStorage",
        value: function clearLocalStorage() {
          if (this._ssr) return;

          this._setSetting('Theme', '');

          this._setSetting('Rtl', '');

          this._setSetting('Material', '');

          this._setSetting('LayoutReversed', '');

          this._setSetting('FixedNavbar', '');

          this._setSetting('FixedFooter', '');

          this._setSetting('LayoutPosition', '');

          this._setSetting('NavbarBg', '');

          this._setSetting('SidenavBg', '');

          this._setSetting('FooterBg', '');
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this._ssr) return;

          this._cleanup();

          this.settings = null;
          this.container.parentNode.removeChild(this.container);
          this.container = null;
        }
      }, {
        key: "_loadSettings",
        value: function _loadSettings() {
          var cl = document.documentElement.classList;

          var rtl = this._getSetting('Rtl');

          var material = this._getSetting('Material');

          var reversed = this._getSetting('LayoutReversed');

          var fixedNavbar = this._getSetting('FixedNavbar');

          var fixedFooter = this._getSetting('FixedFooter');

          var navbarBg = this._getSetting('NavbarBg');

          var sidenavBg = this._getSetting('SidenavBg');

          var footerBg = this._getSetting('FooterBg');

          var lPosition = this._getSetting('LayoutPosition');

          var position;

          if (lPosition !== '' && ['static', 'static-offcanvas', 'fixed', 'fixed-offcanvas'].indexOf(lPosition) !== -1) {
            position = lPosition;
          } else if (cl.contains('layout-offcanvas')) {
            position = 'static-offcanvas';
          } else if (cl.contains('layout-fixed')) {
            position = 'fixed';
          } else if (cl.contains('layout-fixed-offcanvas')) {
            position = 'fixed-offcanvas';
          } else {
            position = 'static';
          } // Set settings


          this.settings.rtl = rtl !== '' ? rtl === 'true' : document.documentElement.getAttribute('dir') === 'rtl';
          this.settings.material = material !== '' ? material === 'true' : cl.contains('material-style');
          this.settings.layoutPosition = position;
          this.settings.layoutReversed = reversed !== '' ? reversed === 'true' : cl.contains('layout-reversed');
          this.settings.layoutNavbarFixed = fixedNavbar !== '' ? fixedNavbar === 'true' : cl.contains('layout-navbar-fixed');
          this.settings.layoutFooterFixed = fixedFooter !== '' ? fixedFooter === 'true' : cl.contains('layout-footer-fixed');
          this.settings.navbarBg = this.settings.navbarBgs.indexOf(navbarBg) !== -1 ? navbarBg : this.settings.defaultNavbarBg;
          this.settings.sidenavBg = this.settings.sidenavBgs.indexOf(sidenavBg) !== -1 ? sidenavBg : this.settings.defaultSidenavBg;
          this.settings.footerBg = this.settings.footerBgs.indexOf(footerBg) !== -1 ? footerBg : this.settings.defaultFooterBg;
          this.settings.theme = this._getThemeByName(this._getSetting('Theme'), true); // Filter options depending on available controls

          if (!this._hasControls('rtl')) this.settings.rtl = document.documentElement.getAttribute('dir') === 'rtl';
          if (!this._hasControls('material')) this.settings.material = cl.contains('material-style');
          if (!this._hasControls('layoutPosition')) this.settings.layoutPosition = null;
          if (!this._hasControls('layoutReversed')) this.settings.layoutReversed = null;
          if (!this._hasControls('layoutNavbarFixed')) this.settings.layoutNavbarFixed = null;
          if (!this._hasControls('layoutFooterFixed')) this.settings.layoutFooterFixed = null;
          if (!this._hasControls('navbarBg')) this.settings.navbarBg = null;
          if (!this._hasControls('sidenavBg')) this.settings.sidenavBg = null;
          if (!this._hasControls('footerBg')) this.settings.footerBg = null;
          if (!this._hasControls('themes')) this.settings.theme = null;
        }
      }, {
        key: "_setup",
        value: function _setup() {
          var _this2 = this;

          var _container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

          this._cleanup();

          this.container = this._getElementFromString(_theme_settings_theme_settings_html__WEBPACK_IMPORTED_MODULE_1___default.a); // Open btn
          //

          var openBtn = this.container.querySelector('.theme-settings-open-btn');

          var openBtnCb = function openBtnCb() {
            _this2.container.classList.add('theme-settings-open');

            _this2.update();

            if (_this2._updateInterval) clearInterval(_this2._updateInterval);
            _this2._updateInterval = setInterval(function () {
              _this2.update();
            }, 1000);
          };

          openBtn.addEventListener('click', openBtnCb);

          this._listeners.push([openBtn, 'click', openBtnCb]); // Close btn
          //


          var closeBtn = this.container.querySelector('.theme-settings-close-btn');

          var closeBtnCb = function closeBtnCb() {
            _this2.container.classList.remove('theme-settings-open');

            if (_this2._updateInterval) {
              clearInterval(_this2._updateInterval);
              _this2._updateInterval = null;
            }
          };

          closeBtn.addEventListener('click', closeBtnCb);

          this._listeners.push([closeBtn, 'click', closeBtnCb]); // RTL
          //


          var rtlW = this.container.querySelector('.theme-settings-rtl');

          if (!this._hasControls('rtl')) {
            rtlW.parentNode.removeChild(rtlW);
          } else {
            var rtl = rtlW.querySelector('input');
            if (this.settings.rtl) rtl.setAttribute('checked', 'checked');

            var rtlCb = function rtlCb(e) {
              _this2._loadingState(true);

              _this2.setRtl(e.target.checked);
            };

            rtl.addEventListener('change', rtlCb);

            this._listeners.push([rtl, 'change', rtlCb]);
          } // Material
          //


          var materialW = this.container.querySelector('.theme-settings-material');

          if (!this._hasControls('material')) {
            materialW.parentNode.removeChild(materialW);
          } else {
            var material = materialW.querySelector('input');
            if (this.settings.material) material.setAttribute('checked', 'checked');

            var materialCb = function materialCb(e) {
              _this2._loadingState(true);

              _this2.setMaterial(e.target.checked);
            };

            material.addEventListener('change', materialCb);

            this._listeners.push([material, 'change', materialCb]);
          } // Layout wrapper
          //


          var layoutW = this.container.querySelector('.theme-settings-layout');

          if (!this._hasControls('layoutPosition layoutNavbarFixed layoutFooterFixed layoutReversed', true)) {
            layoutW.parentNode.removeChild(layoutW);
          } else {
            // Position
            //
            var layoutPositionW = this.container.querySelector('.theme-settings-layoutPosition');

            if (!this._hasControls('layoutPosition')) {
              layoutPositionW.parentNode.removeChild(layoutPositionW);
            } else {
              this._controls.layoutPosition = layoutPositionW.querySelector('select');
              this._controls.layoutPosition.value = this.settings.layoutPosition;

              var layoutPositionCb = function layoutPositionCb(e) {
                return _this2.setLayoutPosition(e.target.value);
              };

              this._controls.layoutPosition.addEventListener('change', layoutPositionCb);

              this._listeners.push([this._controls.layoutPosition, 'change', layoutPositionCb]);
            } // Navbar
            //


            this._controls.layoutNavbarFixedW = this.container.querySelector('.theme-settings-layoutNavbarFixed');

            if (!this._hasControls('layoutNavbarFixed')) {
              this._controls.layoutNavbarFixedW.parentNode.removeChild(this._controls.layoutNavbarFixedW);
            } else {
              this._controls.layoutNavbarFixed = this._controls.layoutNavbarFixedW.querySelector('input');
              if (this.settings.layoutNavbarFixed) this._controls.layoutNavbarFixed.setAttribute('checked', 'checked');

              var layoutNavbarFixedCb = function layoutNavbarFixedCb(e) {
                return _this2.setLayoutNavbarFixed(e.target.checked);
              };

              this._controls.layoutNavbarFixed.addEventListener('change', layoutNavbarFixedCb);

              this._listeners.push([this._controls.layoutNavbarFixed, 'change', layoutNavbarFixedCb]);
            } // Footer
            //


            this._controls.layoutFooterFixedW = this.container.querySelector('.theme-settings-layoutFooterFixed');

            if (!this._hasControls('layoutFooterFixed')) {
              this._controls.layoutFooterFixedW.parentNode.removeChild(this._controls.layoutFooterFixedW);
            } else {
              this._controls.layoutFooterFixed = this._controls.layoutFooterFixedW.querySelector('input');
              if (this.settings.layoutFooterFixed) this._controls.layoutFooterFixed.setAttribute('checked', 'checked');

              var layoutFooterFixedCb = function layoutFooterFixedCb(e) {
                return _this2.setLayoutFooterFixed(e.target.checked);
              };

              this._controls.layoutFooterFixed.addEventListener('change', layoutFooterFixedCb);

              this._listeners.push([this._controls.layoutFooterFixed, 'change', layoutFooterFixedCb]);
            } // Reversed
            //


            this._controls.layoutReversedW = this.container.querySelector('.theme-settings-layoutReversed');

            if (!this._hasControls('layoutReversed')) {
              this._controls.layoutReversedW.parentNode.removeChild(this._controls.layoutReversedW);
            } else {
              this._controls.layoutReversed = this._controls.layoutReversedW.querySelector('input');
              if (this.settings.layoutReversed) this._controls.layoutReversed.setAttribute('checked', 'checked');

              var layoutReversedCb = function layoutReversedCb(e) {
                return _this2.setLayoutReversed(e.target.checked);
              };

              this._controls.layoutReversed.addEventListener('change', layoutReversedCb);

              this._listeners.push([this._controls.layoutReversed, 'change', layoutReversedCb]);
            }
          } // Navbar Bg
          //


          var navbarBgW = this.container.querySelector('.theme-settings-navbarBg');

          if (!this._hasControls('navbarBg')) {
            navbarBgW.parentNode.removeChild(navbarBgW);
          } else {
            this._controls.navbarBgWInner = navbarBgW.querySelector('.theme-settings-navbarBg-inner');
            this.settings.navbarBgs.forEach(function (bg) {
              var bgItem = _this2._getElementFromString(_theme_settings_theme_settings_bg_item_html__WEBPACK_IMPORTED_MODULE_3___default.a);

              var control = bgItem.querySelector('input');
              bgItem.classList.add("bg-".concat(bg.split(' ')[0]));
              control.name = 'theme-settings-navbarBg-input';
              control.value = bg;

              if (_this2.settings.navbarBg === bg) {
                control.setAttribute('checked', 'checked');
                bgItem.classList.add('active');
              }

              var cb = function cb(e) {
                var items = _this2._controls.navbarBgWInner.querySelectorAll('.theme-settings-bg-item');

                for (var i = 0, l = items.length; i < l; i++) {
                  items[i].classList.remove('active');
                }

                e.target.parentNode.classList.add('active');

                _this2.setNavbarBg(e.target.value);
              };

              control.addEventListener('change', cb);

              _this2._listeners.push([control, 'change', cb]);

              _this2._controls.navbarBgWInner.appendChild(bgItem);
            });
          } // Sidenav Bg
          //


          var sidenavBgW = this.container.querySelector('.theme-settings-sidenavBg');

          if (!this._hasControls('sidenavBg')) {
            sidenavBgW.parentNode.removeChild(sidenavBgW);
          } else {
            this._controls.sidenavBgWInner = sidenavBgW.querySelector('.theme-settings-sidenavBg-inner');
            this.settings.sidenavBgs.forEach(function (bg) {
              var bgItem = _this2._getElementFromString(_theme_settings_theme_settings_bg_item_html__WEBPACK_IMPORTED_MODULE_3___default.a);

              var control = bgItem.querySelector('input');
              bgItem.classList.add("bg-".concat(bg.split(' ')[0]));
              control.name = 'theme-settings-sidenavBg-input';
              control.value = bg;

              if (_this2.settings.sidenavBg === bg) {
                control.setAttribute('checked', 'checked');
                bgItem.classList.add('active');
              }

              var cb = function cb(e) {
                var items = _this2._controls.sidenavBgWInner.querySelectorAll('.theme-settings-bg-item');

                for (var i = 0, l = items.length; i < l; i++) {
                  items[i].classList.remove('active');
                }

                e.target.parentNode.classList.add('active');

                _this2.setSidenavBg(e.target.value);
              };

              control.addEventListener('change', cb);

              _this2._listeners.push([control, 'change', cb]);

              _this2._controls.sidenavBgWInner.appendChild(bgItem);
            });
          } // Footer Bg
          //


          var footerBgW = this.container.querySelector('.theme-settings-footerBg');

          if (!this._hasControls('footerBg')) {
            footerBgW.parentNode.removeChild(footerBgW);
          } else {
            this._controls.footerBgWInner = footerBgW.querySelector('.theme-settings-footerBg-inner');
            this.settings.footerBgs.forEach(function (bg) {
              var bgItem = _this2._getElementFromString(_theme_settings_theme_settings_bg_item_html__WEBPACK_IMPORTED_MODULE_3___default.a);

              var control = bgItem.querySelector('input');
              bgItem.classList.add("bg-".concat(bg.split(' ')[0]));
              control.name = 'theme-settings-footerBg-input';
              control.value = bg;

              if (_this2.settings.footerBg === bg) {
                control.setAttribute('checked', 'checked');
                bgItem.classList.add('active');
              }

              var cb = function cb(e) {
                var items = _this2._controls.footerBgWInner.querySelectorAll('.theme-settings-bg-item');

                for (var i = 0, l = items.length; i < l; i++) {
                  items[i].classList.remove('active');
                }

                e.target.parentNode.classList.add('active');

                _this2.setFooterBg(e.target.value);
              };

              control.addEventListener('change', cb);

              _this2._listeners.push([control, 'change', cb]);

              _this2._controls.footerBgWInner.appendChild(bgItem);
            });
          } // Themes
          //


          var themesW = this.container.querySelector('.theme-settings-themes');

          if (!this._hasControls('themes')) {
            themesW.parentNode.removeChild(themesW);
          } else {
            var themesWInner = this.container.querySelector('.theme-settings-themes-inner'); // SETUP THEMES

            this.settings.availableThemes.forEach(function (theme) {
              var themeItem = _this2._getElementFromString(_theme_settings_theme_settings_theme_item_html__WEBPACK_IMPORTED_MODULE_2___default.a);

              var control = themeItem.querySelector('input');
              control.value = theme.name;

              if (_this2.settings.theme.name === theme.name) {
                control.setAttribute('checked', 'checked');
              }

              themeItem.querySelector('.theme-settings-theme-colors').innerHTML = "\n          <span style=\"background: ".concat(theme.colors.primary, "\"></span>\n          <span style=\"background: ").concat(theme.colors.navbar, "\"></span>\n          <span style=\"background: ").concat(theme.colors.sidenav, "\"></span>\n        ");

              var cb = function cb(e) {
                if (_this2._loading) return;
                _this2._loading = true;

                _this2._loadingState(true, true);

                _this2.setTheme(e.target.value, true, function () {
                  _this2._loading = false;

                  _this2._loadingState(false, true);
                });
              };

              control.addEventListener('change', cb);

              _this2._listeners.push([control, 'change', cb]);

              themesWInner.appendChild(themeItem);
            });
          } // Set language


          this.setLang(this.settings.lang, true); // Append container

          if (_container === document) {
            if (_container.body) {
              _container.body.appendChild(this.container);
            } else {
              window.addEventListener('DOMContentLoaded', function () {
                return _container.body.appendChild(_this2.container);
              });
            }
          } else {
            _container.appendChild(this.container);
          }
        }
      }, {
        key: "_initDirection",
        value: function _initDirection() {
          if (this._hasControls('rtl')) document.documentElement.setAttribute('dir', this.settings.rtl ? 'rtl' : 'ltr');
        }
      }, {
        key: "_initStyle",
        value: function _initStyle() {
          if (!this._hasControls('material')) return;
          var material = this.settings.material;

          this._insertStylesheet('theme-settings-bootstrap-css', this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace('%name%', 'bootstrap' + (material ? '-material' : ''))));

          this._insertStylesheet('theme-settings-appwork-css', this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace('%name%', 'appwork' + (material ? '-material' : ''))));

          this._insertStylesheet('theme-settings-colors-css', this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace('%name%', 'colors' + (material ? '-material' : ''))));

          document.documentElement.classList.remove(material ? 'default-style' : 'material-style');
          document.documentElement.classList.add(material ? 'material-style' : 'default-style');

          if (material && window.attachMaterialRipple) {
            if (document.body) {
              window.attachMaterialRipple();
            } else {
              window.addEventListener('DOMContentLoaded', function () {
                return window.attachMaterialRipple();
              });
            }
          }
        }
      }, {
        key: "_initTheme",
        value: function _initTheme() {
          if (this._hasControls('themes')) {
            this._insertStylesheet('theme-settings-theme-css', this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace('%name%', this.settings.theme.name + (this.settings.material ? '-material' : ''))));
          }
        }
      }, {
        key: "_insertStylesheet",
        value: function _insertStylesheet(className, href) {
          var curLink = document.querySelector(".".concat(className));

          if (typeof document.documentMode === 'number' && document.documentMode < 11) {
            if (!curLink) return;
            if (href === curLink.getAttribute('href')) return;
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.className = className;
            link.setAttribute('href', href);
            curLink.parentNode.insertBefore(link, curLink.nextSibling);
          } else {
            document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"".concat(href, "\" class=\"").concat(className, "\">"));
          }

          curLink.parentNode.removeChild(curLink);
        }
      }, {
        key: "_loadStylesheets",
        value: function _loadStylesheets(stylesheets, cb) {
          var paths = Object.keys(stylesheets);
          var count = paths.length;
          var loaded = 0;

          function loadStylesheet(path, curLink, _cb) {
            var link = document.createElement('link');
            link.setAttribute('href', path);
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.className = curLink.className;
            var sheet = 'sheet' in link ? 'sheet' : 'styleSheet';
            var cssRules = 'sheet' in link ? 'cssRules' : 'rules';
            var timeoutId, intervalId;
            timeoutId = setTimeout(function () {
              clearInterval(intervalId);
              clearTimeout(timeoutId);
              curLink.parentNode.removeChild(link);

              _cb(false, path);
            }, 15000);
            intervalId = setInterval(function () {
              try {
                if (link[sheet] && link[sheet][cssRules].length) {
                  clearInterval(intervalId);
                  clearTimeout(timeoutId);
                  curLink.parentNode.removeChild(curLink);

                  _cb(true);
                }
              } catch (e) {
                console.error(e);
              } finally {}
            }, 10);
            curLink.parentNode.insertBefore(link, curLink.nextSibling);
          }

          for (var i = 0; i < paths.length; i++) {
            loadStylesheet(paths[i], stylesheets[paths[i]], function (success, errPath) {
              if (!success) {
                if (console && typeof console.error === 'function') {
                  console.error('Error occured while loading stylesheets!');
                }

                alert('Error occured while loading stylesheets!');
                console.log(errPath);
              }

              if (++loaded >= count) {
                cb();
              }
            });
          }
        }
      }, {
        key: "_loadingState",
        value: function _loadingState(enable, themes) {
          this.container.classList[enable ? 'add' : 'remove']("theme-settings-loading".concat(themes ? '-theme' : ''));
        }
      }, {
        key: "_waitForNavs",
        value: function _waitForNavs() {
          var _this3 = this;

          this._addObserver('.layout-navbar.navbar, .layout-navbar .navbar', function (node) {
            return node && node.classList && node.classList.contains('layout-navbar') && (node.classList.contains('navbar') || node.querySelector('.navbar'));
          }, function () {
            return _this3.setNavbarBg(_this3.settings.navbarBg, false);
          });

          this._addObserver('.layout-sidenav.sidenav, .layout-sidenav .sidenav, .layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav', function (node) {
            return node && node.classList && (node.classList.contains('layout-sidenav') || node.classList.contains('layout-sidenav-horizontal')) && (node.classList.contains('sidenav') || node.querySelector('.sidenav'));
          }, function () {
            return _this3.setSidenavBg(_this3.settings.sidenavBg, false);
          });

          this._addObserver('.layout-footer.footer, .layout-footer .footer', function (node) {
            return node && node.classList && node.classList.contains('layout-footer') && (node.classList.contains('footer') || node.querySelector('.footer'));
          }, function () {
            return _this3.setFooterBg(_this3.settings.footerBg, false);
          });

          if (!document.body && (this._observers && this._observers.length || this._intervals && this._intervals.length)) {
            var loadCb = function loadCb() {
              _this3._clearObservers();

              _this3.setNavbarBg(_this3.settings.navbarBg, false);

              _this3.setSidenavBg(_this3.settings.sidenavBg, false);

              _this3.setFooterBg(_this3.settings.footerBg, false);

              window.removeEventListener('load', loadCb);
            };

            window.addEventListener('load', loadCb);
          }
        }
      }, {
        key: "_addObserver",
        value: function _addObserver(selector, condition, cb) {
          var _this4 = this;

          if (!this._observers) this._observers = [];
          if (!this._intervals) this._intervals = [];

          var _observer;

          var _interval;

          if (document.querySelector(selector)) {
            cb.call(this);
          } else if (!document.body) {
            if (typeof MutationObserver !== 'undefined') {
              _observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                  if (!mutation.addedNodes) return;

                  for (var i = 0; i < mutation.addedNodes.length; i++) {
                    var node = mutation.addedNodes[i];

                    if (condition.call(_this4, node)) {
                      _observer.disconnect();

                      _this4._observers.splice(_this4._observers.indexOf(_observer), 1);

                      _observer = null;
                      cb.call(_this4);
                      break;
                    }
                  }
                });
              });

              this._observers.push(_observer);

              _observer.observe(document.documentElement, {
                childList: true,
                subtree: true,
                attributes: false,
                characterData: false
              });
            } else {
              _interval = setInterval(function () {
                if (document.querySelector(selector)) {
                  clearInterval(_interval);

                  _this4._intervals.splice(_this4._intervals.indexOf(_interval), 1);

                  _interval = null;
                  cb.call(_this4);
                }
              }, 10);

              this._intervals.push(_interval);
            }
          }
        }
      }, {
        key: "_clearObservers",
        value: function _clearObservers() {
          if (this._observers && this._observers.length) {
            for (var i = 0, l = this._observers.length; i < l; i++) {
              this._observers[i].disconnect();
            }
          }

          if (this._intervals && this._intervals.length) {
            for (var j = 0, k = this._intervals.length; j < k; j++) {
              clearInterval(this._intervals[j]);
            }
          }

          this._observers = null;
          this._intervals = null;
        }
      }, {
        key: "_getElementFromString",
        value: function _getElementFromString(str) {
          var wrapper = document.createElement('div');
          wrapper.innerHTML = str;
          return wrapper.firstChild;
        }
      }, {
        key: "_getSetting",
        value: function _getSetting(key) {
          var result = null;

          try {
            result = localStorage.getItem("themeSettings".concat(key));
          } catch (e) {}

          return String(result || '');
        }
      }, {
        key: "_setSetting",
        value: function _setSetting(key, val) {
          try {
            localStorage.setItem("themeSettings".concat(key), String(val));
          } catch (e) {}
        }
      }, {
        key: "_removeListeners",
        value: function _removeListeners() {
          for (var i = 0, l = this._listeners.length; i < l; i++) {
            this._listeners[i][0].removeEventListener(this._listeners[i][1], this._listeners[i][2]);
          }
        }
      }, {
        key: "_cleanup",
        value: function _cleanup() {
          this._removeListeners();

          this._listeners = [];
          this._controls = {};

          this._clearObservers();

          if (this._updateInterval) {
            clearInterval(this._updateInterval);
            this._updateInterval = null;
          }
        }
      }, {
        key: "_ssr",
        get: function get() {
          return typeof window === 'undefined';
        }
      }, {
        key: "_hasControls",
        value: function _hasControls(controls) {
          var _this5 = this;

          var oneOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return controls.split(' ').reduce(function (result, control) {
            if (_this5.settings.controls.indexOf(control) !== -1) {
              if (oneOf || result !== false) result = true;
            } else {
              if (!oneOf || result !== true) result = false;
            }

            return result;
          }, null);
        }
      }, {
        key: "_getDefaultTheme",
        value: function _getDefaultTheme(themeId) {
          var theme;

          if (typeof themeId === 'string') {
            theme = this._getThemeByName(themeId, false);
          } else {
            theme = this.settings.availableThemes[themeId];
          }

          if (!theme) {
            throw new Error("Theme ID \"".concat(themeId, "\" not found!"));
          }

          return theme;
        }
      }, {
        key: "_getThemeByName",
        value: function _getThemeByName(themeName) {
          var returnDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var themes = this.settings.availableThemes;

          for (var i = 0, l = themes.length; i < l; i++) {
            if (themes[i].name === themeName) return themes[i];
          }

          return returnDefault ? this.settings.defaultTheme : null;
        }
      }]);

      return ThemeSettings;
    }();

    ThemeSettings.AVAILABLE_THEMES = [{
      name: 'theme-air',
      title: 'Air',
      colors: {
        primary: '#3c97fe',
        navbar: '#f8f8f8',
        sidenav: '#f8f8f8'
      }
    }, {
      name: 'theme-corporate',
      title: 'Corporate',
      colors: {
        primary: '#26B4FF',
        navbar: '#fff',
        sidenav: '#2e323a'
      }
    }, {
      name: 'theme-cotton',
      title: 'Сotton',
      colors: {
        primary: '#e84c64',
        navbar: '#ffffff',
        sidenav: '#ffffff'
      }
    }, {
      name: 'theme-gradient',
      title: 'Gradient',
      colors: {
        primary: '#775cdc',
        navbar: '#ffffff',
        sidenav: 'linear-gradient(to top, #4e54c8, #8c55e4)'
      }
    }, {
      name: 'theme-paper',
      title: 'Paper',
      colors: {
        primary: '#17b3a3',
        navbar: '#ffffff',
        sidenav: '#ffffff'
      }
    }, {
      name: 'theme-shadow',
      title: 'Shadow',
      colors: {
        primary: '#7b83ff',
        navbar: '#f8f8f8',
        sidenav: '#ececf9'
      }
    }, {
      name: 'theme-soft',
      title: 'Soft',
      colors: {
        primary: '#1cbb84',
        navbar: '#39517b',
        sidenav: '#ffffff'
      }
    }, {
      name: 'theme-sunrise',
      title: 'Sunrise',
      colors: {
        primary: '#fc5a5c',
        navbar: '#222222',
        sidenav: '#ffffff'
      }
    }, {
      name: 'theme-twitlight',
      title: 'Twitlight',
      colors: {
        primary: '#4c84ff',
        navbar: '#343c44',
        sidenav: '#3f4853'
      }
    }, {
      name: 'theme-vibrant',
      title: 'Vibrant',
      colors: {
        primary: '#fc5a5c',
        navbar: '#f8f8f8',
        sidenav: '#222222'
      }
    }];
    ThemeSettings.NAVBAR_BGS = ['navbar-theme', 'primary', 'primary-dark navbar-dark', 'primary-darker navbar-dark', 'secondary', 'secondary-dark navbar-dark', 'secondary-darker navbar-dark', 'success', 'success-dark navbar-dark', 'success-darker navbar-dark', 'info', 'info-dark navbar-dark', 'info-darker navbar-dark', 'warning', 'warning-dark navbar-light', 'warning-darker navbar-light', 'danger', 'danger-dark navbar-dark', 'danger-darker navbar-dark', 'dark', 'white', 'light', 'lighter'];
    ThemeSettings.SIDENAV_BGS = ['sidenav-theme', 'primary', 'primary-dark sidenav-dark', 'primary-darker sidenav-dark', 'secondary', 'secondary-dark sidenav-dark', 'secondary-darker sidenav-dark', 'success', 'success-dark sidenav-dark', 'success-darker sidenav-dark', 'info', 'info-dark sidenav-dark', 'info-darker sidenav-dark', 'warning', 'warning-dark sidenav-light', 'warning-darker sidenav-light', 'danger', 'danger-dark sidenav-dark', 'danger-darker sidenav-dark', 'dark', 'white', 'light', 'lighter'];
    ThemeSettings.FOOTER_BGS = ['footer-theme', 'primary', 'primary-dark footer-dark', 'primary-darker footer-dark', 'secondary', 'secondary-dark footer-dark', 'secondary-darker footer-dark', 'success', 'success-dark footer-dark', 'success-darker footer-dark', 'info', 'info-dark footer-dark', 'info-darker footer-dark', 'warning', 'warning-dark footer-light', 'warning-darker footer-light', 'danger', 'danger-dark footer-dark', 'danger-darker footer-dark', 'dark', 'white', 'light', 'lighter'];
    ThemeSettings.LANGUAGES = {
      en: {
        panel_header: 'SETTINGS',
        rtl_switcher: 'RTL direction',
        material_switcher: 'Material style',
        layout_header: 'LAYOUT',
        layout_static: 'Static',
        layout_offcanvas: 'Offcanvas',
        layout_fixed: 'Fixed',
        layout_fixed_offcanvas: 'Fixed offcanvas',
        layout_navbar_swicher: 'Fixed navbar',
        layout_footer_swicher: 'Fixed footer',
        layout_reversed_swicher: 'Reversed',
        navbar_bg_header: 'NAVBAR BACKGROUND',
        sidenav_bg_header: 'SIDENAV BACKGROUND',
        footer_bg_header: 'FOOTER BACKGROUND',
        theme_header: 'THEME'
      }
    };
    /***/
  },

  /***/
  8:
  /*!************************************************************!*\
    !*** multi ./resources/assets/vendor/js/theme-settings.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\js\theme-settings.js */
    "./resources/assets/vendor/js/theme-settings.js");
    /***/
  }
  /******/

}));

/***/ }),

/***/ 121:
/*!**************************************************************************************************************************************!*\
  !*** multi ./resources/assets/js/material-ripple.js ./resources/assets/js/layout-helpers.js ./resources/assets/js/theme-settings.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Program\xampp\htdocs\shikhun\resources\assets\js\material-ripple.js */"./resources/assets/js/material-ripple.js");
__webpack_require__(/*! D:\Program\xampp\htdocs\shikhun\resources\assets\js\layout-helpers.js */"./resources/assets/js/layout-helpers.js");
module.exports = __webpack_require__(/*! D:\Program\xampp\htdocs\shikhun\resources\assets\js\theme-settings.js */"./resources/assets/js/theme-settings.js");


/***/ })

/******/ })));