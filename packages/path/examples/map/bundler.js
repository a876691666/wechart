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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 *  cax v1.1.4
 *  By https://github.com/dntzhang 
 *  Github: https://github.com/dntzhang/cax
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["cax"] = factory();else root["cax"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 16);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;if (getter === undefined) {
            return undefined;
          }return getter.call(receiver);
        }
      };

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Shape = function (_Graphics) {
        _inherits(Shape, _Graphics);

        function Shape() {
          _classCallCheck(this, Shape);

          return _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).apply(this, arguments));
        }

        _createClass(Shape, [{
          key: 'draw',

          // constructor() {
          //     super()
          // }

          value: function draw() {}
        }, {
          key: 'render',
          value: function render(ctx) {
            this.clear();
            this.draw();
            _get(Shape.prototype.__proto__ || Object.getPrototypeOf(Shape.prototype), 'render', this).call(this, ctx);
          }
        }]);

        return Shape;
      }(_graphics2.default);

      exports.default = Shape;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;if (getter === undefined) {
            return undefined;
          }return getter.call(receiver);
        }
      };

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Group = function (_DisplayObject) {
        _inherits(Group, _DisplayObject);

        function Group(data) {
          _classCallCheck(this, Group);

          var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, data));

          _this.children = [];
          return _this;
        }

        _createClass(Group, [{
          key: 'add',
          value: function add(child) {
            var len = arguments.length;

            for (var i = 0; i < len; i++) {
              this.children.push(arguments[i]);
              arguments[i].parent = this;
            }
          }
        }, {
          key: 'addChildAt',
          value: function addChildAt(child, index) {
            var par = child.parent;
            par && par.removeChildAt(par.children.indexOf(child));
            child.parent = this;
            this.children.splice(index, 0, child);
          }
        }, {
          key: 'removeChildAt',
          value: function removeChildAt(index) {
            var child = this.children[index];
            if (child) {
              child.parent = null;
            }
            this.children.splice(index, 1);
          }
        }, {
          key: 'replace',
          value: function replace(current, pre) {
            var index = pre.parent.children.indexOf(pre);
            this.removeChildAt(index);
            this.addChildAt(current, index);
          }
        }, {
          key: 'remove',
          value: function remove(child) {
            var len = arguments.length;
            var cLen = this.children.length;

            for (var i = 0; i < len; i++) {
              for (var j = 0; j < cLen; j++) {
                if (child.id === this.children[j].id) {
                  child.parent = null;
                  this.children.splice(j, 1);
                  j--;
                  cLen--;
                }
              }
            }
          }
        }, {
          key: 'empty',
          value: function empty() {
            this.children.forEach(function (child) {
              child.parent = null;
            });
            this.children.length = 0;
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.empty();
            _get(Group.prototype.__proto__ || Object.getPrototypeOf(Group.prototype), 'destroy', this).call(this);
          }
        }]);

        return Group;
      }(_displayObject2.default);

      exports.default = Group;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _matrix2d = __webpack_require__(21);

      var _matrix2d2 = _interopRequireDefault(_matrix2d);

      var _eventDispatcher = __webpack_require__(22);

      var _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);

      var _uid = __webpack_require__(23);

      var _uid2 = _interopRequireDefault(_uid);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var DisplayObject = function (_EventDispatcher) {
        _inherits(DisplayObject, _EventDispatcher);

        function DisplayObject() {
          _classCallCheck(this, DisplayObject);

          var _this = _possibleConstructorReturn(this, (DisplayObject.__proto__ || Object.getPrototypeOf(DisplayObject)).call(this));

          _this.alpha = _this.complexAlpha = _this.scaleX = _this.scaleY = 1;
          _this.x = _this.y = _this.rotation = _this.skewX = _this.skewY = _this.originX = _this.originY = 0;
          _this.cursor = null;
          _this.visible = true;
          _this._matrix = new _matrix2d2.default();
          _this._hitMatrix = new _matrix2d2.default();
          _this.id = _uid2.default.get();
          _this.clipGraphics = null;
          _this.clipRuleNonzero = true;
          _this.fixed = false;
          return _this;
        }

        _createClass(DisplayObject, [{
          key: 'isVisible',
          value: function isVisible() {
            return this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0;
          }
        }, {
          key: 'initAABB',
          value: function initAABB() {
            if (this.width === undefined || this.height === undefined) {
              return;
            }

            var x = void 0,
                y = void 0,
                width = this.width,
                height = this.height,
                mtx = this._matrix,
                xA = width * mtx.a,
                xB = width * mtx.b,
                yC = height * mtx.c,
                yD = height * mtx.d,
                tx = mtx.tx,
                ty = mtx.ty,
                minX = tx,
                maxX = tx,
                minY = ty,
                maxY = ty;

            if ((x = xA + tx) < minX) {
              minX = x;
            } else if (x > maxX) {
              maxX = x;
            }
            if ((x = xA + yC + tx) < minX) {
              minX = x;
            } else if (x > maxX) {
              maxX = x;
            }
            if ((x = yC + tx) < minX) {
              minX = x;
            } else if (x > maxX) {
              maxX = x;
            }
            if ((y = xB + ty) < minY) {
              minY = y;
            } else if (y > maxY) {
              maxY = y;
            }
            if ((y = xB + yD + ty) < minY) {
              minY = y;
            } else if (y > maxY) {
              maxY = y;
            }
            if ((y = yD + ty) < minY) {
              minY = y;
            } else if (y > maxY) {
              maxY = y;
            }
            this.AABB = [minX, minY, maxX - minX, maxY - minY];
            this.rectPoints = [{
              x: tx,
              y: ty
            }, {
              x: xA + tx,
              y: xB + ty
            }, {
              x: xA + yC + tx,
              y: xB + yD + ty
            }, {
              x: yC + tx,
              y: yD + ty
            }];
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.parent.remove(this);
          }
        }, {
          key: 'hover',
          value: function hover(over, out, move) {
            this.on('mouseover', over);
            this.on('mouseout', out);
            move && this.on('mousemove', move);
          }

          // https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clip

        }, {
          key: 'clip',
          value: function clip(graphics, notClipRuleNonzero) {
            this.clipGraphics = graphics;
            this.clipRuleNonzero = !notClipRuleNonzero;
          }
        }, {
          key: 'unclip',
          value: function unclip() {
            this.clipGraphics = null;
          }
        }, {
          key: 'cache',
          value: function cache(x, y, width, height, scale) {

            this._cacheData = {
              x: x || 0,
              y: y || 0,
              width: width || this.width,
              height: height || this.height,
              scale: scale || 1
            };
            if (!this.cacheCanvas) {
              if (typeof wx !== 'undefined' && wx.createCanvas) {
                this.cacheCanvas = wx.createCanvas();
              } else {
                this.cacheCanvas = document.createElement('canvas');
              }
              this.cacheCtx = this.cacheCanvas.getContext('2d');
            }
            this.cacheCanvas.width = this._cacheData.width * this._cacheData.scale;
            this.cacheCanvas.height = this._cacheData.height * this._cacheData.scale;
            this._readyToCache = true;
          }
        }, {
          key: 'uncache',
          value: function uncache() {
            this.cacheCanvas = null;
          }
        }, {
          key: 'filter',
          value: function filter(filterName, filterBox) {
            this.cache(filterBox.x || 0, filterBox.y || 0, filterBox.width || this.width, filterBox.height || this.height);
            this._readyToFilter = true;
            this._filterName = filterName;
          }
        }, {
          key: 'unfilter',
          value: function unfilter() {
            this.uncache();
          }
        }]);

        return DisplayObject;
      }(_eventDispatcher2.default);

      exports.default = DisplayObject;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var assMap = {
        fillStyle: true,
        strokeStyle: true,
        lineWidth: true,
        lineCap: true,
        lineDashOffset: true,
        lineJoin: true,
        miterLimit: true
      };

      var Graphics = function (_DisplayObject) {
        _inherits(Graphics, _DisplayObject);

        function Graphics() {
          _classCallCheck(this, Graphics);

          var _this = _possibleConstructorReturn(this, (Graphics.__proto__ || Object.getPrototypeOf(Graphics)).call(this));

          _this.cmds = [];
          _this.currentGradient = null;
          return _this;
        }

        _createClass(Graphics, [{
          key: 'clearRect',
          value: function clearRect() {
            this.cmds.push(['clearRect', arguments]);
            return this;
          }
        }, {
          key: 'rect',
          value: function rect() {
            this.cmds.push(['rect', arguments]);
            return this;
          }
        }, {
          key: 'clear',
          value: function clear() {
            this.cmds.length = 0;
            return this;
          }
        }, {
          key: 'setLineDash',
          value: function setLineDash() {
            this.cmds.push(['setLineDash', arguments]);
            return this;
          }
        }, {
          key: 'strokeRect',
          value: function strokeRect() {
            this.cmds.push(['strokeRect', arguments]);
            return this;
          }
        }, {
          key: 'fillRect',
          value: function fillRect() {
            this.cmds.push(['fillRect', arguments]);
            return this;
          }
        }, {
          key: 'beginPath',
          value: function beginPath() {
            this.cmds.push(['beginPath', arguments]);
            return this;
          }
        }, {
          key: 'arc',
          value: function arc() {
            this.cmds.push(['arc', arguments]);
            return this;
          }
        }, {
          key: 'closePath',
          value: function closePath() {
            this.cmds.push(['closePath', arguments]);
            return this;
          }
        }, {
          key: 'fillStyle',
          value: function fillStyle() {
            this.cmds.push(['fillStyle', arguments]);
            return this;
          }
        }, {
          key: 'fill',
          value: function fill() {
            this.cmds.push(['fill', arguments]);
            return this;
          }
        }, {
          key: 'strokeStyle',
          value: function strokeStyle() {
            this.cmds.push(['strokeStyle', arguments]);
            return this;
          }
        }, {
          key: 'lineWidth',
          value: function lineWidth() {
            this.cmds.push(['lineWidth', arguments]);
            return this;
          }
        }, {
          key: 'lineCap',
          value: function lineCap() {
            this.cmds.push(['lineCap', arguments]);
            return this;
          }
        }, {
          key: 'lineDashOffset',
          value: function lineDashOffset() {
            this.cmds.push(['lineDashOffset', arguments]);
            return this;
          }
        }, {
          key: 'lineJoin',
          value: function lineJoin() {
            this.cmds.push(['lineJoin', arguments]);
            return this;
          }
        }, {
          key: 'miterLimit',
          value: function miterLimit() {
            this.cmds.push(['miterLimit', arguments]);
            return this;
          }
        }, {
          key: 'stroke',
          value: function stroke() {
            this.cmds.push(['stroke', arguments]);
            return this;
          }
        }, {
          key: 'moveTo',
          value: function moveTo() {
            this.cmds.push(['moveTo', arguments]);
            return this;
          }
        }, {
          key: 'lineTo',
          value: function lineTo() {
            this.cmds.push(['lineTo', arguments]);
            return this;
          }
        }, {
          key: 'bezierCurveTo',
          value: function bezierCurveTo() {
            this.cmds.push(['bezierCurveTo', arguments]);
            return this;
          }
        }, {
          key: 'quadraticCurveTo',
          value: function quadraticCurveTo() {
            this.cmds.push(['quadraticCurveTo', arguments]);
            return this;
          }
        }, {
          key: 'createRadialGradient',
          value: function createRadialGradient() {
            this.cmds.push(['createRadialGradient', arguments]);
            return this;
          }
        }, {
          key: 'createLinearGradient',
          value: function createLinearGradient() {
            this.cmds.push(['createLinearGradient', arguments]);
            return this;
          }
        }, {
          key: 'addColorStop',
          value: function addColorStop() {
            this.cmds.push(['addColorStop', arguments]);
            return this;
          }
        }, {
          key: 'fillGradient',
          value: function fillGradient() {
            this.cmds.push(['fillGradient']);
            return this;
          }
        }, {
          key: 'arcTo',
          value: function arcTo() {
            this.cmds.push(['arcTo', arguments]);
            return this;
          }
        }, {
          key: 'render',
          value: function render(ctx) {
            var _this2 = this;

            this.cmds.forEach(function (cmd) {
              var methodName = cmd[0];
              if (assMap[methodName]) {
                ctx[methodName] = cmd[1][0];
              } else if (methodName === 'addColorStop') {
                _this2.currentGradient && _this2.currentGradient.addColorStop(cmd[1][0], cmd[1][1]);
              } else if (methodName === 'fillGradient') {
                ctx.fillStyle = _this2.currentGradient;
              } else {
                var result = ctx[methodName].apply(ctx, Array.prototype.slice.call(cmd[1]));
                if (methodName === 'createRadialGradient' || methodName === 'createLinearGradient') {
                  _this2.currentGradient = result;
                }
              }
            });
          }
        }]);

        return Graphics;
      }(_displayObject2.default);

      exports.default = Graphics;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      var _util = __webpack_require__(9);

      var _util2 = _interopRequireDefault(_util);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Bitmap = function (_DisplayObject) {
        _inherits(Bitmap, _DisplayObject);

        function Bitmap(img, onLoad) {
          _classCallCheck(this, Bitmap);

          var _this = _possibleConstructorReturn(this, (Bitmap.__proto__ || Object.getPrototypeOf(Bitmap)).call(this));

          if (typeof img === 'string') {
            if (Bitmap.cache[img]) {
              if (_util2.default.isWeapp) {
                _this.img = Bitmap.cache[img].img;
                _this.rect = [0, 0, Bitmap.cache[img].width, Bitmap.cache[img].height];
                _this.width = _this.rect[2];
                _this.height = _this.rect[3];
              } else {
                _this.img = Bitmap.cache[img];
                _this.rect = [0, 0, _this.img.width, _this.img.height];
                _this.width = _this.img.width;
                _this.height = _this.img.height;
              }
              onLoad && onLoad.call(_this);
            } else if (_util2.default.isWeapp) {
              _util2.default.getImageInWx(img, function (result) {
                _this.img = result.img;
                if (!_this.rect) {
                  _this.rect = [0, 0, result.width, result.height];
                }
                _this.width = result.width;
                _this.height = result.height;
                onLoad && onLoad.call(_this);
                Bitmap.cache[img] = result;
              });
            } else {
              _this.img = _util2.default.isWegame ? wx.createImage() : new window.Image();
              _this.visible = false;
              _this.img.onload = function () {
                _this.visible = true;
                if (!_this.rect) {
                  _this.rect = [0, 0, _this.img.width, _this.img.height];
                }
                _this.width = _this.img.width;
                _this.height = _this.img.height;
                onLoad && onLoad.call(_this);
                Bitmap.cache[img] = _this.img;
              };
              _this.img.src = img;
            }
          } else {
            _this.img = img;
            _this.rect = [0, 0, img.width, img.height];
            _this.width = img.width;
            _this.height = img.height;
            Bitmap.cache[img.src] = img;
          }
          return _this;
        }

        _createClass(Bitmap, [{
          key: 'clone',
          value: function clone() {
            var bitmap = new Bitmap(this.img);
            bitmap.x = this.x;
            bitmap.y = this.y;

            bitmap.scaleX = this.scaleX;
            bitmap.scaleY = this.scaleY;
            bitmap.rotation = this.rotation;
            bitmap.skewX = this.skewX;
            bitmap.skewY = this.skewY;
            bitmap.originX = this.originX;
            bitmap.originY = this.originY;
            bitmap.width = this.width;
            bitmap.height = this.height;

            return bitmap;
          }
        }]);

        return Bitmap;
      }(_displayObject2.default);

      Bitmap.cache = {};

      exports.default = Bitmap;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      var _util = __webpack_require__(9);

      var _util2 = _interopRequireDefault(_util);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var measureCtx = void 0;

      if (_util2.default.isWeapp) {
        measureCtx = wx.createCanvasContext('measure0');
      } else if (typeof document !== 'undefined') {
        measureCtx = document.createElement('canvas').getContext('2d');
      }

      var Text = function (_DisplayObject) {
        _inherits(Text, _DisplayObject);

        function Text(text, option) {
          _classCallCheck(this, Text);

          var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

          _this.text = text;
          option = option || {};
          _this.font = option.font || '10px sans-serif';
          _this.color = option.color || 'black';

          _this.baseline = option.baseline || 'top';
          return _this;
        }

        _createClass(Text, [{
          key: 'getWidth',
          value: function getWidth() {
            if (!measureCtx) {
              if (_util2.default.isWegame) {
                measureCtx = wx.createCanvas().getContext('2d');
              }
            }

            if (this.font) {
              measureCtx.font = this.font;
            }
            return measureCtx.measureText(this.text).width;
          }
        }]);

        return Text;
      }(_displayObject2.default);

      exports.default = Text;

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      var _util = __webpack_require__(9);

      var _util2 = _interopRequireDefault(_util);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Sprite = function (_DisplayObject) {
        _inherits(Sprite, _DisplayObject);

        function Sprite(option) {
          _classCallCheck(this, Sprite);

          var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));

          _this.option = option;
          var len = _this.option.imgs.length;
          var count = 0;
          var firstImg = _this.option.imgs[0];
          _this.imgMap = {};

          if (_util2.default.isWeapp) {
            _this.option.imgs.forEach(function (img) {
              _util2.default.getImageInWx(img, function (result) {
                _this.imgMap[img] = result.img;
                count++;
                if (count === len) {
                  _this.img = _this.imgMap[firstImg];
                  _this.rect = [0, 0, 0, 0];
                }
              });
            });
          } else {
            if (typeof firstImg === 'string') {
              var _len = _this.option.imgs.length;
              var loadedCount = 0;
              _this.option.imgs.forEach(function (src) {
                if (_bitmap2.default.cache[src]) {
                  _this.imgMap[src] = _bitmap2.default.cache[src];
                  loadedCount++;
                  if (loadedCount === _len) {
                    _this.img = _this.imgMap[firstImg];
                    _this.rect = [0, 0, 0, 0];
                  }
                } else {
                  var img = _util2.default.isWegame ? wx.createImage() : new window.Image();
                  img.onload = function () {
                    _this.imgMap[src] = img;
                    loadedCount++;
                    if (loadedCount === _len) {
                      _this.img = _this.imgMap[firstImg];
                      _this.rect = [0, 0, 0, 0];
                    }
                    _bitmap2.default.cache[src] = img;
                  };
                  img.src = src;
                }
              });
            } else if (firstImg instanceof _bitmap2.default) {
              _this.rect = [0, 0, 0, 0];
              _this.img = firstImg.img;
            } else {
              _this.rect = [0, 0, 0, 0];
              _this.img = firstImg;
            }
          }

          _this.x = option.x || 0;
          _this.y = option.y || 0;
          _this.currentFrameIndex = 0;
          _this.animationFrameIndex = 0;
          _this.currentAnimation = option.currentAnimation || null;

          _this.interval = 1e3 / option.framerate;

          _this.paused = false;
          _this.animationEnd = option.animationEnd || function () {};
          if (_this.currentAnimation) {
            if (option.playOnce) {
              _this.gotoAndPlayOnce(_this.currentAnimation);
            } else {
              _this.gotoAndPlay(_this.currentAnimation);
            }
          }
          return _this;
        }

        _createClass(Sprite, [{
          key: 'play',
          value: function play() {
            this.paused = false;
          }
        }, {
          key: 'pause',
          value: function pause() {
            this.paused = true;
          }
        }, {
          key: 'reset',
          value: function reset() {
            this.currentFrameIndex = 0;
            this.animationFrameIndex = 0;
          }
        }, {
          key: 'updateFrame',
          value: function updateFrame() {
            if (!this.paused) {
              var opt = this.option;
              this.dt = Date.now() - this.startTime;
              var frames = opt.animations[this.currentAnimation].frames;
              var len = frames.length;
              var index = Math.floor(this.dt / this.interval % len);
              this.rect = opt.frames[frames[index]];
              var rectLen = this.rect.length;

              rectLen > 4 && (this.originX = this.rect[2] * this.rect[4]);
              rectLen > 5 && (this.originY = this.rect[3] * this.rect[5]);
              rectLen > 6 && (this.img = this.imgMap[this.option.imgs[this.rect[6]]]);

              if (index === len - 1 && (!this.endTime || Date.now() - this.endTime > this.interval)) {
                this.endTime = Date.now();
                this.animationEnd();
                if (this._willDestroy) {
                  this.destroy();
                }
              }
            }
          }
        }, {
          key: 'gotoAndPlay',
          value: function gotoAndPlay(animation) {
            this.paused = false;
            this.reset();
            this.currentAnimation = animation;
            this.startTime = Date.now();
          }
        }, {
          key: 'gotoAndStop',
          value: function gotoAndStop(animation) {
            this.reset();
            this.paused = true;
            this.currentAnimation = animation;
            var opt = this.option;
            var frames = opt.animations[this.currentAnimation].frames;
            this.rect = opt.frames[frames[this.animationFrameIndex]];
            var rect = this.rect;
            this.width = rect[2];
            this.height = rect[3];
            var rectLen = rect.length;
            rectLen > 4 && (this.originX = rect[2] * rect[4]);
            rectLen > 5 && (this.originY = rect[3] * rect[5]);
            rectLen > 6 && (this.img = this.imgMap[this.option.imgs[rect[6]]]);
          }
        }, {
          key: 'gotoAndPlayOnce',
          value: function gotoAndPlayOnce(animation) {
            this.gotoAndPlay(animation);
            this._willDestroy = true;
          }
        }]);

        return Sprite;
      }(_displayObject2.default);

      exports.default = Sprite;

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Event = function () {
        function Event() {
          _classCallCheck(this, Event);

          this.propagationStopped = false;
          this.stageX = null;
          this.stageY = null;
          this.pureEvent = null;
        }

        _createClass(Event, [{
          key: "stopPropagation",
          value: function stopPropagation() {
            this.propagationStopped = true;
          }
        }, {
          key: "preventDefault",
          value: function preventDefault() {
            this.pureEvent.preventDefault();
          }
        }]);

        return Event;
      }();

      exports.default = Event;

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Render = function () {
        function Render() {
          _classCallCheck(this, Render);
        }

        _createClass(Render, [{
          key: "render",
          value: function render() {}
        }, {
          key: "renderGraphics",
          value: function renderGraphics() {}
        }, {
          key: "clear",
          value: function clear() {}
        }]);

        return Render;
      }();

      exports.default = Render;

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (global) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        exports.getImageInWx = getImageInWx;
        function getImageInWx(img, callback) {
          if (img.indexOf('https://') === -1 && img.indexOf('http://') === -1) {
            wx.getImageInfo({
              src: img,
              success: function success(info) {
                callback({
                  img: img,
                  width: info.width,
                  height: info.height
                });
              }
            });
          } else {
            wx.downloadFile({
              url: img,
              success: function success(res) {
                if (res.statusCode === 200) {
                  wx.getImageInfo({
                    src: res.tempFilePath,
                    success: function success(info) {
                      callback({
                        img: res.tempFilePath,
                        width: info.width,
                        height: info.height
                      });
                    }
                  });
                }
              }
            });
          }
        }

        function getGlobal() {
          if ((typeof global === 'undefined' ? 'undefined' : _typeof(global)) !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
            if (typeof self !== 'undefined') {
              return self;
            } else if (typeof window !== 'undefined') {
              return window;
            } else if (typeof global !== 'undefined') {
              return global;
            }
            return function () {
              return this;
            }();
          }
          return global;
        }

        var root = getGlobal();

        exports.default = {
          getImageInWx: getImageInWx,
          root: root,
          isWeapp: typeof wx !== 'undefined' && !wx.createCanvas,
          isWegame: typeof wx !== 'undefined' && wx.createCanvas
        };
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(25));

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        /**
         * Tween.js - Licensed under the MIT license
         * https://github.com/tweenjs/tween.js
         * ----------------------------------------------
         *
         * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
         * Thank you all, you're awesome!
         */

        var _Group = function _Group() {
          this._tweens = {};
          this._tweensAddedDuringUpdate = {};
        };

        _Group.prototype = {
          getAll: function getAll() {
            return Object.keys(this._tweens).map(function (tweenId) {
              return this._tweens[tweenId];
            }.bind(this));
          },

          removeAll: function removeAll() {
            this._tweens = {};
          },

          add: function add(tween) {
            this._tweens[tween.getId()] = tween;
            this._tweensAddedDuringUpdate[tween.getId()] = tween;
          },

          remove: function remove(tween) {
            delete this._tweens[tween.getId()];
            delete this._tweensAddedDuringUpdate[tween.getId()];
          },

          update: function update(time, preserve) {
            var tweenIds = Object.keys(this._tweens);

            if (tweenIds.length === 0) {
              return false;
            }

            time = time !== undefined ? time : TWEEN.now();

            // Tweens are updated in "batches". If you add a new tween during an update, then the
            // new tween will be updated in the next batch.
            // If you remove a tween during an update, it may or may not be updated. However,
            // if the removed tween was added during the current batch, then it will not be updated.
            while (tweenIds.length > 0) {
              this._tweensAddedDuringUpdate = {};

              for (var i = 0; i < tweenIds.length; i++) {
                var tween = this._tweens[tweenIds[i]];

                if (tween && tween.update(time) === false) {
                  tween._isPlaying = false;

                  if (!preserve) {
                    delete this._tweens[tweenIds[i]];
                  }
                }
              }

              tweenIds = Object.keys(this._tweensAddedDuringUpdate);
            }

            return true;
          }
        };

        var TWEEN = new _Group();

        TWEEN.Group = _Group;
        TWEEN._nextId = 0;
        TWEEN.nextId = function () {
          return TWEEN._nextId++;
        };

        // Include a performance.now polyfill.
        // In node.js, use process.hrtime.
        if (typeof window === 'undefined' && typeof process !== 'undefined') {
          if (typeof wx !== 'undefined') {
            TWEEN.now = Date.now;
          } else {
            TWEEN.now = function () {
              var time = process.hrtime();

              // Convert [seconds, nanoseconds] to milliseconds.
              return time[0] * 1000 + time[1] / 1000000;
            };
          }
        } else if (typeof window !== 'undefined' &&
        // In a browser, use window.performance.now if it is available.
        window.performance !== undefined && window.performance.now !== undefined) {
          // This must be bound, because directly assigning this function
          // leads to an invocation exception in Chrome.
          TWEEN.now = window.performance.now.bind(window.performance);
        } else if (Date.now !== undefined) {
          // Use Date.now if it is available.
          TWEEN.now = Date.now;
        } else {
          // Otherwise, use 'new Date().getTime()'.
          TWEEN.now = function () {
            return new Date().getTime();
          };
        }

        TWEEN.Tween = function (object, group) {
          this._object = object;
          this._valuesStart = {};
          this._valuesEnd = {};
          this._valuesStartRepeat = {};
          this._duration = 1000;
          this._repeat = 0;
          this._repeatDelayTime = undefined;
          this._yoyo = false;
          this._isPlaying = false;
          this._reversed = false;
          this._delayTime = 0;
          this._startTime = null;
          this._easingFunction = TWEEN.Easing.Linear.None;
          this._interpolationFunction = TWEEN.Interpolation.Linear;
          this._chainedTweens = [];
          this._onStartCallback = null;
          this._onStartCallbackFired = false;
          this._onUpdateCallback = null;
          this._onCompleteCallback = null;
          this._onStopCallback = null;
          this._group = group || TWEEN;
          this._id = TWEEN.nextId();

          this._paused = false;
          this._passTime = null;
        };

        TWEEN.Tween.prototype = {
          getId: function getId() {
            return this._id;
          },

          toggle: function toggle() {
            if (this._paused) {
              this.play();
            } else {
              this.pause();
            }
          },

          pause: function pause() {
            this._paused = true;
            var pauseTime = TWEEN.now();
            this._passTime = pauseTime - this._startTime;
          },

          play: function play() {
            this._paused = false;
            var nowTime = TWEEN.now();
            this._startTime = nowTime - this._passTime;
          },

          isPlaying: function isPlaying() {
            return this._isPlaying;
          },

          to: function to(properties, duration) {
            this._valuesEnd = properties;

            if (duration !== undefined) {
              this._duration = duration;
            }

            return this;
          },

          start: function start(time) {
            this._group.add(this);

            this._isPlaying = true;

            this._onStartCallbackFired = false;

            this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
            this._startTime += this._delayTime;

            for (var property in this._valuesEnd) {
              // Check if an Array was provided as property value
              if (this._valuesEnd[property] instanceof Array) {
                if (this._valuesEnd[property].length === 0) {
                  continue;
                }

                // Create a local copy of the Array with the start value at the front
                this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
              }

              // If `to()` specifies a property that doesn't exist in the source object,
              // we should not set that property in the object
              if (this._object[property] === undefined) {
                continue;
              }

              // Save the starting value.
              this._valuesStart[property] = this._object[property];

              if (this._valuesStart[property] instanceof Array === false) {
                this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
              }

              this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
            }

            return this;
          },

          stop: function stop() {
            if (!this._isPlaying) {
              return this;
            }

            this._group.remove(this);
            this._isPlaying = false;

            if (this._onStopCallback !== null) {
              this._onStopCallback(this._object);
            }

            this.stopChainedTweens();
            return this;
          },

          end: function end() {
            this.update(this._startTime + this._duration);
            return this;
          },

          stopChainedTweens: function stopChainedTweens() {
            for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
              this._chainedTweens[i].stop();
            }
          },

          group: function group(group) {
            this._group = group;
            return this;
          },

          delay: function delay(amount) {
            this._delayTime = amount;
            return this;
          },

          repeat: function repeat(times) {
            this._repeat = times;
            return this;
          },

          repeatDelay: function repeatDelay(amount) {
            this._repeatDelayTime = amount;
            return this;
          },

          yoyo: function yoyo(yy) {
            this._yoyo = yy;
            return this;
          },

          easing: function easing(eas) {
            this._easingFunction = eas;
            return this;
          },

          interpolation: function interpolation(inter) {
            this._interpolationFunction = inter;
            return this;
          },

          chain: function chain() {
            this._chainedTweens = arguments;
            return this;
          },

          onStart: function onStart(callback) {
            this._onStartCallback = callback;
            return this;
          },

          onUpdate: function onUpdate(callback) {
            this._onUpdateCallback = callback;
            return this;
          },

          onComplete: function onComplete(callback) {
            this._onCompleteCallback = callback;
            return this;
          },

          onStop: function onStop(callback) {
            this._onStopCallback = callback;
            return this;
          },

          update: function update(time) {
            if (this._paused) return true;
            var property;
            var elapsed;
            var value;

            if (time < this._startTime) {
              return true;
            }

            if (this._onStartCallbackFired === false) {
              if (this._onStartCallback !== null) {
                this._onStartCallback(this._object);
              }

              this._onStartCallbackFired = true;
            }

            elapsed = (time - this._startTime) / this._duration;
            elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;

            value = this._easingFunction(elapsed);

            for (property in this._valuesEnd) {
              // Don't update properties that do not exist in the source object
              if (this._valuesStart[property] === undefined) {
                continue;
              }

              var start = this._valuesStart[property] || 0;
              var end = this._valuesEnd[property];

              if (end instanceof Array) {
                this._object[property] = this._interpolationFunction(end, value);
              } else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                if (typeof end === 'string') {
                  if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                    end = start + parseFloat(end);
                  } else {
                    end = parseFloat(end);
                  }
                }

                // Protect against non numeric properties.
                if (typeof end === 'number') {
                  this._object[property] = start + (end - start) * value;
                }
              }
            }

            if (this._onUpdateCallback !== null) {
              this._onUpdateCallback(this._object);
            }

            if (elapsed === 1) {
              if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                  this._repeat--;
                }

                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                  if (typeof this._valuesEnd[property] === 'string') {
                    this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                  }

                  if (this._yoyo) {
                    var tmp = this._valuesStartRepeat[property];

                    this._valuesStartRepeat[property] = this._valuesEnd[property];
                    this._valuesEnd[property] = tmp;
                  }

                  this._valuesStart[property] = this._valuesStartRepeat[property];
                }

                if (this._yoyo) {
                  this._reversed = !this._reversed;
                }

                if (this._repeatDelayTime !== undefined) {
                  this._startTime = time + this._repeatDelayTime;
                } else {
                  this._startTime = time + this._delayTime;
                }

                return true;
              } else {
                if (this._onCompleteCallback !== null) {
                  this._onCompleteCallback(this._object);
                }

                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                  // Make the chained tweens start exactly at the time they should,
                  // even if the `update()` method was called way past the duration of the tween
                  this._chainedTweens[i].start(this._startTime + this._duration);
                }

                return false;
              }
            }

            return true;
          }
        };

        TWEEN.Easing = {

          Linear: {

            None: function None(k) {
              return k;
            }

          },

          Quadratic: {

            In: function In(k) {
              return k * k;
            },

            Out: function Out(k) {
              return k * (2 - k);
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return 0.5 * k * k;
              }

              return -0.5 * (--k * (k - 2) - 1);
            }

          },

          Cubic: {

            In: function In(k) {
              return k * k * k;
            },

            Out: function Out(k) {
              return --k * k * k + 1;
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return 0.5 * k * k * k;
              }

              return 0.5 * ((k -= 2) * k * k + 2);
            }

          },

          Quartic: {

            In: function In(k) {
              return k * k * k * k;
            },

            Out: function Out(k) {
              return 1 - --k * k * k * k;
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k;
              }

              return -0.5 * ((k -= 2) * k * k * k - 2);
            }

          },

          Quintic: {

            In: function In(k) {
              return k * k * k * k * k;
            },

            Out: function Out(k) {
              return --k * k * k * k * k + 1;
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k * k;
              }

              return 0.5 * ((k -= 2) * k * k * k * k + 2);
            }

          },

          Sinusoidal: {

            In: function In(k) {
              return 1 - Math.cos(k * Math.PI / 2);
            },

            Out: function Out(k) {
              return Math.sin(k * Math.PI / 2);
            },

            InOut: function InOut(k) {
              return 0.5 * (1 - Math.cos(Math.PI * k));
            }

          },

          Exponential: {

            In: function In(k) {
              return k === 0 ? 0 : Math.pow(1024, k - 1);
            },

            Out: function Out(k) {
              return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
            },

            InOut: function InOut(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
              }

              return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
            }

          },

          Circular: {

            In: function In(k) {
              return 1 - Math.sqrt(1 - k * k);
            },

            Out: function Out(k) {
              return Math.sqrt(1 - --k * k);
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
              }

              return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
            }

          },

          Elastic: {

            In: function In(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            },

            Out: function Out(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
            },

            InOut: function InOut(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              k *= 2;

              if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
              }

              return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
            }

          },

          Back: {

            In: function In(k) {
              var s = 1.70158;

              return k * k * ((s + 1) * k - s);
            },

            Out: function Out(k) {
              var s = 1.70158;

              return --k * k * ((s + 1) * k + s) + 1;
            },

            InOut: function InOut(k) {
              var s = 1.70158 * 1.525;

              if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
              }

              return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
            }

          },

          Bounce: {

            In: function In(k) {
              return 1 - TWEEN.Easing.Bounce.Out(1 - k);
            },

            Out: function Out(k) {
              if (k < 1 / 2.75) {
                return 7.5625 * k * k;
              } else if (k < 2 / 2.75) {
                return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
              } else if (k < 2.5 / 2.75) {
                return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
              } else {
                return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
              }
            },

            InOut: function InOut(k) {
              if (k < 0.5) {
                return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
              }

              return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
            }

          }

        };

        TWEEN.Interpolation = {

          Linear: function Linear(v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = TWEEN.Interpolation.Utils.Linear;

            if (k < 0) {
              return fn(v[0], v[1], f);
            }

            if (k > 1) {
              return fn(v[m], v[m - 1], m - f);
            }

            return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
          },

          Bezier: function Bezier(v, k) {
            var b = 0;
            var n = v.length - 1;
            var pw = Math.pow;
            var bn = TWEEN.Interpolation.Utils.Bernstein;

            for (var i = 0; i <= n; i++) {
              b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
            }

            return b;
          },

          CatmullRom: function CatmullRom(v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = TWEEN.Interpolation.Utils.CatmullRom;

            if (v[0] === v[m]) {
              if (k < 0) {
                i = Math.floor(f = m * (1 + k));
              }

              return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
            } else {
              if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
              }

              if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
              }

              return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
            }
          },

          Utils: {

            Linear: function Linear(p0, p1, t) {
              return (p1 - p0) * t + p0;
            },

            Bernstein: function Bernstein(n, i) {
              var fc = TWEEN.Interpolation.Utils.Factorial;

              return fc(n) / fc(i) / fc(n - i);
            },

            Factorial: function () {
              var a = [1];

              return function (n) {
                var s = 1;

                if (a[n]) {
                  return a[n];
                }

                for (var i = n; i > 1; i--) {
                  s *= i;
                }

                a[n] = s;
                return s;
              };
            }(),

            CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
              var v0 = (p2 - p0) * 0.5;
              var v1 = (p3 - p1) * 0.5;
              var t2 = t * t;
              var t3 = t * t2;

              return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
            }

          }

        };

        // UMD (Universal Module Definition)
        (function (root) {
          if (typeof module !== 'undefined' && (false ? 'undefined' : _typeof(exports)) === 'object') {
            // Node.js
            module.exports = TWEEN;
          } else if (root !== undefined) {
            // Global variable
            root.TWEEN = TWEEN;
          }
        })(undefined);
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(17));

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _tween = __webpack_require__(10);

      var _tween2 = _interopRequireDefault(_tween);

      var _rafInterval = __webpack_require__(12);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var To = function () {
        function To(element) {
          _classCallCheck(this, To);

          this.element = element;
          this.cmds = [];
          this.index = 0;
          this.tweens = [];
          this._pause = false;
          this.loop = (0, _rafInterval.setRafInterval)(function () {
            _tween2.default.update();
          }, 15);
          this.cycleCount = 0;
        }

        _createClass(To, [{
          key: 'to',
          value: function to(target, duration, easing) {
            this.cmds.push(['to']);
            if (arguments.length !== 0) {
              for (var key in target) {
                this.set(key, target[key], duration, easing);
              }
            }
            return this;
          }
        }, {
          key: 'set',
          value: function set(prop, value, duration, easing) {
            this.cmds[this.cmds.length - 1].push([prop, [value, duration, easing]]);
            return this;
          }
        }, {
          key: 'x',
          value: function x() {
            this.cmds[this.cmds.length - 1].push(['x', arguments]);
            return this;
          }
        }, {
          key: 'y',
          value: function y() {
            this.cmds[this.cmds.length - 1].push(['y', arguments]);
            return this;
          }
        }, {
          key: 'z',
          value: function z() {
            this.cmds[this.cmds.length - 1].push(['z', arguments]);
            return this;
          }
        }, {
          key: 'rotation',
          value: function rotation() {
            this.cmds[this.cmds.length - 1].push(['rotation', arguments]);
            return this;
          }
        }, {
          key: 'scaleX',
          value: function scaleX() {
            this.cmds[this.cmds.length - 1].push(['scaleX', arguments]);
            return this;
          }
        }, {
          key: 'scaleY',
          value: function scaleY() {
            this.cmds[this.cmds.length - 1].push(['scaleY', arguments]);
            return this;
          }
        }, {
          key: 'skewX',
          value: function skewX() {
            this.cmds[this.cmds.length - 1].push(['skewX', arguments]);
            return this;
          }
        }, {
          key: 'skewY',
          value: function skewY() {
            this.cmds[this.cmds.length - 1].push(['skewY', arguments]);
            return this;
          }
        }, {
          key: 'originX',
          value: function originX() {
            this.cmds[this.cmds.length - 1].push(['originX', arguments]);
            return this;
          }
        }, {
          key: 'originY',
          value: function originY() {
            this.cmds[this.cmds.length - 1].push(['originY', arguments]);
            return this;
          }
        }, {
          key: 'alpha',
          value: function alpha() {
            this.cmds[this.cmds.length - 1].push(['alpha', arguments]);
            return this;
          }
        }, {
          key: 'begin',
          value: function begin(fn) {
            this.cmds[this.cmds.length - 1].begin = fn;
            return this;
          }
        }, {
          key: 'progress',
          value: function progress(fn) {
            this.cmds[this.cmds.length - 1].progress = fn;
            return this;
          }
        }, {
          key: 'end',
          value: function end(fn) {
            this.cmds[this.cmds.length - 1].end = fn;
            return this;
          }
        }, {
          key: 'wait',
          value: function wait() {
            this.cmds.push(['wait', arguments]);
            return this;
          }
        }, {
          key: 'then',
          value: function then() {
            this.cmds.push(['then', arguments]);
            return this;
          }
        }, {
          key: 'cycle',
          value: function cycle() {
            this.cmds.push(['cycle', arguments]);
            return this;
          }
        }, {
          key: 'start',
          value: function start() {
            if (this._pause) return;
            var len = this.cmds.length;
            if (this.index < len) {
              this.exec(this.cmds[this.index], this.index === len - 1);
            } else {
              (0, _rafInterval.clearRafInterval)(this.loop);
            }
            return this;
          }
        }, {
          key: 'pause',
          value: function pause() {
            this._pause = true;
            for (var i = 0, len = this.tweens.length; i < len; i++) {
              this.tweens[i].pause();
            }
            if (this.currentTask === 'wait') {
              this.timeout -= new Date() - this.currentTaskBegin;
              this.currentTaskBegin = new Date();
            }
          }
        }, {
          key: 'toggle',
          value: function toggle() {
            if (this._pause) {
              this.play();
            } else {
              this.pause();
            }
          }
        }, {
          key: 'play',
          value: function play() {
            this._pause = false;
            for (var i = 0, len = this.tweens.length; i < len; i++) {
              this.tweens[i].play();
            }
            var self = this;
            if (this.currentTask === 'wait') {
              setTimeout(function () {
                if (self._pause) return;
                self.index++;
                self.start();
                if (self.index === self.cmds.length && self.complete) self.complete();
              }, this.timeout);
            }
          }
        }, {
          key: 'stop',
          value: function stop() {
            for (var i = 0, len = this.tweens.length; i < len; i++) {
              this.tweens[i].stop();
            }
            this.cmds.length = 0;
          }
        }, {
          key: 'animate',
          value: function animate(name) {
            this.cmds = this.cmds.concat(To.animationMap[name] || []);
            return this;
          }
        }, {
          key: 'exec',
          value: function exec(cmd, last) {
            var len = cmd.length,
                self = this;
            this.currentTask = cmd[0];
            switch (this.currentTask) {
              case 'to':
                self.stepCompleteCount = 0;
                for (var i = 1; i < len; i++) {
                  var task = cmd[i];
                  var ease = task[1][2];
                  var target = {};
                  var prop = task[0];
                  target[prop] = task[1][0];

                  var t = new _tween2.default.Tween(this.element).to(target, task[1][1]).onStart(function () {
                    if (cmd.begin) cmd.begin.call(self.element, self.element);
                  }).onUpdate(function () {
                    if (cmd.progress) cmd.progress.call(self.element, self.element);
                    // self.element[prop] = this[prop];
                  }).easing(ease || _tween2.default.Easing.Linear.None).onComplete(function () {
                    self.stepCompleteCount++;
                    if (self.stepCompleteCount === len - 1) {
                      if (cmd.end) cmd.end.call(self.element, self.element);
                      if (last && self.complete) self.complete();
                      self.index++;
                      self.start();
                    }
                  }).start();
                  this.tweens.push(t);
                }
                break;
              case 'wait':
                this.currentTaskBegin = new Date();
                this.timeout = cmd[1][0];
                setTimeout(function () {
                  if (self._pause) return;
                  self.index++;
                  self.start();
                  if (cmd.end) cmd.end.call(self.element, self.element);
                  if (last && self.complete) self.complete();
                }, cmd[1][0]);
                break;
              case 'then':
                var arg = cmd[1][0];
                arg.index = 0;
                arg.complete = function () {
                  self.index++;
                  self.start();
                  if (last && self.complete) self.complete();
                };
                arg.start();
                break;
              case 'cycle':
                var count = cmd[1][1];
                if (count === undefined) {
                  self.index = cmd[1][0] || 0;
                  self.start();
                } else {
                  if (count && self.cycleCount === count) {
                    self.index++;
                    self.start();
                    if (last && self.complete) self.complete();
                  } else {
                    self.cycleCount++;
                    self.index = cmd[1][0];
                    self.start();
                  }
                }
                break;
            }
          }
        }]);

        return To;
      }();

      To.get = function (element) {
        var to = new To(element);
        return to;
      };

      To.animationMap = {};
      To.extend = function (animationName, cmds) {
        To.animationMap[animationName] = cmds;
      };

      exports.default = To;

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.setRafInterval = setRafInterval;
      exports.clearRafInterval = clearRafInterval;
      /*!
       *  raf-interval v0.3.0 By dntzhang
       *  Github: https://github.com/dntzhang/raf-interval
       *  MIT Licensed.
       */

      if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }

      var queue = [],
          id = -1,
          ticking = false,
          tickId = null,
          now = Date.now,
          lastTime = 0,
          vendors = ['ms', 'moz', 'webkit', 'o'],
          x = 0,
          isWeapp = typeof wx !== 'undefined' && !wx.createCanvas,
          isWegame = typeof wx !== 'undefined' && wx.createCanvas,
          isBrowser = typeof window !== 'undefined';

      var raf = isBrowser ? window.requestAnimationFrame : null;
      var caf = isBrowser ? window.cancelAnimationFrame : null;

      function mockRaf(callback, element) {
        var currTime = now();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      }

      function mockCaf(id) {
        clearTimeout(id);
      }

      if (isBrowser) {
        window.setRafInterval = setRafInterval;
        window.clearRafInterval = clearRafInterval;

        for (; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!raf) {
          raf = mockRaf;
          caf = mockCaf;
          window.requestAnimationFrame = raf;
          window.cancelAnimationFrame = caf;
        }
      } else if (isWeapp) {
        raf = mockRaf;
        caf = mockCaf;
      } else if (isWegame) {
        raf = requestAnimationFrame;
        caf = cancelAnimationFrame;
      }

      function setRafInterval(fn, interval) {
        id++;
        queue.push({ id: id, fn: fn, interval: interval, lastTime: now() });
        if (!ticking) {
          var tick = function tick() {
            tickId = raf(tick);
            each(queue, function (item) {
              if (item.interval < 17 || now() - item.lastTime >= item.interval) {
                item.fn();
                item.lastTime = now();
              }
            });
          };
          ticking = true;
          tick();
        }
        return id;
      }

      function clearRafInterval(id) {
        var i = 0,
            len = queue.length;

        for (; i < len; i++) {
          if (id === queue[i].id) {
            queue.splice(i, 1);
            break;
          }
        }

        if (queue.length === 0) {
          caf(tickId);
          ticking = false;
        }
      }

      function each(arr, fn) {
        if (Array.prototype.forEach) {
          arr.forEach(fn);
        } else {
          var i = 0,
              len = arr.length;
          for (; i < len; i++) {
            fn(arr[i], i);
          }
        }
      }

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _canvasRender = __webpack_require__(24);

      var _canvasRender2 = _interopRequireDefault(_canvasRender);

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Renderer = function () {
        function Renderer(canvasOrContext, width, height) {
          _classCallCheck(this, Renderer);

          this.renderList = [];
          if (arguments.length === 3) {
            this.renderer = new _canvasRender2.default(canvasOrContext, width, height);
            this.width = width;
            this.height = height;
          } else {
            this.renderer = new _canvasRender2.default(canvasOrContext);
            this.width = canvasOrContext.width;
            this.height = canvasOrContext.height;
          }
          this.ctx = this.renderer.ctx;
        }

        _createClass(Renderer, [{
          key: 'update',
          value: function update(stage) {

            this.renderer.clear(this.ctx, this.width, this.height);
            this.renderer.render(this.ctx, stage);
            this.ctx.draw && this.ctx.draw();
          }
        }, {
          key: 'getHitRenderList',
          value: function getHitRenderList(stage) {
            var objs = this.renderList;
            objs.length = 0;
            this.computeMatrix(stage);
            return objs;
          }
        }, {
          key: 'computeMatrix',
          value: function computeMatrix(stage) {
            for (var i = 0, len = stage.children.length; i < len; i++) {
              this._computeMatrix(stage.children[i]);
            }
          }
        }, {
          key: 'initComplex',
          value: function initComplex(o) {
            o.complexCompositeOperation = this._getCompositeOperation(o);
            o.complexAlpha = this._getAlpha(o, 1);
          }
        }, {
          key: '_computeMatrix',
          value: function _computeMatrix(o, mtx) {
            if (!o.isVisible()) {
              return;
            }
            if (mtx && !o.fixed) {
              o._matrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            } else {
              o._matrix.initialize(1, 0, 0, 1, 0, 0);
            }

            o._matrix.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);

            if (o instanceof _group2.default) {
              var list = o.children,
                  len = list.length,
                  i = 0;
              for (; i < len; i++) {
                this._computeMatrix(list[i], o._matrix);
              }
            } else {
              // if (o instanceof Graphics) {
              //   this.renderList.push(o)
              //   this.initComplex(o)
              // } else {
              o.initAABB();
              // if (this.isInStage(o)) {
              this.renderList.push(o);
              this.initComplex(o);
              // }
              // }
            }
          }
        }, {
          key: '_getCompositeOperation',
          value: function _getCompositeOperation(o) {
            if (o.compositeOperation) return o.compositeOperation;
            if (o.parent) return this._getCompositeOperation(o.parent);
          }
        }, {
          key: '_getAlpha',
          value: function _getAlpha(o, alpha) {
            var result = o.alpha * alpha;
            if (o.parent) {
              return this._getAlpha(o.parent, result);
            }
            return result;
          }
        }, {
          key: 'isInStage',
          value: function isInStage(o) {
            return this.collisionBetweenAABB(o.AABB, this.stage.AABB);
          }
        }, {
          key: 'collisionBetweenAABB',
          value: function collisionBetweenAABB(AABB1, AABB2) {
            var maxX = AABB1[0] + AABB1[2];
            if (maxX < AABB2[0]) return false;
            var minX = AABB1[0];
            if (minX > AABB2[0] + AABB2[2]) return false;
            var maxY = AABB1[1] + AABB1[3];
            if (maxY < AABB2[1]) return false;
            var minY = AABB1[1];
            if (minY > AABB2[1] + AABB2[3]) return false;
            return true;
          }
        }]);

        return Renderer;
      }();

      exports.default = Renderer;

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _renderer = __webpack_require__(13);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _wxHitRender = __webpack_require__(31);

      var _wxHitRender2 = _interopRequireDefault(_wxHitRender);

      var _event = __webpack_require__(7);

      var _event2 = _interopRequireDefault(_event);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var WeStage = function (_Group) {
        _inherits(WeStage, _Group);

        function WeStage(width, height, id, page) {
          _classCallCheck(this, WeStage);

          var _this = _possibleConstructorReturn(this, (WeStage.__proto__ || Object.getPrototypeOf(WeStage)).call(this));

          var component = page.selectComponent('#' + id);
          component.setData({
            width: width,
            height: height
          });
          component.stage = _this;
          var canvasId = component.getCaxCanvasId();

          var ctx = wx.createCanvasContext(canvasId, component);
          var hitCtx = wx.createCanvasContext(canvasId + 'Hit', component);
          _this.renderer = new _renderer2.default(ctx, width, height);
          _this._hitRender = new _wxHitRender2.default(hitCtx, component, canvasId);
          _this._overObject = null;
          _this.ctx = ctx;
          _this.hitAABB = true;
          _this.width = width;
          _this.height = height;
          return _this;
        }

        _createClass(WeStage, [{
          key: 'touchStartHandler',
          value: function touchStartHandler(evt) {
            var _this2 = this;

            var p1 = evt.changedTouches[0];

            evt.stageX = p1.x;
            evt.stageY = p1.y;

            this._getObjectUnderPoint(evt, function (obj) {
              _this2.willDragObject = obj;
              _this2._mouseDownX = evt.stageX;
              _this2._mouseDownY = evt.stageY;
              _this2.preStageX = evt.stageX;
              _this2.preStageY = evt.stageY;
            });
          }
        }, {
          key: 'touchMoveHandler',
          value: function touchMoveHandler(evt) {
            var _this3 = this;

            var p1 = evt.changedTouches[0];

            evt.stageX = p1.x;
            evt.stageY = p1.y;

            this._getObjectUnderPoint(evt, function (obj) {
              var mockEvt = new _event2.default();
              mockEvt.stageX = evt.stageX;
              mockEvt.stageY = evt.stageY;
              mockEvt.pureEvent = evt;

              if (_this3.willDragObject) {
                mockEvt.type = 'drag';
                mockEvt.dx = mockEvt.stageX - _this3.preStageX;
                mockEvt.dy = mockEvt.stageY - _this3.preStageY;
                _this3.preStageX = mockEvt.stageX;
                _this3.preStageY = mockEvt.stageY;
                _this3.willDragObject.dispatchEvent(mockEvt);
              }

              if (obj) {
                if (_this3._overObject === null) {
                  _this3._overObject = obj;
                } else {
                  if (obj.id !== _this3._overObject.id) {
                    _this3._overObject = obj;
                  } else {
                    mockEvt.type = 'touchmove';
                    obj.dispatchEvent(mockEvt);
                  }
                }
              } else if (_this3._overObject) {
                _this3._overObject = null;
              }
            });
          }
        }, {
          key: 'touchEndHandler',
          value: function touchEndHandler(evt) {
            var _this4 = this;

            var p1 = evt.changedTouches[0];

            evt.stageX = p1.x;
            evt.stageY = p1.y;

            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;

            mockEvt.pureEvent = evt;

            this._getObjectUnderPoint(evt, function (obj) {
              _this4._mouseUpX = evt.stageX;
              _this4._mouseUpY = evt.stageY;

              _this4.willDragObject = null;
              _this4.preStageX = null;
              _this4.preStageY = null;

              if (obj && Math.abs(_this4._mouseDownX - _this4._mouseUpX) < 30 && Math.abs(_this4._mouseDownY - _this4._mouseUpY) < 30) {
                mockEvt.type = 'tap';
                obj.dispatchEvent(mockEvt);
              }
            });
          }
        }, {
          key: '_handleMouseOut',
          value: function _handleMouseOut(evt) {
            this.dispatchEvent({
              pureEvent: evt,
              type: 'mouseout',
              stageX: evt.stageX,
              stageY: evt.stageY
            });
          }
        }, {
          key: '_getObjectUnderPoint',
          value: function _getObjectUnderPoint(evt, cb) {
            var list = this.renderer.getHitRenderList(this);
            if (this.hitAABB) {
              return this._hitRender.hitAABB(list, evt, cb);
            } else {
              this._hitRender.clear();
              this._hitRender.hit(list, evt, cb, list.length - 1);
            }
          }
        }, {
          key: 'update',
          value: function update() {
            this.renderer.update(this);
          }
        }]);

        return WeStage;
      }(_group2.default);

      exports.default = WeStage;

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var RoundedRect = function (_Shape) {
        _inherits(RoundedRect, _Shape);

        function RoundedRect(width, height, r, option) {
          _classCallCheck(this, RoundedRect);

          var _this = _possibleConstructorReturn(this, (RoundedRect.__proto__ || Object.getPrototypeOf(RoundedRect)).call(this));

          _this.option = Object.assign({
            lineWidth: 1
          }, option);
          _this.r = r || 0;
          _this.width = width;
          _this.height = height;
          return _this;
        }

        _createClass(RoundedRect, [{
          key: 'draw',
          value: function draw() {
            var width = this.width,
                height = this.height,
                r = this.r;

            var ax = r,
                ay = 0,
                bx = width,
                by = 0,
                cx = width,
                cy = height,
                dx = 0,
                dy = height,
                ex = 0,
                ey = 0;

            this.beginPath();

            this.moveTo(ax, ay);
            this.arcTo(bx, by, cx, cy, r);
            this.arcTo(cx, cy, dx, dy, r);
            this.arcTo(dx, dy, ex, ey, r);
            this.arcTo(ex, ey, ax, ay, r);

            if (this.option.fillStyle) {
              this.closePath();
              this.fillStyle(this.option.fillStyle);
              this.fill();
            }

            if (this.option.strokeStyle) {
              this.lineWidth(this.option.lineWidth);
              this.strokeStyle(this.option.strokeStyle);
              this.stroke();
            }
          }
        }]);

        return RoundedRect;
      }(_shape2.default);

      exports.default = RoundedRect;

      /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _tween = __webpack_require__(10);

      var _tween2 = _interopRequireDefault(_tween);

      var _to = __webpack_require__(11);

      var _to2 = _interopRequireDefault(_to);

      __webpack_require__(18);

      var _stage = __webpack_require__(19);

      var _stage2 = _interopRequireDefault(_stage);

      var _weStage = __webpack_require__(14);

      var _weStage2 = _interopRequireDefault(_weStage);

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _sprite = __webpack_require__(6);

      var _sprite2 = _interopRequireDefault(_sprite);

      var _roundedRect = __webpack_require__(15);

      var _roundedRect2 = _interopRequireDefault(_roundedRect);

      var _arrowPath = __webpack_require__(32);

      var _arrowPath2 = _interopRequireDefault(_arrowPath);

      var _ellipse = __webpack_require__(33);

      var _ellipse2 = _interopRequireDefault(_ellipse);

      var _path = __webpack_require__(34);

      var _path2 = _interopRequireDefault(_path);

      var _button = __webpack_require__(37);

      var _button2 = _interopRequireDefault(_button);

      var _rect = __webpack_require__(38);

      var _rect2 = _interopRequireDefault(_rect);

      var _circle = __webpack_require__(39);

      var _circle2 = _interopRequireDefault(_circle);

      var _polygon = __webpack_require__(40);

      var _polygon2 = _interopRequireDefault(_polygon);

      var _equilateralPolygon = __webpack_require__(41);

      var _equilateralPolygon2 = _interopRequireDefault(_equilateralPolygon);

      var _rafInterval = __webpack_require__(12);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      _to2.default.easing = {
        linear: _tween2.default.Easing.Linear.None
      };

      var cax = {
        easing: {
          linear: _tween2.default.Easing.Linear.None
        },
        util: {
          randomInt: function randomInt(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
          }
        },

        Stage: _stage2.default,
        WeStage: _weStage2.default,
        Graphics: _graphics2.default,
        Bitmap: _bitmap2.default,
        Text: _text2.default,
        Group: _group2.default,
        Sprite: _sprite2.default,
        ArrowPath: _arrowPath2.default,
        Ellipse: _ellipse2.default,
        Path: _path2.default,

        Button: _button2.default,

        RoundedRect: _roundedRect2.default,
        Rect: _rect2.default,
        Circle: _circle2.default,
        Polygon: _polygon2.default,
        EquilateralPolygon: _equilateralPolygon2.default,

        setInterval: _rafInterval.setRafInterval,
        clearInterval: _rafInterval.clearRafInterval,
        tick: function tick(fn) {
          return (0, _rafInterval.setRafInterval)(fn, 16);
        },
        untick: function untick(tickId) {
          (0, _rafInterval.clearRafInterval)(tickId);
        },

        caxCanvasId: 0,
        TWEEN: _tween2.default,
        To: _to2.default
      };

      ['Quadratic', 'Cubic', 'Quartic', 'Quintic', 'Sinusoidal', 'Exponential', 'Circular', 'Elastic', 'Back', 'Bounce'].forEach(function (item) {
        var itemLower = item.toLowerCase();
        cax.easing[itemLower + 'In'] = _tween2.default.Easing[item].In;
        cax.easing[itemLower + 'Out'] = _tween2.default.Easing[item].Out;
        cax.easing[itemLower + 'InOut'] = _tween2.default.Easing[item].InOut;

        _to2.default.easing[itemLower + 'In'] = _tween2.default.Easing[item].In;
        _to2.default.easing[itemLower + 'Out'] = _tween2.default.Easing[item].Out;
        _to2.default.easing[itemLower + 'InOut'] = _tween2.default.Easing[item].InOut;
      });

      module.exports = cax;

      /***/
    },
    /* 17 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _to = __webpack_require__(11);

      var _to2 = _interopRequireDefault(_to);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      _to2.default.extend('rubber', [['to', ['scaleX', {
        '0': 1.25,
        '1': 300
      }], ['scaleY', {
        '0': 0.75,
        '1': 300
      }]], ['to', ['scaleX', {
        '0': 0.75,
        '1': 100
      }], ['scaleY', {
        '0': 1.25,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 1.15,
        '1': 100
      }], ['scaleY', {
        '0': 0.85,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 0.95,
        '1': 150
      }], ['scaleY', {
        '0': 1.05,
        '1': 150
      }]], ['to', ['scaleX', {
        '0': 1.05,
        '1': 100
      }], ['scaleY', {
        '0': 0.95,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 1,
        '1': 250
      }], ['scaleY', {
        '0': 1,
        '1': 250
      }]]]);

      _to2.default.extend('bounceIn', [['to', ['scaleX', {
        '0': 0,
        '1': 0
      }], ['scaleY', {
        '0': 0,
        '1': 0
      }]], ['to', ['scaleX', {
        '0': 1.35,
        '1': 200
      }], ['scaleY', {
        '0': 1.35,
        '1': 200
      }]], ['to', ['scaleX', {
        '0': 0.9,
        '1': 100
      }], ['scaleY', {
        '0': 0.9,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 1.1,
        '1': 100
      }], ['scaleY', {
        '0': 1.1,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 0.95,
        '1': 100
      }], ['scaleY', {
        '0': 0.95,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 1,
        '1': 100
      }], ['scaleY', {
        '0': 1,
        '1': 100
      }]]]);

      _to2.default.extend('flipInX', [['to', ['rotateX', {
        '0': -90,
        '1': 0
      }]], ['to', ['rotateX', {
        '0': 20,
        '1': 300
      }]], ['to', ['rotateX', {
        '0': -20,
        '1': 300
      }]], ['to', ['rotateX', {
        '0': 10,
        '1': 300
      }]], ['to', ['rotateX', {
        '0': -5,
        '1': 300
      }]], ['to', ['rotateX', {
        '0': 0,
        '1': 300
      }]]]);

      _to2.default.extend('zoomOut', [['to', ['scaleX', {
        '0': 0,
        '1': 400
      }], ['scaleY', {
        '0': 0,
        '1': 400
      }]]]);

      /***/
    },
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _wegameCanvas = __webpack_require__(20);

      var _wegameCanvas2 = _interopRequireDefault(_wegameCanvas);

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _renderer = __webpack_require__(13);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _hitRender = __webpack_require__(30);

      var _hitRender2 = _interopRequireDefault(_hitRender);

      var _event = __webpack_require__(7);

      var _event2 = _interopRequireDefault(_event);

      var _weStage = __webpack_require__(14);

      var _weStage2 = _interopRequireDefault(_weStage);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Stage = function (_Group) {
        _inherits(Stage, _Group);

        function Stage(width, height, renderTo) {
          _classCallCheck(this, Stage);

          var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this));

          var len = arguments.length;
          _this.isWegame = typeof wx !== 'undefined' && wx.createCanvas;
          if (len === 0) {
            // wegame
            _this.canvas = _wegameCanvas2.default;
            _this.disableMoveDetection = true;
          } else if (len === 4) {
            var _ret;

            // weapp
            return _ret = new _weStage2.default(arguments[0], arguments[1], arguments[2], arguments[3]), _possibleConstructorReturn(_this, _ret);
          } else {
            if (len === 1) {
              _this.canvas = typeof width === 'string' ? document.querySelector(width) : width;
            } else {
              _this.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo;
              if (_this.renderTo.tagName === 'CANVAS') {
                _this.canvas = _this.renderTo;
                _this.canvas.width = width;
                _this.canvas.height = height;
              } else {
                _this.canvas = document.createElement('canvas');
                _this.canvas.width = width;
                _this.canvas.height = height;
                _this.renderTo.appendChild(_this.canvas);
              }
            }
            // get rect again when trigger onscroll onresize event!?
            _this._boundingClientRect = _this.canvas.getBoundingClientRect();

            _this.offset = _this._getOffset(_this.canvas);
          }
          _this.renderer = new _renderer2.default(_this.canvas);
          if (_this.isWegame) {
            wx.onTouchStart(function (evt) {
              return _this._handleMouseDown(evt);
            });

            wx.onTouchMove(function (evt) {
              return _this._handleMouseMove(evt);
            });

            wx.onTouchEnd(function (evt) {
              return _this._handleMouseUp(evt);
            });
          } else {
            _this.canvas.addEventListener('click', function (evt) {
              return _this._handleClick(evt);
            });
            _this.canvas.addEventListener('mousedown', function (evt) {
              return _this._handleMouseDown(evt);
            });
            _this.canvas.addEventListener('mousemove', function (evt) {
              return _this._handleMouseMove(evt);
            });
            _this.canvas.addEventListener('mouseup', function (evt) {
              return _this._handleMouseUp(evt);
            });
            _this.canvas.addEventListener('mouseout', function (evt) {
              return _this._handleMouseOut(evt);
            });
            _this.canvas.addEventListener('touchstart', function (evt) {
              return _this._handleMouseDown(evt);
            });
            _this.canvas.addEventListener('touchmove', function (evt) {
              return _this._handleMouseMove(evt);
            });
            _this.canvas.addEventListener('touchend', function (evt) {
              return _this._handleMouseUp(evt);
            });

            _this.canvas.addEventListener('dblclick', function (evt) {
              return _this._handlDblClick(evt);
            });
            // this.addEvent(this.canvas, "mousewheel", this._handleMouseWheel.bind(this));
          }

          _this.borderTopWidth = 0;
          _this.borderLeftWidth = 0;

          _this.hitAABB = false;
          _this._hitRender = new _hitRender2.default();

          _this._overObject = null;

          _this._scaleX = 1;
          _this._scaleY = 1;

          _this._mouseDownX = 0;
          _this._mouseDownY = 0;

          _this._mouseUpX = 0;
          _this._mouseUpY = 0;

          _this.willDragObject = null;
          _this.preStageX = null;
          _this.preStageY = null;

          _this.width = _this.canvas.width;
          _this.height = _this.canvas.height;
          return _this;
        }

        _createClass(Stage, [{
          key: '_handlDblClick',
          value: function _handlDblClick(evt) {
            this._getObjectUnderPoint(evt);
          }
        }, {
          key: '_handleClick',
          value: function _handleClick(evt) {
            if (Math.abs(this._mouseDownX - this._mouseUpX) < 20 && Math.abs(this._mouseDownY - this._mouseUpY) < 20) {
              this._getObjectUnderPoint(evt);
            }
          }
        }, {
          key: '_handleMouseDown',
          value: function _handleMouseDown(evt) {
            this.offset = this._getOffset(this.canvas);
            var obj = this._getObjectUnderPoint(evt);
            this.willDragObject = obj;
            this._mouseDownX = evt.stageX;
            this._mouseDownY = evt.stageY;
            this.preStageX = evt.stageX;
            this.preStageY = evt.stageY;
          }
        }, {
          key: 'scaleEventPoint',
          value: function scaleEventPoint(x, y) {
            this._scaleX = x;
            this._scaleY = y;
          }
        }, {
          key: '_handleMouseUp',
          value: function _handleMouseUp(evt) {
            var obj = this._getObjectUnderPoint(evt);
            this._mouseUpX = evt.stageX;
            this._mouseUpY = evt.stageY;

            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.pureEvent = evt;

            this.willDragObject = null;
            this.preStageX = null;
            this.preStageY = null;

            if (obj && Math.abs(this._mouseDownX - this._mouseUpX) < 30 && Math.abs(this._mouseDownY - this._mouseUpY) < 30) {
              mockEvt.type = 'tap';
              obj.dispatchEvent(mockEvt);
            }
          }
        }, {
          key: '_handleMouseOut',
          value: function _handleMouseOut(evt) {
            this._computeStageXY(evt);
            this.dispatchEvent({
              pureEvent: evt,
              type: 'mouseout',
              stageX: evt.stageX,
              stageY: evt.stageY
            });
          }
        }, {
          key: '_handleMouseMove',
          value: function _handleMouseMove(evt) {
            if (this.disableMoveDetection) return;
            var obj = this._getObjectUnderPoint(evt);
            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.pureEvent = evt;

            if (this.willDragObject) {
              mockEvt.type = 'drag';
              mockEvt.dx = mockEvt.stageX - this.preStageX;
              mockEvt.dy = mockEvt.stageY - this.preStageY;
              this.preStageX = mockEvt.stageX;
              this.preStageY = mockEvt.stageY;
              this.willDragObject.dispatchEvent(mockEvt);
            }

            if (obj) {
              if (this._overObject === null) {
                mockEvt.type = 'mouseover';
                obj.dispatchEvent(mockEvt);
                this._overObject = obj;
                this._setCursor(obj);
              } else {
                if (obj.id !== this._overObject.id) {
                  this._overObject.dispatchEvent({
                    pureEvent: evt,
                    type: 'mouseout',
                    stageX: evt.stageX,
                    stageY: evt.stageY
                  });
                  mockEvt.type = 'mouseover';
                  obj.dispatchEvent(mockEvt);
                  this._setCursor(obj);
                  this._overObject = obj;
                } else {
                  mockEvt.type = 'mousemove';
                  obj.dispatchEvent(mockEvt);
                  mockEvt.type = 'touchmove';
                  obj.dispatchEvent(mockEvt);
                }
              }
            } else if (this._overObject) {
              mockEvt.type = 'mouseout';
              this._overObject.dispatchEvent(mockEvt);
              this._overObject = null;
              this._setCursor({ cursor: 'default' });
            }
          }
        }, {
          key: '_setCursor',
          value: function _setCursor(obj) {
            if (obj.cursor) {
              this.canvas.style.cursor = obj.cursor;
            } else if (obj.parent) {
              this._setCursor(obj.parent);
            }
          }
        }, {
          key: '_getObjectUnderPoint',
          value: function _getObjectUnderPoint(evt) {
            this._computeStageXY(evt);
            if (this.hitAABB) {
              return this._hitRender.hitAABB(this, evt);
            } else {
              return this._hitRender.hitPixel(this, evt);
            }
          }
        }, {
          key: '_computeStageXY',
          value: function _computeStageXY(evt) {
            this._boundingClientRect = this.isWegame ? { left: 0, top: 0 } : this.canvas.getBoundingClientRect();
            if (evt.touches || evt.changedTouches) {
              var firstTouch = evt.touches[0] || evt.changedTouches[0];
              if (firstTouch) {
                evt.stageX = (firstTouch.pageX - this.offset[0]) / this._scaleX;
                evt.stageY = (firstTouch.pageY - this.offset[1]) / this._scaleY;
              }
            } else {
              evt.stageX = (evt.clientX - this._boundingClientRect.left - this.borderLeftWidth) / this._scaleX;
              evt.stageY = (evt.clientY - this._boundingClientRect.top - this.borderTopWidth) / this._scaleY;
            }
          }
        }, {
          key: '_getOffset',
          value: function _getOffset(el) {
            if (this.isWegame) {
              return [0, 0];
            }
            var _t = 0,
                _l = 0;
            if (document.documentElement.getBoundingClientRect && el.getBoundingClientRect) {
              var box = el.getBoundingClientRect();
              _l = box.left;
              _t = box.top;
            } else {
              while (el.offsetParent) {
                _t += el.offsetTop;
                _l += el.offsetLeft;
                el = el.offsetParent;
              }
              return [_l, _t];
            }
            return [_l + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), _t + Math.max(document.documentElement.scrollTop, document.body.scrollTop)];
          }
        }, {
          key: 'update',
          value: function update() {
            this.renderer.update(this);
          }
        }, {
          key: 'on',
          value: function on(type, fn) {
            var _this2 = this;

            this.canvas.addEventListener(type, function (evt) {
              _this2._computeStageXY(evt);
              fn(evt);
            });
          }
        }, {
          key: 'off',
          value: function off(type, fn) {
            this.canvas.removeEventListener(type, fn);
          }
        }]);

        return Stage;
      }(_group2.default);

      exports.default = Stage;

      /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var wegameCanvas = null;
      if (typeof wx !== 'undefined' && wx.createCanvas) {
        wegameCanvas = wx.createCanvas();
      }

      exports.default = wegameCanvas;

      /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var DEG_TO_RAD = 0.017453292519943295;

      var Matrix2D = function () {
        function Matrix2D(a, b, c, d, tx, ty) {
          _classCallCheck(this, Matrix2D);

          this.a = a == null ? 1 : a;
          this.b = b || 0;
          this.c = c || 0;
          this.d = d == null ? 1 : d;
          this.tx = tx || 0;
          this.ty = ty || 0;
          return this;
        }

        _createClass(Matrix2D, [{
          key: "identity",
          value: function identity() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this;
          }
        }, {
          key: "appendTransform",
          value: function appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
            if (rotation % 360) {
              var r = rotation * DEG_TO_RAD;
              var cos = Math.cos(r);
              var sin = Math.sin(r);
            } else {
              cos = 1;
              sin = 0;
            }
            if (skewX || skewY) {
              skewX *= DEG_TO_RAD;
              skewY *= DEG_TO_RAD;
              this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
              this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
            } else {
              this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
            }
            if (originX || originY) {
              this.tx -= originX * this.a + originY * this.c;
              this.ty -= originX * this.b + originY * this.d;
            }
            return this;
          }
        }, {
          key: "append",
          value: function append(a, b, c, d, tx, ty) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            this.a = a * a1 + b * c1;
            this.b = a * b1 + b * d1;
            this.c = c * a1 + d * c1;
            this.d = c * b1 + d * d1;
            this.tx = tx * a1 + ty * c1 + this.tx;
            this.ty = tx * b1 + ty * d1 + this.ty;
            return this;
          }
        }, {
          key: "initialize",
          value: function initialize(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            return this;
          }
        }, {
          key: "setValues",
          value: function setValues(a, b, c, d, tx, ty) {
            this.a = a == null ? 1 : a;
            this.b = b || 0;
            this.c = c || 0;
            this.d = d == null ? 1 : d;
            this.tx = tx || 0;
            this.ty = ty || 0;
            return this;
          }
        }, {
          key: "invert",
          value: function invert() {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;

            this.a = d1 / n;
            this.b = -b1 / n;
            this.c = -c1 / n;
            this.d = a1 / n;
            this.tx = (c1 * this.ty - d1 * tx1) / n;
            this.ty = -(a1 * this.ty - b1 * tx1) / n;
            return this;
          }
        }, {
          key: "copy",
          value: function copy(matrix) {
            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
          }
        }]);

        return Matrix2D;
      }();

      exports.default = Matrix2D;

      /***/
    },
    /* 22 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var MOUSEOUT = 'mouseout';

      var EventDispatcher = function () {
        function EventDispatcher() {
          _classCallCheck(this, EventDispatcher);

          this._listeners = null;
          this._captureListeners = null;
        }

        _createClass(EventDispatcher, [{
          key: 'addEventListener',
          value: function addEventListener(type, listener, useCapture) {
            var listeners;
            if (useCapture) {
              listeners = this._captureListeners = this._captureListeners || {};
            } else {
              listeners = this._listeners = this._listeners || {};
            }
            var arr = listeners[type];
            if (arr) {
              this.removeEventListener(type, listener, useCapture);
            }
            arr = listeners[type]; // remove may have deleted the array
            if (!arr) {
              listeners[type] = [listener];
            } else {
              arr.push(listener);
            }
            return listener;
          }
        }, {
          key: 'removeEventListener',
          value: function removeEventListener(type, listener, useCapture) {
            var listeners = useCapture ? this._captureListeners : this._listeners;
            if (!listeners) {
              return;
            }
            var arr = listeners[type];
            if (!arr) {
              return;
            }

            arr.every(function (item, index) {
              if (item === listener) {
                arr.splice(index, 1);
                return false;
              }
              return true;
            });
          }
        }, {
          key: 'on',
          value: function on(type, listener, useCapture) {
            this.addEventListener(type, listener, useCapture);
          }
        }, {
          key: 'off',
          value: function off(type, listener, useCapture) {
            this.removeEventListener(type, listener, useCapture);
          }
        }, {
          key: 'dispatchEvent',
          value: function dispatchEvent(evt) {
            if (evt.type === MOUSEOUT || !this.parent) {
              this._dispatchEvent(evt, 0);
              this._dispatchEvent(evt, 1);
            } else {
              var top = this,
                  list = [top];
              while (top.parent) {
                list.push(top = top.parent);
              }
              var i,
                  l = list.length;

              // capture & atTarget
              for (i = l - 1; i >= 0 && !evt.propagationStopped; i--) {
                list[i]._dispatchEvent(evt, 0);
              }
              // bubbling
              for (i = 0; i < l && !evt.propagationStopped; i++) {
                list[i]._dispatchEvent(evt, 1);
              }
            }
          }
        }, {
          key: '_dispatchEvent',
          value: function _dispatchEvent(evt, type) {
            var _this = this;

            evt.target = this;
            if (this._captureListeners && type === 0) {
              var cls = this._captureListeners[evt.type];
              cls && cls.forEach(function (fn) {
                fn.call(_this, evt);
              });
            }

            if (this._listeners && type === 1) {
              var ls = this._listeners[evt.type];
              ls && ls.forEach(function (fn) {
                fn.call(_this, evt);
              });
            }
          }
        }]);

        return EventDispatcher;
      }();

      exports.default = EventDispatcher;

      /***/
    },
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var UID = {};

      UID._nextID = 0;

      UID.get = function () {
        return UID._nextID++;
      };

      exports.default = UID;

      /***/
    },
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      var _render2 = __webpack_require__(8);

      var _render3 = _interopRequireDefault(_render2);

      var _sprite = __webpack_require__(6);

      var _sprite2 = _interopRequireDefault(_sprite);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      var _index = __webpack_require__(26);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var CanvasRender = function (_Render) {
        _inherits(CanvasRender, _Render);

        function CanvasRender(canvasOrContext, width, height) {
          _classCallCheck(this, CanvasRender);

          var _this = _possibleConstructorReturn(this, (CanvasRender.__proto__ || Object.getPrototypeOf(CanvasRender)).call(this));

          if (arguments.length === 3) {
            _this.ctx = canvasOrContext;
            _this.width = width;
            _this.height = height;
          } else {
            _this.ctx = canvasOrContext.getContext('2d');
            _this.width = canvasOrContext.width;
            _this.height = canvasOrContext.height;
          }
          return _this;
        }

        _createClass(CanvasRender, [{
          key: 'clear',
          value: function clear(ctx, width, height) {
            //restore cache cavans transform
            ctx.restore();

            ctx.clearRect(0, 0, width, height);
          }
        }, {
          key: 'render',
          value: function render(ctx, o, cacheRender) {
            var mtx = o._matrix;
            if (o.children) {
              var list = o.children.slice(0),
                  l = list.length;
              for (var i = 0; i < l; i++) {
                var child = list[i];
                mtx.initialize(1, 0, 0, 1, 0, 0);
                mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
                // if (!this.checkBoundEvent(child)) continue
                ctx.save();
                this._render(ctx, child, cacheRender ? null : mtx, cacheRender);
                ctx.restore();
              }
            } else {
              this._render(ctx, o, mtx, cacheRender);
            }
          }
        }, {
          key: '_render',
          value: function _render(ctx, o, mtx, cacheRender) {
            if (!o.isVisible()) return;
            if (mtx && !o.fixed) {
              o._matrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            } else {
              o._matrix.initialize(1, 0, 0, 1, 0, 0);
            }
            mtx = o._matrix;

            if (!cacheRender) {
              mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
            }
            var ocg = o.clipGraphics;
            if (ocg) {
              ctx.beginPath();
              ocg._matrix.copy(mtx);
              ocg._matrix.appendTransform(ocg.x, ocg.y, ocg.scaleX, ocg.scaleY, ocg.rotation, ocg.skewX, ocg.skewY, ocg.originX, ocg.originY);
              ctx.setTransform(ocg._matrix.a, ocg._matrix.b, ocg._matrix.c, ocg._matrix.d, ocg._matrix.tx, ocg._matrix.ty);
              ocg.render(ctx);
              ctx.clip(o.clipRuleNonzero ? 'nonzero' : 'evenodd');
            }

            o.complexCompositeOperation = ctx.globalCompositeOperation = this.getCompositeOperation(o);
            o.complexAlpha = ctx.globalAlpha = this.getAlpha(o, 1);
            if (!cacheRender) {
              ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            }
            if (o._readyToCache) {
              o._readyToCache = false;
              o.cacheCtx.setTransform(o._cacheData.scale, 0, 0, o._cacheData.scale, o._cacheData.x * -1, o._cacheData.y * -1);
              this.render(o.cacheCtx, o, true);
              //debug cacheCanvas
              //document.body.appendChild(o.cacheCanvas)
              if (o._readyToFilter) {
                o.cacheCtx.putImageData((0, _index.filter)(o.cacheCtx.getImageData(0, 0, o.cacheCanvas.width, o.cacheCanvas.height), o._filterName), 0, 0);
                this._readyToFilter = false;
              }

              ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
            } else if (o.cacheCanvas && !cacheRender) {
              ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
            } else if (o instanceof _group2.default) {
              var list = o.children.slice(0),
                  l = list.length;
              for (var i = 0; i < l; i++) {
                ctx.save();
                var target = this._render(ctx, list[i], mtx);
                if (target) return target;
                ctx.restore();
              }
            } else if (o instanceof _graphics2.default) {
              o.render(ctx);
            } else if (o instanceof _sprite2.default && o.rect) {
              o.updateFrame();
              var rect = o.rect;
              ctx.drawImage(o.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
            } else if (o instanceof _bitmap2.default && o.rect) {
              var bRect = o.rect;
              ctx.drawImage(o.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
            } else if (o instanceof _text2.default) {
              ctx.font = o.font;
              ctx.fillStyle = o.color;
              ctx.textBaseline = o.baseline;
              ctx.fillText(o.text, 0, 0);
            }
          }
        }, {
          key: 'getCompositeOperation',
          value: function getCompositeOperation(o) {
            if (o.compositeOperation) return o.compositeOperation;
            if (o.parent) return this.getCompositeOperation(o.parent);
          }
        }, {
          key: 'getAlpha',
          value: function getAlpha(o, alpha) {
            var result = o.alpha * alpha;
            if (o.parent) {
              return this.getAlpha(o.parent, result);
            }
            return result;
          }
        }]);

        return CanvasRender;
      }(_render3.default);

      exports.default = CanvasRender;

      /***/
    },
    /* 25 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.filter = filter;

      var _invert = __webpack_require__(27);

      var _blur = __webpack_require__(28);

      function filter(pixels, name) {

        if (name.indexOf('invert(') === 0) {
          return (0, _invert.invert)(pixels, Number(name.replace('invert(', '').replace('%)', '')) / 100);
        } else if (name.indexOf('blur(') === 0) {
          return (0, _blur.blur)(pixels, Number(name.replace('blur(', '').replace('px)', '')));
        }
      }

      /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.invert = invert;
      function invert(pixels, ratio) {

        var d = pixels.data;
        ratio = ratio === undefined ? 1 : ratio;
        for (var i = 0; i < d.length; i += 4) {
          d[i] = d[i] + ratio * (255 - 2 * d[i]);
          d[i + 1] = d[i + 1] + ratio * (255 - 2 * d[i + 1]);
          d[i + 2] = d[i + 2] + ratio * (255 - 2 * d[i + 2]);
          d[i + 3] = d[i + 3];
        }
        return pixels;
      }

      /***/
    },
    /* 28 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.blur = blur;

      var _createImageData = __webpack_require__(29);

      function blur(pixels, diameter) {
        diameter = Math.abs(diameter);
        if (diameter <= 1) return pixels;
        var radius = diameter / 2;
        var len = Math.ceil(diameter) + (1 - Math.ceil(diameter) % 2);
        var weights = new Float32Array(len);
        var rho = (radius + 0.5) / 3;
        var rhoSq = rho * rho;
        var gaussianFactor = 1 / Math.sqrt(2 * Math.PI * rhoSq);
        var rhoFactor = -1 / (2 * rho * rho);
        var wsum = 0;
        var middle = Math.floor(len / 2);
        for (var i = 0; i < len; i++) {
          var x = i - middle;
          var gx = gaussianFactor * Math.exp(x * x * rhoFactor);
          weights[i] = gx;
          wsum += gx;
        }
        for (var i = 0; i < weights.length; i++) {
          weights[i] /= wsum;
        }
        return separableConvolve(pixels, weights, weights, false);
      }

      function separableConvolve(pixels, horizWeights, vertWeights, opaque) {
        return horizontalConvolve(verticalConvolve(pixels, vertWeights, opaque), horizWeights, opaque);
      }

      function horizontalConvolve(pixels, weightsVector, opaque) {
        var side = weightsVector.length;
        var halfSide = Math.floor(side / 2);

        var src = pixels.data;
        var sw = pixels.width;
        var sh = pixels.height;

        var w = sw;
        var h = sh;
        var output = (0, _createImageData.createImageData)(w, h);
        var dst = output.data;

        var alphaFac = opaque ? 1 : 0;

        for (var y = 0; y < h; y++) {
          for (var x = 0; x < w; x++) {
            var sy = y;
            var sx = x;
            var dstOff = (y * w + x) * 4;
            var r = 0,
                g = 0,
                b = 0,
                a = 0;
            for (var cx = 0; cx < side; cx++) {
              var scy = sy;
              var scx = Math.min(sw - 1, Math.max(0, sx + cx - halfSide));
              var srcOff = (scy * sw + scx) * 4;
              var wt = weightsVector[cx];
              r += src[srcOff] * wt;
              g += src[srcOff + 1] * wt;
              b += src[srcOff + 2] * wt;
              a += src[srcOff + 3] * wt;
            }
            dst[dstOff] = r;
            dst[dstOff + 1] = g;
            dst[dstOff + 2] = b;
            dst[dstOff + 3] = a + alphaFac * (255 - a);
          }
        }
        return output;
      }

      function verticalConvolve(pixels, weightsVector, opaque) {
        var side = weightsVector.length;
        var halfSide = Math.floor(side / 2);

        var src = pixels.data;
        var sw = pixels.width;
        var sh = pixels.height;

        var w = sw;
        var h = sh;
        var output = (0, _createImageData.createImageData)(w, h);
        var dst = output.data;

        var alphaFac = opaque ? 1 : 0;

        for (var y = 0; y < h; y++) {
          for (var x = 0; x < w; x++) {
            var sy = y;
            var sx = x;
            var dstOff = (y * w + x) * 4;
            var r = 0,
                g = 0,
                b = 0,
                a = 0;
            for (var cy = 0; cy < side; cy++) {
              var scy = Math.min(sh - 1, Math.max(0, sy + cy - halfSide));
              var scx = sx;
              var srcOff = (scy * sw + scx) * 4;
              var wt = weightsVector[cy];
              r += src[srcOff] * wt;
              g += src[srcOff + 1] * wt;
              b += src[srcOff + 2] * wt;
              a += src[srcOff + 3] * wt;
            }
            dst[dstOff] = r;
            dst[dstOff + 1] = g;
            dst[dstOff + 2] = b;
            dst[dstOff + 3] = a + alphaFac * (255 - a);
          }
        }
        return output;
      };

      /***/
    },
    /* 29 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createImageData = createImageData;
      var tmpCtx = null;

      if (typeof document != 'undefined') {
        tmpCtx = document.createElement('canvas').getContext('2d');
      } else if (typeof wx !== 'undefined' && wx.createCanvas) {
        tmpCtx = wx.createCanvas().getContext('2d');
      }

      function createImageData(w, h) {
        return tmpCtx.createImageData(w, h);
      }

      /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      var _render = __webpack_require__(8);

      var _render2 = _interopRequireDefault(_render);

      var _event = __webpack_require__(7);

      var _event2 = _interopRequireDefault(_event);

      var _sprite = __webpack_require__(6);

      var _sprite2 = _interopRequireDefault(_sprite);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var HitRender = function (_Render) {
        _inherits(HitRender, _Render);

        function HitRender() {
          _classCallCheck(this, HitRender);

          var _this = _possibleConstructorReturn(this, (HitRender.__proto__ || Object.getPrototypeOf(HitRender)).call(this));

          if (typeof wx !== 'undefined' && wx.createCanvas) {
            _this.canvas = wx.createCanvas();
          } else {
            _this.canvas = document.createElement('canvas');
          }

          _this.canvas.width = 1;
          _this.canvas.height = 1;
          _this.ctx = _this.canvas.getContext('2d');

          // debug event
          // this.canvas.width = 441
          // this.canvas.height = 441
          // this.ctx = this.canvas.getContext('2d')
          // document.body.appendChild(this.canvas)

          _this.disableEvents = ['mouseover', 'mouseout', 'mousemove', 'touchmove'];
          return _this;
        }

        _createClass(HitRender, [{
          key: 'clear',
          value: function clear() {
            this.ctx.clearRect(0, 0, this.width, this.height);
          }
        }, {
          key: 'hitAABB',
          value: function hitAABB(o, evt) {
            var list = o.children.slice(0),
                l = list.length;
            for (var i = l - 1; i >= 0; i--) {
              var child = list[i];
              // if (!this.isbindingEvent(child)) continue;
              var target = this._hitAABB(child, evt);
              if (target) return target;
            }
          }
        }, {
          key: '_hitAABB',
          value: function _hitAABB(o, evt) {
            if (!o.isVisible()) {
              return;
            }
            if (o instanceof _group2.default) {
              var list = o.children.slice(0),
                  l = list.length;
              for (var i = l - 1; i >= 0; i--) {
                var child = list[i];
                var target = this._hitAABB(child, evt);
                if (target) return target;
              }
            } else {
              if (o.AABB && this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
                // this._bubbleEvent(o, type, evt);
                this._dispatchEvent(o, evt);
                return o;
              }
            }
          }
        }, {
          key: 'checkPointInAABB',
          value: function checkPointInAABB(x, y, AABB) {
            var minX = AABB[0];
            if (x < minX) return false;
            var minY = AABB[1];
            if (y < minY) return false;
            var maxX = minX + AABB[2];
            if (x > maxX) return false;
            var maxY = minY + AABB[3];
            if (y > maxY) return false;
            return true;
          }
        }, {
          key: 'hitPixel',
          value: function hitPixel(o, evt) {
            var ctx = this.ctx;
            //CanvasRenderingContext2D.restore() 是 Canvas 2D API 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。 如果没有保存状态，此方法不做任何改变。
            //避免 save restore嵌套导致的 clip 区域影响 clearRect 擦除的区域
            ctx.restore();
            ctx.clearRect(0, 0, 2, 2);
            var mtx = o._hitMatrix;
            var list = o.children.slice(0),
                l = list.length;
            for (var i = l - 1; i >= 0; i--) {
              var child = list[i];
              mtx.initialize(1, 0, 0, 1, 0, 0);
              mtx.appendTransform(o.x - evt.stageX, o.y - evt.stageY, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
              // if (!this.checkBoundEvent(child)) continue
              ctx.save();
              var target = this._hitPixel(child, evt, mtx);
              ctx.restore();
              if (target) return target;
            }
          }
        }, {
          key: '_hitPixel',
          value: function _hitPixel(o, evt, mtx) {
            if (!o.isVisible()) return;
            var ctx = this.ctx;
            if (mtx && !o.fixed) {
              o._hitMatrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            } else {
              o._hitMatrix.initialize(1, 0, 0, 1, 0, 0);
            }
            mtx = o._hitMatrix;
            mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);

            var ocg = o.clipGraphics;
            if (ocg) {
              ctx.beginPath();
              ocg._matrix.copy(mtx);
              ocg._matrix.appendTransform(ocg.x, ocg.y, ocg.scaleX, ocg.scaleY, ocg.rotation, ocg.skewX, ocg.skewY, ocg.originX, ocg.originY);
              ctx.setTransform(ocg._matrix.a, ocg._matrix.b, ocg._matrix.c, ocg._matrix.d, ocg._matrix.tx, ocg._matrix.ty);
              ocg.render(ctx);
              ctx.clip(o.clipRuleNonzero ? 'nonzero' : 'evenodd');
            }

            if (o.cacheCanvas) {
              ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
              ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
            } else if (o instanceof _group2.default) {
              var list = o.children.slice(0),
                  l = list.length;
              for (var i = l - 1; i >= 0; i--) {
                ctx.save();
                var target = this._hitPixel(list[i], evt, mtx);
                if (target) return target;
                ctx.restore();
              }
            } else {

              ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
              if (o instanceof _graphics2.default) {
                ctx.globalCompositeOperation = o.complexCompositeOperation;
                ctx.globalAlpha = o.complexAlpha;
                o.render(ctx);
              } else if (o instanceof _sprite2.default && o.rect) {
                ctx.globalCompositeOperation = o.complexCompositeOperation;
                ctx.globalAlpha = o.complexAlpha;
                o.updateFrame();
                var rect = o.rect;
                ctx.drawImage(o.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
              } else if (o instanceof _bitmap2.default && o.rect) {
                ctx.globalCompositeOperation = o.complexCompositeOperation;
                ctx.globalAlpha = o.complexAlpha;
                var bRect = o.rect;
                ctx.drawImage(o.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
              } else if (o instanceof _text2.default) {
                ctx.globalCompositeOperation = o.complexCompositeOperation;
                ctx.globalAlpha = o.complexAlpha;

                ctx.font = o.font;
                ctx.fillStyle = o.color;
                ctx.textBaseline = o.baseline;
                ctx.fillText(o.text, 0, 0);
              }
            }

            if (ctx.getImageData(0, 0, 1, 1).data[3] > 1) {
              this._dispatchEvent(o, evt);
              return o;
            }
          }
        }, {
          key: '_dispatchEvent',
          value: function _dispatchEvent(obj, evt) {
            if (this.disableEvents.indexOf(evt.type) !== -1) return;
            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.pureEvent = evt;
            mockEvt.type = evt.type;
            obj.dispatchEvent(mockEvt);
          }
        }]);

        return HitRender;
      }(_render2.default);

      exports.default = HitRender;

      /***/
    },
    /* 31 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      var _render = __webpack_require__(8);

      var _render2 = _interopRequireDefault(_render);

      var _event = __webpack_require__(7);

      var _event2 = _interopRequireDefault(_event);

      var _sprite = __webpack_require__(6);

      var _sprite2 = _interopRequireDefault(_sprite);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var WxHitRender = function (_Render) {
        _inherits(WxHitRender, _Render);

        function WxHitRender(ctx, component, canvasId) {
          _classCallCheck(this, WxHitRender);

          var _this = _possibleConstructorReturn(this, (WxHitRender.__proto__ || Object.getPrototypeOf(WxHitRender)).call(this));

          _this.ctx = ctx;
          _this._isWeapp = true;
          _this._component = component;
          _this._hitCanvasId = canvasId + 'Hit';

          _this.disableEvents = ['mouseover', 'mouseout', 'mousemove', 'touchmove'];
          return _this;
        }

        _createClass(WxHitRender, [{
          key: 'clear',
          value: function clear() {
            this.ctx.clearRect(0, 0, 2, 2);
          }
        }, {
          key: 'hitAABB',
          value: function hitAABB(list, evt, cb) {
            var len = list.length;
            for (var i = len - 1; i >= 0; i--) {
              var o = list[i];

              if (o.AABB && this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
                this._dispatchEvent(o, evt);
                cb(o);
                return o;
              }
            }
          }
        }, {
          key: 'checkPointInAABB',
          value: function checkPointInAABB(x, y, AABB) {
            var minX = AABB[0];
            if (x < minX) return false;
            var minY = AABB[1];
            if (y < minY) return false;
            var maxX = minX + AABB[2];
            if (x > maxX) return false;
            var maxY = minY + AABB[3];
            if (y > maxY) return false;
            return true;
          }
        }, {
          key: 'hit',
          value: function hit(list, evt, cb, current) {
            var _this2 = this;

            var ctx = this.ctx;
            var obj = list[current];
            var mtx = obj._hitMatrix.initialize(1, 0, 0, 1, 0, 0);
            ctx.save();
            mtx.appendTransform(obj.x - evt.stageX, obj.y - evt.stageY, obj.scaleX, obj.scaleY, obj.rotation, obj.skewX, obj.skewY, obj.originX, obj.originY);
            ctx.globalCompositeOperation = obj.complexCompositeOperation;
            ctx.globalAlpha = obj.complexAlpha;
            ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            if (obj instanceof _graphics2.default) {
              obj.render(ctx);
            } else if (obj instanceof _sprite2.default && obj.rect) {
              obj.updateFrame();
              var rect = obj.rect;
              ctx.drawImage(obj.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
            } else if (obj instanceof _bitmap2.default && obj.rect) {
              var bRect = obj.rect;
              ctx.drawImage(obj.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
            } else if (obj instanceof _text2.default) {
              ctx.font = obj.font;
              ctx.fillStyle = obj.color;
              ctx.fillText(obj.text, 0, 0);
            }
            ctx.restore();
            current--;
            ctx.draw(false, function () {
              wx.canvasGetImageData({
                canvasId: _this2._hitCanvasId,
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                success: function success(res) {
                  if (res.data[3] > 1) {
                    _this2._dispatchEvent(obj, evt);
                    cb(obj);
                  } else {
                    if (current > -1) {
                      _this2.hit(list, evt, cb, current);
                    }
                  }
                }
              }, _this2._component);
            });
          }
        }, {
          key: '_dispatchEvent',
          value: function _dispatchEvent(obj, evt) {
            if (this.disableEvents.indexOf(evt.type) !== -1) return;
            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.pureEvent = evt;
            mockEvt.type = evt.type;
            obj.dispatchEvent(mockEvt);
          }
        }]);

        return WxHitRender;
      }(_render2.default);

      exports.default = WxHitRender;

      /***/
    },
    /* 32 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var ArrowPath = function (_Shape) {
        _inherits(ArrowPath, _Shape);

        function ArrowPath(path, option) {
          _classCallCheck(this, ArrowPath);

          var _this = _possibleConstructorReturn(this, (ArrowPath.__proto__ || Object.getPrototypeOf(ArrowPath)).call(this));

          _this.path = path;
          _this.option = Object.assign({
            strokeStyle: 'black',
            lineWidth: 1,
            headSize: 10
          }, option);
          return _this;
        }

        _createClass(ArrowPath, [{
          key: 'draw',
          value: function draw() {
            var path = this.path;
            this.beginPath();
            var len = path.length;
            if (len === 2) {
              this.drawArrow(path[0].x, path[0].y, path[1].x, path[1].y, 30);
            } else {
              this.moveTo(path[0].x, path[0].y);
              for (var i = 1; i < len - 1; i++) {
                this.lineTo(path[i].x, path[i].y);
              }
              this.drawArrow(path[len - 2].x, path[len - 2].y, path[len - 1].x, path[len - 1].y, 30);
            }

            this.stroke();
          }
        }, {
          key: 'drawArrow',
          value: function drawArrow(fromX, fromY, toX, toY, theta) {

            var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
                angle1 = (angle + theta) * Math.PI / 180,
                angle2 = (angle - theta) * Math.PI / 180,
                hs = this.option.headSize,
                topX = hs * Math.cos(angle1),
                topY = hs * Math.sin(angle1),
                botX = hs * Math.cos(angle2),
                botY = hs * Math.sin(angle2);

            var arrowX = fromX - topX,
                arrowY = fromY - topY;

            this.moveTo(arrowX, arrowY);
            this.moveTo(fromX, fromY);
            this.lineTo(toX, toY);
            arrowX = toX + topX;
            arrowY = toY + topY;
            this.moveTo(arrowX, arrowY);
            this.lineTo(toX, toY);
            arrowX = toX + botX;
            arrowY = toY + botY;
            this.lineTo(arrowX, arrowY);
            this.strokeStyle(this.option.strokeStyle);
            this.lineWidth(this.option.lineWidth);
          }
        }]);

        return ArrowPath;
      }(_shape2.default);

      exports.default = ArrowPath;

      /***/
    },
    /* 33 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Ellipse = function (_Shape) {
        _inherits(Ellipse, _Shape);

        function Ellipse(width, height, option) {
          _classCallCheck(this, Ellipse);

          var _this = _possibleConstructorReturn(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).call(this));

          _this.option = option || {};
          _this.width = width;
          _this.height = height;
          return _this;
        }

        _createClass(Ellipse, [{
          key: 'draw',
          value: function draw() {
            var w = this.width;
            var h = this.height;
            var k = 0.5522848;
            var ox = w / 2 * k;
            var oy = h / 2 * k;
            var xe = w;
            var ye = h;
            var xm = w / 2;
            var ym = h / 2;

            this.beginPath();
            this.moveTo(0, ym);
            this.bezierCurveTo(0, ym - oy, xm - ox, 0, xm, 0);
            this.bezierCurveTo(xm + ox, 0, xe, ym - oy, xe, ym);
            this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            this.bezierCurveTo(xm - ox, ye, 0, ym + oy, 0, ym);

            if (this.option.strokeStyle) {
              if (this.option.lineWidth !== undefined) {
                this.lineWidth(this.option.lineWidth);
              }
              this.strokeStyle(this.option.strokeStyle);
              this.stroke();
            }

            if (this.option.fillStyle) {
              this.fillStyle(this.option.fillStyle);
              this.fill();
            }
          }
        }]);

        return Ellipse;
      }(_shape2.default);

      exports.default = Ellipse;

      /***/
    },
    /* 34 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _pathParser = __webpack_require__(35);

      var _pathParser2 = _interopRequireDefault(_pathParser);

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      var _arcToBezier = __webpack_require__(36);

      var _arcToBezier2 = _interopRequireDefault(_arcToBezier);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Path = function (_Shape) {
        _inherits(Path, _Shape);

        function Path(d, option) {
          _classCallCheck(this, Path);

          var _this = _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).call(this));

          _this.d = d;

          option = Object.assign({
            fillStyle: 'black',
            strokeStyle: 'black',
            lineWidth: 1
          }, option);
          _this.option = option;
          return _this;
        }

        _createClass(Path, [{
          key: 'draw',
          value: function draw() {
            var _this2 = this;

            var cmds = (0, _pathParser2.default)(this.d);

            this.beginPath();
            // https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
            // M = moveto
            // L = lineto
            // H = horizontal lineto
            // V = vertical lineto
            // C = curveto
            // S = smooth curveto
            // Q = quadratic Belzier curve
            // T = smooth quadratic Belzier curveto
            // A = elliptical Arc  暂时未实现，用贝塞尔拟合椭圆
            // Z = closepath
            // 以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
            var preX = void 0,
                preY = void 0,
                curves = void 0,
                lastCurve = void 0;

            // 参考我的 pasition https://github.com/AlloyTeam/pasition/blob/master/src/index.js
            for (var j = 0, cmdLen = cmds.length; j < cmdLen; j++) {
              var item = cmds[j];
              var action = item[0];
              var preItem = cmds[j - 1];

              switch (action) {
                case 'M':
                  preX = item[1];
                  preY = item[2];
                  this.moveTo(preX, preY);
                  break;
                case 'L':
                  preX = item[1];
                  preY = item[2];
                  this.lineTo(preX, preY);
                  break;
                case 'H':
                  preX = item[1];
                  this.lineTo(preX, preY);
                  break;
                case 'V':
                  preY = item[1];
                  this.lineTo(preX, preY);
                  break;
                case 'C':
                  preX = item[5];
                  preY = item[6];
                  this.bezierCurveTo(item[1], item[2], item[3], item[4], preX, preY);
                  break;
                case 'S':

                  if (preItem[0] === 'C' || preItem[0] === 'c') {
                    this.bezierCurveTo(preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], item[1], item[2], item[3], item[4]);
                  } else if (preItem[0] === 'S' || preItem[0] === 's') {
                    this.bezierCurveTo(preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], item[1], item[2], item[3], item[4]);
                  }
                  preX = item[3];
                  preY = item[4];
                  break;

                case 'Q':
                  preX = item[3];
                  preY = item[4];
                  this.quadraticCurveTo(item[1], item[2], preX, preY);
                  break;

                case 'm':
                  preX += item[1];
                  preY += item[2];
                  this.moveTo(preX, preY);
                  break;
                case 'l':
                  preX += item[1];
                  preY += item[2];
                  this.lineTo(preX, preY);
                  break;
                case 'h':
                  preX += item[1];
                  this.lineTo(preX, preY);
                  break;
                case 'v':
                  preY += item[1];
                  this.lineTo(preX, preY);
                  break;
                case 'c':
                  this.bezierCurveTo(preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6]);
                  preX = preX + item[5];
                  preY = preY + item[6];
                  break;
                case 's':
                  if (preItem[0] === 'C' || preItem[0] === 'c') {
                    this.bezierCurveTo(preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], preX + item[1], preY + item[2], preX + item[3], preY + item[4]);
                  } else if (preItem[0] === 'S' || preItem[0] === 's') {
                    this.bezierCurveTo(preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], preX + item[1], preY + item[2], preX + item[3], preY + item[4]);
                  }

                  preX += item[3];
                  preY += item[4];
                  break;
                case 'q':

                  this.quadraticCurveTo(preX + item[1], preY + item[2], item[3] + preX, item[4] + preY);
                  preX += item[3];
                  preY += item[4];
                  break;
                case 'Z':
                  this.closePath();
                  break;
                case 'z':
                  this.closePath();
                  break;

                case 'a':
                  curves = (0, _arcToBezier2.default)({
                    rx: item[1],
                    ry: item[2],
                    px: preX,
                    py: preY,
                    xAxisRotation: item[3],
                    largeArcFlag: item[4],
                    sweepFlag: item[5],
                    cx: preX + item[6],
                    cy: preX + item[7]
                  });
                  lastCurve = curves[curves.length - 1];

                  curves.forEach(function (curve, index) {
                    if (index === 0) {
                      _this2.bezierCurveTo(preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
                    } else {
                      _this2.bezierCurveTo(curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
                    }
                  });

                  preX = lastCurve.x;
                  preY = lastCurve.y;

                  break;

                case 'A':

                  curves = (0, _arcToBezier2.default)({
                    rx: item[1],
                    ry: item[2],
                    px: preX,
                    py: preY,
                    xAxisRotation: item[3],
                    largeArcFlag: item[4],
                    sweepFlag: item[5],
                    cx: item[6],
                    cy: item[7]
                  });
                  lastCurve = curves[curves.length - 1];

                  curves.forEach(function (curve, index) {
                    if (index === 0) {
                      _this2.bezierCurveTo(preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
                    } else {
                      _this2.bezierCurveTo(curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
                    }
                  });

                  preX = lastCurve.x;
                  preY = lastCurve.y;

                  break;

                case 'T':

                  if (preItem[0] === 'Q' || preItem[0] === 'q') {
                    preCX = preX + preItem[3] - preItem[1];
                    preCY = preY + preItem[4] - preItem[2];
                    this.quadraticCurveTo(preX, preY, preCX, preCY, item[1], item[2]);
                  } else if (preItem[0] === 'T' || preItem[0] === 't') {
                    this.quadraticCurveTo(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2]);
                    preCX = preX + preX - preCX;
                    preCY = preY + preY - preCY;
                  }

                  preX = item[1];
                  preY = item[2];
                  break;

                case 't':
                  if (preItem[0] === 'Q' || preItem[0] === 'q') {
                    preCX = preX + preItem[3] - preItem[1];
                    preCY = preY + preItem[4] - preItem[2];
                    this.quadraticCurveTo(preX, preY, preCX, preCY, preX + item[1], preY + item[2]);
                  } else if (preItem[0] === 'T' || preItem[0] === 't') {
                    this.quadraticCurveTo(preX, preY, preX + preX - preCX, preY + preY - preCY, preX + item[1], preY + item[2]);
                    preCX = preX + preX - preCX;
                    preCY = preY + preY - preCY;
                  }

                  preX += item[1];
                  preY += item[2];
                  break;
              }
            }
            if (this.option.fillStyle) {
              this.fillStyle(this.option.fillStyle);
              this.fill();
            }

            if (this.option.strokeStyle) {
              this.lineWidth(this.option.lineWidth);
              this.strokeStyle(this.option.strokeStyle);
              this.stroke();
            }
          }
        }]);

        return Path;
      }(_shape2.default);

      exports.default = Path;

      /***/
    },
    /* 35 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      // https://github.com/jkroso/parse-svg-path/blob/master/index.js
      /**
       * expected argument lengths
       * @type {Object}
       */

      var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0

        /**
         * segment pattern
         * @type {RegExp}
         */

      };var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

      /**
       * parse an svg path data string. Generates an Array
       * of commands where each command is an Array of the
       * form `[command, arg1, arg2, ...]`
       *
       * @param {String} path
       * @return {Array}
       */

      function parse(path) {
        var data = [];
        path.replace(segment, function (_, command, args) {
          var type = command.toLowerCase();
          args = parseValues(args);

          // overloaded moveTo
          if (type === 'm' && args.length > 2) {
            data.push([command].concat(args.splice(0, 2)));
            type = 'l';
            command = command === 'm' ? 'l' : 'L';
          }

          while (true) {
            if (args.length === length[type]) {
              args.unshift(command);
              return data.push(args);
            }
            if (args.length < length[type]) throw new Error('malformed path data');
            data.push([command].concat(args.splice(0, length[type])));
          }
        });
        return data;
      }

      var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

      function parseValues(args) {
        var numbers = args.match(number);
        return numbers ? numbers.map(Number) : [];
      }

      exports.default = parse;

      /***/
    },
    /* 36 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      //https://github.com/colinmeinke/svg-arc-to-cubic-bezier

      var TAU = Math.PI * 2;

      var mapToEllipse = function mapToEllipse(_ref, rx, ry, cosphi, sinphi, centerx, centery) {
        var x = _ref.x,
            y = _ref.y;

        x *= rx;
        y *= ry;

        var xp = cosphi * x - sinphi * y;
        var yp = sinphi * x + cosphi * y;

        return {
          x: xp + centerx,
          y: yp + centery
        };
      };

      var approxUnitArc = function approxUnitArc(ang1, ang2) {
        var a = 4 / 3 * Math.tan(ang2 / 4);

        var x1 = Math.cos(ang1);
        var y1 = Math.sin(ang1);
        var x2 = Math.cos(ang1 + ang2);
        var y2 = Math.sin(ang1 + ang2);

        return [{
          x: x1 - y1 * a,
          y: y1 + x1 * a
        }, {
          x: x2 + y2 * a,
          y: y2 - x2 * a
        }, {
          x: x2,
          y: y2
        }];
      };

      var vectorAngle = function vectorAngle(ux, uy, vx, vy) {
        var sign = ux * vy - uy * vx < 0 ? -1 : 1;
        var umag = Math.sqrt(ux * ux + uy * uy);
        var vmag = Math.sqrt(ux * ux + uy * uy);
        var dot = ux * vx + uy * vy;

        var div = dot / (umag * vmag);

        if (div > 1) {
          div = 1;
        }

        if (div < -1) {
          div = -1;
        }

        return sign * Math.acos(div);
      };

      var getArcCenter = function getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
        var rxsq = Math.pow(rx, 2);
        var rysq = Math.pow(ry, 2);
        var pxpsq = Math.pow(pxp, 2);
        var pypsq = Math.pow(pyp, 2);

        var radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;

        if (radicant < 0) {
          radicant = 0;
        }

        radicant /= rxsq * pypsq + rysq * pxpsq;
        radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);

        var centerxp = radicant * rx / ry * pyp;
        var centeryp = radicant * -ry / rx * pxp;

        var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
        var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;

        var vx1 = (pxp - centerxp) / rx;
        var vy1 = (pyp - centeryp) / ry;
        var vx2 = (-pxp - centerxp) / rx;
        var vy2 = (-pyp - centeryp) / ry;

        var ang1 = vectorAngle(1, 0, vx1, vy1);
        var ang2 = vectorAngle(vx1, vy1, vx2, vy2);

        if (sweepFlag === 0 && ang2 > 0) {
          ang2 -= TAU;
        }

        if (sweepFlag === 1 && ang2 < 0) {
          ang2 += TAU;
        }

        return [centerx, centery, ang1, ang2];
      };

      var arcToBezier = function arcToBezier(_ref2) {
        var px = _ref2.px,
            py = _ref2.py,
            cx = _ref2.cx,
            cy = _ref2.cy,
            rx = _ref2.rx,
            ry = _ref2.ry,
            _ref2$xAxisRotation = _ref2.xAxisRotation,
            xAxisRotation = _ref2$xAxisRotation === undefined ? 0 : _ref2$xAxisRotation,
            _ref2$largeArcFlag = _ref2.largeArcFlag,
            largeArcFlag = _ref2$largeArcFlag === undefined ? 0 : _ref2$largeArcFlag,
            _ref2$sweepFlag = _ref2.sweepFlag,
            sweepFlag = _ref2$sweepFlag === undefined ? 0 : _ref2$sweepFlag;

        var curves = [];

        if (rx === 0 || ry === 0) {
          return [];
        }

        var sinphi = Math.sin(xAxisRotation * TAU / 360);
        var cosphi = Math.cos(xAxisRotation * TAU / 360);

        var pxp = cosphi * (px - cx) / 2 + sinphi * (py - cy) / 2;
        var pyp = -sinphi * (px - cx) / 2 + cosphi * (py - cy) / 2;

        if (pxp === 0 && pyp === 0) {
          return [];
        }

        rx = Math.abs(rx);
        ry = Math.abs(ry);

        var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);

        if (lambda > 1) {
          rx *= Math.sqrt(lambda);
          ry *= Math.sqrt(lambda);
        }

        var _getArcCenter = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp),
            _getArcCenter2 = _slicedToArray(_getArcCenter, 4),
            centerx = _getArcCenter2[0],
            centery = _getArcCenter2[1],
            ang1 = _getArcCenter2[2],
            ang2 = _getArcCenter2[3];

        var segments = Math.max(Math.ceil(Math.abs(ang2) / (TAU / 4)), 1);

        ang2 /= segments;

        for (var i = 0; i < segments; i++) {
          curves.push(approxUnitArc(ang1, ang2));
          ang1 += ang2;
        }

        return curves.map(function (curve) {
          var _mapToEllipse = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery),
              x1 = _mapToEllipse.x,
              y1 = _mapToEllipse.y;

          var _mapToEllipse2 = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery),
              x2 = _mapToEllipse2.x,
              y2 = _mapToEllipse2.y;

          var _mapToEllipse3 = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery),
              x = _mapToEllipse3.x,
              y = _mapToEllipse3.y;

          return { x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y };
        });
      };

      exports.default = arcToBezier;

      /***/
    },
    /* 37 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      var _roundedRect = __webpack_require__(15);

      var _roundedRect2 = _interopRequireDefault(_roundedRect);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Button = function (_Group) {
        _inherits(Button, _Group);

        function Button(option) {
          _classCallCheck(this, Button);

          var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

          _this.width = option.width;
          _this.roundedRect = new _roundedRect2.default(option.width, option.height, option.borderRadius, {
            strokeStyle: option.borderColor || 'black',
            fillStyle: option.backgroundColor || '#F5F5F5'
          });
          _this.text = new _text2.default(option.text, {
            font: option.font,
            color: option.color
          });

          _this.text.x = option.width / 2 - _this.text.getWidth() / 2 * _this.text.scaleX + (option.textX || 0);
          _this.text.y = option.height / 2 - 10 + 5 * _this.text.scaleY + (option.textY || 0);
          _this.add(_this.roundedRect, _this.text);
          return _this;
        }

        return Button;
      }(_group2.default);

      exports.default = Button;

      /***/
    },
    /* 38 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Rect = function (_Shape) {
        _inherits(Rect, _Shape);

        function Rect(width, height, option) {
          _classCallCheck(this, Rect);

          var _this = _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this));

          _this.width = width;
          _this.height = height;
          _this.option = option || {};
          return _this;
        }

        _createClass(Rect, [{
          key: 'draw',
          value: function draw() {
            if (this.option.fillStyle) {
              this.fillStyle(this.option.fillStyle);
              this.fillRect(0, 0, this.width, this.height);
            }

            if (this.option.strokeStyle) {
              this.strokeStyle(this.option.strokeStyle);
              this.strokeRect(0, 0, this.width, this.height);
            }
          }
        }]);

        return Rect;
      }(_shape2.default);

      exports.default = Rect;

      /***/
    },
    /* 39 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Circle = function (_Shape) {
        _inherits(Circle, _Shape);

        function Circle(r, option) {
          _classCallCheck(this, Circle);

          var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

          _this.option = option || {};
          _this.r = r;

          _this._dp = Math.PI * 2;
          return _this;
        }

        _createClass(Circle, [{
          key: 'draw',
          value: function draw() {
            this.beginPath();
            this.arc(0, 0, this.r, 0, this._dp, false);

            if (this.option.strokeStyle) {
              if (this.option.lineWidth !== undefined) {
                this.lineWidth(this.option.lineWidth);
              }
              this.strokeStyle(this.option.strokeStyle);
              this.stroke();
            }

            if (this.option.fillStyle) {
              this.fillStyle(this.option.fillStyle);
              this.fill();
            }
          }
        }]);

        return Circle;
      }(_shape2.default);

      exports.default = Circle;

      /***/
    },
    /* 40 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Polygon = function (_Shape) {
        _inherits(Polygon, _Shape);

        function Polygon(vertex, options) {
          _classCallCheck(this, Polygon);

          var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this));

          _this.vertex = vertex || [];
          _this.options = options || {};
          _this.strokeColor = _this.options.strokeColor;
          _this.fillColor = _this.options.fillColor;
          return _this;
        }

        _createClass(Polygon, [{
          key: 'draw',
          value: function draw() {
            this.clear().beginPath();
            this.strokeStyle(this.strokeColor);
            this.moveTo(this.vertex[0][0], this.vertex[0][1]);

            for (var i = 1, len = this.vertex.length; i < len; i++) {
              this.lineTo(this.vertex[i][0], this.vertex[i][1]);
            }
            this.closePath();
            // 路径闭合
            //  if (this.options.strokeStyle) {
            //    this.strokeStyle = strokeStyle;
            // this.lineWidth(this.options.width);
            // this.lineJoin('round');
            // this.stroke();
            //  }
            if (this.strokeColor) {
              this.strokeStyle(this.strokeColor);
              this.stroke();
            }
            if (this.fillColor) {
              this.fillStyle(this.fillColor);
              this.fill();
            }
          }
        }]);

        return Polygon;
      }(_shape2.default);

      exports.default = Polygon;

      /***/
    },
    /* 41 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var EquilateralPolygon = function (_Shape) {
        _inherits(EquilateralPolygon, _Shape);

        function EquilateralPolygon(num, r, options) {
          _classCallCheck(this, EquilateralPolygon);

          var _this = _possibleConstructorReturn(this, (EquilateralPolygon.__proto__ || Object.getPrototypeOf(EquilateralPolygon)).call(this));

          _this.num = num;
          _this.r = r;
          _this.options = options || {};
          _this.strokeColor = options.strokeColor || 'black';
          _this.vertex = [];
          _this.initVertex();
          return _this;
        }

        _createClass(EquilateralPolygon, [{
          key: 'initVertex',
          value: function initVertex() {
            this.vertex.length = [];
            var num = this.num;
            var r = this.r;
            var i = void 0,
                startX = void 0,
                startY = void 0,
                newX = void 0,
                newY = void 0;

            if (num % 2 === 0) {
              startX = r * Math.cos(2 * Math.PI * 0 / num);
              startY = r * Math.sin(2 * Math.PI * 0 / num);

              this.vertex.push([startX, startY]);
              for (i = 1; i < num; i++) {
                newX = r * Math.cos(2 * Math.PI * i / num);
                newY = r * Math.sin(2 * Math.PI * i / num);

                this.vertex.push([newX, newY]);
              }
            } else {
              startX = r * Math.cos(2 * Math.PI * 0 / num - Math.PI / 2);
              startY = r * Math.sin(2 * Math.PI * 0 / num - Math.PI / 2);

              this.vertex.push([startX, startY]);
              for (i = 1; i < num; i++) {
                newX = r * Math.cos(2 * Math.PI * i / num - Math.PI / 2);
                newY = r * Math.sin(2 * Math.PI * i / num - Math.PI / 2);

                this.vertex.push([newX, newY]);
              }
            }
          }
        }, {
          key: 'draw',
          value: function draw() {
            this.beginPath();
            this.strokeStyle(this.strokeColor);
            this.moveTo(this.vertex[0][0], this.vertex[0][1]);

            for (var i = 1, len = this.vertex.length; i < len; i++) {
              this.lineTo(this.vertex[i][0], this.vertex[i][1]);
            }
            this.closePath();
            // 路径闭合
            //  if (this.options.strokeStyle) {
            //    this.strokeStyle = strokeStyle;
            // this.lineWidth(this.options.width);
            // this.lineJoin('round');
            this.stroke();
            //  }
            if (this.options.fillStyle) {
              this.fillStyle(this.options.fillStyle);
              this.fill();
            }
          }
        }]);

        return EquilateralPolygon;
      }(_shape2.default);

      exports.default = EquilateralPolygon;

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerp = lerp;
exports.dca = dca;
exports.slope = slope;
exports.getLength = getLength;
exports.getPosition = getPosition;
exports.getPoint = getPoint;
function lerp(p1, p2, t) {
  return { x: p1.x + (p2.x - p1.x) * t, y: p1.y + (p2.y - p1.y) * t };
}

function dca(points, t) {
  var len = points.length;

  if (len === 2) {
    return lerp(points[0], points[1], t);
  }

  var i = 0,
      next = [];
  for (; i < len - 1; i++) {
    next.push(lerp(points[i], points[i + 1], t));
  }

  return dca(next, t);
}

function slope(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {

  var ax = p1x * 3 - c1x * 9 + 9 * c2x - 3 * p2x;
  var bx = c1x * 6 - 12 * c2x + 6 * p2x;
  var cx = 3 * c2x - 3 * p2x;

  var ay = p1y * 3 - c1y * 9 + 9 * c2y - 3 * p2y;
  var by = c1y * 6 - 12 * c2y + 6 * p2y;
  var cy = 3 * c2y - 3 * p2y;

  var sqt = t * t;

  return Math.atan((ay * sqt + by * t + cy) / (ax * sqt + bx * t + cx));
}

function getValue(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
  return dca([{ x: p1x, y: p1y }, { x: c1x, y: c1y }, { x: c2x, y: c2y }, { x: p2x, y: p2y }], t);
}

//steps 根据起点和终点自动计算？
function getLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, steps) {
  var step = 1 / steps;
  var points = [];

  var len = 0;
  for (var t = 0; t < 1.0 + step; t += step) {
    points.push(getValue(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, Math.min(t, 1)));
  }
  var p0 = void 0,
      p1 = void 0,
      dx = void 0,
      dy = void 0;
  for (var i = 0; i < points.length - 1; i++) {
    p0 = points[i];
    p1 = points[i + 1];
    dx = p1.x - p0.x;
    dy = p1.y - p0.y;
    len += Math.sqrt(dx * dx + dy * dy);
  }

  return len;
}

function getPosition(length, shape) {
  var current = 0;
  var total = shape.pathLen;
  var index = 0;
  var t = 0;

  if (length > total) {
    length = length - total;
  }
  for (var i = 0, len = shape.length; i < len; i++) {
    var c = shape[i];
    current += c.bzLen;
    if (current > length) {
      index = i;
      t = 1 - (current - length) / c.bzLen;
      break;
    }
  }

  return {
    t: t,
    index: index
  };
}

function getPoint(t, index, shape) {
  var ps = shape[index];
  return getValue(ps[0], ps[1], ps[2], ps[3], ps[4], ps[5], ps[6], ps[7], t);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cax = __webpack_require__(0);

var _cax2 = _interopRequireDefault(_cax);

var _pasition = __webpack_require__(4);

var _pasition2 = _interopRequireDefault(_pasition);

var _player = __webpack_require__(5);

var _player2 = _interopRequireDefault(_player);

var _bezier = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapPath = ["M252.869,203.121l-0.873-0.643l-1.721-0.121l-8.182-4.065l0.178-1.349l-0.354-1.082l-0.722-1.028l-0.566-1.235l0.204-1.168l-1.433-0.73l-0.899,0.326l-0.711,0.295l-0.74,0.111l-1.083,0.354l-1.451,0.408l-1.961-0.461l-1.037-0.603l-0.896,0.327l-0.658,0.666l-1.164-0.204l-1.223-0.571l-0.925,0.139l-1.434-0.729l-1.85,0.28l-0.823-0.444l-0.741,0.11l-0.471,0.638l0.223,1.481l-1.295,0.195l-1.619-0.701l-1.277-0.943l-0.379-1.268l-1.973-1.783l-1.619-0.701l-1.138-0.018l-1.444-2.054l-0.604-2.748l-1.008-0.413l-1.721-0.119l-0.98-0.232l-1.055,0.539l-0.045,0.953l-1.092-0.971l-0.492-2.009l-1.73-1.44l-2.12-0.248l-1.748-0.305l-1.024,0.723l-1.834-0.86l-1.109,0.168l-0.08,0.038v28.152l0.436,0.031l2.342,1.916v1.065l0.64-0.214l0.638,0.427l1.278-1.491l2.556,1.278l1.703-0.427l7.881,4.261l3.193-3.195l2.557-1.704h1.49l0.428-1.275l-1.492,0.425l-0.853-0.64h1.063l2.771-2.129l1.277,2.555l-1.277,1.703l-1.917-0.424l1.917,1.702l1.277-0.852l0.64,0.213l0.211-1.703h1.492l0.426,1.276l-0.852,0.214l-0.215,1.276l1.49,1.065l1.491-0.213l0.214,0.426l-0.639-0.213l1.064,1.916l0.851-0.64l0.853,0.427l-0.213-0.64l0.854,1.705l1.064,1.063l0.426-2.769l-1.277,0.852l-0.426-1.703h2.13l2.526-0.843l4.074-4.269l2.768-1.703l-3.406,1.489l1.917-1.278l-0.071-0.07l-0.568-0.567l1.492,0.427l1.703-0.64l-0.213,0.427l9.371-0.853l1.915-1.703l-0.638-0.64H252.869z", "M278.939,132.632l-0.641-0.853l0.183-1.97l-0.975,0.091l-0.92-0.092l-0.506,0.415l-0.526,0.234l-0.541,0.053l-0.939-0.271l-1.049,0.468l-0.813-0.833l-0.938-0.272l-0.851,0.631l-0.67,0.614l-1.083,0.106l-0.904,0.09l-0.108,0.741l0.288,1.068l0.722-0.073l-0.651,0.795l-0.129,0.559l-1.049,0.47l-0.757-0.291l-0.433-0.688l-0.651,0.794l-0.651,0.795l-0.309,0.578l-0.688,0.433l-0.47-1.049l-0.069-0.723l-0.435-0.688l-0.415-0.507l-0.631-0.85l-1.121-0.254l-1.643-0.021l-0.577-0.309l-0.761-0.29l-0.722,0.071l-0.235-0.524l-0.903,0.089l-1.41,0.504l-1.3-0.237l-1.321-0.416l-0.541,0.053L250,132.249l-1.104-0.073l-0.073,1.102l-0.722,0.072l0.053,0.543l-0.869,0.449l-53.113-0.052l-0.002,0.043v45.292l0.08-0.038l1.109-0.168l1.834,0.86l1.024-0.723l1.748,0.305l2.12,0.248l1.73,1.44l0.492,2.009l1.092,0.971l0.045-0.953l1.055-0.539l0.98,0.232l1.721,0.119l1.008,0.413l0.604,2.748l1.444,2.054l1.138,0.018l1.619,0.701l1.973,1.783l0.379,1.268l1.277,0.943l1.619,0.701l1.295-0.195l-0.223-1.481l0.471-0.638l0.741-0.11l0.823,0.444l1.85-0.28l1.434,0.729l0.925-0.139l1.223,0.571l1.164,0.204l0.658-0.666l0.896-0.327l1.037,0.603l1.961,0.461l1.451-0.408l1.083-0.354l0.74-0.111l0.711-0.295l0.899-0.326l1.433,0.73l-0.204,1.168l0.566,1.235l0.722,1.028l0.354,1.082l-0.178,1.349l8.182,4.065l1.721,0.121l0.873,0.643h0.513l-0.213,0.64l0.112-0.336l0.227,0.167l0.939-0.471l-0.213-1.704l0.427-0.212h0.425l-0.425-1.065l-0.853-0.213l0.426-0.853l-0.426-1.064l0.426,0.214l0.427-1.491l0.851-3.406l-0.213-2.131l0.426-1.277h-0.426l1.065-0.852l-0.64-0.853l0.854,0.213l1.703-4.046l1.49-0.428l-0.641-1.275l0.641-0.214v0.853l0.424-0.214l-0.424-1.276l-0.426,0.213l0.213-0.426l-0.854-0.213l1.49-0.64l0.427-1.491l-0.427-0.639l0.64-0.215v-1.489l1.703-1.703l-0.638-0.214l1.063-0.213l-1.276-0.426l1.489-0.213l0.214-1.064l-0.64,0.426l-0.427-0.426l0.64,0.213l-0.213-0.639l0.64,0.426l0.213-1.704v-0.212l-0.427,0.425v-0.639l-0.213,0.214l-0.213-0.641l0.64,0.427l0.213-1.064v0.853l0.852-0.426l0.214-1.064l-0.427-0.427h0.854l0.637-1.703l-0.637,0.853l-0.214-0.853h0.638v-0.853l0.213,0.853l0.854-1.491l-0.213-0.426h0.427v0.64l2.556-1.491l-0.853-0.213l-0.853,0.639l-0.213-0.213l0.426-0.426l-0.213-0.426l0.853,0.426l0.638-0.426l0.215,0.426l0.853-1.277l1.489-0.853l0.214-1.702l-0.64-0.215v0.428l-0.852-0.428h1.064l0.213-1.49l1.49-1.277l1.918-6.176l-0.213-4.26l1.489-3.834l0.213-0.639l0.64-3.62l-0.64-0.426l0.64,0.213l-0.213-0.853l1.703-3.193h-0.426l0.426-0.214L278.939,132.632z M261.268,143.072h-0.215l-0.213-0.639l0.641-0.214L261.268,143.072z", "M112.615,33.818l-0.426-0.425l-0.852-0.213l-1.278,0.213l0.852,0.639l0.213,0.852l-0.852-1.065l0.638,1.065l-0.212-0.213l-0.213,0.426l-0.426-0.426l-0.213,0.852l-0.426-1.064l-0.426,0.639l1.064,2.982h-0.426l-0.213-1.065l-1.065-1.065v1.704l-0.639,0.639l0.426-0.852l-0.426-0.639l0.426-0.213l-0.213-1.277l0.639-1.491h-0.426l0.852-0.212l-0.426-0.639l0.426-0.212l-1.491-1.065l-0.212,0.425l-1.917-2.981l-1.491-0.852l-0.213-0.852l-0.639-0.213l0.213,0.638l-0.639-0.638l-0.426,0.425V27.22l-0.426,0.425l-0.426-1.064l-1.278-0.427v0.427l-0.852-0.213l0.426,1.065l0.852,0.425l-0.373-0.053l-1.118-0.16l0.213,0.64L98.77,28.71l-0.213-0.425l-0.213,1.277l-0.639-1.277l-0.426,0.212l0.426-1.064l-1.277,0.852l-0.213,0.425l0.426,0.426l-0.852,0.426l-0.213-1.065H95.15l0.426-0.425H95.15l0.426-0.426l-0.639,0.426l-0.639-0.213v0.427l-0.213-0.427v0.427l1.278,0.639l-0.852,0.639l0.213,0.638l-0.639,0.427l0.426,0.852h-0.852v1.065l-0.639-0.639l0.212-0.853l-0.852,0.213v-0.639l-0.639,1.704l0.213-1.917l0.426-0.639l-0.852-0.426v2.343l-0.639-0.213l-0.426,0.852l-0.213-0.639l-0.426,0.425l0.213-0.852l-0.852,0.852l0.426,0.213l-1.278,0.639l0.639,0.853h0.639l-0.852,0.64l1.278,0.425l0.213-0.425l0.426,0.212l-0.852,0.852l1.064,0.426h-1.064l-0.426-0.639l-0.852,0.639l-0.639-1.49l-0.426,0.212l0.213,0.852l-1.278,0.213l0.426,0.213l-0.213,0.639l1.278-0.852l-1.278,1.065l0.426,0.426l1.065-0.64v0.426h0.426l-0.639,0.639l1.277,1.064l-1.064-0.852l-0.426,0.425l-0.426-0.852l-0.852-0.212v-0.426l-0.639,0.426l-0.426,0.852l-0.213-0.427l-0.212,0.639l-0.852-0.212l0.213,0.212l-0.852,0.64l0.426,0.212l-0.639,0.213l0.852,2.342l0.213-0.372v0.16l0.426-0.64l-0.355,0.355l0.568-0.994l0.639-0.425l-0.426,0.425h0.639l-0.852,0.639l-0.213,1.491h0.426l-0.852,0.425l0.426,0.213l-0.426,0.213l-0.426-1.065l-0.426,1.917l1.491-0.213l1.278,0.639l1.065-0.212l-1.065,0.425l-0.426-0.425l-1.917,0.212l-0.426-0.426l-0.426,0.426l0.373,0.224l-1.011,0.203l0.639-0.213l-0.639-0.213l-0.639-0.852l-1.491-0.639l0.639,0.639h-0.426l0.426,0.64l-0.852-0.64v0.213l-1.065-0.426h0.426l-0.212-0.426h0.426l-0.852-0.425v0.425l-0.639-0.213l0.213,0.427l-0.426-0.427l0.426,0.64l-0.426,0.212l0.852,0.213l0.212,0.426l-0.639-0.213l0.639,0.426H77.48l1.064,0.639h-1.49l0.426,0.639l0.212-0.426l0.639,0.213l-0.852,0.639l1.49,0.426l0.426,1.278l0.852-0.426v-0.426l0.426,0.213l-1.064,1.065l0.426,0.426l-0.639-0.213l1.065,1.917l-1.917-1.917l-0.639,0.213l0.852,1.49l-0.426-0.213l-0.426,1.065v1.065l-1.278-1.278l-0.639-2.129l-0.852-0.64v-1.704h-0.639l-0.639-0.639l0.213-0.852l0.639-0.213l-0.426-0.639l-0.639,0.213l-1.278,2.129l0.639,0.639l-1.704-0.212l-0.213,0.639l0.426,0.852l-0.852-0.426v0.426l-0.852,0.213l-0.639,0.852l0.426,0.213l-1.065,0.852l-0.213,1.916l0.639,1.491l-0.426,1.491l1.491,0.213v0.852l-2.981,2.13l-0.852,0.212l-0.639,0.852l0.426,0.64l-1.065,0.212l0.213,0.852l-1.065,1.917l-2.555,3.195l-5.963,2.556l-1.491,0.213h-1.491L51.924,69.6l-0.852,0.639L50.434,69.6l-1.917-0.426L48.73,69.6v0.213L48.517,69.6l-0.426-0.213L47.878,69.6l-1.491,1.917l-4.472,0.852v-0.426l-1.704,1.065l0.213,0.426h-0.639l-0.426,0.852l-1.065,0.213v-0.213l-1.704,0.852l-1.278-0.639l-0.213-0.64l-1.491,0.852l-0.639-0.212l-0.426-0.213l0.639-1.065h-0.426l-1.065,1.278l0.212,0.212h-0.426l-2.129,1.065l-0.639-0.426l-0.213,1.064l-1.704,0.852l-0.639,1.278l-1.064,0.213l-1.065,1.704l-4.046,1.065l-1.704,1.064l-0.213,1.278l-0.426,0.213l-0.426-0.213l0.213,0.852l-0.639,1.065l0.426,0.426l-0.426-0.212l0.212,0.425l-0.852,1.065l-0.426-0.639l-1.065,0.639l0.426-1.49l-0.426,0.425l-0.213-1.49l0.852-2.556L13.8,82.804l-2.129,5.111l1.065,2.769l-0.426,1.278l0.213,2.555l-2.129,2.982l-0.426,3.833l1.704,2.769l-0.213,0.427l0.426,1.704l0.852,0.639l2.342,4.685l0.639,0.213l0.212,1.064h-0.639l0.213,2.343l-1.064,1.277l-1.065-1.704l-0.213-2.342v1.065l-1.065,0.852l0.213-2.343l-1.704-2.769l-0.639,1.704l0.426,0.426v-0.852l0.639,3.194l2.13,1.704l-0.213,1.917l-1.277,0.64l-0.213-1.491l-0.213,1.278l-0.426-2.556l-0.213,1.277l-0.852-3.407l0.213,2.769l-0.639-0.426v-2.342l-0.213,1.704l-0.852-0.639l5.537,8.093l1.278,3.407l-0.426,1.065l0.426,2.129l2.343,2.769l0.639,1.278l-0.213,0.852l1.917,2.557l0.852,2.98l-0.213,3.833v0.427l0.639,3.407l4.259,8.944l0.213,3.193l1.065-0.639v0.425l-1.065,0.214l0.213,1.064l-0.426,0.639l0.213,1.491l-0.852,1.704l0.639,4.896l-2.342,2.77h-1.065l-1.278-0.853v4.474l0.852,2.342l0.212-0.426l1.278-0.213l2.342,1.277l1.917,2.98l2.555,0.853l0.213-0.639l0.852,0.639h-1.065l1.704,1.063l0.639-0.639l1.278,0.639l2.981-0.424l1.704,1.062l0.426-0.852l1.917,0.64l0.426-0.213l-1.064-0.427l0.426-0.853l0.426-0.213l-0.213,0.853h1.704l-0.213-0.64l1.491-0.213l0.213-1.278l1.917-0.852l0.212-0.852l1.065-0.428l-0.426-0.425l2.769,0.853l0.213-0.853l0.852,0.213v-0.853l1.065,0.213l-0.852-0.853l2.981-2.769h0.639l2.768,0.426l1.065-0.852l5.324-0.64l2.769,0.853l1.49-0.639l0.852,1.49h1.065l0.426-0.854l1.491,0.427l0.212-0.64l2.769-0.213l0.639,0.426l0.213,0.854l1.491-1.064l1.064,0.426l2.982-2.981l0.852-3.407l0.852-0.852l3.833-1.278l7.667-4.472l1.704-0.426l3.195,0.426l3.62-0.214l6.814-2.129l4.642-2.321V44.302l-0.381,0.381l-0.427-0.213v1.704l-0.638,0.851v-0.212l0.213-0.426l-1.278-0.426l0.213-0.852l-0.639,0.426l0.852-1.491l-0.213-0.638h0.638l-0.425-0.64l1.065-0.638l-0.426,0.638l0.426,0.213l0.852-0.638l0.168,0.042v-8.565H112.615z M83.443,45.535v-0.81l0.639,0.384L83.443,45.535z M113.852,44.081V43.35l-0.168,0.056L113.852,44.081z", "M166.71,26.155v0.639h-0.851l-0.213-0.852l0.213-0.425l-1.066,0.212l0.428,0.64l-1.49,0.425v1.065l0.213,0.852l-0.641,0.852l0.641-0.426l1.49,0.852h1.916l-0.213-1.065l-0.214,0.426l-1.063-0.213v-0.851l0.639-0.214l-0.213-0.638l1.064-0.852L166.71,26.155zM172.666,43.192l-2.13-0.639l-2.769-1.917l-0.64,0.212l0.213,0.426l-1.065-0.426l-0.639,0.213v-0.852l-2.343-1.065l-0.851-1.704l-3.407-2.129l-0.214,0.212V35.1l-0.641,0.213l-1.062-1.065l-0.428-1.49l1.277-0.426l1.066-2.556l1.277-0.639l0.213-1.278l1.063-2.342l-0.853,0.639l-0.426-0.213l-0.214-1.917l0.427,0.213l0.426-0.426l-0.639-0.213l0.213-0.639l0.639-0.426l0.213,0.639l0.64-1.277l0.214,1.065l0.213-1.065l0.639,0.213l0.213-0.639l0.427,1.065l-0.427,0.639l0.854-0.426l0.637-1.278l-0.637-0.639l1.276,0.213l-1.276-1.491l0.424,0.213l0.213-0.426l0.428,0.639l-0.213-0.852h0.639l0.428-1.065l-0.213-0.639h0.424v0.639l1.278-1.491l-1.278-1.278l-0.639,0.427l0.428,0.425h-0.641l-0.854-1.917h-0.424l0.637-0.852l-2.555,1.917l1.491,0.427l-0.64,1.277l-0.639,0.427l-0.853-0.213l-0.427,0.426v-0.64h-0.426l0.639-1.064l-0.639,0.212l-0.213-0.425l0.852-1.065l-1.703,0.852l-0.214,0.639l-0.638-0.425l1.703-1.917l-2.344,1.277l-0.213-0.425l-1.062,0.213l-1.066,0.639l0.854,0.426l-1.277-0.213l0.425,0.639l-2.556-1.065l-0.639-1.49l-0.852,1.065l-2.557-0.64l-0.641,1.278l0.428-1.065l-0.428-0.852l-0.424,0.213l-0.214-0.639l-0.853,0.639l-0.639-0.639l0.639-0.64l-0.852-0.212l-1.917,1.064l0.213-0.852l-0.427,0.426l-0.426-0.639l-0.638,0.426l0.212-0.639l-1.278,0.213l-1.49-2.556h-0.426l0.212,0.64l-0.425-0.213l-1.065,0.852l-1.491-2.13l-0.426,0.639l-0.213-1.278l-0.638,0.426l0.212,0.639l-1.065-1.065l0.213,1.278l0.426,0.212l-0.426,0.64l-0.426-1.491l-0.851-0.639v0.852l-1.066-0.213l0.213,0.426l-0.425,0.425l1.065-0.212l0.213,0.426l-0.213,0.213l0.852,0.213l0.212,0.639l0.853-0.426l1.917-0.213v0.425h0.426l-0.426,0.213l0.638,0.213h-0.426l0.426,0.213l-0.426,0.212h1.278l-1.065,1.065l0.852,0.639L138.6,13.59l-0.213,1.278l1.065,0.425l-1.491-0.425l-0.639,0.425l-0.213,1.278l-0.426-1.065l-0.638,0.426l-0.213-0.64l-1.065,1.065l-1.065-0.639l-2.981,0.425l-0.853-0.639l-0.213-1.065l-0.426,1.278l-1.704-0.427l0.426,1.492l-1.065-0.213l-0.426,0.425l1.065,0.852l-0.852-0.212l0.399,0.665l-0.399,0.399l-0.426-0.852v0.213l-0.426,0.213l0.213-1.065l-1.278-0.213l0.213,1.492h-0.426l1.277,0.639h-0.639v0.425l-1.065-1.064l-0.639,0.212l0.213,0.426l-0.425-0.426v1.491l-1.491,0.425v1.491l1.278,1.491l-0.426-0.213l-1.704,1.278l-0.639-0.213v-0.426l-0.639,0.426l-0.213,1.917l0.426-0.213l-0.852,0.639l0.213,1.065l-0.639,0.427l-0.426-0.427l0.426,1.065l-0.426-0.427l-0.426,0.852l-0.213-0.639l-0.852,1.49v0.64l0.639,0.639l0.426-0.426v0.64l0.852-0.213l0.213,0.426l0.852-0.426l-0.213,0.426l-1.065,0.639h0.639v0.426h-0.212l0.142,0.284l0.163,0.081l0.547-0.365l-0.213,0.639l1.491-0.852v0.639h-0.852l0.426,0.425l-0.639-0.212h-0.426h-0.852l0.426,0.852l-0.426-0.426l0.213,1.49l-0.639,0.213l-0.639-1.491l-0.639-0.213l0.213,1.065l-0.852-1.278l0.213,0.426h-0.639l0.426,0.639l-0.426,0.426l0.639,0.212h-0.639l-0.213,0.852v-0.639l-0.426,0.852l0.426-1.065l-0.213-0.213l0.213-0.639l-0.426-0.212v0.212l0.212,0.639l-0.426-0.426v-0.852l-0.426,0.639v-0.852h-0.713v8.557l0.716,0.18l-0.213,0.639l-0.503,0.168v0.586l0.077,0.31l-0.077,0.077v73.016h59.58V44.169L172.666,43.192z M125.184,12.525l2.129,1.278l2.13-1.278l0.639-1.064l0.64,0.212v-0.852l0.638-0.212l-0.851-1.278h-0.853l-0.212-0.639l-0.639,0.852l0.426,1.065l-0.638-1.491l-0.213,0.639l-0.426-0.212v1.277l-0.213-1.065h-0.213l-0.639-0.212l-1.278,0.426l0.852,1.278l-0.852-0.426l-0.213-1.065l-0.426,0.426l0.213,0.213h-0.213v-0.213V9.332l-1.491-0.852l0.525,2.797l-0.737,0.185l0.425-0.426l-0.425,0.213l0.425-0.852l-0.425-0.852l-1.491,1.065l0.852,0.426h-0.426v0.852l0.212,0.142v0.497l-0.212-0.639l-0.213,0.426l-0.639-0.426v0.852h-0.426l4.046,0.426L125.184,12.525z M123.906,12.525l0.157-0.939l0.056,0.3l1.064,0.638l-1.064-0.425L123.906,12.525z", "M113.819,117.351v38.96l0.502-0.251l6.602-0.641l1.064-0.212l4.26,0.426l2.343-1.276l4.046,2.129l2.981,2.342h1.917l-0.213-0.426l0.426-0.213h1.491l2.555,2.131h2.556l-0.64-0.64l0.426-0.214l0.427,0.426l0.426-0.639l2.341,2.343l-0.638,0.214v1.063l1.276-0.64l0.853,0.213l0.853,1.703l-0.64,0.854l0.213-0.639h-1.062l0.424,0.852l-0.424,0.641l0.851,0.211l-0.427,0.641l1.278,1.277l-0.426-1.277l0.64,1.277l0.639-0.426l1.277,0.853l-0.64-0.64l1.063,0.213l-0.424,0.427l1.276,1.702v1.277l2.344,2.131l1.277,5.75l0.213-0.64l0.213,0.64l0.425,0.213l-0.851,0.213l-0.427-0.853l0.213-0.213l-0.854-0.214v-0.425l-0.638,1.276l0.851-0.426l2.558,3.194l1.063-0.64l1.065,1.278l0.425-2.344l-1.49,0.64l0.641-0.427l0.213-1.703l0.851-0.427l0.427,0.427v-1.489l3.194-3.621l2.556-1.277l-0.64,0.213l0.427-0.852l0.428,0.424l1.49-0.424l1.489-4.261l1.277-1.491l0.853,0.428v-4.26l1.064,2.342l0.213,1.918l0.64,0.639l-1.704,1.49l1.277,2.343l-2.557,2.556l-0.637,1.918l-0.428,0.213l0.428,1.276l-0.641,1.278l0.426-0.213l0.215,1.277l-0.428,2.556l-0.427,0.426l-2.554-0.64l-1.066,3.194l2.13-0.214l1.704-1.275l1.49,0.638l0.853-0.425l-0.426-0.428l1.063-2.342l0.213-2.13l1.279-2.981l3.193,5.537l-0.428,0.213l-0.213-0.639l-0.213,4.686l-2.342,2.129l2.981,0.214l1.276-1.064l1.065,0.214l3.188,2.549l-3.188-2.336l2.769,2.129l1.812,2.353l-1.383-2.138l1.062,0.851l1.277,2.769l-0.564-0.873l1.631,4.281l-0.213,1.064l-1.063,1.064l0.851,1.276l-0.426,0.64l1.703,2.342l2.477,3.302l0.08,0.319l1.277,1.064l2.547,0.182v-90.426H113.819z M172.887,189.499l0.213-1.065h-1.492l0.428-1.277l-7.028,1.49l-0.426,1.064l1.278,1.491l1.918-0.213l1.49-0.427l1.703,0.853l0.852-0.64l0.213-0.853h2.77l0.424-0.851l-1.49-0.639L172.887,189.499z", "M278.516,129.443l-0.851-0.852l-0.606-2.546l-0.459-1.926l-0.639-0.852l-0.641,0.425l0.428-0.639l-0.854-0.426l0.641-0.639l-0.641-0.639l0.854-0.426l-0.641-0.639v-0.639l1.064,1.277l-0.638-1.917l-0.214,0.64l0.427-1.704l-0.42-0.279l0.207-1.851h-0.427l0.853-3.407h-0.426l-0.427-0.852l-0.428,1.277l0.215-1.064h-0.639l0.424-0.426l-0.851-0.639v-1.278l0.638-0.639l-1.277,0.426l1.066-0.426l-0.214-1.065l-2.343-0.639l0.64-0.426l-1.278-1.491l0.213-0.852l-0.639-0.426l-0.213,0.426l0.213-0.639l-1.277-0.64v0.213l-1.064-1.065l-1.064-2.769l-0.853-0.212l0.213-0.852l-0.426,0.639V98.35l-0.64-0.213l0.426,0.852l-0.852-0.426v0.426l-0.853-0.426v0.426l-2.769-3.833l-0.64,0.852l-0.851-1.277l0.424-0.213l-0.639-1.278l0.426-0.425l-0.639-2.342h0.428l0.211-1.705l-0.426-1.064v0.639l-0.426-0.213l-0.427-0.852l0.64,0.213l0.213-0.213l-0.64-1.065v0.852l-0.213-0.852l-0.426-0.212l-0.212,0.639l0.638,1.065l-0.426-0.213l0.426,1.065l-2.979-2.13l-1.066-1.704l-0.211,0.426l-0.641,1.064l0.641,1.491l0.425,0.852l-0.425-0.426l-1.279-1.49l-1.277,1.49l0.641-1.49h-0.854l0.426-0.213l-0.213-0.425l-0.851,0.212l0.851-0.426l-1.276-2.981l0.427-2.342l-0.214,0.425l-0.853-0.852l-0.213,0.427v-1.917l-0.852,0.425l0.213-0.639h-0.213l0.424-1.065l-0.851-0.852l-0.64,0.426l0.213-0.852h-1.49l-0.213-0.639l0.426-0.213l-1.062-0.639l0.211-0.426l-0.639-0.639l0.639-0.213l-0.425-0.426l0.638,0.213l0.213-0.426l1.065,0.852l-1.278-2.13l-0.424,0.213v-0.639h-0.641l-0.213-0.852h-0.854v0.852l-0.639-0.213l-0.854-0.852l0.215-0.213v-0.213l-1.064-0.639l-1.277,0.213l-0.426-1.492h-0.64l0.426,1.065l-0.853-0.213l-1.277-1.277l0.854,0.425l-1.279-2.768v0.852l-1.916,0.212l-0.852-1.916l-0.213,0.852h-0.641l-0.639-0.852l-2.129-0.853l-1.277-1.49l0.425-2.342h-0.853l-1.489-2.556l1.063-3.62h-0.427v-1.704l-1.276-2.343l0.426-1.064l-1.065,0.212l-2.554-3.407v-1.065h0.426v-1.49l-0.854-1.065l-0.213-2.342l-0.852-0.852l1.064-1.278v-0.213l-0.641,0.213l-0.211-1.065l0.852-1.064h-0.428l-0.424-0.852l-1.279-0.213l-0.852-1.278l-1.49-0.425l-1.064-2.769l-1.277,1.065l-0.854-0.426l-0.424,1.278l-1.279,0.639l-1.063-0.852l-0.64-2.769l-1.064-1.704l0.428-2.13l-0.641-2.129l0.213-1.917l-1.277,0.426l0.639-1.916l-1.277-0.852v-0.852l-1.062-0.213l-0.215-1.491l1.277-1.064l-1.062-0.427l-0.854,0.213l-0.638-0.639V9.97l-0.854-2.556h-0.64l-0.424-0.852v0.426l-0.854,0.425l1.066-1.704l-0.213-0.213l-0.214-0.212l-0.853,0.212l-0.639,1.278L202.055,7.2l0.215,1.065l-0.64,2.769h-0.213l-0.213,1.49h0.638l-0.852,0.213l-0.213,1.278l0.427,0.639l0.426-0.427l-0.426,0.64l-0.427-0.213l-0.213,0.852l-0.213-1.49l-1.064,1.704l0.64,0.213h-0.64l-0.854,2.129h0.641l-0.213-0.852l0.639,0.213l-0.426,0.213l0.853,0.639h1.064l-1.064,0.426l1.064,0.426l-0.427,0.213l0.213,1.064l-0.852-1.491l-0.427,1.065l-1.065,0.852l0.641,1.917l-0.213,0.639l0.426-0.213l-0.213,0.213l0.426,0.213h-0.854l-1.062,3.194l1.062,2.343l-0.638,2.129l0.853,3.833l-1.277,3.407l-0.641,2.555l0.427,1.065l-1.49,4.259l-1.703,2.13l-0.427,2.769l-1.917,1.491l-3.62,0.852l-0.427-0.213l-1.277-0.852l-1.489-0.213l-0.854-1.064l-1.49-0.639l-0.427-1.916l-0.851-0.852l-2.769-0.853l-3.409-0.425l-1.822-2.43v73.182h20.771v16.982l0.002-0.043l53.113,0.052l0.869-0.449l-0.053-0.543l0.722-0.072l0.073-1.102l1.104,0.073l0.796-1.173l0.541-0.053l1.321,0.416l1.3,0.237l1.41-0.504l0.903-0.089l0.235,0.524l0.722-0.071l0.761,0.29l0.577,0.309l1.643,0.021l1.121,0.254l0.631,0.85l0.415,0.507l0.435,0.688l0.069,0.723l0.47,1.049l0.688-0.433l0.309-0.578l0.651-0.795l0.651-0.794l0.433,0.688l0.757,0.291l1.049-0.47l0.129-0.559l0.651-0.795l-0.722,0.073l-0.288-1.068l0.108-0.741l0.904-0.09l1.083-0.106l0.67-0.614l0.851-0.631l0.938,0.272l0.813,0.833l1.049-0.468l0.939,0.271l0.541-0.053l0.526-0.234l0.506-0.415l0.92,0.092l0.975-0.091l-0.183,1.97L278.516,129.443zM274.258,109.85l0.852,1.491l1.916-5.751l-0.426-0.852v-1.49l-1.063,0.852l0.85,1.278l-1.704,1.917h0.428l-0.428,1.49L274.258,109.85z", "M214.201,220.805l-0.639,1.277l0.213,2.555v0.853l0.426,0.426l1.279-1.278l-0.213-2.98L214.201,220.805z M243.377,238.691l-0.425-1.276l0.638-1.704l-0.638-0.638l0.638-1.705l-1.703-2.129l-1.066-0.214l-0.424,1.279l-1.278-0.64l-1.491,1.703l-1.064-0.64l-1.064,0.854l-0.852-0.426l-1.49,0.638l1.064,1.065l-0.215,0.426l-1.277-1.491l-1.062,0.853l0.21,0.853l-0.424-1.065l-1.916,0.426l-4.899-2.982h-1.277l-0.428-1.064v0.853l-0.85-0.213v0.425l-2.982-1.49l0.215,1.703l-0.641,1.278l0.852,3.621l1.492,2.13l-0.428,0.425l2.131,2.769v1.916l0.639-0.639l1.064,1.917h0.426l-0.426,1.491l-0.213-1.277l-1.917-1.705l0.638,3.834l0.641,0.213l1.064,3.194l1.065,0.427l1.063,2.342h0.641l-0.428-0.213l0.428-0.853l0.426,1.279h1.704l-0.214,0.426l-1.49-0.426v0.638l-0.426-0.212l0.638,1.704l1.492-0.641l2.34,0.428l-0.21-0.639l0.85,1.489h1.277l0.854-1.278l-0.641-0.639l0.854,0.215l0.214-0.853l-0.64-0.213l0.853-0.427l-0.853-1.063l0.213-0.427v0.638l0.427,0.427l0.213-0.638v0.638l0.851,0.426l0.213-2.343l0.641,0.214v-1.277l-1.067-1.704l1.491,1.917l0.426-0.213l-0.426,1.277l0.854-0.64l-0.215-1.063l0.641-0.213l-1.066-0.64l1.066,0.212l0.425,1.066l0.853-0.213l1.064-1.918l-0.639-1.064l0.852-0.426l0.212-1.703l-0.64,0.212l1.066-2.129h0.639l-0.639-0.213l0.852-1.278l-0.426,1.278l1.064,0.425v1.279l0.428-0.641l-0.64-1.49L243.377,238.691z M241.248,228.257h2.129l0.213,0.64l0.852-0.64l-0.852-1.065L241.248,228.257z M240.396,224.637l0.852,0.853l0.639,1.491l1.703-0.641l-0.425-1.064l-0.427,0.427l0.427-1.065l0.212-0.426h-0.852l-1.705-2.129l-1.276,1.491l0.853,0.212V224.637z"];

var stage = new _cax2.default.Stage(660, 600, 'body');

var shapes = _pasition2.default.path2shapes('M595,82.1c1,1-1,2-1,2s-6.9,2-8.9,4.9c-2,2-4.9,8.8-4.9,8.8c3.9-1,8.9-2,13.8-4c1,0,2,1,3,2c1,0-11.8,4.9-14.8,6.9c-2,2-11.8,9.9-14.8,9.9c-2.9,0-9.9,1-9.9,1c1,2,2,3.9,3.9,6.9c0,0-6.9,4-6.9,4.9c-1,1-5.9,6.9-5.9,6.9s17.7,1.9,23.6-7.9c-5.9,9.8-19.7,19.7-48.2,19.7c-29.5,0-53.1-11.8-68.9-17.7c-16.7-6.9-38.4-14.8-56.1-14.8c-16.7,0-36.4,4.9-49.2,16.8c-22.6-8.8-54.1-4-68.9,9.8c-13.8,13.8-27.5,30.5-29.5,42.3c-2.9,12.9-9.8,43.3-19.7,57.2c-13.8,22.5-29.5,28.5-34.5,38.3c-4.9,9.9-4.9,30.5-4,30.5c2,1,8.9,0,12.8-2c7.9-2.9,29.5-25.6,37.4-36.4c7.9-10.9,34.5-58.1,38.4-74.8s7.9-33.5,19.7-42.3c12.8-8.8,28.5-4.9,28.5-3.9c0,0-14.7,11.8-15.7,44.3s18.7,28.6,8.8,49.2c-9.9,17.7-39.3,5.9-49.2,16.7c-7.9,8.9,0,40.3,0,46.2c0,6-3,33.5-4.9,40.4c-1,5.9,0,9.8-1,13.8c-1,3,6,3.9,6,3.9s-6,7.8-8.9,5.9c-2.9-1-4.9-1-6.9,0c-2,0-5.9,1.9-9.9,0L232.9,401c2,1,4.9,1.9,7.9,1c4-1,23.6-9.9,25.6-11.9c2.9-1,19.7-10.8,22.6-16.7c2-5.9,5.9-24.6,5.9-30.5c1-6,2-24.6,2-29.5s-1-13.8,0-17.7c2-2.9,4.9-6.9,8.9-8.9c4.9-1,10.8-1,11.8-1c2,0,18.7,2,21.6,2c3.9,0,19.7-2.9,23.6-5c4.9-0.9,7.8,0,8.9,2c2,1.9-2,4.9-2,5.9c-1,1-8.8,10.8-10.8,14.7c-2,4.9-8.8,13.8-6.9,17.7c2,3.9,2,4.9,7.8,7.9c5.9,1.9,28.5,13.8,41.3,25.6c13.8,12.7,26.6,28.4,28.6,36.4c2.9,8.9,7.8,9.8,10.8,9.8c3,1,8.9,2,8.9,5.9s-1,8.8-1,8.8l36.4,13.8c0,0,0-12.8-1-17.7c-1-5.9-6.9-11.8-11.8-17.7c-4.9-6.9-56-57.1-61-61c-4.9-3-8.9-6.9-9.8-14.7c-1-7.9,8.8-13.8,14.8-20.6c3.9-4.9,14.7-27.6,16.7-30.6c2-2.9,8.9-10.8,12.8-10.8c4.9,0,15.8,6.9,29.5,11.8c5.9,2,48.2,12.8,54.1,14.8c5.9,1,18.6,0,22.6,3.9c3.9,2.9,0,10.9-1,15.8c-1,5.9-11.8,27.5-11.8,27.5s2,7.8,2,13.8c0,6.9-2.9,31.5-5.9,39.3c-2,8.9-15.8,31.6-18.7,35.5c-2,2.9-4.9,4.9-4.9,9.9c0,4.9,8.8,6,11.8,9.8c4,3,1,8.8,0,14.8l39.4,16.7c0-2.9,2-7.9,0-9.9c-1-2.9-5.9-8.8-8.8-12.8c-2-2.9-8.9-13.8-10.8-15.8c-2-2.9-2-8.8,0-13.8c1-4.9,13.8-38.3,14.7-42.3c2-4.9,20.7-44.3,22.6-49.2c2-5.9,17.7-34.4,19.7-39.4c2-5.9,14.8-10.8,18.7-10.8c4.9,0,29.5,8.8,33.4,10.8c2.9,1,25.6,10.9,29.5,12.8c4.9,1.9,2,5.9-1,6.9c-2.9,1.9-39.4,26.5-42.3,27.5c-2.9,1-5.9,3.9-7.9,3.9c-2.9,0-6.9,3.1-6.9,4c0,2-1,5.9-5.9,5.9c-3.9,0-11.8-5.9-16.7-11.8c-6.9,3.9-11.8,6.9-14.8,12.8c-4.9,4.9-6.9,8.9-9.8,15.8c2,2,5.9,2.9,8.8,2.9h31.5c3,0,6.9-0.9,9.9-1.9c2.9-2,80.7-53.1,80.7-53.1s12.8-9.9,12.8-18.7c0-6.9-5.9-8.9-7.9-11.8c-3-1.9-20.7-13.8-23.6-15.7c-4-2.9-17.7-10.9-21.6-12.9c-3-1.9-13.8-5.8-13.8-5.8c3-8.9,5-15.8,5.9-17.7c1-2,1-19.7,2-22.7c0-2.9,5-15.7,6.9-17.7c2-2,6.9-17.7,7.9-20.7c1-1.9,8.8-24.6,12.8-24.6c3.9-1,7.9,2.9,11.8,2.9c4,1,18.7-1,26.6,0c6.9,1,15.8,9.9,17.7,10.8c2.9,1,9.8,3.9,11.8,3.9c1,0,10.8-6.9,10.8-8.8c0-2-6.9-5.9-7.9-5.9c-1-1-7.8-4.9-7.8-4.9c0,1,2.9-1.9,7.8-1.9c3.9,0,7.9,3.9,8.8,4.9c2,1,6.9,3.9,7.9,1.9c1-1,4.9-5.9,4.9-8.9c0-4-3.9-8.8-5.9-10.8s-24.6-23.6-26.6-24.6c-2.9-1-14.7-11.8-14.7-14.7c-1-2-6.9-6.9-7.9-7.9s-30.5-21.6-34.5-24.6c-3.9-2.9-7.9-7.8-7.9-12.7s-2-17.7-2-17.7s-6.9-1-9.8,1.9c-2.9,2-9.8,17.8-13.8,17.8c-10.9-2-24.6,1-24.6,2.9c1,2.9,10.8,1,10.8,1c0,1-3.9,5.9-6.9,5.9c-2,0-7.8,2-8.8,2.9c-2,0-5.9,3.1-5.9,3.1c2.9,0,5.9,0,9.8,0.9c0,0-5.9,4-8.9,4c-2.9,0-12.8,2.9-15.7,3.9c-2,1.9-9.9,7.9-9.9,7.9H589l1,2h4.9L595,82.1L595,82.1z');

var list = [];
var allShape = [];
mapPath.forEach(function (path) {
  list.push(_pasition2.default.path2shapes(path));
});

list.forEach(function (shapes) {
  shapes.forEach(function (shape) {
    shape.pathLen = 0;
    shape.forEach(function (c, index) {
      c.bzLen = (0, _bezier.getLength)(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], 50);
      shape.pathLen += c.bzLen;
    });
    allShape.push(shape);
  });
});

var startIndex = 0;
var player = new _player2.default(allShape[startIndex], true, function () {
  startIndex++;
  if (startIndex < allShape.length) {
    setTimeout(function () {
      player.shape = allShape[startIndex];
      player.start();
    }, 200);
  } else {
    player.stop();
  }
});

player.x = 200;

player.y = 200;
stage.add(player);

_cax2.default.tick(function () {
  player.update();
  stage.update();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * pasition v1.0.1 By dntzhang
 * Github: https://github.com/AlloyTeam/pasition
 * MIT Licensed.
 */

