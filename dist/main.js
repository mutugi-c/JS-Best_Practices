/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* Typograpphy */\\r\\nbody {\\r\\n  background-color: #c1c1c3;\\r\\n  color: #545862;\\r\\n  font-size: 1rem;\\r\\n  font-family: \\\"Open Sans\\\", sans-serif;\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 0.9375rem;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n/* Container */\\r\\n.to-do-container {\\r\\n  background-color: #fff;\\r\\n  border-radius: 2px;\\r\\n  margin: 250px auto;\\r\\n  overflow: hidden;\\r\\n  width: 350px;\\r\\n}\\r\\n\\r\\n/* Heading */\\r\\n.to-do-header {\\r\\n  border-bottom: 1px solid #c1c1c3;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n/* Form */\\r\\n#to-do-form {\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid #c1c1c3;\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.9rem 0.9rem 0.9rem 1rem;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n.to-do-add {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n/* List */\\r\\n.to-do-item {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n.to-do-item .edit-input {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n/* Buttons */\\r\\n.check-button {\\r\\n  background-color: transparent;\\r\\n  border: 2px solid #c1c1c3;\\r\\n  border-radius: 2px;\\r\\n  cursor: pointer;\\r\\n  height: 1rem;\\r\\n  width: 1rem;\\r\\n  transition: border 0.3s;\\r\\n}\\r\\n\\r\\n.check-button:hover {\\r\\n  border: 2px solid #808080;\\r\\n}\\r\\n\\r\\n.to-do-item .check-button {\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\n.clear-completed {\\r\\n  border: 0;\\r\\n  cursor: pointer;\\r\\n  padding: 1rem;\\r\\n  opacity: 0.5;\\r\\n  width: 100%;\\r\\n  transition: all 0.5s;\\r\\n}\\r\\n\\r\\n.clear-completed:hover {\\r\\n  text-decoration: underline;\\r\\n  opacity: 0.8;\\r\\n}\\r\\n\\r\\n#to-do-submit {\\r\\n  background-color: transparent;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n/* Icons */\\r\\n.fa-sync-alt,\\r\\n.fa-arrow-left {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-v {\\r\\n  color: #c1c1c3;\\r\\n  transition: all 0.5s;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-v:hover {\\r\\n  cursor: move;\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-v.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.trash-icon {\\r\\n  cursor: pointer;\\r\\n  display: none;\\r\\n  opacity: 0.5;\\r\\n  width: 0.625rem;\\r\\n  transition: opacity 0.3s;\\r\\n}\\r\\n\\r\\n.trash-icon:hover {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.to-do-item.active .trash-icon {\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n/* Task description */\\r\\n.task-description {\\r\\n  font-family: \\\"Open Sans\\\", sans-serif;\\r\\n  font-weight: 300;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.to-do-item .task-description {\\r\\n  flex-grow: 1;\\r\\n  outline: none;\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _manage_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage_tasks.js */ \"./src/manage_tasks.js\");\n/* harmony import */ var _modules_checkTaskCompletion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/checkTaskCompletion.js */ \"./src/modules/checkTaskCompletion.js\");\n\r\n\r\n\r\n\r\nconst taskManager = new _manage_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([]);\r\n\r\nconst toDoList = document.getElementById('to-do-list');\r\nconst toDoForm = document.getElementById('to-do-form');\r\nconst toDoInput = document.getElementById('to-do-input');\r\n\r\nfunction populateTaskList(arr) {\r\n  arr.forEach((task) => {\r\n    const toDoItem = document.createElement('li');\r\n    toDoItem.classList.add('to-do-item');\r\n    toDoItem.innerHTML = `\r\n    <input type=\"checkbox\" class=\"check-button\" />\r\n    <span class=\"task-description\" contenteditable=\"true\">${task.description}</span>\r\n    <span class=\"fas fa-ellipsis-v\"></span>\r\n    <span class=\"fas fa-trash trash-icon hide\"></span>\r\n    `;\r\n    toDoList.appendChild(toDoItem);\r\n\r\n    const taskDescription = toDoItem.querySelector('.task-description');\r\n\r\n    // Save edited task on enter key press\r\n    taskDescription.addEventListener('keypress', (event) => {\r\n      if (event.key === 'Enter') {\r\n        const { index } = task; // object destructuring due to ESLint\r\n        const newDescription = taskDescription.textContent.trim().substring(2);\r\n        taskManager.editTask(index, newDescription);\r\n        // Remove focus from the edited element\r\n        taskDescription.blur();\r\n      }\r\n    });\r\n\r\n    // Change list item behaviour on click\r\n    toDoItem.addEventListener('click', () => {\r\n      if (!toDoItem.classList.contains('active')) {\r\n        // Remove the 'active' class from all other items\r\n        document.querySelectorAll('.to-do-item').forEach((item) => {\r\n          item.classList.remove('active');\r\n          item.querySelector('.fa-ellipsis-v').classList.remove('hide');\r\n          item.querySelector('.trash-icon').classList.add('hide');\r\n          item.style.background = '';\r\n        });\r\n\r\n        // Add the 'active' class to the latest selected item\r\n        toDoItem.classList.add('active');\r\n        toDoItem.querySelector('.fa-ellipsis-v').classList.add('hide');\r\n        toDoItem.querySelector('.trash-icon').classList.remove('hide');\r\n        toDoItem.style.background = '#fffbc8';\r\n\r\n        // Focus on the task description element for editing\r\n        taskDescription.focus();\r\n      }\r\n    });\r\n\r\n    // Add event listener to trash icon\r\n    toDoItem.querySelector('.trash-icon').addEventListener('click', () => {\r\n      taskManager.removeTask(task.index);\r\n      toDoItem.remove();\r\n    });\r\n\r\n    // Add event listener to check-button\r\n    const checkButton = toDoItem.querySelector('.check-button');\r\n    checkButton.addEventListener('click', () => {\r\n      const index = parseInt(toDoItem.dataset.index, 10);\r\n      (0,_modules_checkTaskCompletion_js__WEBPACK_IMPORTED_MODULE_2__.toggleCompleted)(toDoList, taskManager, index);\r\n    });\r\n\r\n    toDoItem.dataset.index = taskManager.taskArr.indexOf(task);\r\n  });\r\n}\r\n\r\n// Call function to update completed status\r\n(0,_modules_checkTaskCompletion_js__WEBPACK_IMPORTED_MODULE_2__.toggleCompleted)(toDoList, taskManager);\r\n\r\n// Add event listeners for completed clear button\r\nconst clearCompletedButton = document.getElementById('clear-completed');\r\nclearCompletedButton.addEventListener('click', () => {\r\n  (0,_modules_checkTaskCompletion_js__WEBPACK_IMPORTED_MODULE_2__.clearCompleted)(toDoList, taskManager);\r\n});\r\n\r\n// Add event listener for submission\r\ntoDoForm.addEventListener('submit', (event) => {\r\n  event.preventDefault();\r\n\r\n  const taskDescription = toDoInput.value.trim();\r\n  if (taskDescription !== '') {\r\n    taskManager.addTask(taskDescription);\r\n\r\n    toDoInput.value = '';\r\n    const newTask = [taskManager.taskArr[taskManager.taskArr.length - 1]];\r\n    populateTaskList(newTask);\r\n  }\r\n});\r\n\r\npopulateTaskList(taskManager.taskArr);\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/manage_tasks.js":
/*!*****************************!*\
  !*** ./src/manage_tasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ManageTasks {\r\n  constructor() {\r\n    this.taskArr = this.loadTasksFromLocalStorage();\r\n  }\r\n\r\n  addTask(taskDescrption) {\r\n    const newTask = {\r\n      description: taskDescrption,\r\n      completed: false,\r\n      index: this.taskArr.length + 1,\r\n    };\r\n\r\n    this.taskArr.push(newTask);\r\n    this.storeTasksInLocalStorage();\r\n  }\r\n\r\n  removeTask(index) {\r\n    this.taskArr.splice(index, 1);\r\n\r\n    // Update remaining properties' indices\r\n    this.taskArr.forEach((task, i) => {\r\n      task.index = i + 1;\r\n    });\r\n    this.storeTasksInLocalStorage();\r\n  }\r\n\r\n  editTask(index, newDescription) {\r\n    this.taskArr[index].description = newDescription;\r\n    this.storeTasksInLocalStorage();\r\n  }\r\n\r\n  completedTask(index, completed) {\r\n    this.taskArr[index].completed = completed;\r\n    this.storeTasksInLocalStorage();\r\n  }\r\n\r\n  storeTasksInLocalStorage() {\r\n    localStorage.setItem('tasks', JSON.stringify(this.taskArr));\r\n  }\r\n\r\n  // eslint-disable-next-line class-methods-use-this\r\n  loadTasksFromLocalStorage() {\r\n    const storedTasks = JSON.parse(window.localStorage.getItem('tasks'));\r\n    if (storedTasks) {\r\n      return storedTasks.map((task) => {\r\n        task.index += 1;\r\n        return task;\r\n      });\r\n    }\r\n    return [];\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageTasks);\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/manage_tasks.js?");

/***/ }),

