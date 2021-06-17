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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/sidenav.js":
/*!****************************************!*\
  !*** ./resources/assets/js/sidenav.js ***!
  \****************************************/
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

  return __webpack_require__(__webpack_require__.s = 7);
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./resources/assets/vendor/js/sidenav.js":
  /*!***********************************************!*\
    !*** ./resources/assets/vendor/js/sidenav.js ***!
    \***********************************************/

  /*! exports provided: SideNav */

  /***/
  function resourcesAssetsVendorJsSidenavJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNav", function () {
      return SideNav;
    });

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

    var TRANSITION_EVENTS = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd'];
    var TRANSITION_PROPERTIES = ['transition', 'MozTransition', 'webkitTransition', 'WebkitTransition', 'OTransition'];
    var DELTA = 5;

    var SideNav = /*#__PURE__*/function () {
      function SideNav(el) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _PS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, SideNav);

        this._el = el;
        this._horizontal = options.orientation === 'horizontal';
        this._animate = options.animate !== false && this._supportsTransitionEnd();
        this._accordion = options.accordion !== false;
        this._closeChildren = Boolean(options.closeChildren);
        this._showDropdownOnHover = Boolean(options.showDropdownOnHover);
        this._rtl = document.documentElement.getAttribute('dir') === 'rtl' || document.body.getAttribute('dir') === 'rtl';
        this._lastWidth = this._horizontal ? window.innerWidth : null;

        this._onOpen = options.onOpen || function () {};

        this._onOpened = options.onOpened || function () {};

        this._onClose = options.onClose || function () {};

        this._onClosed = options.onClosed || function () {};

        el.classList.add('sidenav');
        el.classList[this._animate ? 'remove' : 'add']('sidenav-no-animation');

        if (!this._horizontal) {
          el.classList.add('sidenav-vertical');
          el.classList.remove('sidenav-horizontal');
          var PerfectScrollbarLib = _PS || window.PerfectScrollbar;

          if (PerfectScrollbarLib) {
            this._scrollbar = new PerfectScrollbarLib(el.querySelector('.sidenav-inner'), {
              suppressScrollX: true,
              wheelPropagation: true
            });
          }
        } else {
          el.classList.add('sidenav-horizontal');
          el.classList.remove('sidenav-vertical');
          this._inner = el.querySelector('.sidenav-inner');
          var container = this._inner.parentNode;
          this._prevBtn = el.querySelector('.sidenav-horizontal-prev');

          if (!this._prevBtn) {
            this._prevBtn = document.createElement('a');
            this._prevBtn.href = '#';
            this._prevBtn.className = 'sidenav-horizontal-prev';
            container.appendChild(this._prevBtn);
          }

          this._wrapper = el.querySelector('.sidenav-horizontal-wrapper');

          if (!this._wrapper) {
            this._wrapper = document.createElement('div');
            this._wrapper.className = 'sidenav-horizontal-wrapper';

            this._wrapper.appendChild(this._inner);

            container.appendChild(this._wrapper);
          }

          this._nextBtn = el.querySelector('.sidenav-horizontal-next');

          if (!this._nextBtn) {
            this._nextBtn = document.createElement('a');
            this._nextBtn.href = '#';
            this._nextBtn.className = 'sidenav-horizontal-next';
            container.appendChild(this._nextBtn);
          }

          this._innerPosition = 0;
          this.update();
        }

        this._bindEvents(); // Link sidenav instance to element


        el.sidenavInstance = this;
      }

      _createClass(SideNav, [{
        key: "open",
        value: function open(el) {
          var _this = this;

          var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;

          var item = this._findUnopenedParent(this._getItem(el, true), closeChildren);

          if (!item) return;

          var toggleLink = this._getLink(item, true);

          this._promisify(this._onOpen, this, item, toggleLink, this._findMenu(item)).then(function () {
            if (!_this._horizontal || !_this._isRoot(item)) {
              if (_this._animate) {
                window.requestAnimationFrame(function () {
                  return _this._toggleAnimation(true, item, false);
                });
                if (_this._accordion) _this._closeOther(item, closeChildren);
              } else {
                item.classList.add('open');
                _this._onOpened && _this._onOpened(_this, item, toggleLink, _this._findMenu(item));
                if (_this._accordion) _this._closeOther(item, closeChildren);
              }
            } else {
              _this._toggleDropdown(true, item, closeChildren);

              _this._onOpened && _this._onOpened(_this, item, toggleLink, _this._findMenu(item));
            }
          })["catch"](function () {});
        }
      }, {
        key: "close",
        value: function close(el) {
          var _this2 = this;

          var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;

          var _autoClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          var item = this._getItem(el, true);

          var toggleLink = this._getLink(el, true);

          if (!item.classList.contains('open') || item.classList.contains('disabled')) return;

          this._promisify(this._onClose, this, item, toggleLink, this._findMenu(item), _autoClose).then(function () {
            if (!_this2._horizontal || !_this2._isRoot(item)) {
              if (_this2._animate) {
                window.requestAnimationFrame(function () {
                  return _this2._toggleAnimation(false, item, closeChildren);
                });
              } else {
                item.classList.remove('open');

                if (closeChildren) {
                  var opened = item.querySelectorAll('.sidenav-item.open');

                  for (var i = 0, l = opened.length; i < l; i++) {
                    opened[i].classList.remove('open');
                  }
                }

                _this2._onClosed && _this2._onClosed(_this2, item, toggleLink, _this2._findMenu(item));
              }
            } else {
              _this2._toggleDropdown(false, item, closeChildren);

              _this2._onClosed && _this2._onClosed(_this2, item, toggleLink, _this2._findMenu(item));
            }
          })["catch"](function () {});
        }
      }, {
        key: "toggle",
        value: function toggle(el) {
          var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;

          var item = this._getItem(el, true);

          if (item.classList.contains('open')) this.close(item, closeChildren);else this.open(item, closeChildren);
        }
      }, {
        key: "closeAll",
        value: function closeAll() {
          var closeChildren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._closeChildren;

          var opened = this._el.querySelectorAll('.sidenav-inner > .sidenav-item.open');

          for (var i = 0, l = opened.length; i < l; i++) {
            this.close(opened[i], closeChildren);
          }
        }
      }, {
        key: "setActive",
        value: function setActive(el, active) {
          var openTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var deactivateOthers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          var item = this._getItem(el, false);

          if (active && deactivateOthers) {
            var activeItems = this._el.querySelectorAll('.sidenav-inner .sidenav-item.active');

            for (var i = 0, l = activeItems.length; i < l; i++) {
              activeItems[i].classList.remove('active');
            }
          }

          if (active && openTree) {
            var parentItem = this._findParent(item, 'sidenav-item', false);

            parentItem && this.open(parentItem);
          }

          while (item) {
            item.classList[active ? 'add' : 'remove']('active');
            item = this._findParent(item, 'sidenav-item', false);
          }
        }
      }, {
        key: "setDisabled",
        value: function setDisabled(el, disabled) {
          this._getItem(el, false).classList[disabled ? 'add' : 'remove']('disabled');
        }
      }, {
        key: "isActive",
        value: function isActive(el) {
          return this._getItem(el, false).classList.contains('active');
        }
      }, {
        key: "isOpened",
        value: function isOpened(el) {
          return this._getItem(el, false).classList.contains('open');
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(el) {
          return this._getItem(el, false).classList.contains('disabled');
        }
      }, {
        key: "update",
        value: function update() {
          if (!this._horizontal) {
            if (this._scrollbar) {
              this._scrollbar.update();
            }
          } else {
            this.closeAll();
            var wrapperWidth = Math.round(this._wrapper.getBoundingClientRect().width);
            var innerWidth = this._innerWidth;
            var position = this._innerPosition;

            if (wrapperWidth - position > innerWidth) {
              position = wrapperWidth - innerWidth;
              if (position > 0) position = 0;
              this._innerPosition = position;
            }

            this._updateSlider(wrapperWidth, innerWidth, position);
          }
        }
      }, {
        key: "_updateSlider",
        value: function _updateSlider() {
          var wrapperWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var innerWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          var _wrapperWidth = wrapperWidth !== null ? wrapperWidth : Math.round(this._wrapper.getBoundingClientRect().width);

          var _innerWidth = innerWidth !== null ? innerWidth : this._innerWidth;

          var _position = position !== null ? position : this._innerPosition;

          if (_position === 0) this._prevBtn.classList.add('disabled');else this._prevBtn.classList.remove('disabled');
          if (_innerWidth + _position <= _wrapperWidth) this._nextBtn.classList.add('disabled');else this._nextBtn.classList.remove('disabled');
        }
      }, {
        key: "_promisify",
        value: function _promisify(fn) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var result = fn.apply(void 0, args);
          return result instanceof Promise ? result : result === false ? Promise.reject() : Promise.resolve();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (!this._el) return;

          this._unbindEvents();

          var items = this._el.querySelectorAll('.sidenav-item');

          for (var i = 0, l = items.length; i < l; i++) {
            this._unbindAnimationEndEvent(items[i]);

            items[i].classList.remove('sidenav-item-animating');
            items[i].classList.remove('open');
            items[i].style.overflow = null;
            items[i].style.height = null;
          }

          var menus = this._el.querySelectorAll('.sidenav-menu');

          for (var i2 = 0, l2 = menus.length; i2 < l2; i2++) {
            menus[i2].style.marginRight = null;
            menus[i2].style.marginLeft = null;
          }

          this._el.classList.remove('sidenav-no-animation');

          if (this._wrapper) {
            this._prevBtn.parentNode.removeChild(this._prevBtn);

            this._nextBtn.parentNode.removeChild(this._nextBtn);

            this._wrapper.parentNode.insertBefore(this._inner, this._wrapper);

            this._wrapper.parentNode.removeChild(this._wrapper);

            this._inner.style.marginLeft = null;
            this._inner.style.marginRight = null;
          }

          this._el.sidenavInstance = null;
          delete this._el.sidenavInstance;
          this._el = null;
          this._horizontal = null;
          this._animate = null;
          this._accordion = null;
          this._closeChildren = null;
          this._showDropdownOnHover = null;
          this._rtl = null;
          this._onOpen = null;
          this._onOpened = null;
          this._onClose = null;
          this._onClosed = null;

          if (this._scrollbar) {
            this._scrollbar.destroy();

            this._scrollbar = null;
          }

          this._inner = null;
          this._prevBtn = null;
          this._wrapper = null;
          this._nextBtn = null;
        }
      }, {
        key: "_getLink",
        value: function _getLink(el, toggle) {
          var found = [];
          var selector = toggle ? 'sidenav-toggle' : 'sidenav-link';
          if (el.classList.contains(selector)) found = [el];else if (el.classList.contains('sidenav-item')) found = this._findChild(el, [selector]);
          if (!found.length) throw new Error("`".concat(selector, "` element not found."));
          return found[0];
        }
      }, {
        key: "_getItem",
        value: function _getItem(el, toggle) {
          var item = null;
          var selector = toggle ? 'sidenav-toggle' : 'sidenav-link';

          if (el.classList.contains('sidenav-item')) {
            if (this._findChild(el, [selector]).length) item = el;
          } else if (el.classList.contains(selector)) {
            item = el.parentNode.classList.contains('sidenav-item') ? el.parentNode : null;
          }

          if (!item) {
            throw new Error("".concat(toggle ? 'Toggable ' : '', "`.sidenav-item` element not found."));
          }

          return item;
        }
      }, {
        key: "_findUnopenedParent",
        value: function _findUnopenedParent(item, closeChildren) {
          var tree = [];
          var parentItem = null;

          while (item) {
            if (item.classList.contains('disabled')) {
              parentItem = null;
              tree = [];
            } else {
              if (!item.classList.contains('open')) parentItem = item;
              tree.push(item);
            }

            item = this._findParent(item, 'sidenav-item', false);
          }

          if (!parentItem) return null;
          if (tree.length === 1) return parentItem;
          tree = tree.slice(0, tree.indexOf(parentItem));

          for (var i = 0, l = tree.length; i < l; i++) {
            tree[i].classList.add('open');

            if (this._accordion) {
              var openedItems = this._findChild(tree[i].parentNode, ['sidenav-item', 'open']);

              for (var j = 0, k = openedItems.length; j < k; j++) {
                if (openedItems[j] === tree[i]) continue;
                openedItems[j].classList.remove('open');

                if (closeChildren) {
                  var openedChildren = openedItems[j].querySelectorAll('.sidenav-item.open');

                  for (var x = 0, z = openedChildren.length; x < z; x++) {
                    openedChildren[x].classList.remove('open');
                  }
                }
              }
            }
          }

          return parentItem;
        }
      }, {
        key: "_closeOther",
        value: function _closeOther(item, closeChildren) {
          var opened = this._findChild(item.parentNode, ['sidenav-item', 'open']);

          for (var i = 0, l = opened.length; i < l; i++) {
            if (opened[i] !== item) this.close(opened[i], closeChildren, true);
          }
        }
      }, {
        key: "_toggleAnimation",
        value: function _toggleAnimation(open, item, closeChildren) {
          var _this3 = this;

          var toggleLink = this._getLink(item, true);

          var menu = this._findMenu(item);

          this._unbindAnimationEndEvent(item);

          var linkHeight = Math.round(toggleLink.getBoundingClientRect().height);
          item.style.overflow = 'hidden';

          var clearItemStyle = function clearItemStyle() {
            item.classList.remove('sidenav-item-animating');
            item.classList.remove('sidenav-item-closing');
            item.style.overflow = null;
            item.style.height = null;
            if (!_this3._horizontal) _this3.update();
          };

          if (open) {
            item.style.height = "".concat(linkHeight, "px");
            item.classList.add('sidenav-item-animating');
            item.classList.add('open');

            this._bindAnimationEndEvent(item, function () {
              clearItemStyle();
              _this3._onOpened && _this3._onOpened(_this3, item, toggleLink, menu);
            });

            setTimeout(function () {
              return item.style.height = "".concat(linkHeight + Math.round(menu.getBoundingClientRect().height), "px");
            }, 50);
          } else {
            item.style.height = "".concat(linkHeight + Math.round(menu.getBoundingClientRect().height), "px");
            item.classList.add('sidenav-item-animating');
            item.classList.add('sidenav-item-closing');

            this._bindAnimationEndEvent(item, function () {
              item.classList.remove('open');
              clearItemStyle();

              if (closeChildren) {
                var opened = item.querySelectorAll('.sidenav-item.open');

                for (var i = 0, l = opened.length; i < l; i++) {
                  opened[i].classList.remove('open');
                }
              }

              _this3._onClosed && _this3._onClosed(_this3, item, toggleLink, menu);
            });

            setTimeout(function () {
              return item.style.height = "".concat(linkHeight, "px");
            }, 50);
          }
        }
      }, {
        key: "_toggleDropdown",
        value: function _toggleDropdown(show, item, closeChildren) {
          var menu = this._findMenu(item);

          if (show) {
            var wrapperWidth = Math.round(this._wrapper.getBoundingClientRect().width);
            var position = this._innerPosition;

            var itemOffset = this._getItemOffset(item);

            var itemWidth = Math.round(item.getBoundingClientRect().width);

            if (itemOffset - DELTA <= -1 * position) {
              this._innerPosition = -1 * itemOffset;
            } else if (itemOffset + position + itemWidth + DELTA >= wrapperWidth) {
              if (itemWidth > wrapperWidth) {
                this._innerPosition = -1 * itemOffset;
              } else {
                this._innerPosition = -1 * (itemOffset + itemWidth - wrapperWidth);
              }
            }

            item.classList.add('open');
            var menuWidth = Math.round(menu.getBoundingClientRect().width);

            if (itemOffset + this._innerPosition + menuWidth > wrapperWidth && menuWidth < wrapperWidth && menuWidth > itemWidth) {
              menu.style[this._rtl ? 'marginRight' : 'marginLeft'] = "-".concat(menuWidth - itemWidth, "px");
            }

            this._closeOther(item, closeChildren);

            this._updateSlider();
          } else {
            var toggle = this._findChild(item, ['sidenav-toggle']);

            toggle.length && toggle[0].removeAttribute('data-hover', 'true');
            item.classList.remove('open');
            menu.style[this._rtl ? 'marginRight' : 'marginLeft'] = null;

            if (closeChildren) {
              var opened = menu.querySelectorAll('.sidenav-item.open');

              for (var i = 0, l = opened.length; i < l; i++) {
                opened[i].classList.remove('open');
              }
            }
          }
        }
      }, {
        key: "_slide",
        value: function _slide(direction) {
          var wrapperWidth = Math.round(this._wrapper.getBoundingClientRect().width);
          var innerWidth = this._innerWidth;
          var newPosition;

          if (direction === 'next') {
            newPosition = this._getSlideNextPos();

            if (innerWidth + newPosition < wrapperWidth) {
              newPosition = wrapperWidth - innerWidth;
            }
          } else {
            newPosition = this._getSlidePrevPos();
            if (newPosition > 0) newPosition = 0;
          }

          this._innerPosition = newPosition;
          this.update();
        }
      }, {
        key: "_getSlideNextPos",
        value: function _getSlideNextPos() {
          var wrapperWidth = Math.round(this._wrapper.getBoundingClientRect().width);
          var position = this._innerPosition;
          var curItem = this._inner.childNodes[0];
          var left = 0;

          while (curItem) {
            if (curItem.tagName) {
              var curItemWidth = Math.round(curItem.getBoundingClientRect().width);

              if (left + position - DELTA <= wrapperWidth && left + position + curItemWidth + DELTA >= wrapperWidth) {
                if (curItemWidth > wrapperWidth && left === -1 * position) left += curItemWidth;
                break;
              }

              left += curItemWidth;
            }

            curItem = curItem.nextSibling;
          }

          return -1 * left;
        }
      }, {
        key: "_getSlidePrevPos",
        value: function _getSlidePrevPos() {
          var wrapperWidth = Math.round(this._wrapper.getBoundingClientRect().width);
          var position = this._innerPosition;
          var curItem = this._inner.childNodes[0];
          var left = 0;

          while (curItem) {
            if (curItem.tagName) {
              var curItemWidth = Math.round(curItem.getBoundingClientRect().width);

              if (left - DELTA <= -1 * position && left + curItemWidth + DELTA >= -1 * position) {
                if (curItemWidth <= wrapperWidth) left = left + curItemWidth - wrapperWidth;
                break;
              }

              left += curItemWidth;
            }

            curItem = curItem.nextSibling;
          }

          return -1 * left;
        }
      }, {
        key: "_getItemOffset",
        value: function _getItemOffset(item) {
          var curItem = this._inner.childNodes[0];
          var left = 0;

          while (curItem !== item) {
            if (curItem.tagName) {
              left += Math.round(curItem.getBoundingClientRect().width);
            }

            curItem = curItem.nextSibling;
          }

          return left;
        }
      }, {
        key: "_bindAnimationEndEvent",
        value: function _bindAnimationEndEvent(el, handler) {
          var _this4 = this;

          var cb = function cb(e) {
            if (e.target !== el) return;

            _this4._unbindAnimationEndEvent(el);

            handler(e);
          };

          var duration = window.getComputedStyle(el).transitionDuration;
          duration = parseFloat(duration) * (duration.indexOf('ms') !== -1 ? 1 : 1000);
          el._sideNavAnimationEndEventCb = cb;
          TRANSITION_EVENTS.forEach(function (ev) {
            return el.addEventListener(ev, el._sideNavAnimationEndEventCb, false);
          });
          el._sideNavAnimationEndEventTimeout = setTimeout(function () {
            cb({
              target: el
            });
          }, duration + 50);
        }
      }, {
        key: "_unbindAnimationEndEvent",
        value: function _unbindAnimationEndEvent(el) {
          var cb = el._sideNavAnimationEndEventCb;

          if (el._sideNavAnimationEndEventTimeout) {
            clearTimeout(el._sideNavAnimationEndEventTimeout);
            el._sideNavAnimationEndEventTimeout = null;
          }

          if (!cb) return;
          TRANSITION_EVENTS.forEach(function (ev) {
            return el.removeEventListener(ev, cb, false);
          });
          el._sideNavAnimationEndEventCb = null;
        }
      }, {
        key: "_bindEvents",
        value: function _bindEvents() {
          var _this5 = this;

          this._evntElClick = function (e) {
            var toggleLink = e.target.classList.contains('sidenav-toggle') ? e.target : _this5._findParent(e.target, 'sidenav-toggle', false);

            if (toggleLink) {
              e.preventDefault();

              if (toggleLink.getAttribute('data-hover') !== 'true') {
                _this5.toggle(toggleLink);
              }
            }
          };

          this._el.addEventListener('click', this._evntElClick);

          this._evntWindowResize = function () {
            if (!_this5._horizontal) {
              _this5.update();
            } else if (_this5._lastWidth !== window.innerWidth) {
              _this5._lastWidth = window.innerWidth;

              _this5.update();
            }
          };

          window.addEventListener('resize', this._evntWindowResize);

          if (this._horizontal) {
            this._evntPrevBtnClick = function (e) {
              e.preventDefault();
              if (_this5._prevBtn.classList.contains('disabled')) return;

              _this5._slide('prev');
            };

            this._prevBtn.addEventListener('click', this._evntPrevBtnClick);

            this._evntNextBtnClick = function (e) {
              e.preventDefault();
              if (_this5._nextBtn.classList.contains('disabled')) return;

              _this5._slide('next');
            };

            this._nextBtn.addEventListener('click', this._evntNextBtnClick);

            this._evntBodyClick = function (e) {
              if (!_this5._inner.contains(e.target) && _this5._el.querySelectorAll('.sidenav-inner > .sidenav-item.open').length) _this5.closeAll();
            };

            document.body.addEventListener('click', this._evntBodyClick);

            this._evntHorizontalElClick = function (e) {
              var link = e.target.classList.contains('sidenav-link') ? e.target : _this5._findParent(e.target, 'sidenav-link', false);
              if (link && !link.classList.contains('sidenav-toggle')) _this5.closeAll();
            };

            this._el.addEventListener('click', this._evntHorizontalElClick);

            if (this._showDropdownOnHover) {
              this._evntInnerMousemove = function (e) {
                var curItem = _this5._findParent(e.target, 'sidenav-item', false);

                var item = null;

                while (curItem) {
                  item = curItem;
                  curItem = _this5._findParent(curItem, 'sidenav-item', false);
                }

                if (item && !item.classList.contains('open')) {
                  var toggle = _this5._findChild(item, ['sidenav-toggle']);

                  if (toggle.length) {
                    toggle[0].setAttribute('data-hover', 'true');

                    _this5.open(toggle[0], _this5._closeChildren, true);

                    setTimeout(function () {
                      toggle[0].removeAttribute('data-hover');
                    }, 500);
                  }
                }
              };

              this._inner.addEventListener('mousemove', this._evntInnerMousemove);

              this._evntInnerMouseleave = function (e) {
                _this5.closeAll();
              };

              this._inner.addEventListener('mouseleave', this._evntInnerMouseleave);
            }
          }
        }
      }, {
        key: "_unbindEvents",
        value: function _unbindEvents() {
          if (this._evntElClick) {
            this._el.removeEventListener('click', this._evntElClick);

            this._evntElClick = null;
          }

          if (this._evntWindowResize) {
            window.removeEventListener('resize', this._evntWindowResize);
            this._evntWindowResize = null;
          }

          if (this._evntPrevBtnClick) {
            this._prevBtn.removeEventListener('click', this._evntPrevBtnClick);

            this._evntPrevBtnClick = null;
          }

          if (this._evntNextBtnClick) {
            this._nextBtn.removeEventListener('click', this._evntNextBtnClick);

            this._evntNextBtnClick = null;
          }

          if (this._evntBodyClick) {
            document.body.removeEventListener('click', this._evntBodyClick);
            this._evntBodyClick = null;
          }

          if (this._evntHorizontalElClick) {
            this._el.removeEventListener('click', this._evntHorizontalElClick);

            this._evntHorizontalElClick = null;
          }

          if (this._evntInnerMousemove) {
            this._inner.removeEventListener('mousemove', this._evntInnerMousemove);

            this._evntInnerMousemove = null;
          }

          if (this._evntInnerMouseleave) {
            this._inner.removeEventListener('mouseleave', this._evntInnerMouseleave);

            this._evntInnerMouseleave = null;
          }
        }
      }, {
        key: "_findMenu",
        value: function _findMenu(item) {
          var curEl = item.childNodes[0];
          var menu = null;

          while (curEl && !menu) {
            if (curEl.classList && curEl.classList.contains('sidenav-menu')) menu = curEl;
            curEl = curEl.nextSibling;
          }

          if (!menu) throw new Error('Cannot find `.sidenav-menu` element for the current `.sidenav-toggle`');
          return menu;
        }
      }, {
        key: "_isRoot",
        value: function _isRoot(item) {
          return !this._findParent(item, 'sidenav-item', false);
        }
      }, {
        key: "_findParent",
        value: function _findParent(el, cls) {
          var throwError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          if (el.tagName.toUpperCase() === 'BODY') return null;
          el = el.parentNode;

          while (el.tagName.toUpperCase() !== 'BODY' && !el.classList.contains(cls)) {
            el = el.parentNode;
          }

          el = el.tagName.toUpperCase() !== 'BODY' ? el : null;
          if (!el && throwError) throw new Error("Cannot find `.".concat(cls, "` parent element"));
          return el;
        }
      }, {
        key: "_findChild",
        value: function _findChild(el, cls) {
          var items = el.childNodes;
          var found = [];

          for (var i = 0, l = items.length; i < l; i++) {
            if (items[i].classList) {
              var passed = 0;

              for (var j = 0; j < cls.length; j++) {
                if (items[i].classList.contains(cls[j])) passed++;
              }

              if (cls.length === passed) found.push(items[i]);
            }
          }

          return found;
        }
      }, {
        key: "_supportsTransitionEnd",
        value: function _supportsTransitionEnd() {
          if (window.QUnit) {
            return false;
          }

          var el = document.body || document.documentElement;
          var result = false;
          TRANSITION_PROPERTIES.forEach(function (evnt) {
            if (typeof el.style[evnt] !== 'undefined') result = true;
          });
          return result;
        }
      }, {
        key: "_innerWidth",
        get: function get() {
          var items = this._inner.childNodes;
          var width = 0;

          for (var i = 0, l = items.length; i < l; i++) {
            if (items[i].tagName) {
              width += Math.round(items[i].getBoundingClientRect().width);
            }
          }

          return width;
        }
      }, {
        key: "_innerPosition",
        get: function get() {
          return parseInt(this._inner.style[this._rtl ? 'marginRight' : 'marginLeft'] || '0px');
        },
        set: function set(value) {
          this._inner.style[this._rtl ? 'marginRight' : 'marginLeft'] = "".concat(value, "px");
          return value;
        }
      }]);

      return SideNav;
    }();
    /***/

  },

  /***/
  7:
  /*!*****************************************************!*\
    !*** multi ./resources/assets/vendor/js/sidenav.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\js\sidenav.js */
    "./resources/assets/vendor/js/sidenav.js");
    /***/
  }
  /******/

}));