(function (global, factory) {
    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.pasition = factory();
})(undefined, function () {
    'use strict';

    var slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    //https://github.com/colinmeinke/svg-arc-to-cubic-bezier

    var TAU = Math.PI * 2;

    var mapToEllipse = function mapToEllipse(_ref, rx, ry, cosphi, sinphi, centerx, centery) {
        var x = _ref.x,
            y = _ref.y;

        x *= rx;
        y *= ry;

        var xp = cosphi * x - sinphi * y;
        var yp = sinphi * x + cosphi * y;

        return {
            x: xp + centerx,
            y: yp + centery
        };
    };

    var approxUnitArc = function approxUnitArc(ang1, ang2) {
        var a = 4 / 3 * Math.tan(ang2 / 4);

        var x1 = Math.cos(ang1);
        var y1 = Math.sin(ang1);
        var x2 = Math.cos(ang1 + ang2);
        var y2 = Math.sin(ang1 + ang2);

        return [{
            x: x1 - y1 * a,
            y: y1 + x1 * a
        }, {
            x: x2 + y2 * a,
            y: y2 - x2 * a
        }, {
            x: x2,
            y: y2
        }];
    };

    var vectorAngle = function vectorAngle(ux, uy, vx, vy) {
        var sign = ux * vy - uy * vx < 0 ? -1 : 1;
        var umag = Math.sqrt(ux * ux + uy * uy);
        var vmag = Math.sqrt(ux * ux + uy * uy);
        var dot = ux * vx + uy * vy;

        var div = dot / (umag * vmag);

        if (div > 1) {
            div = 1;
        }

        if (div < -1) {
            div = -1;
        }

        return sign * Math.acos(div);
    };

    var getArcCenter = function getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
        var rxsq = Math.pow(rx, 2);
        var rysq = Math.pow(ry, 2);
        var pxpsq = Math.pow(pxp, 2);
        var pypsq = Math.pow(pyp, 2);

        var radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;

        if (radicant < 0) {
            radicant = 0;
        }

        radicant /= rxsq * pypsq + rysq * pxpsq;
        radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);

        var centerxp = radicant * rx / ry * pyp;
        var centeryp = radicant * -ry / rx * pxp;

        var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
        var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;

        var vx1 = (pxp - centerxp) / rx;
        var vy1 = (pyp - centeryp) / ry;
        var vx2 = (-pxp - centerxp) / rx;
        var vy2 = (-pyp - centeryp) / ry;

        var ang1 = vectorAngle(1, 0, vx1, vy1);
        var ang2 = vectorAngle(vx1, vy1, vx2, vy2);

        if (sweepFlag === 0 && ang2 > 0) {
            ang2 -= TAU;
        }

        if (sweepFlag === 1 && ang2 < 0) {
            ang2 += TAU;
        }

        return [centerx, centery, ang1, ang2];
    };

    var arcToBezier = function arcToBezier(_ref2) {
        var px = _ref2.px,
            py = _ref2.py,
            cx = _ref2.cx,
            cy = _ref2.cy,
            rx = _ref2.rx,
            ry = _ref2.ry,
            _ref2$xAxisRotation = _ref2.xAxisRotation,
            xAxisRotation = _ref2$xAxisRotation === undefined ? 0 : _ref2$xAxisRotation,
            _ref2$largeArcFlag = _ref2.largeArcFlag,
            largeArcFlag = _ref2$largeArcFlag === undefined ? 0 : _ref2$largeArcFlag,
            _ref2$sweepFlag = _ref2.sweepFlag,
            sweepFlag = _ref2$sweepFlag === undefined ? 0 : _ref2$sweepFlag;

        var curves = [];

        if (rx === 0 || ry === 0) {
            return [];
        }

        var sinphi = Math.sin(xAxisRotation * TAU / 360);
        var cosphi = Math.cos(xAxisRotation * TAU / 360);

        var pxp = cosphi * (px - cx) / 2 + sinphi * (py - cy) / 2;
        var pyp = -sinphi * (px - cx) / 2 + cosphi * (py - cy) / 2;

        if (pxp === 0 && pyp === 0) {
            return [];
        }

        rx = Math.abs(rx);
        ry = Math.abs(ry);

        var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);

        if (lambda > 1) {
            rx *= Math.sqrt(lambda);
            ry *= Math.sqrt(lambda);
        }

        var _getArcCenter = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp),
            _getArcCenter2 = slicedToArray(_getArcCenter, 4),
            centerx = _getArcCenter2[0],
            centery = _getArcCenter2[1],
            ang1 = _getArcCenter2[2],
            ang2 = _getArcCenter2[3];

        var segments = Math.max(Math.ceil(Math.abs(ang2) / (TAU / 4)), 1);

        ang2 /= segments;

        for (var i = 0; i < segments; i++) {
            curves.push(approxUnitArc(ang1, ang2));
            ang1 += ang2;
        }

        return curves.map(function (curve) {
            var _mapToEllipse = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery),
                x1 = _mapToEllipse.x,
                y1 = _mapToEllipse.y;

            var _mapToEllipse2 = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery),
                x2 = _mapToEllipse2.x,
                y2 = _mapToEllipse2.y;

            var _mapToEllipse3 = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery),
                x = _mapToEllipse3.x,
                y = _mapToEllipse3.y;

            return { x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y };
        });
    };

    //https://github.com/jkroso/parse-svg-path/blob/master/index.js
    /**
     * expected argument lengths
     * @type {Object}
     */

    var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0

        /**
         * segment pattern
         * @type {RegExp}
         */

    };var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

    /**
     * parse an svg path data string. Generates an Array
     * of commands where each command is an Array of the
     * form `[command, arg1, arg2, ...]`
     *
     * @param {String} path
     * @return {Array}
     */

    function parse(path) {
        var data = [];
        path.replace(segment, function (_, command, args) {
            var type = command.toLowerCase();
            args = parseValues(args);

            // overloaded moveTo
            if (type == 'm' && args.length > 2) {
                data.push([command].concat(args.splice(0, 2)));
                type = 'l';
                command = command == 'm' ? 'l' : 'L';
            }

            while (true) {
                if (args.length == length[type]) {
                    args.unshift(command);
                    return data.push(args);
                }
                if (args.length < length[type]) throw new Error('malformed path data');
                data.push([command].concat(args.splice(0, length[type])));
            }
        });
        return data;
    }

    var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

    function parseValues(args) {
        var numbers = args.match(number);
        return numbers ? numbers.map(Number) : [];
    }

    function shapeBox(shape) {
        var minX = shape[0][0],
            minY = shape[0][1],
            maxX = minX,
            maxY = minY;
        shape.forEach(function (curve) {
            var x1 = curve[0],
                x2 = curve[2],
                x3 = curve[4],
                x4 = curve[6],
                y1 = curve[1],
                y2 = curve[3],
                y3 = curve[5],
                y4 = curve[7];

            minX = Math.min(minX, x1, x2, x3, x4);
            minY = Math.min(minY, y1, y2, y3, y4);
            maxX = Math.max(maxX, x1, x2, x3, x4);
            maxY = Math.max(maxY, y1, y2, y3, y4);
        });

        return [minX, minY, maxX, maxY];
    }

    function boxDistance(boxA, boxB) {
        return Math.sqrt(Math.pow(boxA[0] - boxB[0], 2) + Math.pow(boxA[1] - boxB[1], 2)) + Math.sqrt(Math.pow(boxA[2] - boxB[2], 2) + Math.pow(boxA[3] - boxB[3], 2));
    }

    function curveDistance(curveA, curveB) {
        var x1 = curveA[0],
            x2 = curveA[2],
            x3 = curveA[4],
            x4 = curveA[6],
            y1 = curveA[1],
            y2 = curveA[3],
            y3 = curveA[5],
            y4 = curveA[7],
            xb1 = curveB[0],
            xb2 = curveB[2],
            xb3 = curveB[4],
            xb4 = curveB[6],
            yb1 = curveB[1],
            yb2 = curveB[3],
            yb3 = curveB[5],
            yb4 = curveB[7];

        return Math.sqrt(Math.pow(xb1 - x1, 2) + Math.pow(yb1 - y1, 2)) + Math.sqrt(Math.pow(xb2 - x2, 2) + Math.pow(yb2 - y2, 2)) + Math.sqrt(Math.pow(xb3 - x3, 2) + Math.pow(yb3 - y3, 2)) + Math.sqrt(Math.pow(xb4 - x4, 2) + Math.pow(yb4 - y4, 2));
    }

    function sortCurves(curvesA, curvesB) {

        var arrList = permuteCurveNum(curvesA.length);

        var list = [];
        arrList.forEach(function (arr) {
            var distance = 0;
            var i = 0;
            arr.forEach(function (index) {
                distance += curveDistance(curvesA[index], curvesB[i++]);
            });
            list.push({ index: arr, distance: distance });
        });

        list.sort(function (a, b) {
            return a.distance - b.distance;
        });

        var result = [];

        list[0].index.forEach(function (index) {
            result.push(curvesA[index]);
        });

        return result;
    }

    function sort(pathA, pathB) {

        var arrList = permuteNum(pathA.length);

        var list = [];
        arrList.forEach(function (arr) {
            var distance = 0;
            arr.forEach(function (index) {
                distance += boxDistance(shapeBox(pathA[index]), shapeBox(pathB[index]));
            });
            list.push({ index: arr, distance: distance });
        });

        list.sort(function (a, b) {
            return a.distance - b.distance;
        });

        var result = [];

        list[0].index.forEach(function (index) {
            result.push(pathA[index]);
        });

        return result;
    }

    function permuteCurveNum(num) {
        var arr = [];

        for (var i = 0; i < num; i++) {
            var indexArr = [];
            for (var j = 0; j < num; j++) {
                var index = j + i;
                if (index > num - 1) index -= num;
                indexArr[index] = j;
            }

            arr.push(indexArr);
        }

        return arr;
    }

    function permuteNum(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(i);
        }

        return permute(arr);
    }

    function permute(input) {
        var permArr = [],
            usedChars = [];
        function main(input) {
            var i, ch;
            for (i = 0; i < input.length; i++) {
                ch = input.splice(i, 1)[0];
                usedChars.push(ch);
                if (input.length == 0) {
                    permArr.push(usedChars.slice());
                }
                main(input);
                input.splice(i, 0, ch);
                usedChars.pop();
            }
            return permArr;
        }
        return main(input);
    }

    var pasition = {};
    pasition.parser = parse;

    pasition.lerpCurve = function (pathA, pathB, t) {

        return pasition.lerpPoints(pathA[0], pathA[1], pathB[0], pathB[1], t).concat(pasition.lerpPoints(pathA[2], pathA[3], pathB[2], pathB[3], t)).concat(pasition.lerpPoints(pathA[4], pathA[5], pathB[4], pathB[5], t)).concat(pasition.lerpPoints(pathA[6], pathA[7], pathB[6], pathB[7], t));
    };

    pasition.lerpPoints = function (x1, y1, x2, y2, t) {
        return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
    };

    pasition.q2b = function (x1, y1, x2, y2, x3, y3) {
        return [x1, y1, (x1 + 2 * x2) / 3, (y1 + 2 * y2) / 3, (x3 + 2 * x2) / 3, (y3 + 2 * y2) / 3, x3, y3];
    };

    pasition.path2shapes = function (path) {
        //https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
        //M = moveto
        //L = lineto
        //H = horizontal lineto
        //V = vertical lineto
        //C = curveto
        //S = smooth curveto
        //Q = quadratic Belzier curve
        //T = smooth quadratic Belzier curveto
        //A = elliptical Arc
        //Z = closepath
        //以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
        var cmds = pasition.parser(path),
            preX = 0,
            preY = 0,
            j = 0,
            len = cmds.length,
            shapes = [],
            current = null,
            closeX = void 0,
            closeY = void 0,
            preCX = void 0,
            preCY = void 0,
            sLen = void 0,
            curves = void 0,
            lastCurve = void 0;

        for (; j < len; j++) {
            var item = cmds[j];
            var action = item[0];
            var preItem = cmds[j - 1];

            switch (action) {
                case 'm':
                    sLen = shapes.length;
                    shapes[sLen] = [];
                    current = shapes[sLen];
                    preX = preX + item[1];
                    preY = preY + item[2];
                    break;
                case 'M':

                    sLen = shapes.length;
                    shapes[sLen] = [];
                    current = shapes[sLen];
                    preX = item[1];
                    preY = item[2];
                    break;

                case 'l':
                    current.push([preX, preY, preX, preY, preX, preY, preX + item[1], preY + item[2]]);
                    preX += item[1];
                    preY += item[2];
                    break;

                case 'L':

                    current.push([preX, preY, item[1], item[2], item[1], item[2], item[1], item[2]]);
                    preX = item[1];
                    preY = item[2];

                    break;

                case 'h':

                    current.push([preX, preY, preX, preY, preX, preY, preX + item[1], preY]);
                    preX += item[1];
                    break;

                case 'H':
                    current.push([preX, preY, item[1], preY, item[1], preY, item[1], preY]);
                    preX = item[1];
                    break;

                case 'v':
                    current.push([preX, preY, preX, preY, preX, preY, preX, preY + item[1]]);
                    preY += item[1];
                    break;

                case 'V':
                    current.push([preX, preY, preX, item[1], preX, item[1], preX, item[1]]);
                    preY = item[1];
                    break;

                case 'C':

                    current.push([preX, preY, item[1], item[2], item[3], item[4], item[5], item[6]]);
                    preX = item[5];
                    preY = item[6];
                    break;
                case 'S':
                    if (preItem[0] === 'C' || preItem[0] === 'c') {
                        current.push([preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], item[1], item[2], item[3], item[4]]);
                    } else if (preItem[0] === 'S' || preItem[0] === 's') {
                        current.push([preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], item[1], item[2], item[3], item[4]]);
                    }
                    preX = item[3];
                    preY = item[4];
                    break;

                case 'c':
                    current.push([preX, preY, preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6]]);
                    preX = preX + item[5];
                    preY = preY + item[6];
                    break;
                case 's':
                    if (preItem[0] === 'C' || preItem[0] === 'c') {

                        current.push([preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], preX + item[1], preY + item[2], preX + item[3], preY + item[4]]);
                    } else if (preItem[0] === 'S' || preItem[0] === 's') {
                        current.push([preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], preX + item[1], preY + item[2], preX + item[3], preY + item[4]]);
                    }

                    preX = preX + item[3];
                    preY = preY + item[4];

                    break;
                case 'a':
                    curves = arcToBezier({
                        rx: item[1],
                        ry: item[2],
                        px: preX,
                        py: preY,
                        xAxisRotation: item[3],
                        largeArcFlag: item[4],
                        sweepFlag: item[5],
                        cx: preX + item[6],
                        cy: preX + item[7]
                    });
                    lastCurve = curves[curves.length - 1];

                    curves.forEach(function (curve, index) {
                        if (index === 0) {
                            current.push([preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
                        } else {
                            current.push([curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
                        }
                    });

                    preX = lastCurve.x;
                    preY = lastCurve.y;

                    break;

                case 'A':

                    curves = arcToBezier({
                        rx: item[1],
                        ry: item[2],
                        px: preX,
                        py: preY,
                        xAxisRotation: item[3],
                        largeArcFlag: item[4],
                        sweepFlag: item[5],
                        cx: item[6],
                        cy: item[7]
                    });
                    lastCurve = curves[curves.length - 1];

                    curves.forEach(function (curve, index) {
                        if (index === 0) {
                            current.push([preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
                        } else {
                            current.push([curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
                        }
                    });

                    preX = lastCurve.x;
                    preY = lastCurve.y;

                    break;
                case 'Q':
                    current.push(pasition.q2b(preX, preY, item[1], item[2], item[3], item[4]));
                    preX = item[3];
                    preY = item[4];

                    break;
                case 'q':
                    current.push(pasition.q2b(preX, preY, preX + item[1], preY + item[2], item[3] + preX, item[4] + preY));
                    preX += item[3];
                    preY += item[4];
                    break;

                case 'T':

                    if (preItem[0] === 'Q' || preItem[0] === 'q') {
                        preCX = preX + preItem[3] - preItem[1];
                        preCY = preY + preItem[4] - preItem[2];
                        current.push(pasition.q2b(preX, preY, preCX, preCY, item[1], item[2]));
                    } else if (preItem[0] === 'T' || preItem[0] === 't') {
                        current.push(pasition.q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2]));
                        preCX = preX + preX - preCX;
                        preCY = preY + preY - preCY;
                    }

                    preX = item[1];
                    preY = item[2];
                    break;

                case 't':
                    if (preItem[0] === 'Q' || preItem[0] === 'q') {
                        preCX = preX + preItem[3] - preItem[1];
                        preCY = preY + preItem[4] - preItem[2];
                        current.push(pasition.q2b(preX, preY, preCX, preCY, preX + item[1], preY + item[2]));
                    } else if (preItem[0] === 'T' || preItem[0] === 't') {
                        current.push(pasition.q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, preX + item[1], preY + item[2]));
                        preCX = preX + preX - preCX;
                        preCY = preY + preY - preCY;
                    }

                    preX += item[1];
                    preY += item[2];
                    break;

                case 'Z':
                    closeX = current[0][0];
                    closeY = current[0][1];
                    current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY]);
                    break;
                case 'z':
                    closeX = current[0][0];
                    closeY = current[0][1];
                    current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY]);
                    break;
            }
        }

        return shapes;
    };

    pasition._upCurves = function (curves, count) {
        var i = 0,
            index = 0,
            len = curves.length;
        for (; i < count; i++) {
            curves.push(curves[index].slice(0));
            index++;
            if (index > len - 1) {
                index -= len;
            }
        }
    };

    function split(x1, y1, x2, y2, x3, y3, x4, y4, t) {
        return {
            left: _split(x1, y1, x2, y2, x3, y3, x4, y4, t),
            right: _split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true)
        };
    }

    function _split(x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {

        var x12 = (x2 - x1) * t + x1;
        var y12 = (y2 - y1) * t + y1;

        var x23 = (x3 - x2) * t + x2;
        var y23 = (y3 - y2) * t + y2;

        var x34 = (x4 - x3) * t + x3;
        var y34 = (y4 - y3) * t + y3;

        var x123 = (x23 - x12) * t + x12;
        var y123 = (y23 - y12) * t + y12;

        var x234 = (x34 - x23) * t + x23;
        var y234 = (y34 - y23) * t + y23;

        var x1234 = (x234 - x123) * t + x123;
        var y1234 = (y234 - y123) * t + y123;

        if (reverse) {
            return [x1234, y1234, x123, y123, x12, y12, x1, y1];
        }
        return [x1, y1, x12, y12, x123, y123, x1234, y1234];
    }

    pasition._splitCurves = function (curves, count) {
        var i = 0,
            index = 0;

        for (; i < count; i++) {
            var curve = curves[index];
            var cs = split(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], 0.5);
            curves.splice(index, 1);
            curves.splice(index, 0, cs.left, cs.right);

            index += 2;
            if (index >= curves.length - 1) {
                index = 0;
            }
        }
    };

    pasition._upShapes = function (shapes, count) {
        var _loop = function _loop(i) {
            var shape = shapes[shapes.length - 1];
            var newShape = [];

            shape.forEach(function (curve) {
                newShape.push(curve.slice(0));
            });
            shapes.push(newShape);
        };

        for (var i = 0; i < count; i++) {
            _loop(i);
        }
    };

    pasition._subShapes = function (shapes, count) {
        var _loop2 = function _loop2(i) {
            var shape = shapes[shapes.length - 1];
            var newShape = [];
            var x = shape[0][0],
                y = shape[0][1];
            shape.forEach(function () {
                newShape.push([x, y, x, y, x, y, x, y]);
            });

            shapes.push(newShape);
        };

        for (var i = 0; i < count; i++) {
            _loop2(i);
        }
    };

    pasition.lerp = function (pathA, pathB, t) {
        return pasition._lerp(pasition.path2shapes(pathA), pasition.path2shapes(pathB), t);
    };

    pasition.MIM_CURVES_COUNT = 100;

    pasition._preprocessing = function (pathA, pathB) {

        var lenA = pathA.length,
            lenB = pathB.length,
            clonePathA = JSON.parse(JSON.stringify(pathA)),
            clonePathB = JSON.parse(JSON.stringify(pathB));

        if (lenA > lenB) {
            pasition._subShapes(clonePathB, lenA - lenB);
        } else if (lenA < lenB) {
            pasition._upShapes(clonePathA, lenB - lenA);
        }

        clonePathA = sort(clonePathA, clonePathB);

        clonePathA.forEach(function (curves, index) {

            var lenA = curves.length,
                lenB = clonePathB[index].length;

            if (lenA > lenB) {
                if (lenA < pasition.MIM_CURVES_COUNT) {
                    pasition._splitCurves(curves, pasition.MIM_CURVES_COUNT - lenA);
                    pasition._splitCurves(clonePathB[index], pasition.MIM_CURVES_COUNT - lenB);
                } else {
                    pasition._splitCurves(clonePathB[index], lenA - lenB);
                }
            } else if (lenA < lenB) {
                if (lenB < pasition.MIM_CURVES_COUNT) {
                    pasition._splitCurves(curves, pasition.MIM_CURVES_COUNT - lenA);
                    pasition._splitCurves(clonePathB[index], pasition.MIM_CURVES_COUNT - lenB);
                } else {
                    pasition._splitCurves(curves, lenB - lenA);
                }
            }
        });

        clonePathA.forEach(function (curves, index) {
            clonePathA[index] = sortCurves(curves, clonePathB[index]);
        });

        return [clonePathA, clonePathB];
    };

    pasition._lerp = function (pathA, pathB, t) {

        var shapes = [];
        pathA.forEach(function (curves, index) {
            var newCurves = [];
            curves.forEach(function (curve, curveIndex) {
                newCurves.push(pasition.lerpCurve(curve, pathB[index][curveIndex], t));
            });
            shapes.push(newCurves);
        });
        return shapes;
    };

    pasition.animate = function (option) {
        var pathA = pasition.path2shapes(option.from);
        var pathB = pasition.path2shapes(option.to);
        var pathArr = pasition._preprocessing(pathA, pathB);

        var beginTime = new Date(),
            end = option.end || function () {},
            progress = option.progress || function () {},
            begin = option.begin || function () {},
            easing = option.easing || function (v) {
            return v;
        },
            tickId = null,
            outShape = null,
            time = option.time;

        begin(pathA);

        var tick = function tick() {
            var dt = new Date() - beginTime;
            if (dt >= time) {
                outShape = pathB;
                progress(outShape, 1);
                end(outShape);
                cancelAnimationFrame(tickId);
                return;
            }
            var percent = easing(dt / time);
            outShape = pasition._lerp(pathArr[0], pathArr[1], percent);
            progress(outShape, percent);
            tickId = requestAnimationFrame(tick);
        };
        tick();
    };

    return pasition;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cax = __webpack_require__(0);