/***/ "./src/modules/checkTaskCompletion.js":
/*!********************************************!*\
  !*** ./src/modules/checkTaskCompletion.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"toggleCompleted\": () => (/* binding */ toggleCompleted)\n/* harmony export */ });\n// Update completed status\r\nconst toggleCompleted = (toDoList, taskManager, index) => {\r\n  const toDoItem = toDoList.querySelector(`[data-index=\"${index}\"]`);\r\n  if (!toDoItem) {\r\n    return;\r\n  }\r\n  const checkButton = toDoItem.querySelector('.check-button');\r\n  if (checkButton.checked) {\r\n    toDoItem.classList.add('completed');\r\n    taskManager.completedTask(index, true);\r\n    taskManager.storeTasksInLocalStorage();\r\n  } else {\r\n    toDoItem.classList.remove('completed');\r\n    taskManager.completedTask(index, false);\r\n    taskManager.storeTasksInLocalStorage();\r\n  }\r\n};\r\n\r\n// Remove tasks identified as completed\r\nconst clearCompleted = (toDoList, manageTasks) => {\r\n  const toDoItems = toDoList.querySelectorAll('.to-do-item');\r\n  toDoItems.forEach((toDoItem) => {\r\n    const checkButton = toDoItem.querySelector('.check-button');\r\n    if (checkButton.checked) {\r\n      const index = toDoItem.dataset.index - 1;\r\n      manageTasks.removeTask(index);\r\n      toDoItem.remove();\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/checkTaskCompletion.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;