/***/ }),

/***/ "./resources/assets/libs/bootstrap.js":
/*!********************************************!*\
  !*** ./resources/assets/libs/bootstrap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

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

    if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
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

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/bootstrap/js/src/alert.js":
  /*!************************************************!*\
    !*** ./node_modules/bootstrap/js/src/alert.js ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcAlertJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): alert.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'alert';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var Selector = {
      DISMISS: '[data-dismiss="alert"]'
    };
    var Event = {
      CLOSE: "close".concat(EVENT_KEY),
      CLOSED: "closed".concat(EVENT_KEY),
      CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
    };
    var ClassName = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Alert = /*#__PURE__*/function () {
      function Alert(element) {
        _classCallCheck(this, Alert);

        this._element = element;
      } // Getters


      _createClass(Alert, [{
        key: "close",
        value: // Public
        function close(element) {
          var rootElement = this._element;

          if (element) {
            rootElement = this._getRootElement(element);
          }

          var customEvent = this._triggerCloseEvent(rootElement);

          if (customEvent.isDefaultPrevented()) {
            return;
          }

          this._removeElement(rootElement);
        }
      }, {
        key: "dispose",
        value: function dispose() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          this._element = null;
        } // Private

      }, {
        key: "_getRootElement",
        value: function _getRootElement(element) {
          var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(element);

          var parent = false;

          if (selector) {
            parent = document.querySelector(selector);
          }

          if (!parent) {
            parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).closest(".".concat(ClassName.ALERT))[0];
          }

          return parent;
        }
      }, {
        key: "_triggerCloseEvent",
        value: function _triggerCloseEvent(element) {
          var closeEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.CLOSE);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).trigger(closeEvent);
          return closeEvent;
        }
      }, {
        key: "_removeElement",
        value: function _removeElement(element) {
          var _this = this;

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).removeClass(ClassName.SHOW);

          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hasClass(ClassName.FADE)) {
            this._destroyElement(element);

            return;
          }

          var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(element);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, function (event) {
            return _this._destroyElement(element, event);
          }).emulateTransitionEnd(transitionDuration);
        }
      }, {
        key: "_destroyElement",
        value: function _destroyElement(element) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).detach().trigger(Event.CLOSED).remove();
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
            var data = $element.data(DATA_KEY);

            if (!data) {
              data = new Alert(this);
              $element.data(DATA_KEY, data);
            }

            if (config === 'close') {
              data[config](this);
            }
          });
        }
      }, {
        key: "_handleDismiss",
        value: function _handleDismiss(alertInstance) {
          return function (event) {
            if (event) {
              event.preventDefault();
            }

            alertInstance.close(this);
          };
        }
      }]);

      return Alert;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Alert._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Alert;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Alert;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/button.js":
  /*!*************************************************!*\
    !*** ./node_modules/bootstrap/js/src/button.js ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcButtonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): button.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'button';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.button';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    };
    var Selector = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: 'input:not([type="hidden"])',
      ACTIVE: '.active',
      BUTTON: '.btn'
    };
    var Event = {
      CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY),
      FOCUS_BLUR_DATA_API: "focus".concat(EVENT_KEY).concat(DATA_API_KEY, " ") + "blur".concat(EVENT_KEY).concat(DATA_API_KEY)
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Button = /*#__PURE__*/function () {
      function Button(element) {
        _classCallCheck(this, Button);

        this._element = element;
      } // Getters


      _createClass(Button, [{
        key: "toggle",
        value: // Public
        function toggle() {
          var triggerChangeEvent = true;
          var addAriaPressed = true;
          var rootElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).closest(Selector.DATA_TOGGLE)[0];

          if (rootElement) {
            var input = this._element.querySelector(Selector.INPUT);

            if (input) {
              if (input.type === 'radio') {
                if (input.checked && this._element.classList.contains(ClassName.ACTIVE)) {
                  triggerChangeEvent = false;
                } else {
                  var activeElement = rootElement.querySelector(Selector.ACTIVE);

                  if (activeElement) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(activeElement).removeClass(ClassName.ACTIVE);
                  }
                }
              }

              if (triggerChangeEvent) {
                if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                  return;
                }

                input.checked = !this._element.classList.contains(ClassName.ACTIVE);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).trigger('change');
              }

              input.focus();
              addAriaPressed = false;
            }
          }

          if (addAriaPressed) {
            this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName.ACTIVE));
          }

          if (triggerChangeEvent) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).toggleClass(ClassName.ACTIVE);
          }
        }
      }, {
        key: "dispose",
        value: function dispose() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          this._element = null;
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

            if (!data) {
              data = new Button(this);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
            }

            if (config === 'toggle') {
              data[config]();
            }
          });
        }
      }]);

      return Button;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      event.preventDefault();
      var button = event.target;

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).hasClass(ClassName.BUTTON)) {
        button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).closest(Selector.BUTTON);
      }

      Button._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(button), 'toggle');
    }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      var button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(Selector.BUTTON)[0];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Button._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Button;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Button._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Button;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/carousel.js":
  /*!***************************************************!*\
    !*** ./node_modules/bootstrap/js/src/carousel.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcCarouselJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'carousel';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.carousel';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    var SWIPE_THRESHOLD = 40;
    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true,
      touch: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    };
    var Direction = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    };
    var Event = {
      SLIDE: "slide".concat(EVENT_KEY),
      SLID: "slid".concat(EVENT_KEY),
      KEYDOWN: "keydown".concat(EVENT_KEY),
      MOUSEENTER: "mouseenter".concat(EVENT_KEY),
      MOUSELEAVE: "mouseleave".concat(EVENT_KEY),
      TOUCHSTART: "touchstart".concat(EVENT_KEY),
      TOUCHMOVE: "touchmove".concat(EVENT_KEY),
      TOUCHEND: "touchend".concat(EVENT_KEY),
      POINTERDOWN: "pointerdown".concat(EVENT_KEY),
      POINTERUP: "pointerup".concat(EVENT_KEY),
      DRAG_START: "dragstart".concat(EVENT_KEY),
      LOAD_DATA_API: "load".concat(EVENT_KEY).concat(DATA_API_KEY),
      CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
    };
    var ClassName = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item',
      POINTER_EVENT: 'pointer-event'
    };
    var Selector = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      ITEM_IMG: '.carousel-item img',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
    };
    var PointerType = {
      TOUCH: 'touch',
      PEN: 'pen'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Carousel = /*#__PURE__*/function () {
      function Carousel(element, config) {
        _classCallCheck(this, Carousel);

        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._element = element;
        this._indicatorsElement = this._element.querySelector(Selector.INDICATORS);
        this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

        this._addEventListeners();
      } // Getters


      _createClass(Carousel, [{
        key: "next",
        value: // Public
        function next() {
          if (!this._isSliding) {
            this._slide(Direction.NEXT);
          }
        }
      }, {
        key: "nextWhenVisible",
        value: function nextWhenVisible() {
          // Don't call next when the page isn't visible
          // or the carousel or its parent isn't visible
          if (!document.hidden && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).is(':visible') && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).css('visibility') !== 'hidden') {
            this.next();
          }
        }
      }, {
        key: "prev",
        value: function prev() {
          if (!this._isSliding) {
            this._slide(Direction.PREV);
          }
        }
      }, {
        key: "pause",
        value: function pause(event) {
          if (!event) {
            this._isPaused = true;
          }

          if (this._element.querySelector(Selector.NEXT_PREV)) {
            _util__WEBPACK_IMPORTED_MODULE_1__["default"].triggerTransitionEnd(this._element);

            this.cycle(true);
          }

          clearInterval(this._interval);
          this._interval = null;
        }
      }, {
        key: "cycle",
        value: function cycle(event) {
          if (!event) {
            this._isPaused = false;
          }

          if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
          }

          if (this._config.interval && !this._isPaused) {
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
          }
        }
      }, {
        key: "to",
        value: function to(index) {
          var _this = this;

          this._activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);

          var activeIndex = this._getItemIndex(this._activeElement);

          if (index > this._items.length - 1 || index < 0) {
            return;
          }

          if (this._isSliding) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(Event.SLID, function () {
              return _this.to(index);
            });
            return;
          }

          if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
          }

          var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

          this._slide(direction, this._items[index]);
        }
      }, {
        key: "dispose",
        value: function dispose() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(EVENT_KEY);
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          this._items = null;
          this._config = null;
          this._element = null;
          this._interval = null;
          this._isPaused = null;
          this._isSliding = null;
          this._activeElement = null;
          this._indicatorsElement = null;
        } // Private

      }, {
        key: "_getConfig",
        value: function _getConfig(config) {
          config = _objectSpread(_objectSpread({}, Default), config);

          _util__WEBPACK_IMPORTED_MODULE_1__["default"].typeCheckConfig(NAME, config, DefaultType);

          return config;
        }
      }, {
        key: "_handleSwipe",
        value: function _handleSwipe() {
          var absDeltax = Math.abs(this.touchDeltaX);

          if (absDeltax <= SWIPE_THRESHOLD) {
            return;
          }

          var direction = absDeltax / this.touchDeltaX; // swipe left

          if (direction > 0) {
            this.prev();
          } // swipe right


          if (direction < 0) {
            this.next();
          }
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this2 = this;

          if (this._config.keyboard) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.KEYDOWN, function (event) {
              return _this2._keydown(event);
            });
          }

          if (this._config.pause === 'hover') {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.MOUSEENTER, function (event) {
              return _this2.pause(event);
            }).on(Event.MOUSELEAVE, function (event) {
              return _this2.cycle(event);
            });
          }

          if (this._config.touch) {
            this._addTouchEventListeners();
          }
        }
      }, {
        key: "_addTouchEventListeners",
        value: function _addTouchEventListeners() {
          var _this3 = this;

          if (!this._touchSupported) {
            return;
          }

          var start = function start(event) {
            if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
              _this3.touchStartX = event.originalEvent.clientX;
            } else if (!_this3._pointerEvent) {
              _this3.touchStartX = event.originalEvent.touches[0].clientX;
            }
          };

          var move = function move(event) {
            // ensure swiping with one touch and not pinching
            if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
              _this3.touchDeltaX = 0;
            } else {
              _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
            }
          };

          var end = function end(event) {
            if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
              _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
            }

            _this3._handleSwipe();

            if (_this3._config.pause === 'hover') {
              // If it's a touch-enabled device, mouseenter/leave are fired as
              // part of the mouse compatibility events on first tap - the carousel
              // would stop cycling until user tapped out of it;
              // here, we listen for touchend, explicitly pause the carousel
              // (as if it's the second time we tap on it, mouseenter compat event
              // is NOT fired) and after a timeout (to allow for mouse compatibility
              // events to fire) we explicitly restart cycling
              _this3.pause();

              if (_this3.touchTimeout) {
                clearTimeout(_this3.touchTimeout);
              }

              _this3.touchTimeout = setTimeout(function (event) {
                return _this3.cycle(event);
              }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
            }
          };

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element.querySelectorAll(Selector.ITEM_IMG)).on(Event.DRAG_START, function (e) {
            return e.preventDefault();
          });

          if (this._pointerEvent) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.POINTERDOWN, function (event) {
              return start(event);
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.POINTERUP, function (event) {
              return end(event);
            });

            this._element.classList.add(ClassName.POINTER_EVENT);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.TOUCHSTART, function (event) {
              return start(event);
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.TOUCHMOVE, function (event) {
              return move(event);
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.TOUCHEND, function (event) {
              return end(event);
            });
          }
        }
      }, {
        key: "_keydown",
        value: function _keydown(event) {
          if (/input|textarea/i.test(event.target.tagName)) {
            return;
          }

          switch (event.which) {
            case ARROW_LEFT_KEYCODE:
              event.preventDefault();
              this.prev();
              break;

            case ARROW_RIGHT_KEYCODE:
              event.preventDefault();
              this.next();
              break;

            default:
          }
        }
      }, {
        key: "_getItemIndex",
        value: function _getItemIndex(element) {
          this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector.ITEM)) : [];
          return this._items.indexOf(element);
        }
      }, {
        key: "_getItemByDirection",
        value: function _getItemByDirection(direction, activeElement) {
          var isNextDirection = direction === Direction.NEXT;
          var isPrevDirection = direction === Direction.PREV;

          var activeIndex = this._getItemIndex(activeElement);

          var lastItemIndex = this._items.length - 1;
          var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

          if (isGoingToWrap && !this._config.wrap) {
            return activeElement;
          }

          var delta = direction === Direction.PREV ? -1 : 1;
          var itemIndex = (activeIndex + delta) % this._items.length;
          return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
        }
      }, {
        key: "_triggerSlideEvent",
        value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
          var targetIndex = this._getItemIndex(relatedTarget);

          var fromIndex = this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM));

          var slideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SLIDE, {
            relatedTarget: relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(slideEvent);
          return slideEvent;
        }
      }, {
        key: "_setActiveIndicatorElement",
        value: function _setActiveIndicatorElement(element) {
          if (this._indicatorsElement) {
            var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(indicators).removeClass(ClassName.ACTIVE);

            var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

            if (nextIndicator) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(nextIndicator).addClass(ClassName.ACTIVE);
            }
          }
        }
      }, {
        key: "_slide",
        value: function _slide(direction, element) {
          var _this4 = this;

          var activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);

          var activeElementIndex = this._getItemIndex(activeElement);

          var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

          var nextElementIndex = this._getItemIndex(nextElement);

          var isCycling = Boolean(this._interval);
          var directionalClassName;
          var orderClassName;
          var eventDirectionName;

          if (direction === Direction.NEXT) {
            directionalClassName = ClassName.LEFT;
            orderClassName = ClassName.NEXT;
            eventDirectionName = Direction.LEFT;
          } else {
            directionalClassName = ClassName.RIGHT;
            orderClassName = ClassName.PREV;
            eventDirectionName = Direction.RIGHT;
          }

          if (nextElement && jquery__WEBPACK_IMPORTED_MODULE_0___default()(nextElement).hasClass(ClassName.ACTIVE)) {
            this._isSliding = false;
            return;
          }

          var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

          if (slideEvent.isDefaultPrevented()) {
            return;
          }

          if (!activeElement || !nextElement) {
            // Some weirdness is happening, so we bail
            return;
          }

          this._isSliding = true;

          if (isCycling) {
            this.pause();
          }

          this._setActiveIndicatorElement(nextElement);

          var slidEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });

          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.SLIDE)) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(nextElement).addClass(orderClassName);

            _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(nextElement);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(activeElement).addClass(directionalClassName);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(nextElement).addClass(directionalClassName);
            var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

            if (nextElementInterval) {
              this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
              this._config.interval = nextElementInterval;
            } else {
              this._config.interval = this._config.defaultInterval || this._config.interval;
            }

            var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(activeElement);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(activeElement).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, function () {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(nextElement).removeClass("".concat(directionalClassName, " ").concat(orderClassName)).addClass(ClassName.ACTIVE);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(activeElement).removeClass("".concat(ClassName.ACTIVE, " ").concat(orderClassName, " ").concat(directionalClassName));
              _this4._isSliding = false;
              setTimeout(function () {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this4._element).trigger(slidEvent);
              }, 0);
            }).emulateTransitionEnd(transitionDuration);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(activeElement).removeClass(ClassName.ACTIVE);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(nextElement).addClass(ClassName.ACTIVE);
            this._isSliding = false;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(slidEvent);
          }

          if (isCycling) {
            this.cycle();
          }
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

            var _config = _objectSpread(_objectSpread({}, Default), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data());

            if (_typeof(config) === 'object') {
              _config = _objectSpread(_objectSpread({}, _config), config);
            }

            var action = typeof config === 'string' ? config : _config.slide;

            if (!data) {
              data = new Carousel(this, _config);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
            }

            if (typeof config === 'number') {
              data.to(config);
            } else if (typeof action === 'string') {
              if (typeof data[action] === 'undefined') {
                throw new TypeError("No method named \"".concat(action, "\""));
              }

              data[action]();
            } else if (_config.interval && _config.ride) {
              data.pause();
              data.cycle();
            }
          });
        }
      }, {
        key: "_dataApiClickHandler",
        value: function _dataApiClickHandler(event) {
          var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(this);

          if (!selector) {
            return;
          }

          var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector)[0];

          if (!target || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).hasClass(ClassName.CAROUSEL)) {
            return;
          }

          var config = _objectSpread(_objectSpread({}, jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).data()), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data());

          var slideIndex = this.getAttribute('data-slide-to');

          if (slideIndex) {
            config.interval = false;
          }

          Carousel._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target), config);

          if (slideIndex) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).data(DATA_KEY).to(slideIndex);
          }

          event.preventDefault();
        }
      }]);

      return Carousel;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(Event.LOAD_DATA_API, function () {
      var carousels = [].slice.call(document.querySelectorAll(Selector.DATA_RIDE));

      for (var i = 0, len = carousels.length; i < len; i++) {
        var $carousel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(carousels[i]);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Carousel._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Carousel;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Carousel._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Carousel;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/collapse.js":
  /*!***************************************************!*\
    !*** ./node_modules/bootstrap/js/src/collapse.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcCollapseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): collapse.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'collapse';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.collapse';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var Default = {
      toggle: true,
      parent: ''
    };
    var DefaultType = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    var Event = {
      SHOW: "show".concat(EVENT_KEY),
      SHOWN: "shown".concat(EVENT_KEY),
      HIDE: "hide".concat(EVENT_KEY),
      HIDDEN: "hidden".concat(EVENT_KEY),
      CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
    };
    var ClassName = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    };
    var Dimension = {
      WIDTH: 'width',
      HEIGHT: 'height'
    };
    var Selector = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Collapse = /*#__PURE__*/function () {
      function Collapse(element, config) {
        _classCallCheck(this, Collapse);

        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#".concat(element.id, "\"],") + "[data-toggle=\"collapse\"][data-target=\"#".concat(element.id, "\"]")));
        var toggleList = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

        for (var i = 0, len = toggleList.length; i < len; i++) {
          var elem = toggleList[i];

          var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(elem);

          var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
            return foundElem === element;
          });

          if (selector !== null && filterElement.length > 0) {
            this._selector = selector;

            this._triggerArray.push(elem);
          }
        }

        this._parent = this._config.parent ? this._getParent() : null;

        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }

        if (this._config.toggle) {
          this.toggle();
        }
      } // Getters


      _createClass(Collapse, [{
        key: "toggle",
        value: // Public
        function toggle() {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.SHOW)) {
            this.hide();
          } else {
            this.show();
          }
        }
      }, {
        key: "show",
        value: function show() {
          var _this = this;

          if (this._isTransitioning || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.SHOW)) {
            return;
          }

          var actives;
          var activesData;

          if (this._parent) {
            actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
              if (typeof _this._config.parent === 'string') {
                return elem.getAttribute('data-parent') === _this._config.parent;
              }

              return elem.classList.contains(ClassName.COLLAPSE);
            });

            if (actives.length === 0) {
              actives = null;
            }
          }

          if (actives) {
            activesData = jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).not(this._selector).data(DATA_KEY);

            if (activesData && activesData._isTransitioning) {
              return;
            }
          }

          var startEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(startEvent);

          if (startEvent.isDefaultPrevented()) {
            return;
          }

          if (actives) {
            Collapse._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).not(this._selector), 'hide');

            if (!activesData) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).data(DATA_KEY, null);
            }
          }

          var dimension = this._getDimension();

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
          this._element.style[dimension] = 0;

          if (this._triggerArray.length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
          }

          this.setTransitioning(true);

          var complete = function complete() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
            _this._element.style[dimension] = '';

            _this.setTransitioning(false);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this._element).trigger(Event.SHOWN);
          };

          var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
          var scrollSize = "scroll".concat(capitalizedDimension);

          var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this2 = this;

          if (this._isTransitioning || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.SHOW)) {
            return;
          }

          var startEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(startEvent);

          if (startEvent.isDefaultPrevented()) {
            return;
          }

          var dimension = this._getDimension();

          this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");

          _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(this._element);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
          var triggerArrayLength = this._triggerArray.length;

          if (triggerArrayLength > 0) {
            for (var i = 0; i < triggerArrayLength; i++) {
              var trigger = this._triggerArray[i];

              var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(trigger);

              if (selector !== null) {
                var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()([].slice.call(document.querySelectorAll(selector)));

                if (!$elem.hasClass(ClassName.SHOW)) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
                }
              }
            }
          }

          this.setTransitioning(true);

          var complete = function complete() {
            _this2.setTransitioning(false);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
          };

          this._element.style[dimension] = '';

          var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        }
      }, {
        key: "setTransitioning",
        value: function setTransitioning(isTransitioning) {
          this._isTransitioning = isTransitioning;
        }
      }, {
        key: "dispose",
        value: function dispose() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          this._config = null;
          this._parent = null;
          this._element = null;
          this._triggerArray = null;
          this._isTransitioning = null;
        } // Private

      }, {
        key: "_getConfig",
        value: function _getConfig(config) {
          config = _objectSpread(_objectSpread({}, Default), config);
          config.toggle = Boolean(config.toggle); // Coerce string values

          _util__WEBPACK_IMPORTED_MODULE_1__["default"].typeCheckConfig(NAME, config, DefaultType);

          return config;
        }
      }, {
        key: "_getDimension",
        value: function _getDimension() {
          var hasWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(Dimension.WIDTH);
          return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
        }
      }, {
        key: "_getParent",
        value: function _getParent() {
          var _this3 = this;

          var parent;

          if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].isElement(this._config.parent)) {
            parent = this._config.parent; // It's a jQuery object

            if (typeof this._config.parent.jquery !== 'undefined') {
              parent = this._config.parent[0];
            }
          } else {
            parent = document.querySelector(this._config.parent);
          }

          var selector = "[data-toggle=\"collapse\"][data-parent=\"".concat(this._config.parent, "\"]");
          var children = [].slice.call(parent.querySelectorAll(selector));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(children).each(function (i, element) {
            _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
          });
          return parent;
        }
      }, {
        key: "_addAriaAndCollapsedClass",
        value: function _addAriaAndCollapsedClass(element, triggerArray) {
          var isOpen = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hasClass(ClassName.SHOW);

          if (triggerArray.length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "_getTargetFromElement",
        value: function _getTargetFromElement(element) {
          var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(element);

          return selector ? document.querySelector(selector) : null;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
            var data = $this.data(DATA_KEY);

            var _config = _objectSpread(_objectSpread(_objectSpread({}, Default), $this.data()), _typeof(config) === 'object' && config ? config : {});

            if (!data && _config.toggle && /show|hide/.test(config)) {
              _config.toggle = false;
            }

            if (!data) {
              data = new Collapse(this, _config);
              $this.data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config]();
            }
          });
        }
      }]);

      return Collapse;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

      var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(this);

      var selectors = [].slice.call(document.querySelectorAll(selector));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(selectors).each(function () {
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var data = $target.data(DATA_KEY);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Collapse._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Collapse;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Collapse;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/dropdown.js":
  /*!***************************************************!*\
    !*** ./node_modules/bootstrap/js/src/dropdown.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcDropdownJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! popper.js */
    "popper.js");
    /* harmony import */


    var popper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(popper_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): dropdown.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'dropdown';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.dropdown';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEYCODE, "|").concat(ARROW_DOWN_KEYCODE, "|").concat(ESCAPE_KEYCODE));
    var Event = {
      HIDE: "hide".concat(EVENT_KEY),
      HIDDEN: "hidden".concat(EVENT_KEY),
      SHOW: "show".concat(EVENT_KEY),
      SHOWN: "shown".concat(EVENT_KEY),
      CLICK: "click".concat(EVENT_KEY),
      CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY),
      KEYDOWN_DATA_API: "keydown".concat(EVENT_KEY).concat(DATA_API_KEY),
      KEYUP_DATA_API: "keyup".concat(EVENT_KEY).concat(DATA_API_KEY)
    };
    var ClassName = {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      DROPRIGHT: 'dropright',
      DROPLEFT: 'dropleft',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left',
      POSITION_STATIC: 'position-static'
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
    };
    var AttachmentMap = {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end',
      RIGHT: 'right-start',
      RIGHTEND: 'right-end',
      LEFT: 'left-start',
      LEFTEND: 'left-end'
    };
    var Default = {
      offset: 0,
      flip: true,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    };
    var DefaultType = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(element, config) {
        _classCallCheck(this, Dropdown);

        this._element = element;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();

        this._addEventListeners();
      } // Getters


      _createClass(Dropdown, [{
        key: "toggle",
        value: // Public
        function toggle() {
          if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.DISABLED)) {
            return;
          }

          var parent = Dropdown._getParentFromElement(this._element);

          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.SHOW);

          Dropdown._clearMenus();

          if (isActive) {
            return;
          }

          var relatedTarget = {
            relatedTarget: this._element
          };
          var showEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW, relatedTarget);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(showEvent);

          if (showEvent.isDefaultPrevented()) {
            return;
          } // Disable totally Popper.js for Dropdown in Navbar


          if (!this._inNavbar) {
            /**
             * Check for Popper dependency
             * Popper - https://popper.js.org
             */
            if (typeof popper_js__WEBPACK_IMPORTED_MODULE_1___default.a === 'undefined') {
              throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
            }

            var referenceElement = this._element;

            if (this._config.reference === 'parent') {
              referenceElement = parent;
            } else if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].isElement(this._config.reference)) {
              referenceElement = this._config.reference; // Check if it's jQuery element

              if (typeof this._config.reference.jquery !== 'undefined') {
                referenceElement = this._config.reference[0];
              }
            } // If boundary is not `scrollParent`, then set position to `static`
            // to allow the menu to "escape" the scroll parent's boundaries
            // https://github.com/twbs/bootstrap/issues/24251


            if (this._config.boundary !== 'scrollParent') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).addClass(ClassName.POSITION_STATIC);
            }

            this._popper = new popper_js__WEBPACK_IMPORTED_MODULE_1___default.a(referenceElement, this._menu, this._getPopperConfig());
          } // If this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


          if ('ontouchstart' in document.documentElement && jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).closest(Selector.NAVBAR_NAV).length === 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).children().on('mouseover', null, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
          }

          this._element.focus();

          this._element.setAttribute('aria-expanded', true);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).toggleClass(ClassName.SHOW);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).toggleClass(ClassName.SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOWN, relatedTarget));
        }
      }, {
        key: "show",
        value: function show() {
          if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.DISABLED) || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.SHOW)) {
            return;
          }

          var relatedTarget = {
            relatedTarget: this._element
          };
          var showEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW, relatedTarget);

          var parent = Dropdown._getParentFromElement(this._element);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(showEvent);

          if (showEvent.isDefaultPrevented()) {
            return;
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).toggleClass(ClassName.SHOW);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).toggleClass(ClassName.SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOWN, relatedTarget));
        }
      }, {
        key: "hide",
        value: function hide() {
          if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.DISABLED) || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.SHOW)) {
            return;
          }

          var relatedTarget = {
            relatedTarget: this._element
          };
          var hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE, relatedTarget);

          var parent = Dropdown._getParentFromElement(this._element);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).toggleClass(ClassName.SHOW);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).toggleClass(ClassName.SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDDEN, relatedTarget));
        }
      }, {
        key: "dispose",
        value: function dispose() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(EVENT_KEY);
          this._element = null;
          this._menu = null;

          if (this._popper !== null) {
            this._popper.destroy();

            this._popper = null;
          }
        }
      }, {
        key: "update",
        value: function update() {
          this._inNavbar = this._detectNavbar();

          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        } // Private

      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this = this;

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.CLICK, function (event) {
            event.preventDefault();
            event.stopPropagation();

            _this.toggle();
          });
        }
      }, {
        key: "_getConfig",
        value: function _getConfig(config) {
          config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).data()), config);

          _util__WEBPACK_IMPORTED_MODULE_2__["default"].typeCheckConfig(NAME, config, this.constructor.DefaultType);

          return config;
        }
      }, {
        key: "_getMenuElement",
        value: function _getMenuElement() {
          if (!this._menu) {
            var parent = Dropdown._getParentFromElement(this._element);

            if (parent) {
              this._menu = parent.querySelector(Selector.MENU);
            }
          }

          return this._menu;
        }
      }, {
        key: "_getPlacement",
        value: function _getPlacement() {
          var $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element.parentNode);
          var placement = AttachmentMap.BOTTOM; // Handle dropup

          if ($parentDropdown.hasClass(ClassName.DROPUP)) {
            placement = AttachmentMap.TOP;

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.MENURIGHT)) {
              placement = AttachmentMap.TOPEND;
            }
          } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
            placement = AttachmentMap.RIGHT;
          } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
            placement = AttachmentMap.LEFT;
          } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.MENURIGHT)) {
            placement = AttachmentMap.BOTTOMEND;
          }

          return placement;
        }
      }, {
        key: "_detectNavbar",
        value: function _detectNavbar() {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).closest('.navbar').length > 0;
        }
      }, {
        key: "_getOffset",
        value: function _getOffset() {
          var _this2 = this;

          var offset = {};

          if (typeof this._config.offset === 'function') {
            offset.fn = function (data) {
              data.offsets = _objectSpread(_objectSpread({}, data.offsets), _this2._config.offset(data.offsets, _this2._element) || {});
              return data;
            };
          } else {
            offset.offset = this._config.offset;
          }

          return offset;
        }
      }, {
        key: "_getPopperConfig",
        value: function _getPopperConfig() {
          var popperConfig = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          }; // Disable Popper.js if we have a static display

          if (this._config.display === 'static') {
            popperConfig.modifiers.applyStyle = {
              enabled: false
            };
          }

          return popperConfig;
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

            var _config = _typeof(config) === 'object' ? config : null;

            if (!data) {
              data = new Dropdown(this, _config);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config]();
            }
          });
        }
      }, {
        key: "_clearMenus",
        value: function _clearMenus(event) {
          if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
            return;
          }

          var toggles = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

          for (var i = 0, len = toggles.length; i < len; i++) {
            var parent = Dropdown._getParentFromElement(toggles[i]);

            var context = jquery__WEBPACK_IMPORTED_MODULE_0___default()(toggles[i]).data(DATA_KEY);
            var relatedTarget = {
              relatedTarget: toggles[i]
            };

            if (event && event.type === 'click') {
              relatedTarget.clickEvent = event;
            }

            if (!context) {
              continue;
            }

            var dropdownMenu = context._menu;

            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).hasClass(ClassName.SHOW)) {
              continue;
            }

            if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(parent, event.target)) {
              continue;
            }

            var hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE, relatedTarget);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(hideEvent);

            if (hideEvent.isDefaultPrevented()) {
              continue;
            } // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support


            if ('ontouchstart' in document.documentElement) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).children().off('mouseover', null, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
            }

            toggles[i].setAttribute('aria-expanded', 'false');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(dropdownMenu).removeClass(ClassName.SHOW);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).removeClass(ClassName.SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDDEN, relatedTarget));
          }
        }
      }, {
        key: "_getParentFromElement",
        value: function _getParentFromElement(element) {
          var parent;

          var selector = _util__WEBPACK_IMPORTED_MODULE_2__["default"].getSelectorFromElement(element);

          if (selector) {
            parent = document.querySelector(selector);
          }

          return parent || element.parentNode;
        } // eslint-disable-next-line complexity

      }, {
        key: "_dataApiKeydownHandler",
        value: function _dataApiKeydownHandler(event) {
          // If not input/textarea:
          //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
          // If input/textarea:
          //  - If space key => not a dropdown command
          //  - If key is other than escape
          //    - If key is not up or down => not a dropdown command
          //    - If trigger inside the menu => not a dropdown command
          if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          if (this.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(ClassName.DISABLED)) {
            return;
          }

          var parent = Dropdown._getParentFromElement(this);

          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).hasClass(ClassName.SHOW);

          if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
            if (event.which === ESCAPE_KEYCODE) {
              var toggle = parent.querySelector(Selector.DATA_TOGGLE);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(toggle).trigger('focus');
            }

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('click');
            return;
          }

          var items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS));

          if (items.length === 0) {
            return;
          }

          var index = items.indexOf(event.target);

          if (event.which === ARROW_UP_KEYCODE && index > 0) {
            // Up
            index--;
          }

          if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
            // Down
            index++;
          }

          if (index < 0) {
            index = 0;
          }

          items[index].focus();
        }
      }]);

      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on("".concat(Event.CLICK_DATA_API, " ").concat(Event.KEYUP_DATA_API), Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
    }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Dropdown._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Dropdown;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Dropdown;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/modal.js":
  /*!************************************************!*\
    !*** ./node_modules/bootstrap/js/src/modal.js ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcModalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): modal.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'modal';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.modal';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var Event = {
      HIDE: "hide".concat(EVENT_KEY),
      HIDDEN: "hidden".concat(EVENT_KEY),
      SHOW: "show".concat(EVENT_KEY),
      SHOWN: "shown".concat(EVENT_KEY),
      FOCUSIN: "focusin".concat(EVENT_KEY),
      RESIZE: "resize".concat(EVENT_KEY),
      CLICK_DISMISS: "click.dismiss".concat(EVENT_KEY),
      KEYDOWN_DISMISS: "keydown.dismiss".concat(EVENT_KEY),
      MOUSEUP_DISMISS: "mouseup.dismiss".concat(EVENT_KEY),
      MOUSEDOWN_DISMISS: "mousedown.dismiss".concat(EVENT_KEY),
      CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
    };
    var ClassName = {
      SCROLLABLE: 'modal-dialog-scrollable',
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DIALOG: '.modal-dialog',
      MODAL_BODY: '.modal-body',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Modal = /*#__PURE__*/function () {
      function Modal(element, config) {
        _classCallCheck(this, Modal);

        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = element.querySelector(Selector.DIALOG);
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollbarWidth = 0;
      } // Getters


      _createClass(Modal, [{
        key: "toggle",
        value: // Public
        function toggle(relatedTarget) {
          return this._isShown ? this.hide() : this.show(relatedTarget);
        }
      }, {
        key: "show",
        value: function show(relatedTarget) {
          var _this = this;

          if (this._isShown || this._isTransitioning) {
            return;
          }

          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE)) {
            this._isTransitioning = true;
          }

          var showEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW, {
            relatedTarget: relatedTarget
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(showEvent);

          if (this._isShown || showEvent.isDefaultPrevented()) {
            return;
          }

          this._isShown = true;

          this._checkScrollbar();

          this._setScrollbar();

          this._adjustDialog();

          this._setEscapeEvent();

          this._setResizeEvent();

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
            return _this.hide(event);
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).is(_this._element)) {
                _this._ignoreBackdropClick = true;
              }
            });
          });

          this._showBackdrop(function () {
            return _this._showElement(relatedTarget);
          });
        }
      }, {
        key: "hide",
        value: function hide(event) {
          var _this2 = this;

          if (event) {
            event.preventDefault();
          }

          if (!this._isShown || this._isTransitioning) {
            return;
          }

          var hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(hideEvent);

          if (!this._isShown || hideEvent.isDefaultPrevented()) {
            return;
          }

          this._isShown = false;
          var transition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE);

          if (transition) {
            this._isTransitioning = true;
          }

          this._setEscapeEvent();

          this._setResizeEvent();

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(Event.FOCUSIN);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).removeClass(ClassName.SHOW);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(Event.CLICK_DISMISS);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._dialog).off(Event.MOUSEDOWN_DISMISS);

          if (transition) {
            var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, function (event) {
              return _this2._hideModal(event);
            }).emulateTransitionEnd(transitionDuration);
          } else {
            this._hideModal();
          }
        }
      }, {
        key: "dispose",
        value: function dispose() {
          [window, this._element, this._dialog].forEach(function (htmlElement) {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()(htmlElement).off(EVENT_KEY);
          });
          /**
           * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
           * Do not move `document` in `htmlElements` array
           * It will remove `Event.CLICK_DATA_API` event that should remain
           */

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(Event.FOCUSIN);
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          this._config = null;
          this._element = null;
          this._dialog = null;
          this._backdrop = null;
          this._isShown = null;
          this._isBodyOverflowing = null;
          this._ignoreBackdropClick = null;
          this._isTransitioning = null;
          this._scrollbarWidth = null;
        }
      }, {
        key: "handleUpdate",
        value: function handleUpdate() {
          this._adjustDialog();
        } // Private

      }, {
        key: "_getConfig",
        value: function _getConfig(config) {
          config = _objectSpread(_objectSpread({}, Default), config);

          _util__WEBPACK_IMPORTED_MODULE_1__["default"].typeCheckConfig(NAME, config, DefaultType);

          return config;
        }
      }, {
        key: "_showElement",
        value: function _showElement(relatedTarget) {
          var _this3 = this;

          var transition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE);

          if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // Don't move modal's DOM position
            document.body.appendChild(this._element);
          }

          this._element.style.display = 'block';

          this._element.removeAttribute('aria-hidden');

          this._element.setAttribute('aria-modal', true);

          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._dialog).hasClass(ClassName.SCROLLABLE)) {
            this._dialog.querySelector(Selector.MODAL_BODY).scrollTop = 0;
          } else {
            this._element.scrollTop = 0;
          }

          if (transition) {
            _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(this._element);
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).addClass(ClassName.SHOW);

          if (this._config.focus) {
            this._enforceFocus();
          }

          var shownEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOWN, {
            relatedTarget: relatedTarget
          });

          var transitionComplete = function transitionComplete() {
            if (_this3._config.focus) {
              _this3._element.focus();
            }

            _this3._isTransitioning = false;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this3._element).trigger(shownEvent);
          };

          if (transition) {
            var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._dialog);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._dialog).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
          } else {
            transitionComplete();
          }
        }
      }, {
        key: "_enforceFocus",
        value: function _enforceFocus() {
          var _this4 = this;

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(Event.FOCUSIN) // Guard against infinite focus loop
          .on(Event.FOCUSIN, function (event) {
            if (document !== event.target && _this4._element !== event.target && jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this4._element).has(event.target).length === 0) {
              _this4._element.focus();
            }
          });
        }
      }, {
        key: "_setEscapeEvent",
        value: function _setEscapeEvent() {
          var _this5 = this;

          if (this._isShown && this._config.keyboard) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
              if (event.which === ESCAPE_KEYCODE) {
                event.preventDefault();

                _this5.hide();
              }
            });
          } else if (!this._isShown) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(Event.KEYDOWN_DISMISS);
          }
        }
      }, {
        key: "_setResizeEvent",
        value: function _setResizeEvent() {
          var _this6 = this;

          if (this._isShown) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(Event.RESIZE, function (event) {
              return _this6.handleUpdate(event);
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(Event.RESIZE);
          }
        }
      }, {
        key: "_hideModal",
        value: function _hideModal() {
          var _this7 = this;

          this._element.style.display = 'none';

          this._element.setAttribute('aria-hidden', true);

          this._element.removeAttribute('aria-modal');

          this._isTransitioning = false;

          this._showBackdrop(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).removeClass(ClassName.OPEN);

            _this7._resetAdjustments();

            _this7._resetScrollbar();

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this7._element).trigger(Event.HIDDEN);
          });
        }
      }, {
        key: "_removeBackdrop",
        value: function _removeBackdrop() {
          if (this._backdrop) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).remove();
            this._backdrop = null;
          }
        }
      }, {
        key: "_showBackdrop",
        value: function _showBackdrop(callback) {
          var _this8 = this;

          var animate = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

          if (this._isShown && this._config.backdrop) {
            this._backdrop = document.createElement('div');
            this._backdrop.className = ClassName.BACKDROP;

            if (animate) {
              this._backdrop.classList.add(animate);
            }

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).appendTo(document.body);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.CLICK_DISMISS, function (event) {
              if (_this8._ignoreBackdropClick) {
                _this8._ignoreBackdropClick = false;
                return;
              }

              if (event.target !== event.currentTarget) {
                return;
              }

              if (_this8._config.backdrop === 'static') {
                _this8._element.focus();
              } else {
                _this8.hide();
              }
            });

            if (animate) {
              _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(this._backdrop);
            }

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).addClass(ClassName.SHOW);

            if (!callback) {
              return;
            }

            if (!animate) {
              callback();
              return;
            }

            var backdropTransitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._backdrop);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
          } else if (!this._isShown && this._backdrop) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).removeClass(ClassName.SHOW);

            var callbackRemove = function callbackRemove() {
              _this8._removeBackdrop();

              if (callback) {
                callback();
              }
            };

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE)) {
              var _backdropTransitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._backdrop);

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
            } else {
              callbackRemove();
            }
          } else if (callback) {
            callback();
          }
        } // ----------------------------------------------------------------------
        // the following methods are used to handle overflowing modals
        // todo (fat): these should probably be refactored out of modal.js
        // ----------------------------------------------------------------------

      }, {
        key: "_adjustDialog",
        value: function _adjustDialog() {
          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

          if (!this._isBodyOverflowing && isModalOverflowing) {
            this._element.style.paddingLeft = "".concat(this._scrollbarWidth, "px");
          }

          if (this._isBodyOverflowing && !isModalOverflowing) {
            this._element.style.paddingRight = "".concat(this._scrollbarWidth, "px");
          }
        }
      }, {
        key: "_resetAdjustments",
        value: function _resetAdjustments() {
          this._element.style.paddingLeft = '';
          this._element.style.paddingRight = '';
        }
      }, {
        key: "_checkScrollbar",
        value: function _checkScrollbar() {
          var rect = document.body.getBoundingClientRect();
          this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
          this._scrollbarWidth = this._getScrollbarWidth();
        }
      }, {
        key: "_setScrollbar",
        value: function _setScrollbar() {
          var _this9 = this;

          if (this._isBodyOverflowing) {
            // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
            //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
            var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
            var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT)); // Adjust fixed content padding

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(fixedContent).each(function (index, element) {
              var actualPadding = element.style.paddingRight;
              var calculatedPadding = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('padding-right');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('padding-right', actualPadding).css('padding-right', "".concat(parseFloat(calculatedPadding) + _this9._scrollbarWidth, "px"));
            }); // Adjust sticky content margin

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(stickyContent).each(function (index, element) {
              var actualMargin = element.style.marginRight;
              var calculatedMargin = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('margin-right');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('margin-right', actualMargin).css('margin-right', "".concat(parseFloat(calculatedMargin) - _this9._scrollbarWidth, "px"));
            }); // Adjust body padding

            var actualPadding = document.body.style.paddingRight;
            var calculatedPadding = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).css('padding-right');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).data('padding-right', actualPadding).css('padding-right', "".concat(parseFloat(calculatedPadding) + this._scrollbarWidth, "px"));
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).addClass(ClassName.OPEN);
        }
      }, {
        key: "_resetScrollbar",
        value: function _resetScrollbar() {
          // Restore fixed content padding
          var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(fixedContent).each(function (index, element) {
            var padding = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('padding-right');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).removeData('padding-right');
            element.style.paddingRight = padding ? padding : '';
          }); // Restore sticky content

          var elements = [].slice.call(document.querySelectorAll("".concat(Selector.STICKY_CONTENT)));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elements).each(function (index, element) {
            var margin = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('margin-right');

            if (typeof margin !== 'undefined') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('margin-right', margin).removeData('margin-right');
            }
          }); // Restore body padding

          var padding = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).data('padding-right');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).removeData('padding-right');
          document.body.style.paddingRight = padding ? padding : '';
        }
      }, {
        key: "_getScrollbarWidth",
        value: function _getScrollbarWidth() {
          // thx d.walsh
          var scrollDiv = document.createElement('div');
          scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config, relatedTarget) {
          return this.each(function () {
            var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

            var _config = _objectSpread(_objectSpread(_objectSpread({}, Default), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data()), _typeof(config) === 'object' && config ? config : {});

            if (!data) {
              data = new Modal(this, _config);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config](relatedTarget);
            } else if (_config.show) {
              data.show(relatedTarget);
            }
          });
        }
      }]);

      return Modal;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var _this10 = this;

      var target;

      var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(this);

      if (selector) {
        target = document.querySelector(selector);
      }

      var config = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).data(DATA_KEY) ? 'toggle' : _objectSpread(_objectSpread({}, jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).data()), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // Only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(Event.HIDDEN, function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this10).is(':visible')) {
            _this10.focus();
          }
        });
      });

      Modal._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Modal._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Modal;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Modal;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/popover.js":
  /*!**************************************************!*\
    !*** ./node_modules/bootstrap/js/src/popover.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcPopoverJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tooltip */
    "./node_modules/bootstrap/js/src/tooltip.js");

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
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

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();

      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;

        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;

          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }

        return _possibleConstructorReturn(this, result);
      };
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): popover.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'popover';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.popover';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var CLASS_PREFIX = 'bs-popover';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)".concat(CLASS_PREFIX, "\\S+"), 'g');

    var Default = _objectSpread(_objectSpread({}, _tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].Default), {}, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    });

    var DefaultType = _objectSpread(_objectSpread({}, _tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].DefaultType), {}, {
      content: '(string|element|function)'
    });

    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    };
    var Event = {
      HIDE: "hide".concat(EVENT_KEY),
      HIDDEN: "hidden".concat(EVENT_KEY),
      SHOW: "show".concat(EVENT_KEY),
      SHOWN: "shown".concat(EVENT_KEY),
      INSERTED: "inserted".concat(EVENT_KEY),
      CLICK: "click".concat(EVENT_KEY),
      FOCUSIN: "focusin".concat(EVENT_KEY),
      FOCUSOUT: "focusout".concat(EVENT_KEY),
      MOUSEENTER: "mouseenter".concat(EVENT_KEY),
      MOUSELEAVE: "mouseleave".concat(EVENT_KEY)
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Popover = /*#__PURE__*/function (_Tooltip) {
      _inherits(Popover, _Tooltip);

      var _super = _createSuper(Popover);

      function Popover() {
        _classCallCheck(this, Popover);

        return _super.apply(this, arguments);
      }

      _createClass(Popover, [{
        key: "isWithContent",
        value: // Overrides
        function isWithContent() {
          return this.getTitle() || this._getContent();
        }
      }, {
        key: "addAttachmentClass",
        value: function addAttachmentClass(attachment) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.getTipElement()).addClass("".concat(CLASS_PREFIX, "-").concat(attachment));
        }
      }, {
        key: "getTipElement",
        value: function getTipElement() {
          this.tip = this.tip || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.config.template)[0];
          return this.tip;
        }
      }, {
        key: "setContent",
        value: function setContent() {
          var $tip = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.getTipElement()); // We use append for html objects to maintain js events

          this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

          var content = this._getContent();

          if (typeof content === 'function') {
            content = content.call(this.element);
          }

          this.setElementContent($tip.find(Selector.CONTENT), content);
          $tip.removeClass("".concat(ClassName.FADE, " ").concat(ClassName.SHOW));
        } // Private

      }, {
        key: "_getContent",
        value: function _getContent() {
          return this.element.getAttribute('data-content') || this.config.content;
        }
      }, {
        key: "_cleanTipClass",
        value: function _cleanTipClass() {
          var $tip = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.getTipElement());
          var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

          if (tabClass !== null && tabClass.length > 0) {
            $tip.removeClass(tabClass.join(''));
          }
        } // Static

      }], [{
        key: "VERSION",
        get: // Getters
        function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

            var _config = _typeof(config) === 'object' ? config : null;

            if (!data && /dispose|hide/.test(config)) {
              return;
            }

            if (!data) {
              data = new Popover(this, _config);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config]();
            }
          });
        }
      }]);

      return Popover;
    }(_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Popover._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Popover;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Popover._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Popover;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/scrollspy.js":
  /*!****************************************************!*\
    !*** ./node_modules/bootstrap/js/src/scrollspy.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcScrollspyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): scrollspy.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'scrollspy';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.scrollspy';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var Default = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var Event = {
      ACTIVATE: "activate".concat(EVENT_KEY),
      SCROLL: "scroll".concat(EVENT_KEY),
      LOAD_DATA_API: "load".concat(EVENT_KEY).concat(DATA_API_KEY)
    };
    var ClassName = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    };
    var Selector = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    };
    var OffsetMethod = {
      OFFSET: 'offset',
      POSITION: 'position'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var ScrollSpy = /*#__PURE__*/function () {
      function ScrollSpy(element, config) {
        var _this = this;

        _classCallCheck(this, ScrollSpy);

        this._element = element;
        this._scrollElement = element.tagName === 'BODY' ? window : element;
        this._config = this._getConfig(config);
        this._selector = "".concat(this._config.target, " ").concat(Selector.NAV_LINKS, ",") + "".concat(this._config.target, " ").concat(Selector.LIST_ITEMS, ",") + "".concat(this._config.target, " ").concat(Selector.DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._scrollElement).on(Event.SCROLL, function (event) {
          return _this._process(event);
        });
        this.refresh();

        this._process();
      } // Getters


      _createClass(ScrollSpy, [{
        key: "refresh",
        value: // Public
        function refresh() {
          var _this2 = this;

          var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
          var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
          var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
          this._offsets = [];
          this._targets = [];
          this._scrollHeight = this._getScrollHeight();
          var targets = [].slice.call(document.querySelectorAll(this._selector));
          targets.map(function (element) {
            var target;

            var targetSelector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(element);

            if (targetSelector) {
              target = document.querySelector(targetSelector);
            }

            if (target) {
              var targetBCR = target.getBoundingClientRect();

              if (targetBCR.width || targetBCR.height) {
                // TODO (fat): remove sketch reliance on jQuery position/offset
                return [jquery__WEBPACK_IMPORTED_MODULE_0___default()(target)[offsetMethod]().top + offsetBase, targetSelector];
              }
            }

            return null;
          }).filter(function (item) {
            return item;
          }).sort(function (a, b) {
            return a[0] - b[0];
          }).forEach(function (item) {
            _this2._offsets.push(item[0]);

            _this2._targets.push(item[1]);
          });
        }
      }, {
        key: "dispose",
        value: function dispose() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._scrollElement).off(EVENT_KEY);
          this._element = null;
          this._scrollElement = null;
          this._config = null;
          this._selector = null;
          this._offsets = null;
          this._targets = null;
          this._activeTarget = null;
          this._scrollHeight = null;
        } // Private

      }, {
        key: "_getConfig",
        value: function _getConfig(config) {
          config = _objectSpread(_objectSpread({}, Default), _typeof(config) === 'object' && config ? config : {});

          if (typeof config.target !== 'string') {
            var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(config.target).attr('id');

            if (!id) {
              id = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getUID(NAME);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(config.target).attr('id', id);
            }

            config.target = "#".concat(id);
          }

          _util__WEBPACK_IMPORTED_MODULE_1__["default"].typeCheckConfig(NAME, config, DefaultType);

          return config;
        }
      }, {
        key: "_getScrollTop",
        value: function _getScrollTop() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
      }, {
        key: "_getScrollHeight",
        value: function _getScrollHeight() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
      }, {
        key: "_getOffsetHeight",
        value: function _getOffsetHeight() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
      }, {
        key: "_process",
        value: function _process() {
          var scrollTop = this._getScrollTop() + this._config.offset;

          var scrollHeight = this._getScrollHeight();

          var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

          if (this._scrollHeight !== scrollHeight) {
            this.refresh();
          }

          if (scrollTop >= maxScroll) {
            var target = this._targets[this._targets.length - 1];

            if (this._activeTarget !== target) {
              this._activate(target);
            }

            return;
          }

          if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
            this._activeTarget = null;

            this._clear();

            return;
          }

          var offsetLength = this._offsets.length;

          for (var i = offsetLength; i--;) {
            var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

            if (isActiveTarget) {
              this._activate(this._targets[i]);
            }
          }
        }
      }, {
        key: "_activate",
        value: function _activate(target) {
          this._activeTarget = target;

          this._clear();

          var queries = this._selector.split(',').map(function (selector) {
            return "".concat(selector, "[data-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
          });

          var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()([].slice.call(document.querySelectorAll(queries.join(','))));

          if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
            $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
            $link.addClass(ClassName.ACTIVE);
          } else {
            // Set triggered link as active
            $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

            $link.parents(Selector.NAV_LIST_GROUP).prev("".concat(Selector.NAV_LINKS, ", ").concat(Selector.LIST_ITEMS)).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

            $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._scrollElement).trigger(Event.ACTIVATE, {
            relatedTarget: target
          });
        }
      }, {
        key: "_clear",
        value: function _clear() {
          [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
            return node.classList.contains(ClassName.ACTIVE);
          }).forEach(function (node) {
            return node.classList.remove(ClassName.ACTIVE);
          });
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

            var _config = _typeof(config) === 'object' && config;

            if (!data) {
              data = new ScrollSpy(this, _config);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config]();
            }
          });
        }
      }]);

      return ScrollSpy;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(Event.LOAD_DATA_API, function () {
      var scrollSpys = [].slice.call(document.querySelectorAll(Selector.DATA_SPY));
      var scrollSpysLength = scrollSpys.length;

      for (var i = scrollSpysLength; i--;) {
        var $spy = jquery__WEBPACK_IMPORTED_MODULE_0___default()(scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = ScrollSpy._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = ScrollSpy;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return ScrollSpy._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = ScrollSpy;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/tab.js":
  /*!**********************************************!*\
    !*** ./node_modules/bootstrap/js/src/tab.js ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcTabJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): tab.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'tab';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var Event = {
      HIDE: "hide".concat(EVENT_KEY),
      HIDDEN: "hidden".concat(EVENT_KEY),
      SHOW: "show".concat(EVENT_KEY),
      SHOWN: "shown".concat(EVENT_KEY),
      CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tab = /*#__PURE__*/function () {
      function Tab(element) {
        _classCallCheck(this, Tab);

        this._element = element;
      } // Getters


      _createClass(Tab, [{
        key: "show",
        value: // Public
        function show() {
          var _this = this;

          if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.ACTIVE) || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.DISABLED)) {
            return;
          }

          var target;
          var previous;
          var listElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).closest(Selector.NAV_LIST_GROUP)[0];

          var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(this._element);

          if (listElement) {
            var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
            previous = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.makeArray(jquery__WEBPACK_IMPORTED_MODULE_0___default()(listElement).find(itemSelector));
            previous = previous[previous.length - 1];
          }

          var hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE, {
            relatedTarget: this._element
          });
          var showEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW, {
            relatedTarget: previous
          });

          if (previous) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(previous).trigger(hideEvent);
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(showEvent);

          if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
            return;
          }

          if (selector) {
            target = document.querySelector(selector);
          }

          this._activate(this._element, listElement);

          var complete = function complete() {
            var hiddenEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDDEN, {
              relatedTarget: _this._element
            });
            var shownEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOWN, {
              relatedTarget: previous
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(previous).trigger(hiddenEvent);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this._element).trigger(shownEvent);
          };

          if (target) {
            this._activate(target, target.parentNode, complete);
          } else {
            complete();
          }
        }
      }, {
        key: "dispose",
        value: function dispose() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          this._element = null;
        } // Private

      }, {
        key: "_activate",
        value: function _activate(element, container, callback) {
          var _this2 = this;

          var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(container).find(Selector.ACTIVE_UL) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(container).children(Selector.ACTIVE);
          var active = activeElements[0];
          var isTransitioning = callback && active && jquery__WEBPACK_IMPORTED_MODULE_0___default()(active).hasClass(ClassName.FADE);

          var complete = function complete() {
            return _this2._transitionComplete(element, active, callback);
          };

          if (active && isTransitioning) {
            var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(active);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(active).removeClass(ClassName.SHOW).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        }
      }, {
        key: "_transitionComplete",
        value: function _transitionComplete(element, active, callback) {
          if (active) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(active).removeClass(ClassName.ACTIVE);
            var dropdownChild = jquery__WEBPACK_IMPORTED_MODULE_0___default()(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

            if (dropdownChild) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(dropdownChild).removeClass(ClassName.ACTIVE);
            }

            if (active.getAttribute('role') === 'tab') {
              active.setAttribute('aria-selected', false);
            }
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).addClass(ClassName.ACTIVE);

          if (element.getAttribute('role') === 'tab') {
            element.setAttribute('aria-selected', true);
          }

          _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(element);

          if (element.classList.contains(ClassName.FADE)) {
            element.classList.add(ClassName.SHOW);
          }

          if (element.parentNode && jquery__WEBPACK_IMPORTED_MODULE_0___default()(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
            var dropdownElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).closest(Selector.DROPDOWN)[0];

            if (dropdownElement) {
              var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE));
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(dropdownToggleList).addClass(ClassName.ACTIVE);
            }

            element.setAttribute('aria-expanded', true);
          }

          if (callback) {
            callback();
          }
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
            var data = $this.data(DATA_KEY);

            if (!data) {
              data = new Tab(this);
              $this.data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config]();
            }
          });
        }
      }]);

      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Tab._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Tab;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Tab;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/toast.js":
  /*!************************************************!*\
    !*** ./node_modules/bootstrap/js/src/toast.js ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcToastJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): toast.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'toast';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.toast';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
    var Event = {
      CLICK_DISMISS: "click.dismiss".concat(EVENT_KEY),
      HIDE: "hide".concat(EVENT_KEY),
      HIDDEN: "hidden".concat(EVENT_KEY),
      SHOW: "show".concat(EVENT_KEY),
      SHOWN: "shown".concat(EVENT_KEY)
    };
    var ClassName = {
      FADE: 'fade',
      HIDE: 'hide',
      SHOW: 'show',
      SHOWING: 'showing'
    };
    var DefaultType = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    };
    var Default = {
      animation: true,
      autohide: true,
      delay: 500
    };
    var Selector = {
      DATA_DISMISS: '[data-dismiss="toast"]'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Toast = /*#__PURE__*/function () {
      function Toast(element, config) {
        _classCallCheck(this, Toast);

        this._element = element;
        this._config = this._getConfig(config);
        this._timeout = null;

        this._setListeners();
      } // Getters


      _createClass(Toast, [{
        key: "show",
        value: // Public
        function show() {
          var _this = this;

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(Event.SHOW);

          if (this._config.animation) {
            this._element.classList.add(ClassName.FADE);
          }

          var complete = function complete() {
            _this._element.classList.remove(ClassName.SHOWING);

            _this._element.classList.add(ClassName.SHOW);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this._element).trigger(Event.SHOWN);

            if (_this._config.autohide) {
              _this.hide();
            }
          };

          this._element.classList.remove(ClassName.HIDE);

          this._element.classList.add(ClassName.SHOWING);

          if (this._config.animation) {
            var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        }
      }, {
        key: "hide",
        value: function hide(withoutTimeout) {
          var _this2 = this;

          if (!this._element.classList.contains(ClassName.SHOW)) {
            return;
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(Event.HIDE);

          if (withoutTimeout) {
            this._close();
          } else {
            this._timeout = setTimeout(function () {
              _this2._close();
            }, this._config.delay);
          }
        }
      }, {
        key: "dispose",
        value: function dispose() {
          clearTimeout(this._timeout);
          this._timeout = null;

          if (this._element.classList.contains(ClassName.SHOW)) {
            this._element.classList.remove(ClassName.SHOW);
          }

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(Event.CLICK_DISMISS);
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
          this._element = null;
          this._config = null;
        } // Private

      }, {
        key: "_getConfig",
        value: function _getConfig(config) {
          config = _objectSpread(_objectSpread(_objectSpread({}, Default), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).data()), _typeof(config) === 'object' && config ? config : {});

          _util__WEBPACK_IMPORTED_MODULE_1__["default"].typeCheckConfig(NAME, config, this.constructor.DefaultType);

          return config;
        }
      }, {
        key: "_setListeners",
        value: function _setListeners() {
          var _this3 = this;

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function () {
            return _this3.hide(true);
          });
        }
      }, {
        key: "_close",
        value: function _close() {
          var _this4 = this;

          var complete = function complete() {
            _this4._element.classList.add(ClassName.HIDE);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this4._element).trigger(Event.HIDDEN);
          };

          this._element.classList.remove(ClassName.SHOW);

          if (this._config.animation) {
            var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
            var data = $element.data(DATA_KEY);

            var _config = _typeof(config) === 'object' && config;

            if (!data) {
              data = new Toast(this, _config);
              $element.data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config](this);
            }
          });
        }
      }]);

      return Toast;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Toast._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Toast;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Toast._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Toast;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/tools/sanitizer.js":
  /*!**********************************************************!*\
    !*** ./node_modules/bootstrap/js/src/tools/sanitizer.js ***!
    \**********************************************************/

  /*! exports provided: DefaultWhitelist, sanitizeHtml */

  /***/
  function node_modulesBootstrapJsSrcToolsSanitizerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultWhitelist", function () {
      return DefaultWhitelist;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sanitizeHtml", function () {
      return sanitizeHtml;
    });
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): tools/sanitizer.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */


    var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
    var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    var DefaultWhitelist = {
      // Global attributes allowed on any supplied element below.
      '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
    /**
     * A pattern that matches safe data URLs. Only matches image, video and audio types.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function allowedAttribute(attr, allowedAttributeList) {
      var attrName = attr.nodeName.toLowerCase();

      if (allowedAttributeList.indexOf(attrName) !== -1) {
        if (uriAttrs.indexOf(attrName) !== -1) {
          return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
        }

        return true;
      }

      var regExp = allowedAttributeList.filter(function (attrRegex) {
        return attrRegex instanceof RegExp;
      }); // Check if a regular expression validates the attribute.

      for (var i = 0, l = regExp.length; i < l; i++) {
        if (attrName.match(regExp[i])) {
          return true;
        }
      }

      return false;
    }

    function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
      if (unsafeHtml.length === 0) {
        return unsafeHtml;
      }

      if (sanitizeFn && typeof sanitizeFn === 'function') {
        return sanitizeFn(unsafeHtml);
      }

      var domParser = new window.DOMParser();
      var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
      var whitelistKeys = Object.keys(whiteList);
      var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

      var _loop = function _loop(i, len) {
        var el = elements[i];
        var elName = el.nodeName.toLowerCase();

        if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
          el.parentNode.removeChild(el);
          return "continue";
        }

        var attributeList = [].slice.call(el.attributes);
        var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
        attributeList.forEach(function (attr) {
          if (!allowedAttribute(attr, whitelistedAttributes)) {
            el.removeAttribute(attr.nodeName);
          }
        });
      };

      for (var i = 0, len = elements.length; i < len; i++) {
        var _ret = _loop(i, len);

        if (_ret === "continue") continue;
      }

      return createdDocument.body.innerHTML;
    }
    /***/

  },

  /***/
  "./node_modules/bootstrap/js/src/tooltip.js":
  /*!**************************************************!*\
    !*** ./node_modules/bootstrap/js/src/tooltip.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcTooltipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tools_sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tools/sanitizer */
    "./node_modules/bootstrap/js/src/tools/sanitizer.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! popper.js */
    "popper.js");
    /* harmony import */


    var popper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(popper_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./util */
    "./node_modules/bootstrap/js/src/util.js");

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): tooltip.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'tooltip';
    var VERSION = '4.3.1';
    var DATA_KEY = 'bs.tooltip';
    var EVENT_KEY = ".".concat(DATA_KEY);
    var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME];
    var CLASS_PREFIX = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)".concat(CLASS_PREFIX, "\\S+"), 'g');
    var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
    var DefaultType = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object'
    };
    var AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    };
    var Default = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: true,
      sanitizeFn: null,
      whiteList: _tools_sanitizer__WEBPACK_IMPORTED_MODULE_0__["DefaultWhitelist"]
    };
    var HoverState = {
      SHOW: 'show',
      OUT: 'out'
    };
    var Event = {
      HIDE: "hide".concat(EVENT_KEY),
      HIDDEN: "hidden".concat(EVENT_KEY),
      SHOW: "show".concat(EVENT_KEY),
      SHOWN: "shown".concat(EVENT_KEY),
      INSERTED: "inserted".concat(EVENT_KEY),
      CLICK: "click".concat(EVENT_KEY),
      FOCUSIN: "focusin".concat(EVENT_KEY),
      FOCUSOUT: "focusout".concat(EVENT_KEY),
      MOUSEENTER: "mouseenter".concat(EVENT_KEY),
      MOUSELEAVE: "mouseleave".concat(EVENT_KEY)
    };
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    };
    var Trigger = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tooltip = /*#__PURE__*/function () {
      function Tooltip(element, config) {
        _classCallCheck(this, Tooltip);
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */


        if (typeof popper_js__WEBPACK_IMPORTED_MODULE_2___default.a === 'undefined') {
          throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
        } // private


        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // Protected

        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;

        this._setListeners();
      } // Getters


      _createClass(Tooltip, [{
        key: "enable",
        value: // Public
        function enable() {
          this._isEnabled = true;
        }
      }, {
        key: "disable",
        value: function disable() {
          this._isEnabled = false;
        }
      }, {
        key: "toggleEnabled",
        value: function toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
      }, {
        key: "toggle",
        value: function toggle(event) {
          if (!this._isEnabled) {
            return;
          }

          if (event) {
            var dataKey = this.constructor.DATA_KEY;
            var context = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).data(dataKey);

            if (!context) {
              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).data(dataKey, context);
            }

            context._activeTrigger.click = !context._activeTrigger.click;

            if (context._isWithActiveTrigger()) {
              context._enter(null, context);
            } else {
              context._leave(null, context);
            }
          } else {
            if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.getTipElement()).hasClass(ClassName.SHOW)) {
              this._leave(null, this);

              return;
            }

            this._enter(null, this);
          }
        }
      }, {
        key: "dispose",
        value: function dispose() {
          clearTimeout(this._timeout);
          jquery__WEBPACK_IMPORTED_MODULE_1___default.a.removeData(this.element, this.constructor.DATA_KEY);
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.element).off(this.constructor.EVENT_KEY);
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.element).closest('.modal').off('hide.bs.modal');

          if (this.tip) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.tip).remove();
          }

          this._isEnabled = null;
          this._timeout = null;
          this._hoverState = null;
          this._activeTrigger = null;

          if (this._popper !== null) {
            this._popper.destroy();
          }

          this._popper = null;
          this.element = null;
          this.config = null;
          this.tip = null;
        }
      }, {
        key: "show",
        value: function show() {
          var _this = this;

          if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.element).css('display') === 'none') {
            throw new Error('Please use show on visible elements');
          }

          var showEvent = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.Event(this.constructor.Event.SHOW);

          if (this.isWithContent() && this._isEnabled) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.element).trigger(showEvent);

            var shadowRoot = _util__WEBPACK_IMPORTED_MODULE_3__["default"].findShadowRoot(this.element);

            var isInTheDom = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

            if (showEvent.isDefaultPrevented() || !isInTheDom) {
              return;
            }

            var tip = this.getTipElement();

            var tipId = _util__WEBPACK_IMPORTED_MODULE_3__["default"].getUID(this.constructor.NAME);

            tip.setAttribute('id', tipId);
            this.element.setAttribute('aria-describedby', tipId);
            this.setContent();

            if (this.config.animation) {
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip).addClass(ClassName.FADE);
            }

            var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

            var attachment = this._getAttachment(placement);

            this.addAttachmentClass(attachment);

            var container = this._getContainer();

            jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip).data(this.constructor.DATA_KEY, this);

            if (!jquery__WEBPACK_IMPORTED_MODULE_1___default.a.contains(this.element.ownerDocument.documentElement, this.tip)) {
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip).appendTo(container);
            }

            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.element).trigger(this.constructor.Event.INSERTED);
            this._popper = new popper_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.element, tip, {
              placement: attachment,
              modifiers: {
                offset: this._getOffset(),
                flip: {
                  behavior: this.config.fallbackPlacement
                },
                arrow: {
                  element: Selector.ARROW
                },
                preventOverflow: {
                  boundariesElement: this.config.boundary
                }
              },
              onCreate: function onCreate(data) {
                if (data.originalPlacement !== data.placement) {
                  _this._handlePopperPlacementChange(data);
                }
              },
              onUpdate: function onUpdate(data) {
                return _this._handlePopperPlacementChange(data);
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

            if ('ontouchstart' in document.documentElement) {
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(document.body).children().on('mouseover', null, jquery__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
            }

            var complete = function complete() {
              if (_this.config.animation) {
                _this._fixTransition();
              }

              var prevHoverState = _this._hoverState;
              _this._hoverState = null;
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(_this.element).trigger(_this.constructor.Event.SHOWN);

              if (prevHoverState === HoverState.OUT) {
                _this._leave(null, _this);
              }
            };

            if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.tip).hasClass(ClassName.FADE)) {
              var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_3__["default"].getTransitionDurationFromElement(this.tip);

              jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.tip).one(_util__WEBPACK_IMPORTED_MODULE_3__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
              complete();
            }
          }
        }
      }, {
        key: "hide",
        value: function hide(callback) {
          var _this2 = this;

          var tip = this.getTipElement();
          var hideEvent = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.Event(this.constructor.Event.HIDE);

          var complete = function complete() {
            if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
              tip.parentNode.removeChild(tip);
            }

            _this2._cleanTipClass();

            _this2.element.removeAttribute('aria-describedby');

            jquery__WEBPACK_IMPORTED_MODULE_1___default()(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

            if (_this2._popper !== null) {
              _this2._popper.destroy();
            }

            if (callback) {
              callback();
            }
          };

          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.element).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          }

          jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support

          if ('ontouchstart' in document.documentElement) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(document.body).children().off('mouseover', null, jquery__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
          }

          this._activeTrigger[Trigger.CLICK] = false;
          this._activeTrigger[Trigger.FOCUS] = false;
          this._activeTrigger[Trigger.HOVER] = false;

          if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.tip).hasClass(ClassName.FADE)) {
            var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_3__["default"].getTransitionDurationFromElement(tip);

            jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip).one(_util__WEBPACK_IMPORTED_MODULE_3__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }

          this._hoverState = '';
        }
      }, {
        key: "update",
        value: function update() {
          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        } // Protected

      }, {
        key: "isWithContent",
        value: function isWithContent() {
          return Boolean(this.getTitle());
        }
      }, {
        key: "addAttachmentClass",
        value: function addAttachmentClass(attachment) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.getTipElement()).addClass("".concat(CLASS_PREFIX, "-").concat(attachment));
        }
      }, {
        key: "getTipElement",
        value: function getTipElement() {
          this.tip = this.tip || jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.config.template)[0];
          return this.tip;
        }
      }, {
        key: "setContent",
        value: function setContent() {
          var tip = this.getTipElement();
          this.setElementContent(jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle());
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip).removeClass("".concat(ClassName.FADE, " ").concat(ClassName.SHOW));
        }
      }, {
        key: "setElementContent",
        value: function setElementContent($element, content) {
          if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
            // Content is a DOM node or a jQuery
            if (this.config.html) {
              if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(content).parent().is($element)) {
                $element.empty().append(content);
              }
            } else {
              $element.text(jquery__WEBPACK_IMPORTED_MODULE_1___default()(content).text());
            }

            return;
          }

          if (this.config.html) {
            if (this.config.sanitize) {
              content = Object(_tools_sanitizer__WEBPACK_IMPORTED_MODULE_0__["sanitizeHtml"])(content, this.config.whiteList, this.config.sanitizeFn);
            }

            $element.html(content);
          } else {
            $element.text(content);
          }
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          var title = this.element.getAttribute('data-original-title');

          if (!title) {
            title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
          }

          return title;
        } // Private

      }, {
        key: "_getOffset",
        value: function _getOffset() {
          var _this3 = this;

          var offset = {};

          if (typeof this.config.offset === 'function') {
            offset.fn = function (data) {
              data.offsets = _objectSpread(_objectSpread({}, data.offsets), _this3.config.offset(data.offsets, _this3.element) || {});
              return data;
            };
          } else {
            offset.offset = this.config.offset;
          }

          return offset;
        }
      }, {
        key: "_getContainer",
        value: function _getContainer() {
          if (this.config.container === false) {
            return document.body;
          }

          if (_util__WEBPACK_IMPORTED_MODULE_3__["default"].isElement(this.config.container)) {
            return jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.config.container);
          }

          return jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).find(this.config.container);
        }
      }, {
        key: "_getAttachment",
        value: function _getAttachment(placement) {
          return AttachmentMap[placement.toUpperCase()];
        }
      }, {
        key: "_setListeners",
        value: function _setListeners() {
          var _this4 = this;

          var triggers = this.config.trigger.split(' ');
          triggers.forEach(function (trigger) {
            if (trigger === 'click') {
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
                return _this4.toggle(event);
              });
            } else if (trigger !== Trigger.MANUAL) {
              var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
              var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(_this4.element).on(eventIn, _this4.config.selector, function (event) {
                return _this4._enter(event);
              }).on(eventOut, _this4.config.selector, function (event) {
                return _this4._leave(event);
              });
            }
          });
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.element).closest('.modal').on('hide.bs.modal', function () {
            if (_this4.element) {
              _this4.hide();
            }
          });

          if (this.config.selector) {
            this.config = _objectSpread(_objectSpread({}, this.config), {}, {
              trigger: 'manual',
              selector: ''
            });
          } else {
            this._fixTitle();
          }
        }
      }, {
        key: "_fixTitle",
        value: function _fixTitle() {
          var titleType = _typeof(this.element.getAttribute('data-original-title'));

          if (this.element.getAttribute('title') || titleType !== 'string') {
            this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
            this.element.setAttribute('title', '');
          }
        }
      }, {
        key: "_enter",
        value: function _enter(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).data(dataKey, context);
          }

          if (event) {
            context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
          }

          if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
            context._hoverState = HoverState.SHOW;
            return;
          }

          clearTimeout(context._timeout);
          context._hoverState = HoverState.SHOW;

          if (!context.config.delay || !context.config.delay.show) {
            context.show();
            return;
          }

          context._timeout = setTimeout(function () {
            if (context._hoverState === HoverState.SHOW) {
              context.show();
            }
          }, context.config.delay.show);
        }
      }, {
        key: "_leave",
        value: function _leave(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).data(dataKey, context);
          }

          if (event) {
            context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
          }

          if (context._isWithActiveTrigger()) {
            return;
          }

          clearTimeout(context._timeout);
          context._hoverState = HoverState.OUT;

          if (!context.config.delay || !context.config.delay.hide) {
            context.hide();
            return;
          }

          context._timeout = setTimeout(function () {
            if (context._hoverState === HoverState.OUT) {
              context.hide();
            }
          }, context.config.delay.hide);
        }
      }, {
        key: "_isWithActiveTrigger",
        value: function _isWithActiveTrigger() {
          for (var trigger in this._activeTrigger) {
            if (this._activeTrigger[trigger]) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "_getConfig",
        value: function _getConfig(config) {
          var dataAttributes = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.element).data();
          Object.keys(dataAttributes).forEach(function (dataAttr) {
            if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
              delete dataAttributes[dataAttr];
            }
          });
          config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});

          if (typeof config.delay === 'number') {
            config.delay = {
              show: config.delay,
              hide: config.delay
            };
          }

          if (typeof config.title === 'number') {
            config.title = config.title.toString();
          }

          if (typeof config.content === 'number') {
            config.content = config.content.toString();
          }

          _util__WEBPACK_IMPORTED_MODULE_3__["default"].typeCheckConfig(NAME, config, this.constructor.DefaultType);

          if (config.sanitize) {
            config.template = Object(_tools_sanitizer__WEBPACK_IMPORTED_MODULE_0__["sanitizeHtml"])(config.template, config.whiteList, config.sanitizeFn);
          }

          return config;
        }
      }, {
        key: "_getDelegateConfig",
        value: function _getDelegateConfig() {
          var config = {};

          if (this.config) {
            for (var key in this.config) {
              if (this.constructor.Default[key] !== this.config[key]) {
                config[key] = this.config[key];
              }
            }
          }

          return config;
        }
      }, {
        key: "_cleanTipClass",
        value: function _cleanTipClass() {
          var $tip = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.getTipElement());
          var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

          if (tabClass !== null && tabClass.length) {
            $tip.removeClass(tabClass.join(''));
          }
        }
      }, {
        key: "_handlePopperPlacementChange",
        value: function _handlePopperPlacementChange(popperData) {
          var popperInstance = popperData.instance;
          this.tip = popperInstance.popper;

          this._cleanTipClass();

          this.addAttachmentClass(this._getAttachment(popperData.placement));
        }
      }, {
        key: "_fixTransition",
        value: function _fixTransition() {
          var tip = this.getTipElement();
          var initConfigAnimation = this.config.animation;

          if (tip.getAttribute('x-placement') !== null) {
            return;
          }

          jquery__WEBPACK_IMPORTED_MODULE_1___default()(tip).removeClass(ClassName.FADE);
          this.config.animation = false;
          this.hide();
          this.show();
          this.config.animation = initConfigAnimation;
        } // Static

      }], [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var data = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data(DATA_KEY);

            var _config = _typeof(config) === 'object' && config;

            if (!data && /dispose|hide/.test(config)) {
              return;
            }

            if (!data) {
              data = new Tooltip(this, _config);
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config]();
            }
          });
        }
      }]);

      return Tooltip;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME] = Tooltip._jQueryInterface;
    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME].Constructor = Tooltip;

    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME].noConflict = function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface;
    };
    /* harmony default export */


    __webpack_exports__["default"] = Tooltip;
    /***/
  },

  /***/
  "./node_modules/bootstrap/js/src/util.js":
  /*!***********************************************!*\
    !*** ./node_modules/bootstrap/js/src/util.js ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBootstrapJsSrcUtilJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "jquery");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.3.1): util.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */


    var TRANSITION_END = 'transitionend';
    var MAX_UID = 1000000;
    var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined; // eslint-disable-line no-undefined
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.emulateTransitionEnd = transitionEndEmulator;
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */


    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          var hrefAttr = element.getAttribute('href');
          selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
        }

        try {
          return document.querySelector(selector) ? selector : null;
        } catch (err) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var transitionDuration = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('transition-duration');
        var transitionDelay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('transition-delay');
        var floatTransitionDuration = parseFloat(transitionDuration);
        var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        transitionDelay = transitionDelay.split(',')[0];
        return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).trigger(TRANSITION_END);
      },
      // TODO: Remove in v5
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error("".concat(componentName.toUpperCase(), ": ") + "Option \"".concat(property, "\" provided type \"").concat(valueType, "\" ") + "but expected type \"".concat(expectedTypes, "\"."));
            }
          }
        }
      },
      findShadowRoot: function findShadowRoot(element) {
        if (!document.documentElement.attachShadow) {
          return null;
        } // Can find the shadow root otherwise it'll return the document


        if (typeof element.getRootNode === 'function') {
          var root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }

        if (element instanceof ShadowRoot) {
          return element;
        } // when we don't find a shadow root


        if (!element.parentNode) {
          return null;
        }

        return Util.findShadowRoot(element.parentNode);
      }
    };
    setTransitionEndSupport();
    /* harmony default export */

    __webpack_exports__["default"] = Util;
    /***/
  },

  /***/
  "./resources/assets/css/application.css":
  /*!**********************************************!*\
    !*** ./resources/assets/css/application.css ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsCssApplicationCss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/front/css/blog.css":
  /*!*********************************************!*\
    !*** ./resources/assets/front/css/blog.css ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsFrontCssBlogCss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/sass/application.scss":
  /*!************************************************!*\
    !*** ./resources/assets/sass/application.scss ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsSassApplicationScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/js/bootstrap.js":
  /*!*************************************************!*\
    !*** ./resources/assets/vendor/js/bootstrap.js ***!
    \*************************************************/

  /*! exports provided: Util, Alert, Button, Carousel, Collapse, Dropdown, Modal, Scrollspy, Tab, Toast, Tooltip, Popover */

  /***/
  function resourcesAssetsVendorJsBootstrapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var bootstrap_js_src_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! bootstrap/js/src/util.js */
    "./node_modules/bootstrap/js/src/util.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Util", function () {
      return bootstrap_js_src_util_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_alert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! bootstrap/js/src/alert.js */
    "./node_modules/bootstrap/js/src/alert.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return bootstrap_js_src_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! bootstrap/js/src/button.js */
    "./node_modules/bootstrap/js/src/button.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Button", function () {
      return bootstrap_js_src_button_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! bootstrap/js/src/carousel.js */
    "./node_modules/bootstrap/js/src/carousel.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Carousel", function () {
      return bootstrap_js_src_carousel_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_collapse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! bootstrap/js/src/collapse.js */
    "./node_modules/bootstrap/js/src/collapse.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Collapse", function () {
      return bootstrap_js_src_collapse_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! bootstrap/js/src/dropdown.js */
    "./node_modules/bootstrap/js/src/dropdown.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Dropdown", function () {
      return bootstrap_js_src_dropdown_js__WEBPACK_IMPORTED_MODULE_5__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! bootstrap/js/src/modal.js */
    "./node_modules/bootstrap/js/src/modal.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Modal", function () {
      return bootstrap_js_src_modal_js__WEBPACK_IMPORTED_MODULE_6__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_scrollspy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! bootstrap/js/src/scrollspy.js */
    "./node_modules/bootstrap/js/src/scrollspy.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Scrollspy", function () {
      return bootstrap_js_src_scrollspy_js__WEBPACK_IMPORTED_MODULE_7__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_tab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! bootstrap/js/src/tab.js */
    "./node_modules/bootstrap/js/src/tab.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Tab", function () {
      return bootstrap_js_src_tab_js__WEBPACK_IMPORTED_MODULE_8__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_toast_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! bootstrap/js/src/toast.js */
    "./node_modules/bootstrap/js/src/toast.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return bootstrap_js_src_toast_js__WEBPACK_IMPORTED_MODULE_9__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! bootstrap/js/src/tooltip.js */
    "./node_modules/bootstrap/js/src/tooltip.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Tooltip", function () {
      return bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_10__["default"];
    });
    /* harmony import */


    var bootstrap_js_src_popover_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! bootstrap/js/src/popover.js */
    "./node_modules/bootstrap/js/src/popover.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Popover", function () {
      return bootstrap_js_src_popover_js__WEBPACK_IMPORTED_MODULE_11__["default"];
    }); // Tooltip extension
    //


    var bsTooltipSetContent = bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_10__["default"].prototype.setContent; // Set tooltip state

    bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_10__["default"].prototype.setContent = function () {
      var state = this.element.getAttribute('data-state');

      if (state) {
        $(this.getTipElement()).addClass("tooltip-".concat(state.replace(/[^a-z0-9_-]/ig, '')));
      }

      bsTooltipSetContent.call(this);
    }; // Popover extension
    //


    var bsPopoverSetContent = bootstrap_js_src_popover_js__WEBPACK_IMPORTED_MODULE_11__["default"].prototype.setContent; // Set popover state

    bootstrap_js_src_popover_js__WEBPACK_IMPORTED_MODULE_11__["default"].prototype.setContent = function () {
      var state = this.element.getAttribute('data-state');

      if (state) {
        $(this.getTipElement()).addClass("popover-".concat(state.replace(/[^a-z0-9_-]/ig, '')));
      }

      bsPopoverSetContent.call(this);
    };
    /***/

  },

  /***/
  "./resources/assets/vendor/libs/animate-css/animate.scss":
  /*!***************************************************************!*\
    !*** ./resources/assets/vendor/libs/animate-css/animate.scss ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsAnimateCssAnimateScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss":
  /*!*****************************************************************************!*\
    !*** ./resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBlueimpGalleryGalleryIndicatorScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss":
  /*!*************************************************************************!*\
    !*** ./resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBlueimpGalleryGalleryVideoScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/blueimp-gallery/gallery.scss":
  /*!*******************************************************************!*\
    !*** ./resources/assets/vendor/libs/blueimp-gallery/gallery.scss ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBlueimpGalleryGalleryScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss":
  /*!*************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss ***!
    \*************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapDatepickerBootstrapDatepickerScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss":
  /*!***********************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss ***!
    \***********************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapDaterangepickerBootstrapDaterangepickerScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss":
  /*!***************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss ***!
    \***************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapDuallistboxBootstrapDuallistboxScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss":
  /*!*********************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapMarkdownBootstrapMarkdownScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss":
  /*!***************************************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss ***!
    \***************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapMaterialDatetimepickerBootstrapMaterialDatetimepickerScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss":
  /*!***********************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapMaxlengthBootstrapMaxlengthScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss":
  /*!*****************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapSelectBootstrapSelectScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss":
  /*!*****************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapSliderBootstrapSliderScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss":
  /*!*********************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapSortableBootstrapSortableScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss":
  /*!***************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTableBootstrapTableScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-table/extensions/cell-input/cell-input.scss":
  /*!********************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/cell-input/cell-input.scss ***!
    \********************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTableExtensionsCellInputCellInputScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss":
  /*!****************************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss ***!
    \****************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTableExtensionsFilterControlFilterControlScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss":
  /*!**************************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss ***!
    \**************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTableExtensionsFixedColumnsFixedColumnsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss":
  /*!**********************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss ***!
    \**********************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTableExtensionsGroupByV2GroupByV2Scss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss":
  /*!************************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss ***!
    \************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTableExtensionsPageJumpToPageJumpToScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss":
  /*!************************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss ***!
    \************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTableExtensionsReorderRowsReorderRowsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss":
  /*!**************************************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss ***!
    \**************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTableExtensionsStickyHeaderStickyHeaderScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss":
  /*!***********************************************************************************!*\
    !*** ./resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsBootstrapTagsinputBootstrapTagsinputScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/c3/c3.scss":
  /*!*************************************************!*\
    !*** ./resources/assets/vendor/libs/c3/c3.scss ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsC3C3Scss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/chartist/chartist.scss":
  /*!*************************************************************!*\
    !*** ./resources/assets/vendor/libs/chartist/chartist.scss ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsChartistChartistScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/cropper/cropper.scss":
  /*!***********************************************************!*\
    !*** ./resources/assets/vendor/libs/cropper/cropper.scss ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsCropperCropperScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/datatables/datatables.scss":
  /*!*****************************************************************!*\
    !*** ./resources/assets/vendor/libs/datatables/datatables.scss ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsDatatablesDatatablesScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/dragula/dragula.scss":
  /*!***********************************************************!*\
    !*** ./resources/assets/vendor/libs/dragula/dragula.scss ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsDragulaDragulaScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/dropzone/dropzone.scss":
  /*!*************************************************************!*\
    !*** ./resources/assets/vendor/libs/dropzone/dropzone.scss ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsDropzoneDropzoneScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/flatpickr/flatpickr.scss":
  /*!***************************************************************!*\
    !*** ./resources/assets/vendor/libs/flatpickr/flatpickr.scss ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsFlatpickrFlatpickrScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/flot/flot.scss":
  /*!*****************************************************!*\
    !*** ./resources/assets/vendor/libs/flot/flot.scss ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsFlotFlotScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/flow-js/flow.scss":
  /*!********************************************************!*\
    !*** ./resources/assets/vendor/libs/flow-js/flow.scss ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsFlowJsFlowScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/fullcalendar/fullcalendar.scss":
  /*!*********************************************************************!*\
    !*** ./resources/assets/vendor/libs/fullcalendar/fullcalendar.scss ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsFullcalendarFullcalendarScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/growl/growl.scss":
  /*!*******************************************************!*\
    !*** ./resources/assets/vendor/libs/growl/growl.scss ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsGrowlGrowlScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/jstree/themes/default-dark/style.scss":
  /*!****************************************************************************!*\
    !*** ./resources/assets/vendor/libs/jstree/themes/default-dark/style.scss ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsJstreeThemesDefaultDarkStyleScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/jstree/themes/default/style.scss":
  /*!***********************************************************************!*\
    !*** ./resources/assets/vendor/libs/jstree/themes/default/style.scss ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsJstreeThemesDefaultStyleScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/ladda/ladda.scss":
  /*!*******************************************************!*\
    !*** ./resources/assets/vendor/libs/ladda/ladda.scss ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsLaddaLaddaScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/minicolors/minicolors.scss":
  /*!*****************************************************************!*\
    !*** ./resources/assets/vendor/libs/minicolors/minicolors.scss ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsMinicolorsMinicolorsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/morris/morris.scss":
  /*!*********************************************************!*\
    !*** ./resources/assets/vendor/libs/morris/morris.scss ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsMorrisMorrisScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/nestable/nestable.scss":
  /*!*************************************************************!*\
    !*** ./resources/assets/vendor/libs/nestable/nestable.scss ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsNestableNestableScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/nouislider/nouislider.scss":
  /*!*****************************************************************!*\
    !*** ./resources/assets/vendor/libs/nouislider/nouislider.scss ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsNouisliderNouisliderScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss":
  /*!*******************************************************************************!*\
    !*** ./resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsPerfectScrollbarPerfectScrollbarScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/photoswipe/photoswipe.scss":
  /*!*****************************************************************!*\
    !*** ./resources/assets/vendor/libs/photoswipe/photoswipe.scss ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsPhotoswipePhotoswipeScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/plyr/plyr.scss":
  /*!*****************************************************!*\
    !*** ./resources/assets/vendor/libs/plyr/plyr.scss ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsPlyrPlyrScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/quill/editor.scss":
  /*!********************************************************!*\
    !*** ./resources/assets/vendor/libs/quill/editor.scss ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsQuillEditorScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/quill/typography.scss":
  /*!************************************************************!*\
    !*** ./resources/assets/vendor/libs/quill/typography.scss ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsQuillTypographyScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/select2/select2.scss":
  /*!***********************************************************!*\
    !*** ./resources/assets/vendor/libs/select2/select2.scss ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsSelect2Select2Scss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/shepherd/shepherd.scss":
  /*!*************************************************************!*\
    !*** ./resources/assets/vendor/libs/shepherd/shepherd.scss ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsShepherdShepherdScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/smartwizard/smartwizard.scss":
  /*!*******************************************************************!*\
    !*** ./resources/assets/vendor/libs/smartwizard/smartwizard.scss ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsSmartwizardSmartwizardScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/spinkit/spinkit.scss":
  /*!***********************************************************!*\
    !*** ./resources/assets/vendor/libs/spinkit/spinkit.scss ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsSpinkitSpinkitScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/sweetalert2/sweetalert2.scss":
  /*!*******************************************************************!*\
    !*** ./resources/assets/vendor/libs/sweetalert2/sweetalert2.scss ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsSweetalert2Sweetalert2Scss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/swiper/swiper.scss":
  /*!*********************************************************!*\
    !*** ./resources/assets/vendor/libs/swiper/swiper.scss ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsSwiperSwiperScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/timepicker/timepicker.scss":
  /*!*****************************************************************!*\
    !*** ./resources/assets/vendor/libs/timepicker/timepicker.scss ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsTimepickerTimepickerScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/toastr/toastr.scss":
  /*!*********************************************************!*\
    !*** ./resources/assets/vendor/libs/toastr/toastr.scss ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsToastrToastrScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/typeahead-js/typeahead.scss":
  /*!******************************************************************!*\
    !*** ./resources/assets/vendor/libs/typeahead-js/typeahead.scss ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsTypeaheadJsTypeaheadScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/libs/vegas/vegas.scss":
  /*!*******************************************************!*\
    !*** ./resources/assets/vendor/libs/vegas/vegas.scss ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorLibsVegasVegasScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/appwork.scss":
  /*!***************************************************!*\
    !*** ./resources/assets/vendor/sass/appwork.scss ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassAppworkScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/bootstrap.scss":
  /*!*****************************************************!*\
    !*** ./resources/assets/vendor/sass/bootstrap.scss ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassBootstrapScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/colors.scss":
  /*!**************************************************!*\
    !*** ./resources/assets/vendor/sass/colors.scss ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassColorsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/account.scss":
  /*!*********************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/account.scss ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesAccountScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/authentication.scss":
  /*!****************************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/authentication.scss ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesAuthenticationScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/chat.scss":
  /*!******************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/chat.scss ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesChatScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/clients.scss":
  /*!*********************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/clients.scss ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesClientsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/contacts.scss":
  /*!**********************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/contacts.scss ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesContactsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/file-manager.scss":
  /*!**************************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/file-manager.scss ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesFileManagerScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/messages.scss":
  /*!**********************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/messages.scss ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesMessagesScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/products.scss":
  /*!**********************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/products.scss ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesProductsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/projects.scss":
  /*!**********************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/projects.scss ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesProjectsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/search.scss":
  /*!********************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/search.scss ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesSearchScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/tasks.scss":
  /*!*******************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/tasks.scss ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesTasksScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/tickets.scss":
  /*!*********************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/tickets.scss ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesTicketsScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/pages/users.scss":
  /*!*******************************************************!*\
    !*** ./resources/assets/vendor/sass/pages/users.scss ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassPagesUsersScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/theme-corporate.scss":
  /*!***********************************************************!*\
    !*** ./resources/assets/vendor/sass/theme-corporate.scss ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassThemeCorporateScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./resources/assets/vendor/sass/uikit.scss":
  /*!*************************************************!*\
    !*** ./resources/assets/vendor/sass/uikit.scss ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function resourcesAssetsVendorSassUikitScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  0:
  /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** multi ./resources/assets/vendor/js/bootstrap.js ./resources/assets/vendor/sass/bootstrap.scss ./resources/assets/vendor/sass/appwork.scss ./resources/assets/vendor/sass/theme-corporate.scss ./resources/assets/vendor/sass/colors.scss ./resources/assets/vendor/sass/uikit.scss ./resources/assets/vendor/libs/animate-css/animate.scss ./resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss ./resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss ./resources/assets/vendor/libs/blueimp-gallery/gallery.scss ./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss ./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss ./resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss ./resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss ./resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss ./resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss ./resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss ./resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss ./resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss ./resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/cell-input/cell-input.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss ./resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss ./resources/assets/vendor/libs/c3/c3.scss ./resources/assets/vendor/libs/chartist/chartist.scss ./resources/assets/vendor/libs/cropper/cropper.scss ./resources/assets/vendor/libs/datatables/datatables.scss ./resources/assets/vendor/libs/dragula/dragula.scss ./resources/assets/vendor/libs/dropzone/dropzone.scss ./resources/assets/vendor/libs/flatpickr/flatpickr.scss ./resources/assets/vendor/libs/flot/flot.scss ./resources/assets/vendor/libs/flow-js/flow.scss ./resources/assets/vendor/libs/fullcalendar/fullcalendar.scss ./resources/assets/vendor/libs/growl/growl.scss ./resources/assets/vendor/libs/jstree/themes/default-dark/style.scss ./resources/assets/vendor/libs/jstree/themes/default/style.scss ./resources/assets/vendor/libs/ladda/ladda.scss ./resources/assets/vendor/libs/minicolors/minicolors.scss ./resources/assets/vendor/libs/morris/morris.scss ./resources/assets/vendor/libs/nestable/nestable.scss ./resources/assets/vendor/libs/nouislider/nouislider.scss ./resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss ./resources/assets/vendor/libs/photoswipe/photoswipe.scss ./resources/assets/vendor/libs/plyr/plyr.scss ./resources/assets/vendor/libs/quill/editor.scss ./resources/assets/vendor/libs/quill/typography.scss ./resources/assets/vendor/libs/select2/select2.scss ./resources/assets/vendor/libs/shepherd/shepherd.scss ./resources/assets/vendor/libs/smartwizard/smartwizard.scss ./resources/assets/vendor/libs/spinkit/spinkit.scss ./resources/assets/vendor/libs/sweetalert2/sweetalert2.scss ./resources/assets/vendor/libs/swiper/swiper.scss ./resources/assets/vendor/libs/timepicker/timepicker.scss ./resources/assets/vendor/libs/toastr/toastr.scss ./resources/assets/vendor/libs/typeahead-js/typeahead.scss ./resources/assets/vendor/libs/vegas/vegas.scss ./resources/assets/vendor/sass/pages/account.scss ./resources/assets/vendor/sass/pages/authentication.scss ./resources/assets/vendor/sass/pages/chat.scss ./resources/assets/vendor/sass/pages/clients.scss ./resources/assets/vendor/sass/pages/contacts.scss ./resources/assets/vendor/sass/pages/file-manager.scss ./resources/assets/vendor/sass/pages/messages.scss ./resources/assets/vendor/sass/pages/products.scss ./resources/assets/vendor/sass/pages/projects.scss ./resources/assets/vendor/sass/pages/search.scss ./resources/assets/vendor/sass/pages/tasks.scss ./resources/assets/vendor/sass/pages/tickets.scss ./resources/assets/vendor/sass/pages/users.scss ./resources/assets/sass/application.scss ./resources/assets/css/application.css ./resources/assets/front/css/blog.css ***!
    \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\js\bootstrap.js */
    "./resources/assets/vendor/js/bootstrap.js");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\bootstrap.scss */
    "./resources/assets/vendor/sass/bootstrap.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\appwork.scss */
    "./resources/assets/vendor/sass/appwork.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\theme-corporate.scss */
    "./resources/assets/vendor/sass/theme-corporate.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\colors.scss */
    "./resources/assets/vendor/sass/colors.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\uikit.scss */
    "./resources/assets/vendor/sass/uikit.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\animate-css\animate.scss */
    "./resources/assets/vendor/libs/animate-css/animate.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\blueimp-gallery\gallery-indicator.scss */
    "./resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\blueimp-gallery\gallery-video.scss */
    "./resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\blueimp-gallery\gallery.scss */
    "./resources/assets/vendor/libs/blueimp-gallery/gallery.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-datepicker\bootstrap-datepicker.scss */
    "./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-daterangepicker\bootstrap-daterangepicker.scss */
    "./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-duallistbox\bootstrap-duallistbox.scss */
    "./resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-markdown\bootstrap-markdown.scss */
    "./resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-material-datetimepicker\bootstrap-material-datetimepicker.scss */
    "./resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-maxlength\bootstrap-maxlength.scss */
    "./resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-select\bootstrap-select.scss */
    "./resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-slider\bootstrap-slider.scss */
    "./resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-sortable\bootstrap-sortable.scss */
    "./resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-table\bootstrap-table.scss */
    "./resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-table\extensions\cell-input\cell-input.scss */
    "./resources/assets/vendor/libs/bootstrap-table/extensions/cell-input/cell-input.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-table\extensions\filter-control\filter-control.scss */
    "./resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-table\extensions\fixed-columns\fixed-columns.scss */
    "./resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-table\extensions\group-by-v2\group-by-v2.scss */
    "./resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-table\extensions\page-jump-to\page-jump-to.scss */
    "./resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-table\extensions\reorder-rows\reorder-rows.scss */
    "./resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-table\extensions\sticky-header\sticky-header.scss */
    "./resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\bootstrap-tagsinput\bootstrap-tagsinput.scss */
    "./resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\c3\c3.scss */
    "./resources/assets/vendor/libs/c3/c3.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\chartist\chartist.scss */
    "./resources/assets/vendor/libs/chartist/chartist.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\cropper\cropper.scss */
    "./resources/assets/vendor/libs/cropper/cropper.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\datatables\datatables.scss */
    "./resources/assets/vendor/libs/datatables/datatables.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\dragula\dragula.scss */
    "./resources/assets/vendor/libs/dragula/dragula.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\dropzone\dropzone.scss */
    "./resources/assets/vendor/libs/dropzone/dropzone.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\flatpickr\flatpickr.scss */
    "./resources/assets/vendor/libs/flatpickr/flatpickr.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\flot\flot.scss */
    "./resources/assets/vendor/libs/flot/flot.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\flow-js\flow.scss */
    "./resources/assets/vendor/libs/flow-js/flow.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\fullcalendar\fullcalendar.scss */
    "./resources/assets/vendor/libs/fullcalendar/fullcalendar.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\growl\growl.scss */
    "./resources/assets/vendor/libs/growl/growl.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\jstree\themes\default-dark\style.scss */
    "./resources/assets/vendor/libs/jstree/themes/default-dark/style.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\jstree\themes\default\style.scss */
    "./resources/assets/vendor/libs/jstree/themes/default/style.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\ladda\ladda.scss */
    "./resources/assets/vendor/libs/ladda/ladda.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\minicolors\minicolors.scss */
    "./resources/assets/vendor/libs/minicolors/minicolors.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\morris\morris.scss */
    "./resources/assets/vendor/libs/morris/morris.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\nestable\nestable.scss */
    "./resources/assets/vendor/libs/nestable/nestable.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\nouislider\nouislider.scss */
    "./resources/assets/vendor/libs/nouislider/nouislider.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\perfect-scrollbar\perfect-scrollbar.scss */
    "./resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\photoswipe\photoswipe.scss */
    "./resources/assets/vendor/libs/photoswipe/photoswipe.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\plyr\plyr.scss */
    "./resources/assets/vendor/libs/plyr/plyr.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\quill\editor.scss */
    "./resources/assets/vendor/libs/quill/editor.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\quill\typography.scss */
    "./resources/assets/vendor/libs/quill/typography.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\select2\select2.scss */
    "./resources/assets/vendor/libs/select2/select2.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\shepherd\shepherd.scss */
    "./resources/assets/vendor/libs/shepherd/shepherd.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\smartwizard\smartwizard.scss */
    "./resources/assets/vendor/libs/smartwizard/smartwizard.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\spinkit\spinkit.scss */
    "./resources/assets/vendor/libs/spinkit/spinkit.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\sweetalert2\sweetalert2.scss */
    "./resources/assets/vendor/libs/sweetalert2/sweetalert2.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\swiper\swiper.scss */
    "./resources/assets/vendor/libs/swiper/swiper.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\timepicker\timepicker.scss */
    "./resources/assets/vendor/libs/timepicker/timepicker.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\toastr\toastr.scss */
    "./resources/assets/vendor/libs/toastr/toastr.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\typeahead-js\typeahead.scss */
    "./resources/assets/vendor/libs/typeahead-js/typeahead.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\vegas\vegas.scss */
    "./resources/assets/vendor/libs/vegas/vegas.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\account.scss */
    "./resources/assets/vendor/sass/pages/account.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\authentication.scss */
    "./resources/assets/vendor/sass/pages/authentication.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\chat.scss */
    "./resources/assets/vendor/sass/pages/chat.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\clients.scss */
    "./resources/assets/vendor/sass/pages/clients.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\contacts.scss */
    "./resources/assets/vendor/sass/pages/contacts.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\file-manager.scss */
    "./resources/assets/vendor/sass/pages/file-manager.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\messages.scss */
    "./resources/assets/vendor/sass/pages/messages.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\products.scss */
    "./resources/assets/vendor/sass/pages/products.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\projects.scss */
    "./resources/assets/vendor/sass/pages/projects.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\search.scss */
    "./resources/assets/vendor/sass/pages/search.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\tasks.scss */
    "./resources/assets/vendor/sass/pages/tasks.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\tickets.scss */
    "./resources/assets/vendor/sass/pages/tickets.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\sass\pages\users.scss */
    "./resources/assets/vendor/sass/pages/users.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\sass\application.scss */
    "./resources/assets/sass/application.scss");

    __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\css\application.css */
    "./resources/assets/css/application.css");

    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\front\css\blog.css */
    "./resources/assets/front/css/blog.css");
    /***/
  },

  /***/
  "jquery":
  /*!*************************!*\
    !*** external "jQuery" ***!
    \*************************/

  /*! no static exports found */

  /***/
  function jquery(module, exports) {
    (function () {
      module.exports = window["jQuery"];
    })();
    /***/

  },

  /***/
  "popper.js":
  /*!*************************!*\
    !*** external "Popper" ***!
    \*************************/

  /*! no static exports found */

  /***/
  function popperJs(module, exports) {
    (function () {
      module.exports = window["Popper"];
    })();
    /***/

  }
  /******/

}));