var _cax2 = _interopRequireDefault(_cax);

var _bezier = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_cax$Group) {
  _inherits(Player, _cax$Group);

  function Player(shape, once, callback) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this.g = new _cax2.default.Graphics();
    _this.g.beginPath();
    _this.g.arc(0, 0, 5, 0, Math.PI * 2);
    _this.g.closePath();
    _this.g.fill();

    _this.shape = shape;
    _this.add(_this.g);
    _this.speed = 4;
    _this.length = 0;

    _this.drawGraphics = new _cax2.default.Graphics();
    _this.drawGraphics.beginPath();
    _this.drawPoints = [];

    _this.add(_this.drawGraphics);

    _this.once = once;
    _this.callback = callback;
    _this.isStop = false;
    return _this;
  }

  _createClass(Player, [{
    key: 'stop',
    value: function stop() {
      this.remove(this.g);
      this.isStop = true;
    }
  }, {
    key: 'start',
    value: function start() {
      this.isStop = false;
      this.drawGraphics = new _cax2.default.Graphics();
      this.drawGraphics.beginPath();
      this.drawPoints = [];

      this.add(this.drawGraphics);
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      if (this.isStop) {
        return;
      }
      this.length += this.speed;
      var position = (0, _bezier.getPosition)(this.length, this.shape);

      var point = (0, _bezier.getPoint)(position.t, position.index, this.shape);

      this.g.x = point.x;
      this.g.y = point.y;

      this.drawPoints.push(point);

      this.drawGraphics.clear().beginPath();

      this.drawPoints.forEach(function (p, index) {
        _this2.drawGraphics[index === 0 ? 'moveTo' : 'lineTo'](p.x, p.y);
      });

      if (this.length > this.shape.pathLen) {
        if (this.once) {

          this.length = 0;
          this.isStop = true;
          this.drawPoints.length = 0;
          this.drawGraphics.closePath();
          this.callback();
        } else {
          this.length -= this.shape.pathLen;
        }
      }

      this.drawGraphics.stroke();
    }
  }]);

  return Player;
}(_cax2.default.Group);

exports.default = Player;

/***/ })
/******/ ]);