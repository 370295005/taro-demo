"use strict";
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var App = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
  onShow: function onShow() {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "./node_modules/@tarojs/plugin-html/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-vue3/dist/runtime */ "./node_modules/@tarojs/plugin-framework-vue3/dist/runtime.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./app.ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);











var config = {"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#409EFF","navigationBarTitleText":"污染源智慧运维平台","navigationBarTextStyle":"white"},"pages":["pages/station/station","pages/login/login","pages/alarm/alarm","pages/operation/operation","pages/mine/mine"],"tabBar":{"color":"#666666","selectedColor":"#409EFF","backgroundColor":"#fff","borderStyle":"black","list":[{"iconPath":"assets/images/station.png","selectedIconPath":"assets/images/station-active.png","pagePath":"pages/station/station","text":"站点"},{"iconPath":"assets/images/alarm.png","selectedIconPath":"assets/images/alarm-active.png","pagePath":"pages/alarm/alarm","text":"告警"},{"iconPath":"assets/images/operation.png","selectedIconPath":"assets/images/operation-active.png","pagePath":"pages/operation/operation","text":"运维"},{"iconPath":"assets/images/mine.png","selectedIconPath":"assets/images/mine-active.png","pagePath":"pages/mine/mine","text":"我的"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createVue3App)(_node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__["default"], vue__WEBPACK_IMPORTED_MODULE_6__.h, config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.initPxTransform)({
  designWidth: function designWidth(input) {
        var _input_file;
        if ((input === null || input === void 0 ? void 0 : (_input_file = input.file) === null || _input_file === void 0 ? void 0 : _input_file.replace(/\\+/g, "/").indexOf("@nutui")) > -1) {
            return 375;
        }
        return 750;
    },
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;
//# sourceMappingURL=app.js.map