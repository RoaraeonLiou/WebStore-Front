/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page/common/nav-search/index.css":
/*!**********************************************!*\
  !*** ./src/page/common/nav-search/index.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/common/nav-search/index.css?");

/***/ }),

/***/ "./src/page/common/nav-top/index.css":
/*!*******************************************!*\
  !*** ./src/page/common/nav-top/index.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/common/nav-top/index.css?");

/***/ }),

/***/ "./src/page/index/index.css":
/*!**********************************!*\
  !*** ./src/page/index/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/index/index.css?");

/***/ }),

/***/ "./src/page/common/nav-search/index.js":
/*!*********************************************!*\
  !*** ./src/page/common/nav-search/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./index.css */ \"./src/page/common/nav-search/index.css\")\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/common/nav-search/index.js?");

/***/ }),

/***/ "./src/page/common/nav-top/index.js":
/*!******************************************!*\
  !*** ./src/page/common/nav-top/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./index.css */ \"./src/page/common/nav-top/index.css\")\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/common/nav-top/index.js?");

/***/ }),

/***/ "./src/page/index/index.js":
/*!*********************************!*\
  !*** ./src/page/index/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./index.css */ \"./src/page/index/index.css\")\r\n__webpack_require__(/*! page/common/nav-top/index.js */ \"./src/page/common/nav-top/index.js\")\r\n__webpack_require__(/*! page/common/nav-search/index.js */ \"./src/page/common/nav-search/index.js\")\r\nconst _common_util = __webpack_require__(/*! utils/util.js */ \"./src/utils/util.js\")\r\nconsole.log('index.js...')\r\n\r\n// $(function (){\r\n//     let aValue = _common_util.getURLParam('a');\r\n//     console.log(aValue);\r\n// });\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/index/index.js?");

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/***/ ((module) => {

eval("const config = {\r\n    serverHost: 'http://localhost:8090'\r\n}\r\n\r\nconst _common_util = {\r\n    //向服务器发送请求\r\n    request: function (param) {\r\n        const _this = this;\r\n        $.ajax({\r\n            type: param.method || 'GET',\r\n            url: param.url || '',\r\n            dataType: param.type || 'json',\r\n            contentType: param.contentType || 'application/json',\r\n            data: param.data || '',\r\n            xhrFields: {\r\n                withCredentials: true\r\n            },\r\n            timeout: 3000,\r\n            success: function (res) {\r\n                //请求成功，且服务器返回0\r\n                if (0 === res.status) {\r\n                    typeof param.success === 'function' && param.success(res.data, res.message);\r\n                }\r\n                //请求成功，服务器返回1，表示错误\r\n                else if (1 === res.status) {\r\n                    typeof param.error === 'function' && param.error(res.message);\r\n                }\r\n                //请求成功，服务器返回10，表示参数错误\r\n                else if (10 === res.status) {\r\n                    typeof param.error === 'function' && param.error(res.message);\r\n                }\r\n                //请求成功，服务器返回11，表示需要登录\r\n                else if (11 === res.status) {\r\n                    _this.toLogin();\r\n                }\r\n            },\r\n            error: function (err) {\r\n                //请求失败，服务器返回HTTP状态码不是200\r\n                typeof param.error === 'function' && param.error(err.statusText);\r\n            }\r\n        });\r\n    },\r\n    // 获取服务器地址\r\n    getServerURL: function (path) {\r\n        return config.serverHost + path;\r\n    },\r\n    // 页面跳转时获取URL中的参数\r\n    getURLParam: function (name) {\r\n        // http://localhost:8090/view/login.html?a=1&b=2\r\n        const paramString = window.location.search.substring(1);\r\n        const regExp = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');\r\n        const result = paramString.match(regExp);\r\n        return result ? decodeURIComponent(result[2]) : null;\r\n    },\r\n};\r\n\r\nmodule.exports = _common_util;\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/utils/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page/index/index.js");
/******/ 	
/******/ })()
;