/***/ }),

/***/ "./resources/assets/libs/popper/popper.js":
/*!************************************************!*\
  !*** ./resources/assets/libs/popper/popper.js ***!
  \************************************************/
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

  return __webpack_require__(__webpack_require__.s = 98);
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/popper.js/dist/popper.js":
  /*!***********************************************!*\
    !*** ./node_modules/popper.js/dist/popper.js ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function node_modulesPopperJsDistPopperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */


    (function (global) {
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
      /**!
       * @fileOverview Kickass library to create and place poppers near their reference elements.
       * @version 1.16.1
       * @license
       * Copyright (c) 2016 Federico Zivolo and contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */


      var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

      var timeoutDuration = function () {
        var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

        for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
          if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
            return 1;
          }
        }

        return 0;
      }();

      function microtaskDebounce(fn) {
        var called = false;
        return function () {
          if (called) {
            return;
          }

          called = true;
          window.Promise.resolve().then(function () {
            called = false;
            fn();
          });
        };
      }

      function taskDebounce(fn) {
        var scheduled = false;
        return function () {
          if (!scheduled) {
            scheduled = true;
            setTimeout(function () {
              scheduled = false;
              fn();
            }, timeoutDuration);
          }
        };
      }

      var supportsMicroTasks = isBrowser && window.Promise;
      /**
      * Create a debounced version of a method, that's asynchronously deferred
      * but called in the minimum time possible.
      *
      * @method
      * @memberof Popper.Utils
      * @argument {Function} fn
      * @returns {Function}
      */

      var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
      /**
       * Check if the given variable is a function
       * @method
       * @memberof Popper.Utils
       * @argument {Any} functionToCheck - variable to check
       * @returns {Boolean} answer to: is a function?
       */

      function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
      }
      /**
       * Get CSS computed property of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Eement} element
       * @argument {String} property
       */


      function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
          return [];
        } // NOTE: 1 DOM access here


        var window = element.ownerDocument.defaultView;
        var css = window.getComputedStyle(element, null);
        return property ? css[property] : css;
      }
      /**
       * Returns the parentNode or the host of the element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} parent
       */


      function getParentNode(element) {
        if (element.nodeName === 'HTML') {
          return element;
        }

        return element.parentNode || element.host;
      }
      /**
       * Returns the scrolling parent of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} scroll parent
       */


      function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
          return document.body;
        }

        switch (element.nodeName) {
          case 'HTML':
          case 'BODY':
            return element.ownerDocument.body;

          case '#document':
            return element.body;
        } // Firefox want us to check `-x` and `-y` variations as well


        var _getStyleComputedProp = getStyleComputedProperty(element),
            overflow = _getStyleComputedProp.overflow,
            overflowX = _getStyleComputedProp.overflowX,
            overflowY = _getStyleComputedProp.overflowY;

        if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
          return element;
        }

        return getScrollParent(getParentNode(element));
      }
      /**
       * Returns the reference node of the reference object, or the reference object itself.
       * @method
       * @memberof Popper.Utils
       * @param {Element|Object} reference - the reference element (the popper will be relative to this)
       * @returns {Element} parent
       */


      function getReferenceNode(reference) {
        return reference && reference.referenceNode ? reference.referenceNode : reference;
      }

      var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
      var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
      /**
       * Determines if the browser is Internet Explorer
       * @method
       * @memberof Popper.Utils
       * @param {Number} version to check
       * @returns {Boolean} isIE
       */

      function isIE(version) {
        if (version === 11) {
          return isIE11;
        }

        if (version === 10) {
          return isIE10;
        }

        return isIE11 || isIE10;
      }
      /**
       * Returns the offset parent of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} offset parent
       */


      function getOffsetParent(element) {
        if (!element) {
          return document.documentElement;
        }

        var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

        var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

        while (offsetParent === noOffsetParent && element.nextElementSibling) {
          offsetParent = (element = element.nextElementSibling).offsetParent;
        }

        var nodeName = offsetParent && offsetParent.nodeName;

        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
          return element ? element.ownerDocument.documentElement : document.documentElement;
        } // .offsetParent will return the closest TH, TD or TABLE in case
        // no offsetParent is present, I hate this job...


        if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
          return getOffsetParent(offsetParent);
        }

        return offsetParent;
      }

      function isOffsetContainer(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY') {
          return false;
        }

        return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
      }
      /**
       * Finds the root node (document, shadowDOM root) of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} node
       * @returns {Element} root node
       */


      function getRoot(node) {
        if (node.parentNode !== null) {
          return getRoot(node.parentNode);
        }

        return node;
      }
      /**
       * Finds the offset parent common to the two provided nodes
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element1
       * @argument {Element} element2
       * @returns {Element} common offset parent
       */


      function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
          return document.documentElement;
        } // Here we make sure to give as "start" the element that comes first in the DOM


        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        var start = order ? element1 : element2;
        var end = order ? element2 : element1; // Get common ancestor container

        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

        if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
          if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
          }

          return getOffsetParent(commonAncestorContainer);
        } // one of the nodes is inside shadowDOM, find which one


        var element1root = getRoot(element1);

        if (element1root.host) {
          return findCommonOffsetParent(element1root.host, element2);
        } else {
          return findCommonOffsetParent(element1, getRoot(element2).host);
        }
      }
      /**
       * Gets the scroll value of the given element in the given side (top and left)
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @argument {String} side `top` or `left`
       * @returns {number} amount of scrolled pixels
       */


      function getScroll(element) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          var html = element.ownerDocument.documentElement;
          var scrollingElement = element.ownerDocument.scrollingElement || html;
          return scrollingElement[upperSide];
        }

        return element[upperSide];
      }
      /*
       * Sum or subtract the element scroll values (left and top) from a given rect object
       * @method
       * @memberof Popper.Utils
       * @param {Object} rect - Rect object you want to change
       * @param {HTMLElement} element - The element from the function reads the scroll values
       * @param {Boolean} subtract - set to true if you want to subtract the scroll values
       * @return {Object} rect - The modifier rect object
       */


      function includeScroll(rect, element) {
        var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
      }
      /*
       * Helper to detect borders of a given element
       * @method
       * @memberof Popper.Utils
       * @param {CSSStyleDeclaration} styles
       * Result of `getStyleComputedProperty` on the given element
       * @param {String} axis - `x` or `y`
       * @return {number} borders - The borders size of the given axis
       */


      function getBordersSize(styles, axis) {
        var sideA = axis === 'x' ? 'Left' : 'Top';
        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
        return parseFloat(styles["border".concat(sideA, "Width")]) + parseFloat(styles["border".concat(sideB, "Width")]);
      }

      function getSize(axis, body, html, computedStyle) {
        return Math.max(body["offset".concat(axis)], body["scroll".concat(axis)], html["client".concat(axis)], html["offset".concat(axis)], html["scroll".concat(axis)], isIE(10) ? parseInt(html["offset".concat(axis)]) + parseInt(computedStyle["margin".concat(axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle["margin".concat(axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
      }

      function getWindowSizes(document) {
        var body = document.body;
        var html = document.documentElement;
        var computedStyle = isIE(10) && getComputedStyle(html);
        return {
          height: getSize('Height', body, html, computedStyle),
          width: getSize('Width', body, html, computedStyle)
        };
      }

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };
      /**
       * Given element offsets, generate an output similar to getBoundingClientRect
       * @method
       * @memberof Popper.Utils
       * @argument {Object} offsets
       * @returns {Object} ClientRect like output
       */


      function getClientRect(offsets) {
        return _extends({}, offsets, {
          right: offsets.left + offsets.width,
          bottom: offsets.top + offsets.height
        });
      }
      /**
       * Get bounding client rect of given element
       * @method
       * @memberof Popper.Utils
       * @param {HTMLElement} element
       * @return {Object} client rect
       */


      function getBoundingClientRect(element) {
        var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11

        try {
          if (isIE(10)) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
          } else {
            rect = element.getBoundingClientRect();
          }
        } catch (e) {}

        var result = {
          left: rect.left,
          top: rect.top,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        }; // subtract scrollbar size from sizes

        var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
        var width = sizes.width || element.clientWidth || result.width;
        var height = sizes.height || element.clientHeight || result.height;
        var horizScrollbar = element.offsetWidth - width;
        var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons

        if (horizScrollbar || vertScrollbar) {
          var styles = getStyleComputedProperty(element);
          horizScrollbar -= getBordersSize(styles, 'x');
          vertScrollbar -= getBordersSize(styles, 'y');
          result.width -= horizScrollbar;
          result.height -= vertScrollbar;
        }

        return getClientRect(result);
      }

      function getOffsetRectRelativeToArbitraryNode(children, parent) {
        var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isIE10 = isIE(10);
        var isHTML = parent.nodeName === 'HTML';
        var childrenRect = getBoundingClientRect(children);
        var parentRect = getBoundingClientRect(parent);
        var scrollParent = getScrollParent(children);
        var styles = getStyleComputedProperty(parent);
        var borderTopWidth = parseFloat(styles.borderTopWidth);
        var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

        if (fixedPosition && isHTML) {
          parentRect.top = Math.max(parentRect.top, 0);
          parentRect.left = Math.max(parentRect.left, 0);
        }

        var offsets = getClientRect({
          top: childrenRect.top - parentRect.top - borderTopWidth,
          left: childrenRect.left - parentRect.left - borderLeftWidth,
          width: childrenRect.width,
          height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.

        if (!isIE10 && isHTML) {
          var marginTop = parseFloat(styles.marginTop);
          var marginLeft = parseFloat(styles.marginLeft);
          offsets.top -= borderTopWidth - marginTop;
          offsets.bottom -= borderTopWidth - marginTop;
          offsets.left -= borderLeftWidth - marginLeft;
          offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

          offsets.marginTop = marginTop;
          offsets.marginLeft = marginLeft;
        }

        if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
          offsets = includeScroll(offsets, parent);
        }

        return offsets;
      }

      function getViewportOffsetRectRelativeToArtbitraryNode(element) {
        var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var html = element.ownerDocument.documentElement;
        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        var height = Math.max(html.clientHeight, window.innerHeight || 0);
        var scrollTop = !excludeScroll ? getScroll(html) : 0;
        var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
        var offset = {
          top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
          left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
          width: width,
          height: height
        };
        return getClientRect(offset);
      }
      /**
       * Check if the given element is fixed or is inside a fixed parent
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @argument {Element} customContainer
       * @returns {Boolean} answer to "isFixed?"
       */


      function isFixed(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          return false;
        }

        if (getStyleComputedProperty(element, 'position') === 'fixed') {
          return true;
        }

        var parentNode = getParentNode(element);

        if (!parentNode) {
          return false;
        }

        return isFixed(parentNode);
      }
      /**
       * Finds the first parent of an element that has a transformed property defined
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} first transformed parent or documentElement
       */


      function getFixedPositionOffsetParent(element) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element || !element.parentElement || isIE()) {
          return document.documentElement;
        }

        var el = element.parentElement;

        while (el && getStyleComputedProperty(el, 'transform') === 'none') {
          el = el.parentElement;
        }

        return el || document.documentElement;
      }
      /**
       * Computed the boundaries limits and return them
       * @method
       * @memberof Popper.Utils
       * @param {HTMLElement} popper
       * @param {HTMLElement} reference
       * @param {number} padding
       * @param {HTMLElement} boundariesElement - Element used to define the boundaries
       * @param {Boolean} fixedPosition - Is in fixed position mode
       * @returns {Object} Coordinates of the boundaries
       */


      function getBoundaries(popper, reference, padding, boundariesElement) {
        var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

        var boundaries = {
          top: 0,
          left: 0
        };
        var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

        if (boundariesElement === 'viewport') {
          boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        } else {
          // Handle other cases based on DOM element used as boundaries
          var boundariesNode;

          if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));

            if (boundariesNode.nodeName === 'BODY') {
              boundariesNode = popper.ownerDocument.documentElement;
            }
          } else if (boundariesElement === 'window') {
            boundariesNode = popper.ownerDocument.documentElement;
          } else {
            boundariesNode = boundariesElement;
          }

          var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

          if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(popper.ownerDocument),
                height = _getWindowSizes.height,
                width = _getWindowSizes.width;

            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
          } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
          }
        } // Add paddings


        padding = padding || 0;
        var isPaddingNumber = typeof padding === 'number';
        boundaries.left += isPaddingNumber ? padding : padding.left || 0;
        boundaries.top += isPaddingNumber ? padding : padding.top || 0;
        boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
        boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
        return boundaries;
      }

      function getArea(_ref) {
        var width = _ref.width,
            height = _ref.height;
        return width * height;
      }
      /**
       * Utility used to transform the `auto` placement to the placement with more
       * available space.
       * @method
       * @memberof Popper.Utils
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
        var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (placement.indexOf('auto') === -1) {
          return placement;
        }

        var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
        var rects = {
          top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
          },
          right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
          },
          bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
          },
          left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
          }
        };
        var sortedAreas = Object.keys(rects).map(function (key) {
          return _extends({
            key: key
          }, rects[key], {
            area: getArea(rects[key])
          });
        }).sort(function (a, b) {
          return b.area - a.area;
        });
        var filteredAreas = sortedAreas.filter(function (_ref2) {
          var width = _ref2.width,
              height = _ref2.height;
          return width >= popper.clientWidth && height >= popper.clientHeight;
        });
        var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
        var variation = placement.split('-')[1];
        return computedPlacement + (variation ? "-".concat(variation) : '');
      }
      /**
       * Get offsets to the reference element
       * @method
       * @memberof Popper.Utils
       * @param {Object} state
       * @param {Element} popper - the popper element
       * @param {Element} reference - the reference element (the popper will be relative to this)
       * @param {Element} fixedPosition - is in fixed position mode
       * @returns {Object} An object containing the offsets which will be applied to the popper
       */


      function getReferenceOffsets(state, popper, reference) {
        var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
        return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
      }
      /**
       * Get the outer sizes of the given element (offset size + margins)
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Object} object containing width and height properties
       */


      function getOuterSizes(element) {
        var window = element.ownerDocument.defaultView;
        var styles = window.getComputedStyle(element);
        var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
        var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
        var result = {
          width: element.offsetWidth + y,
          height: element.offsetHeight + x
        };
        return result;
      }
      /**
       * Get the opposite placement of the given one
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement
       * @returns {String} flipped placement
       */


      function getOppositePlacement(placement) {
        var hash = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
          return hash[matched];
        });
      }
      /**
       * Get offsets to the popper
       * @method
       * @memberof Popper.Utils
       * @param {Object} position - CSS position the Popper will get applied
       * @param {HTMLElement} popper - the popper element
       * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
       * @param {String} placement - one of the valid placement options
       * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
       */


      function getPopperOffsets(popper, referenceOffsets, placement) {
        placement = placement.split('-')[0]; // Get popper node sizes

        var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

        var popperOffsets = {
          width: popperRect.width,
          height: popperRect.height
        }; // depending by the popper placement we have to compute its offsets slightly differently

        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        var mainSide = isHoriz ? 'top' : 'left';
        var secondarySide = isHoriz ? 'left' : 'top';
        var measurement = isHoriz ? 'height' : 'width';
        var secondaryMeasurement = !isHoriz ? 'height' : 'width';
        popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

        if (placement === secondarySide) {
          popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
        } else {
          popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
        }

        return popperOffsets;
      }
      /**
       * Mimics the `find` method of Array
       * @method
       * @memberof Popper.Utils
       * @argument {Array} arr
       * @argument prop
       * @argument value
       * @returns index or -1
       */


      function find(arr, check) {
        // use native find if supported
        if (Array.prototype.find) {
          return arr.find(check);
        } // use `filter` to obtain the same behavior of `find`


        return arr.filter(check)[0];
      }
      /**
       * Return the index of the matching object
       * @method
       * @memberof Popper.Utils
       * @argument {Array} arr
       * @argument prop
       * @argument value
       * @returns index or -1
       */


      function findIndex(arr, prop, value) {
        // use native findIndex if supported
        if (Array.prototype.findIndex) {
          return arr.findIndex(function (cur) {
            return cur[prop] === value;
          });
        } // use `find` + `indexOf` if `findIndex` isn't supported


        var match = find(arr, function (obj) {
          return obj[prop] === value;
        });
        return arr.indexOf(match);
      }
      /**
       * Loop trough the list of modifiers and run them in order,
       * each of them will then edit the data object.
       * @method
       * @memberof Popper.Utils
       * @param {dataObject} data
       * @param {Array} modifiers
       * @param {String} ends - Optional modifier name used as stopper
       * @returns {dataObject}
       */


      function runModifiers(modifiers, data, ends) {
        var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
        modifiersToRun.forEach(function (modifier) {
          if (modifier['function']) {
            // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          }

          var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

          if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
          }
        });
        return data;
      }
      /**
       * Updates the position of the popper, computing the new offsets and applying
       * the new style.<br />
       * Prefer `scheduleUpdate` over `update` because of performance reasons.
       * @method
       * @memberof Popper
       */


      function _update() {
        // if popper is destroyed, don't perform any further update
        if (this.state.isDestroyed) {
          return;
        }

        var data = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: false,
          offsets: {}
        }; // compute reference element offsets

        data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value

        data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

        data.originalPlacement = data.placement;
        data.positionFixed = this.options.positionFixed; // compute the popper offsets

        data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
        data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

        data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
        // the other ones will call `onUpdate` callback

        if (!this.state.isCreated) {
          this.state.isCreated = true;
          this.options.onCreate(data);
        } else {
          this.options.onUpdate(data);
        }
      }
      /**
       * Helper used to know if the given modifier is enabled.
       * @method
       * @memberof Popper.Utils
       * @returns {Boolean}
       */


      function isModifierEnabled(modifiers, modifierName) {
        return modifiers.some(function (_ref3) {
          var name = _ref3.name,
              enabled = _ref3.enabled;
          return enabled && name === modifierName;
        });
      }
      /**
       * Get the prefixed supported property name
       * @method
       * @memberof Popper.Utils
       * @argument {String} property (camelCase)
       * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
       */


      function getSupportedPropertyName(property) {
        var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
        var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

        for (var i = 0; i < prefixes.length; i++) {
          var prefix = prefixes[i];
          var toCheck = prefix ? "".concat(prefix).concat(upperProp) : property;

          if (typeof document.body.style[toCheck] !== 'undefined') {
            return toCheck;
          }
        }

        return null;
      }
      /**
       * Destroys the popper.
       * @method
       * @memberof Popper
       */


      function _destroy() {
        this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

        if (isModifierEnabled(this.modifiers, 'applyStyle')) {
          this.popper.removeAttribute('x-placement');
          this.popper.style.position = '';
          this.popper.style.top = '';
          this.popper.style.left = '';
          this.popper.style.right = '';
          this.popper.style.bottom = '';
          this.popper.style.willChange = '';
          this.popper.style[getSupportedPropertyName('transform')] = '';
        }

        this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
        // do not use `remove` because IE11 doesn't support it

        if (this.options.removeOnDestroy) {
          this.popper.parentNode.removeChild(this.popper);
        }

        return this;
      }
      /**
       * Get the window associated with the element
       * @argument {Element} element
       * @returns {Window}
       */


      function getWindow(element) {
        var ownerDocument = element.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView : window;
      }

      function attachToScrollParents(scrollParent, event, callback, scrollParents) {
        var isBody = scrollParent.nodeName === 'BODY';
        var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
        target.addEventListener(event, callback, {
          passive: true
        });

        if (!isBody) {
          attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
        }

        scrollParents.push(target);
      }
      /**
       * Setup needed event listeners used to update the popper position
       * @method
       * @memberof Popper.Utils
       * @private
       */


      function setupEventListeners(reference, options, state, updateBound) {
        // Resize event listener on window
        state.updateBound = updateBound;
        getWindow(reference).addEventListener('resize', state.updateBound, {
          passive: true
        }); // Scroll event listener on scroll parents

        var scrollElement = getScrollParent(reference);
        attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
        state.scrollElement = scrollElement;
        state.eventsEnabled = true;
        return state;
      }
      /**
       * It will add resize/scroll events and start recalculating
       * position of the popper element when they are triggered.
       * @method
       * @memberof Popper
       */


      function _enableEventListeners() {
        if (!this.state.eventsEnabled) {
          this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
        }
      }
      /**
       * Remove event listeners used to update the popper position
       * @method
       * @memberof Popper.Utils
       * @private
       */


      function removeEventListeners(reference, state) {
        // Remove resize event listener on window
        getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

        state.scrollParents.forEach(function (target) {
          target.removeEventListener('scroll', state.updateBound);
        }); // Reset state

        state.updateBound = null;
        state.scrollParents = [];
        state.scrollElement = null;
        state.eventsEnabled = false;
        return state;
      }
      /**
       * It will remove resize/scroll events and won't recalculate popper position
       * when they are triggered. It also won't trigger `onUpdate` callback anymore,
       * unless you call `update` method manually.
       * @method
       * @memberof Popper
       */


      function _disableEventListeners() {
        if (this.state.eventsEnabled) {
          cancelAnimationFrame(this.scheduleUpdate);
          this.state = removeEventListeners(this.reference, this.state);
        }
      }
      /**
       * Tells if a given input is a number
       * @method
       * @memberof Popper.Utils
       * @param {*} input to check
       * @return {Boolean}
       */


      function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
      }
      /**
       * Set the style to the given popper
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element - Element to apply the style to
       * @argument {Object} styles
       * Object with a list of properties and values which will be applied to the element
       */


      function setStyles(element, styles) {
        Object.keys(styles).forEach(function (prop) {
          var unit = ''; // add unit if the value is numeric and is one of the following

          if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
          }

          element.style[prop] = styles[prop] + unit;
        });
      }
      /**
       * Set the attributes to the given popper
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element - Element to apply the attributes to
       * @argument {Object} styles
       * Object with a list of properties and values which will be applied to the element
       */


      function setAttributes(element, attributes) {
        Object.keys(attributes).forEach(function (prop) {
          var value = attributes[prop];

          if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
          } else {
            element.removeAttribute(prop);
          }
        });
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} data.styles - List of style properties - values to apply to popper element
       * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The same data object
       */


      function applyStyle(data) {
        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
        // they will be set as HTML attributes of the element

        setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

        if (data.arrowElement && Object.keys(data.arrowStyles).length) {
          setStyles(data.arrowElement, data.arrowStyles);
        }

        return data;
      }
      /**
       * Set the x-placement attribute before everything else because it could be used
       * to add margins to the popper margins needs to be calculated to get the
       * correct popper offsets.
       * @method
       * @memberof Popper.modifiers
       * @param {HTMLElement} reference - The reference element used to position the popper
       * @param {HTMLElement} popper - The HTML element used as popper
       * @param {Object} options - Popper.js options
       */


      function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
        // compute reference element offsets
        var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value

        var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
        popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
        // without the position applied we can't guarantee correct computations

        setStyles(popper, {
          position: options.positionFixed ? 'fixed' : 'absolute'
        });
        return options;
      }
      /**
       * @function
       * @memberof Popper.Utils
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Boolean} shouldRound - If the offsets should be rounded at all
       * @returns {Object} The popper's position offsets rounded
       *
       * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
       * good as it can be within reason.
       * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
       *
       * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
       * as well on High DPI screens).
       *
       * Firefox prefers no rounding for positioning and does not have blurriness on
       * high DPI screens.
       *
       * Only horizontal placement and left/right values need to be considered.
       */


      function getRoundedOffsets(data, shouldRound) {
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;
        var round = Math.round,
            floor = Math.floor;

        var noRound = function noRound(v) {
          return v;
        };

        var referenceWidth = round(reference.width);
        var popperWidth = round(popper.width);
        var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
        var isVariation = data.placement.indexOf('-') !== -1;
        var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
        var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
        var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
        var verticalToInteger = !shouldRound ? noRound : round;
        return {
          left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
          top: verticalToInteger(popper.top),
          bottom: verticalToInteger(popper.bottom),
          right: horizontalToInteger(popper.right)
        };
      }

      var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */

      function computeStyle(data, options) {
        var x = options.x,
            y = options.y;
        var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

        var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
          return modifier.name === 'applyStyle';
        }).gpuAcceleration;

        if (legacyGpuAccelerationOption !== undefined) {
          console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
        }

        var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
        var offsetParent = getOffsetParent(data.instance.popper);
        var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

        var styles = {
          position: popper.position
        };
        var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
        var sideA = x === 'bottom' ? 'top' : 'bottom';
        var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
        //  we use `translate3d` to apply the position to the popper we
        // automatically use the supported prefixed version if needed

        var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
        // If the content of the popper grows once it's been positioned, it
        // may happen that the popper gets misplaced because of the new content
        // overflowing its reference element
        // To avoid this problem, we provide two options (x and y), which allow
        // the consumer to define the offset origin.
        // If we position a popper on top of a reference element, we can set
        // `x` to `top` to make the popper grow towards its top instead of
        // its bottom.

        var left, top;

        if (sideA === 'bottom') {
          // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
          // and not the bottom of the html element
          if (offsetParent.nodeName === 'HTML') {
            top = -offsetParent.clientHeight + offsets.bottom;
          } else {
            top = -offsetParentRect.height + offsets.bottom;
          }
        } else {
          top = offsets.top;
        }

        if (sideB === 'right') {
          if (offsetParent.nodeName === 'HTML') {
            left = -offsetParent.clientWidth + offsets.right;
          } else {
            left = -offsetParentRect.width + offsets.right;
          }
        } else {
          left = offsets.left;
        }

        if (gpuAcceleration && prefixedProperty) {
          styles[prefixedProperty] = "translate3d(".concat(left, "px, ").concat(top, "px, 0)");
          styles[sideA] = 0;
          styles[sideB] = 0;
          styles.willChange = 'transform';
        } else {
          // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
          var invertTop = sideA === 'bottom' ? -1 : 1;
          var invertLeft = sideB === 'right' ? -1 : 1;
          styles[sideA] = top * invertTop;
          styles[sideB] = left * invertLeft;
          styles.willChange = "".concat(sideA, ", ").concat(sideB);
        } // Attributes


        var attributes = {
          'x-placement': data.placement
        }; // Update `data` attributes, styles and arrowStyles

        data.attributes = _extends({}, attributes, data.attributes);
        data.styles = _extends({}, styles, data.styles);
        data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
        return data;
      }
      /**
       * Helper used to know if the given modifier depends from another one.<br />
       * It checks if the needed modifier is listed and enabled.
       * @method
       * @memberof Popper.Utils
       * @param {Array} modifiers - list of modifiers
       * @param {String} requestingName - name of requesting modifier
       * @param {String} requestedName - name of requested modifier
       * @returns {Boolean}
       */


      function isModifierRequired(modifiers, requestingName, requestedName) {
        var requesting = find(modifiers, function (_ref4) {
          var name = _ref4.name;
          return name === requestingName;
        });
        var isRequired = !!requesting && modifiers.some(function (modifier) {
          return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
        });

        if (!isRequired) {
          var _requesting = "`".concat(requestingName, "`");

          var requested = "`".concat(requestedName, "`");
          console.warn("".concat(requested, " modifier is required by ").concat(_requesting, " modifier in order to work, be sure to include it before ").concat(_requesting, "!"));
        }

        return isRequired;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function arrow(data, options) {
        var _data$offsets$arrow; // arrow depends on keepTogether in order to work


        if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
          return data;
        }

        var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

        if (typeof arrowElement === 'string') {
          arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

          if (!arrowElement) {
            return data;
          }
        } else {
          // if the arrowElement isn't a query selector we must check that the
          // provided DOM node is child of its popper node
          if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
          }
        }

        var placement = data.placement.split('-')[0];
        var _data$offsets2 = data.offsets,
            popper = _data$offsets2.popper,
            reference = _data$offsets2.reference;
        var isVertical = ['left', 'right'].indexOf(placement) !== -1;
        var len = isVertical ? 'height' : 'width';
        var sideCapitalized = isVertical ? 'Top' : 'Left';
        var side = sideCapitalized.toLowerCase();
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowElementSize = getOuterSizes(arrowElement)[len]; //
        // extends keepTogether behavior making sure the popper and its
        // reference have enough pixels in conjunction
        //
        // top/left side

        if (reference[opSide] - arrowElementSize < popper[side]) {
          data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
        } // bottom/right side


        if (reference[side] + arrowElementSize > popper[opSide]) {
          data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
        }

        data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

        var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
        // take popper margin in account because we don't have this info available

        var css = getStyleComputedProperty(data.instance.popper);
        var popperMarginSide = parseFloat(css["margin".concat(sideCapitalized)]);
        var popperBorderSide = parseFloat(css["border".concat(sideCapitalized, "Width")]);
        var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

        sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
        data.arrowElement = arrowElement;
        data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
        return data;
      }
      /**
       * Get the opposite placement variation of the given one
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement variation
       * @returns {String} flipped placement variation
       */


      function getOppositeVariation(variation) {
        if (variation === 'end') {
          return 'start';
        } else if (variation === 'start') {
          return 'end';
        }

        return variation;
      }
      /**
       * List of accepted placements to use as values of the `placement` option.<br />
       * Valid placements are:
       * - `auto`
       * - `top`
       * - `right`
       * - `bottom`
       * - `left`
       *
       * Each placement can have a variation from this list:
       * - `-start`
       * - `-end`
       *
       * Variations are interpreted easily if you think of them as the left to right
       * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
       * is right.<br />
       * Vertically (`left` and `right`), `start` is top and `end` is bottom.
       *
       * Some valid examples are:
       * - `top-end` (on top of reference, right aligned)
       * - `right-start` (on right of reference, top aligned)
       * - `bottom` (on bottom, centered)
       * - `auto-end` (on the side with more space available, alignment depends by placement)
       *
       * @static
       * @type {Array}
       * @enum {String}
       * @readonly
       * @method placements
       * @memberof Popper
       */


      var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

      var validPlacements = placements.slice(3);
      /**
       * Given an initial placement, returns all the subsequent placements
       * clockwise (or counter-clockwise).
       *
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement - A valid placement (it accepts variations)
       * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
       * @returns {Array} placements including their variations
       */

      function clockwise(placement) {
        var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var index = validPlacements.indexOf(placement);
        var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
        return counter ? arr.reverse() : arr;
      }

      var BEHAVIORS = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
      };
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */

      function flip(data, options) {
        // if `inner` modifier is enabled, we can't use the `flip` modifier
        if (isModifierEnabled(data.instance.modifiers, 'inner')) {
          return data;
        }

        if (data.flipped && data.placement === data.originalPlacement) {
          // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
          return data;
        }

        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';
        var flipOrder = [];

        switch (options.behavior) {
          case BEHAVIORS.FLIP:
            flipOrder = [placement, placementOpposite];
            break;

          case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;

          case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;

          default:
            flipOrder = options.behavior;
        }

        flipOrder.forEach(function (step, index) {
          if (placement !== step || flipOrder.length === index + 1) {
            return data;
          }

          placement = data.placement.split('-')[0];
          placementOpposite = getOppositePlacement(placement);
          var popperOffsets = data.offsets.popper;
          var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

          var floor = Math.floor;
          var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
          var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
          var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
          var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
          var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
          var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

          var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

          var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

          var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
          var flippedVariation = flippedVariationByRef || flippedVariationByContent;

          if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;

            if (overlapsRef || overflowsBoundaries) {
              placement = flipOrder[index + 1];
            }

            if (flippedVariation) {
              variation = getOppositeVariation(variation);
            }

            data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future

            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
            data = runModifiers(data.instance.modifiers, data, 'flip');
          }
        });
        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function keepTogether(data) {
        var _data$offsets3 = data.offsets,
            popper = _data$offsets3.popper,
            reference = _data$offsets3.reference;
        var placement = data.placement.split('-')[0];
        var floor = Math.floor;
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var side = isVertical ? 'right' : 'bottom';
        var opSide = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';

        if (popper[side] < floor(reference[opSide])) {
          data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
        }

        if (popper[opSide] > floor(reference[side])) {
          data.offsets.popper[opSide] = floor(reference[side]);
        }

        return data;
      }
      /**
       * Converts a string containing value + unit into a px value number
       * @function
       * @memberof {modifiers~offset}
       * @private
       * @argument {String} str - Value + unit string
       * @argument {String} measurement - `height` or `width`
       * @argument {Object} popperOffsets
       * @argument {Object} referenceOffsets
       * @returns {Number|String}
       * Value in pixels, or original string if no values were extracted
       */


      function toValue(str, measurement, popperOffsets, referenceOffsets) {
        // separate value from unit
        var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
        var value = +split[1];
        var unit = split[2]; // If it's not a number it's an operator, I guess

        if (!value) {
          return str;
        }

        if (unit.indexOf('%') === 0) {
          var element;

          switch (unit) {
            case '%p':
              element = popperOffsets;
              break;

            case '%':
            case '%r':
            default:
              element = referenceOffsets;
          }

          var rect = getClientRect(element);
          return rect[measurement] / 100 * value;
        } else if (unit === 'vh' || unit === 'vw') {
          // if is a vh or vw, we calculate the size based on the viewport
          var size;

          if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          } else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          }

          return size / 100 * value;
        } else {
          // if is an explicit pixel unit, we get rid of the unit and keep the value
          // if is an implicit unit, it's px, and we return just the value
          return value;
        }
      }
      /**
       * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
       * @function
       * @memberof {modifiers~offset}
       * @private
       * @argument {String} offset
       * @argument {Object} popperOffsets
       * @argument {Object} referenceOffsets
       * @argument {String} basePlacement
       * @returns {Array} a two cells array with x and y offsets in numbers
       */


      function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
        var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
        // in this way the first offset will use an axis and the second one
        // will use the other one

        var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
        // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

        var fragments = offset.split(/(\+|\-)/).map(function (frag) {
          return frag.trim();
        }); // Detect if the offset string contains a pair of values or a single one
        // they could be separated by comma or space

        var divider = fragments.indexOf(find(fragments, function (frag) {
          return frag.search(/,|\s/) !== -1;
        }));

        if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
          console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        } // If divider is found, we divide the list of values and operands to divide
        // them by ofset X and Y.


        var splitRegex = /\s*,\s*|\s+/;
        var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

        ops = ops.map(function (op, index) {
          // Most of the units rely on the orientation of the popper
          var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
          var mergeWithPrevious = false;
          return op // This aggregates any `+` or `-` sign that aren't considered operators
          // e.g.: 10 + +5 => [10, +, +5]
          .reduce(function (a, b) {
            if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
              a[a.length - 1] = b;
              mergeWithPrevious = true;
              return a;
            } else if (mergeWithPrevious) {
              a[a.length - 1] += b;
              mergeWithPrevious = false;
              return a;
            } else {
              return a.concat(b);
            }
          }, []) // Here we convert the string values into number values (in px)
          .map(function (str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
          });
        }); // Loop trough the offsets arrays and execute the operations

        ops.forEach(function (op, index) {
          op.forEach(function (frag, index2) {
            if (isNumeric(frag)) {
              offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
          });
        });
        return offsets;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @argument {Number|String} options.offset=0
       * The offset value as described in the modifier description
       * @returns {Object} The data object, properly modified
       */


      function offset(data, _ref5) {
        var offset = _ref5.offset;
        var placement = data.placement,
            _data$offsets4 = data.offsets,
            popper = _data$offsets4.popper,
            reference = _data$offsets4.reference;
        var basePlacement = placement.split('-')[0];
        var offsets;

        if (isNumeric(+offset)) {
          offsets = [+offset, 0];
        } else {
          offsets = parseOffset(offset, popper, reference, basePlacement);
        }

        if (basePlacement === 'left') {
          popper.top += offsets[0];
          popper.left -= offsets[1];
        } else if (basePlacement === 'right') {
          popper.top += offsets[0];
          popper.left += offsets[1];
        } else if (basePlacement === 'top') {
          popper.left += offsets[0];
          popper.top -= offsets[1];
        } else if (basePlacement === 'bottom') {
          popper.left += offsets[0];
          popper.top += offsets[1];
        }

        data.popper = popper;
        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function preventOverflow(data, options) {
        var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
        // go one step up and use the next offsetParent as reference to
        // avoid to make this modifier completely useless and look like broken

        if (data.instance.reference === boundariesElement) {
          boundariesElement = getOffsetParent(boundariesElement);
        } // NOTE: DOM access here
        // resets the popper's position so that the document size can be calculated excluding
        // the size of the popper element itself


        var transformProp = getSupportedPropertyName('transform');
        var popperStyles = data.instance.popper.style; // assignment to help minification

        var top = popperStyles.top,
            left = popperStyles.left,
            transform = popperStyles[transformProp];
        popperStyles.top = '';
        popperStyles.left = '';
        popperStyles[transformProp] = '';
        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
        // restores the original style properties after the offsets have been computed

        popperStyles.top = top;
        popperStyles.left = left;
        popperStyles[transformProp] = transform;
        options.boundaries = boundaries;
        var order = options.priority;
        var popper = data.offsets.popper;
        var check = {
          primary: function primary(placement) {
            var value = popper[placement];

            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
              value = Math.max(popper[placement], boundaries[placement]);
            }

            return _defineProperty({}, placement, value);
          },
          secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];

            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
              value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }

            return _defineProperty({}, mainSide, value);
          }
        };
        order.forEach(function (placement) {
          var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
          popper = _extends({}, popper, check[side](placement));
        });
        data.offsets.popper = popper;
        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function shift(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

        if (shiftvariation) {
          var _data$offsets5 = data.offsets,
              reference = _data$offsets5.reference,
              popper = _data$offsets5.popper;
          var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
          var side = isVertical ? 'left' : 'top';
          var measurement = isVertical ? 'width' : 'height';
          var shiftOffsets = {
            start: _defineProperty({}, side, reference[side]),
            end: _defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
          };
          data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
        }

        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function hide(data) {
        if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
          return data;
        }

        var refRect = data.offsets.reference;
        var bound = find(data.instance.modifiers, function (modifier) {
          return modifier.name === 'preventOverflow';
        }).boundaries;

        if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
          // Avoid unnecessary DOM access if visibility hasn't changed
          if (data.hide === true) {
            return data;
          }

          data.hide = true;
          data.attributes['x-out-of-boundaries'] = '';
        } else {
          // Avoid unnecessary DOM access if visibility hasn't changed
          if (data.hide === false) {
            return data;
          }

          data.hide = false;
          data.attributes['x-out-of-boundaries'] = false;
        }

        return data;
      }
      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */


      function inner(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var _data$offsets6 = data.offsets,
            popper = _data$offsets6.popper,
            reference = _data$offsets6.reference;
        var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
        var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
        popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
        data.placement = getOppositePlacement(placement);
        data.offsets.popper = getClientRect(popper);
        return data;
      }
      /**
       * Modifier function, each modifier can have a function of this type assigned
       * to its `fn` property.<br />
       * These functions will be called on each update, this means that you must
       * make sure they are performant enough to avoid performance bottlenecks.
       *
       * @function ModifierFn
       * @argument {dataObject} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {dataObject} The data object, properly modified
       */

      /**
       * Modifiers are plugins used to alter the behavior of your poppers.<br />
       * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
       * needed by the library.
       *
       * Usually you don't want to override the `order`, `fn` and `onLoad` props.
       * All the other properties are configurations that could be tweaked.
       * @namespace modifiers
       */


      var modifiers = {
        /**
         * Modifier used to shift the popper on the start or end of its reference
         * element.<br />
         * It will read the variation of the `placement` property.<br />
         * It can be one either `-end` or `-start`.
         * @memberof modifiers
         * @inner
         */
        shift: {
          /** @prop {number} order=100 - Index used to define the order of execution */
          order: 100,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: shift
        },

        /**
         * The `offset` modifier can shift your popper on both its axis.
         *
         * It accepts the following units:
         * - `px` or unit-less, interpreted as pixels
         * - `%` or `%r`, percentage relative to the length of the reference element
         * - `%p`, percentage relative to the length of the popper element
         * - `vw`, CSS viewport width unit
         * - `vh`, CSS viewport height unit
         *
         * For length is intended the main axis relative to the placement of the popper.<br />
         * This means that if the placement is `top` or `bottom`, the length will be the
         * `width`. In case of `left` or `right`, it will be the `height`.
         *
         * You can provide a single value (as `Number` or `String`), or a pair of values
         * as `String` divided by a comma or one (or more) white spaces.<br />
         * The latter is a deprecated method because it leads to confusion and will be
         * removed in v2.<br />
         * Additionally, it accepts additions and subtractions between different units.
         * Note that multiplications and divisions aren't supported.
         *
         * Valid examples are:
         * ```
         * 10
         * '10%'
         * '10, 10'
         * '10%, 10'
         * '10 + 10%'
         * '10 - 5vh + 3%'
         * '-10px + 5vh, 5px - 6%'
         * ```
         * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
         * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
         * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
         *
         * @memberof modifiers
         * @inner
         */
        offset: {
          /** @prop {number} order=200 - Index used to define the order of execution */
          order: 200,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: offset,

          /** @prop {Number|String} offset=0
           * The offset value as described in the modifier description
           */
          offset: 0
        },

        /**
         * Modifier used to prevent the popper from being positioned outside the boundary.
         *
         * A scenario exists where the reference itself is not within the boundaries.<br />
         * We can say it has "escaped the boundaries" — or just "escaped".<br />
         * In this case we need to decide whether the popper should either:
         *
         * - detach from the reference and remain "trapped" in the boundaries, or
         * - if it should ignore the boundary and "escape with its reference"
         *
         * When `escapeWithReference` is set to`true` and reference is completely
         * outside its boundaries, the popper will overflow (or completely leave)
         * the boundaries in order to remain attached to the edge of the reference.
         *
         * @memberof modifiers
         * @inner
         */
        preventOverflow: {
          /** @prop {number} order=300 - Index used to define the order of execution */
          order: 300,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: preventOverflow,

          /**
           * @prop {Array} [priority=['left','right','top','bottom']]
           * Popper will try to prevent overflow following these priorities by default,
           * then, it could overflow on the left and on top of the `boundariesElement`
           */
          priority: ['left', 'right', 'top', 'bottom'],

          /**
           * @prop {number} padding=5
           * Amount of pixel used to define a minimum distance between the boundaries
           * and the popper. This makes sure the popper always has a little padding
           * between the edges of its container
           */
          padding: 5,

          /**
           * @prop {String|HTMLElement} boundariesElement='scrollParent'
           * Boundaries used by the modifier. Can be `scrollParent`, `window`,
           * `viewport` or any DOM element.
           */
          boundariesElement: 'scrollParent'
        },

        /**
         * Modifier used to make sure the reference and its popper stay near each other
         * without leaving any gap between the two. Especially useful when the arrow is
         * enabled and you want to ensure that it points to its reference element.
         * It cares only about the first axis. You can still have poppers with margin
         * between the popper and its reference element.
         * @memberof modifiers
         * @inner
         */
        keepTogether: {
          /** @prop {number} order=400 - Index used to define the order of execution */
          order: 400,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: keepTogether
        },

        /**
         * This modifier is used to move the `arrowElement` of the popper to make
         * sure it is positioned between the reference element and its popper element.
         * It will read the outer size of the `arrowElement` node to detect how many
         * pixels of conjunction are needed.
         *
         * It has no effect if no `arrowElement` is provided.
         * @memberof modifiers
         * @inner
         */
        arrow: {
          /** @prop {number} order=500 - Index used to define the order of execution */
          order: 500,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: arrow,

          /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
          element: '[x-arrow]'
        },

        /**
         * Modifier used to flip the popper's placement when it starts to overlap its
         * reference element.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         *
         * **NOTE:** this modifier will interrupt the current update cycle and will
         * restart it if it detects the need to flip the placement.
         * @memberof modifiers
         * @inner
         */
        flip: {
          /** @prop {number} order=600 - Index used to define the order of execution */
          order: 600,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: flip,

          /**
           * @prop {String|Array} behavior='flip'
           * The behavior used to change the popper's placement. It can be one of
           * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
           * placements (with optional variations)
           */
          behavior: 'flip',

          /**
           * @prop {number} padding=5
           * The popper will flip if it hits the edges of the `boundariesElement`
           */
          padding: 5,

          /**
           * @prop {String|HTMLElement} boundariesElement='viewport'
           * The element which will define the boundaries of the popper position.
           * The popper will never be placed outside of the defined boundaries
           * (except if `keepTogether` is enabled)
           */
          boundariesElement: 'viewport',

          /**
           * @prop {Boolean} flipVariations=false
           * The popper will switch placement variation between `-start` and `-end` when
           * the reference element overlaps its boundaries.
           *
           * The original placement should have a set variation.
           */
          flipVariations: false,

          /**
           * @prop {Boolean} flipVariationsByContent=false
           * The popper will switch placement variation between `-start` and `-end` when
           * the popper element overlaps its reference boundaries.
           *
           * The original placement should have a set variation.
           */
          flipVariationsByContent: false
        },

        /**
         * Modifier used to make the popper flow toward the inner of the reference element.
         * By default, when this modifier is disabled, the popper will be placed outside
         * the reference element.
         * @memberof modifiers
         * @inner
         */
        inner: {
          /** @prop {number} order=700 - Index used to define the order of execution */
          order: 700,

          /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
          enabled: false,

          /** @prop {ModifierFn} */
          fn: inner
        },

        /**
         * Modifier used to hide the popper when its reference element is outside of the
         * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
         * be used to hide with a CSS selector the popper when its reference is
         * out of boundaries.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         * @memberof modifiers
         * @inner
         */
        hide: {
          /** @prop {number} order=800 - Index used to define the order of execution */
          order: 800,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: hide
        },

        /**
         * Computes the style that will be applied to the popper element to gets
         * properly positioned.
         *
         * Note that this modifier will not touch the DOM, it just prepares the styles
         * so that `applyStyle` modifier can apply it. This separation is useful
         * in case you need to replace `applyStyle` with a custom implementation.
         *
         * This modifier has `850` as `order` value to maintain backward compatibility
         * with previous versions of Popper.js. Expect the modifiers ordering method
         * to change in future major versions of the library.
         *
         * @memberof modifiers
         * @inner
         */
        computeStyle: {
          /** @prop {number} order=850 - Index used to define the order of execution */
          order: 850,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: computeStyle,

          /**
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3D transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties
           */
          gpuAcceleration: true,

          /**
           * @prop {string} [x='bottom']
           * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
           * Change this if your popper should grow in a direction different from `bottom`
           */
          x: 'bottom',

          /**
           * @prop {string} [x='left']
           * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
           * Change this if your popper should grow in a direction different from `right`
           */
          y: 'right'
        },

        /**
         * Applies the computed styles to the popper element.
         *
         * All the DOM manipulations are limited to this modifier. This is useful in case
         * you want to integrate Popper.js inside a framework or view library and you
         * want to delegate all the DOM manipulations to it.
         *
         * Note that if you disable this modifier, you must make sure the popper element
         * has its position set to `absolute` before Popper.js can do its work!
         *
         * Just disable this modifier and define your own to achieve the desired effect.
         *
         * @memberof modifiers
         * @inner
         */
        applyStyle: {
          /** @prop {number} order=900 - Index used to define the order of execution */
          order: 900,

          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,

          /** @prop {ModifierFn} */
          fn: applyStyle,

          /** @prop {Function} */
          onLoad: applyStyleOnLoad,

          /**
           * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3D transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties
           */
          gpuAcceleration: undefined
        }
      };
      /**
       * The `dataObject` is an object containing all the information used by Popper.js.
       * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
       * @name dataObject
       * @property {Object} data.instance The Popper.js instance
       * @property {String} data.placement Placement applied to popper
       * @property {String} data.originalPlacement Placement originally defined on init
       * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
       * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
       * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
       * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
       * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
       * @property {Object} data.boundaries Offsets of the popper boundaries
       * @property {Object} data.offsets The measurements of popper, reference and arrow elements
       * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
       * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
       * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
       */

      /**
       * Default options provided to Popper.js constructor.<br />
       * These can be overridden using the `options` argument of Popper.js.<br />
       * To override an option, simply pass an object with the same
       * structure of the `options` object, as the 3rd argument. For example:
       * ```
       * new Popper(ref, pop, {
       *   modifiers: {
       *     preventOverflow: { enabled: false }
       *   }
       * })
       * ```
       * @type {Object}
       * @static
       * @memberof Popper
       */

      var Defaults = {
        /**
         * Popper's placement.
         * @prop {Popper.placements} placement='bottom'
         */
        placement: 'bottom',

        /**
         * Set this to true if you want popper to position it self in 'fixed' mode
         * @prop {Boolean} positionFixed=false
         */
        positionFixed: false,

        /**
         * Whether events (resize, scroll) are initially enabled.
         * @prop {Boolean} eventsEnabled=true
         */
        eventsEnabled: true,

        /**
         * Set to true if you want to automatically remove the popper when
         * you call the `destroy` method.
         * @prop {Boolean} removeOnDestroy=false
         */
        removeOnDestroy: false,

        /**
         * Callback called when the popper is created.<br />
         * By default, it is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onCreate}
         */
        onCreate: function onCreate() {},

        /**
         * Callback called when the popper is updated. This callback is not called
         * on the initialization/creation of the popper, but only on subsequent
         * updates.<br />
         * By default, it is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onUpdate}
         */
        onUpdate: function onUpdate() {},

        /**
         * List of modifiers used to modify the offsets before they are applied to the popper.
         * They provide most of the functionalities of Popper.js.
         * @prop {modifiers}
         */
        modifiers: modifiers
      };
      /**
       * @callback onCreate
       * @param {dataObject} data
       */

      /**
       * @callback onUpdate
       * @param {dataObject} data
       */
      // Utils
      // Methods

      var Popper = /*#__PURE__*/function () {
        /**
         * Creates a new Popper.js instance.
         * @class Popper
         * @param {Element|referenceObject} reference - The reference element used to position the popper
         * @param {Element} popper - The HTML / XML element used as the popper
         * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
         * @return {Object} instance - The generated Popper.js instance
         */
        function Popper(reference, popper) {
          var _this = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          _classCallCheck(this, Popper);

          this.scheduleUpdate = function () {
            return requestAnimationFrame(_this.update);
          }; // make update() debounced, so that it only runs at most once-per-tick


          this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

          this.options = _extends({}, Popper.Defaults, options); // init state

          this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
          }; // get reference and popper elements (allow jQuery wrappers)

          this.reference = reference && reference.jquery ? reference[0] : reference;
          this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

          this.options.modifiers = {};
          Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
            _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
          }); // Refactoring modifiers' list (Object => Array)

          this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
            return _extends({
              name: name
            }, _this.options.modifiers[name]);
          }) // sort the modifiers by order
          .sort(function (a, b) {
            return a.order - b.order;
          }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
          // such code is executed in the same order of its modifier
          // they could add new properties to their options configuration
          // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

          this.modifiers.forEach(function (modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
              modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
          }); // fire the first update to position the popper in the right place

          this.update();
          var eventsEnabled = this.options.eventsEnabled;

          if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
          }

          this.state.eventsEnabled = eventsEnabled;
        } // We can't use class properties because they don't get listed in the
        // class prototype and break stuff like Sinon stubs


        _createClass(Popper, [{
          key: "update",
          value: function update() {
            return _update.call(this);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            return _destroy.call(this);
          }
        }, {
          key: "enableEventListeners",
          value: function enableEventListeners() {
            return _enableEventListeners.call(this);
          }
        }, {
          key: "disableEventListeners",
          value: function disableEventListeners() {
            return _disableEventListeners.call(this);
          }
          /**
           * Schedules an update. It will run on the next UI update available.
           * @method scheduleUpdate
           * @memberof Popper
           */

          /**
           * Collection of utilities useful when writing custom modifiers.
           * Starting from version 1.7, this method is available only if you
           * include `popper-utils.js` before `popper.js`.
           *
           * **DEPRECATION**: This way to access PopperUtils is deprecated
           * and will be removed in v2! Use the PopperUtils module directly instead.
           * Due to the high instability of the methods contained in Utils, we can't
           * guarantee them to follow semver. Use them at your own risk!
           * @static
           * @private
           * @type {Object}
           * @deprecated since version 1.8
           * @member Utils
           * @memberof Popper
           */

        }]);

        return Popper;
      }();
      /**
       * The `referenceObject` is an object that provides an interface compatible with Popper.js
       * and lets you use it as replacement of a real DOM node.<br />
       * You can use this method to position a popper relatively to a set of coordinates
       * in case you don't have a DOM node to use as reference.
       *
       * ```
       * new Popper(referenceObject, popperNode);
       * ```
       *
       * NB: This feature isn't supported in Internet Explorer 10.
       * @name referenceObject
       * @property {Function} data.getBoundingClientRect
       * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
       * @property {number} data.clientWidth
       * An ES6 getter that will return the width of the virtual reference element.
       * @property {number} data.clientHeight
       * An ES6 getter that will return the height of the virtual reference element.
       */


      Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
      Popper.placements = placements;
      Popper.Defaults = Defaults;
      /* harmony default export */

      __webpack_exports__["default"] = Popper;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
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
  "./resources/assets/vendor/libs/popper/popper.js":
  /*!*******************************************************!*\
    !*** ./resources/assets/vendor/libs/popper/popper.js ***!
    \*******************************************************/

  /*! exports provided: Popper */

  /***/
  function resourcesAssetsVendorLibsPopperPopperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var popper_js_dist_popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! popper.js/dist/popper.js */
    "./node_modules/popper.js/dist/popper.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Popper", function () {
      return popper_js_dist_popper_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    }); // Required to enable animations on dropdowns/tooltips/popovers


    popper_js_dist_popper_js__WEBPACK_IMPORTED_MODULE_0__["default"].Defaults.modifiers.computeStyle.gpuAcceleration = false;
    /***/
  },

  /***/
  98:
  /*!*************************************************************!*\
    !*** multi ./resources/assets/vendor/libs/popper/popper.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\blog-beta\resources\assets\vendor\libs\popper\popper.js */
    "./resources/assets/vendor/libs/popper/popper.js");
    /***/
  }
  /******/

}));

/***/ }),

/***/ 122:
/*!****************************************************************************************************************************!*\
  !*** multi ./resources/assets/libs/popper/popper.js ./resources/assets/libs/bootstrap.js ./resources/assets/js/sidenav.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Program\xampp\htdocs\shikhun-backend\resources\assets\libs\popper\popper.js */"./resources/assets/libs/popper/popper.js");
__webpack_require__(/*! D:\Program\xampp\htdocs\shikhun-backend\resources\assets\libs\bootstrap.js */"./resources/assets/libs/bootstrap.js");
module.exports = __webpack_require__(/*! D:\Program\xampp\htdocs\shikhun-backend\resources\assets\js\sidenav.js */"./resources/assets/js/sidenav.js");


/***/ })

/******/ })));