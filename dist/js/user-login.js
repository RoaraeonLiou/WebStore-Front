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

/***/ "./src/page/common/nav-top-simple/index.css":
/*!**************************************************!*\
  !*** ./src/page/common/nav-top-simple/index.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/common/nav-top-simple/index.css?");

/***/ }),

/***/ "./src/page/user-login/index.css":
/*!***************************************!*\
  !*** ./src/page/user-login/index.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/user-login/index.css?");

/***/ }),

/***/ "./src/page/common/nav-top-simple/index.js":
/*!*************************************************!*\
  !*** ./src/page/common/nav-top-simple/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./index.css */ \"./src/page/common/nav-top-simple/index.css\");\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/common/nav-top-simple/index.js?");

/***/ }),

/***/ "./src/page/user-login/index.js":
/*!**************************************!*\
  !*** ./src/page/user-login/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./index.css */ \"./src/page/user-login/index.css\");\n__webpack_require__(/*! page/common/nav-top-simple/index.js */ \"./src/page/common/nav-top-simple/index.js\");\n\nconst _common_util = __webpack_require__(/*! utils/util.js */ \"./src/utils/util.js\");\nconst _user_service = __webpack_require__(/*! service/user-service.js */ \"./src/service/user-service.js\");\n\nconst errorItem = {\n    show : function(errorMsg){\n        $('.user-form-error').show().find('.error-message').text(errorMsg);\n    },\n    hide : function(){\n        $('.user-form-error').hide().find('.error-message').text('');\n    }\n};\n\nconst _user_login = {\n    init: function () {\n        this.bindEvent();\n        return this;\n    },\n    bindEvent: function () {\n        const _this = this;\n        $('#submit').on('click', function(){\n            _this.submit();\n        });\n        $('.user-form-item').on('keyup', function(e){\n            if(e.keyCode === 13){\n                _this.submit();\n            }\n        });\n    },\n    submit : function (){\n        let formData = {\n            username : $.trim($('#username').val()),\n            password : $.trim($('#password').val())\n        };\n        const validateResult = this.formDataValidate(formData);\n        if(validateResult.status){\n            _user_service.login(formData, function (res){\n                console.log(res);\n                window.location.href = _common_util.getURLParam('redirect') || './index.html';\n            }, function (errorMsg){\n                console.log(errorMsg);\n                errorItem.show(errorMsg);\n            })\n        }else{\n            errorItem.show(validateResult.msg);\n        }\n    },\n    formDataValidate : function (formData){\n        let result = {\n            status : false,\n            msg    : ''\n        };\n\n        if(!_common_util.validate(formData.username,'require')){\n            result.msg = '用户名不能为空';\n            return result;\n        }\n        if(!_common_util.validate(formData.password,'require')){\n            result.msg = '密码不能为空';\n            return result;\n        }\n        result.status = true;\n        result.msg = '通过验证';\n        return result;\n    },\n};\n\nmodule.exports = _user_login.init();\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/page/user-login/index.js?");

/***/ }),

/***/ "./src/service/user-service.js":
/*!*************************************!*\
  !*** ./src/service/user-service.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const _common_util = __webpack_require__(/*! utils/util.js */ \"./src/utils/util.js\");\n\nconst _user_service = {\n    //获取用户信息\n    getUserInfo: function (resolve, reject) {\n        _common_util.request({\n            url     : _common_util.getServerURL('/user/get_user_info'),\n            method  : 'POST',\n            success : resolve,\n            error   : reject\n        });\n    },\n    //用户登录\n    login: function (userInfo, resolve, reject) {\n        _common_util.request({\n            url     : _common_util.getServerURL('/user/login'),\n            method  : 'POST',\n            data    : JSON.stringify(userInfo),\n            success : resolve,\n            error   : reject\n        });\n    },\n};\n\nmodule.exports = _user_service;\n\n//# sourceURL=webpack://csu-store-web-front-dev/./src/service/user-service.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page/user-login/index.js");
/******/ 	
/******/ })()
;