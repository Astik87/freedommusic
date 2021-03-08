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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/src/App.js":
/*!***************************!*\
  !*** ./app/js/src/App.js ***!
  \***************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./app/js/src/User.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./app/js/src/Player.js\");\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Request */ \"./app/js/src/Request.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value:\n    /**\r\n     * App init\r\n     */\n    function init() {\n      var action = App.request.get(\"a\");\n      var genre = App.request.get(\"g\");\n      App.app = null;\n      this.header();\n      this.sidebar();\n      App.action(action, {\n        genre: genre\n      });\n    }\n    /**\r\n     * Render head\r\n     */\n\n  }, {\n    key: \"header\",\n    value: function header() {\n      var profile = $(\"#profile\");\n      profile.html('');\n\n      if (!App.user.isGuest) {\n        var img = $('<img id=\"ava\">').attr(\"src\", App.user.ava);\n        profile.append($('<div class=\"ava\"></div>').append(img));\n        var name = $(\"<span id=\\\"name\\\">\".concat(App.user.name, \" \").concat(App.user.surname, \"</span>\"));\n        profile.append(name);\n      } else {\n        var signIn = $('<a href=\"#\">Sign In</a>').attr(\"data-a\", \"signIn\");\n        var signUp = $('<a href=\"#\">Sign Up</a>').attr(\"data-a\", \"signUp\");\n        profile.append(signIn);\n        profile.append(signUp);\n      }\n    }\n  }, {\n    key: \"sidebar\",\n    value: function sidebar() {}\n  }, {\n    key: \"render\",\n    value: function render() {}\n  }, {\n    key: \"playlists\",\n    value: function playlists() {}\n  }, {\n    key: \"actionIndex\",\n    value: function actionIndex() {}\n  }, {\n    key: \"actionSignIn\",\n    value: function actionSignIn() {\n      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    }\n  }, {\n    key: \"actionSignUp\",\n    value: function actionSignUp(data) {}\n  }, {\n    key: \"actionGenre\",\n    value: function actionGenre(data) {}\n  }, {\n    key: \"actionUserPlaylist\",\n    value: function actionUserPlaylist(data) {}\n  }, {\n    key: \"actionSearch\",\n    value: function actionSearch() {}\n  }], [{\n    key: \"getApp\",\n    value:\n    /**\r\n     * @return obj App\r\n     */\n    function getApp() {\n      if (App.app == null) {\n        App.app = new App();\n      }\n\n      return App.app;\n    }\n    /**\r\n     * Start action\r\n     * @param {*} action action name\r\n     * @param {*} data data\r\n     */\n\n  }, {\n    key: \"action\",\n    value: function action() {\n      var _action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      _action = _action != null ? \"action\" + _action[0].toUpperCase() + _action.slice(1) : 'actinIndex';\n      var app = App.getApp();\n      app[_action] ? app[_action](data) : app.actionIndex();\n    }\n  }, {\n    key: \"reload\",\n    value: function reload() {}\n  }]);\n\n  return App;\n}();\n\n_defineProperty(App, \"user\", _User__WEBPACK_IMPORTED_MODULE_0__[\"User\"].getUser());\n\n_defineProperty(App, \"player\", null);\n\n_defineProperty(App, \"request\", new _Request__WEBPACK_IMPORTED_MODULE_2__[\"Request\"]());\n\n_defineProperty(App, \"app\", null);\n\nApp.getApp().init();\n\n//# sourceURL=webpack:///./app/js/src/App.js?");

/***/ }),

/***/ "./app/js/src/Player.js":
/*!******************************!*\
  !*** ./app/js/src/Player.js ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    _defineProperty(this, \"playlist\", null);\n\n    _defineProperty(this, \"controls\", null);\n\n    _defineProperty(this, \"playingMusic\", null);\n\n    _defineProperty(this, \"order\", null);\n\n    _defineProperty(this, \"random\", null);\n\n    _defineProperty(this, \"repeat\", null);\n  }\n\n  _createClass(Player, [{\n    key: \"play\",\n    value: function play(musicId) {\n      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {}\n  }, {\n    key: \"next\",\n    value: function next() {}\n  }, {\n    key: \"previous\",\n    value: function previous() {}\n  }, {\n    key: \"getControls\",\n    value: function getControls() {}\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=webpack:///./app/js/src/Player.js?");

/***/ }),

/***/ "./app/js/src/Request.js":
/*!*******************************!*\
  !*** ./app/js/src/Request.js ***!
  \*******************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Request\", function() { return Request; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Request = /*#__PURE__*/function () {\n  function Request() {\n    _classCallCheck(this, Request);\n\n    _defineProperty(this, \"url\", null);\n\n    _defineProperty(this, \"type\", null);\n\n    _defineProperty(this, \"success\", null);\n\n    _defineProperty(this, \"error\", null);\n\n    _defineProperty(this, \"dataType\", null);\n\n    _defineProperty(this, \"data\", null);\n\n    _defineProperty(this, \"async\", true);\n  }\n\n  _createClass(Request, [{\n    key: \"send\",\n    value: function send() {\n      if (this.url == null || this.type == null || this.dataType == null || this.success == null) {\n        return false;\n      }\n\n      $.ajax({\n        type: this.type,\n        url: this.url,\n        data: this.data,\n        dataType: this.dataType,\n        async: this.async,\n        success: this.success,\n        error: this.error\n      });\n    }\n  }, {\n    key: \"get\",\n    value: function get(name) {\n      if (name = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)').exec(location.search)) return decodeURIComponent(name[1]);\n    }\n  }]);\n\n  return Request;\n}();\n\n//# sourceURL=webpack:///./app/js/src/Request.js?");

/***/ }),

/***/ "./app/js/src/User.js":
/*!****************************!*\
  !*** ./app/js/src/User.js ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar User = /*#__PURE__*/function () {\n  function User() {\n    _classCallCheck(this, User);\n\n    _defineProperty(this, \"isGuest\", true);\n\n    _defineProperty(this, \"id\", null);\n\n    _defineProperty(this, \"name\", null);\n\n    _defineProperty(this, \"surname\", null);\n\n    _defineProperty(this, \"email\", null);\n\n    _defineProperty(this, \"ava\", \"./img/ava.jpg\");\n  }\n\n  _createClass(User, [{\n    key: \"signIn\",\n    value: function signIn() {\n      var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    }\n  }, {\n    key: \"signUp\",\n    value: function signUp() {}\n  }], [{\n    key: \"getUser\",\n    value: function getUser() {\n      if (User.user == null) {\n        var user = new User();\n        user.signIn();\n        User.user = user;\n      }\n\n      return User.user;\n    }\n  }]);\n\n  return User;\n}();\n\n_defineProperty(User, \"user\", null);\n\n//# sourceURL=webpack:///./app/js/src/User.js?");

/***/ })

/******/ });