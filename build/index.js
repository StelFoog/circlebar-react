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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circlebar = function Circlebar(_ref) {
  var progress = _ref.progress,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? "100%" : _ref$size,
      _ref$progressbarWidth = _ref.progressbarWidth,
      progressbarWidth = _ref$progressbarWidth === undefined ? 10 : _ref$progressbarWidth,
      _ref$progressbarColor = _ref.progressbarColor,
      progressbarColor = _ref$progressbarColor === undefined ? "#5BF35B" : _ref$progressbarColor,
      _ref$trailColor = _ref.trailColor,
      trailColor = _ref$trailColor === undefined ? "#256325" : _ref$trailColor,
      _ref$outerBorderWidth = _ref.outerBorderWidth,
      outerBorderWidth = _ref$outerBorderWidth === undefined ? 0 : _ref$outerBorderWidth,
      _ref$outerBorderColor = _ref.outerBorderColor,
      outerBorderColor = _ref$outerBorderColor === undefined ? "#000" : _ref$outerBorderColor,
      _ref$innerBorderWidth = _ref.innerBorderWidth,
      innerBorderWidth = _ref$innerBorderWidth === undefined ? 0 : _ref$innerBorderWidth,
      _ref$innerBorderColor = _ref.innerBorderColor,
      innerBorderColor = _ref$innerBorderColor === undefined ? "#000" : _ref$innerBorderColor,
      _ref$insideBackground = _ref.insideBackgroundColor,
      insideBackgroundColor = _ref$insideBackground === undefined ? "none" : _ref$insideBackground,
      _ref$guideLinesAmount = _ref.guideLinesAmount,
      guideLinesAmount = _ref$guideLinesAmount === undefined ? 0 : _ref$guideLinesAmount,
      _ref$guideLinesColor = _ref.guideLinesColor,
      guideLinesColor = _ref$guideLinesColor === undefined ? "#000" : _ref$guideLinesColor,
      _ref$guideLinesWidth = _ref.guideLinesWidth,
      guideLinesWidth = _ref$guideLinesWidth === undefined ? 1.5 : _ref$guideLinesWidth;

  var outerBorderRadius = 50 - outerBorderWidth / 2;
  var progressbarRadius = outerBorderRadius - (outerBorderWidth + progressbarWidth) / 2;
  var innerBorderRadius = progressbarRadius - (progressbarWidth + innerBorderWidth) / 2;
  var insideBackgroundRadius = innerBorderRadius - innerBorderWidth / 2;

  var progressbarCircumferance = progressbarRadius * 2 * Math.PI;
  var progressOffset = progressbarCircumferance * (1 - progress / 100);

  return _react2.default.createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 100 100" },
    _react2.default.createElement("circle", {
      cx: 50,
      cy: 50,
      r: insideBackgroundRadius,
      fill: insideBackgroundColor
    }),
    _react2.default.createElement("circle", {
      cx: 50,
      cy: 50,
      r: outerBorderRadius,
      fill: "none",
      stroke: outerBorderColor,
      strokeWidth: outerBorderWidth
    }),
    _react2.default.createElement("circle", {
      cx: 50,
      cy: 50,
      r: innerBorderRadius,
      fill: "none",
      stroke: innerBorderColor,
      strokeWidth: innerBorderWidth
    }),
    _react2.default.createElement("circle", {
      cx: 50,
      cy: 50,
      r: progressbarRadius,
      fill: "none",
      stroke: trailColor,
      strokeWidth: progressbarWidth
    }),
    _react2.default.createElement("circle", {
      cx: 50,
      cy: 50,
      r: progressbarRadius,
      fill: "none",
      stroke: progressbarColor,
      strokeWidth: progressbarWidth,
      strokeDasharray: progressbarCircumferance,
      strokeDashoffset: progressOffset,
      transform: "rotate(-90, 50, 50)"
    }),
    _react2.default.createElement(LineMarkings, {
      amount: guideLinesAmount,
      y1: outerBorderWidth,
      y2: outerBorderWidth + progressbarWidth,
      color: guideLinesColor,
      width: guideLinesWidth
    })
  );
};

var Line = function Line(_ref2) {
  var degree = _ref2.degree,
      y1 = _ref2.y1,
      y2 = _ref2.y2,
      color = _ref2.color,
      width = _ref2.width;
  return _react2.default.createElement("line", {
    x1: 50,
    x2: 50,
    y1: y1,
    y2: y2,
    stroke: color,
    strokeWidth: width,
    transform: "rotate(" + degree + ", 50, 50)"
  });
};

var LineMarkings = function LineMarkings(_ref3) {
  var amount = _ref3.amount,
      y1 = _ref3.y1,
      y2 = _ref3.y2,
      color = _ref3.color,
      width = _ref3.width;

  var deg = 360 / amount;
  var arr = [];
  for (var i = 0; i < 360; i += deg) {
    arr.push(_react2.default.createElement(Line, { degree: i, y1: y1, y2: y2 }));
  }
  return arr;
};

exports.default = Circlebar;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Circlebar = __webpack_require__(0);

var _Circlebar2 = _interopRequireDefault(_Circlebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Circlebar: _Circlebar2.default
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);