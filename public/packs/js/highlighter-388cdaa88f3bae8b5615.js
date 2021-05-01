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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/highlighter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/highlighter.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/highlighter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /app/app/javascript/packs/highlighter.js: Unexpected token (4:20)\n\n  2 | audio_controller.ontimeupdate = function() {highlight_word()};\n  3 |     \n> 4 | segments_starts = [{{ segments_starts_str }}]\n    |                     ^\n  5 | segments_ends = [{{ segments_ends_str }}]\n  6 | words = []\n  7 | \n    at Parser._raise (/app/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/app/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.raise (/app/node_modules/@babel/parser/lib/index.js:786:17)\n    at Parser.unexpected (/app/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Parser.parseIdentifierName (/app/node_modules/@babel/parser/lib/index.js:11231:18)\n    at Parser.parseIdentifier (/app/node_modules/@babel/parser/lib/index.js:11204:23)\n    at Parser.parseMaybePrivateName (/app/node_modules/@babel/parser/lib/index.js:10497:19)\n    at Parser.parsePropertyName (/app/node_modules/@babel/parser/lib/index.js:10999:155)\n    at Parser.parsePropertyDefinition (/app/node_modules/@babel/parser/lib/index.js:10885:22)\n    at Parser.parseObjectLike (/app/node_modules/@babel/parser/lib/index.js:10802:25)\n    at Parser.parseExprAtom (/app/node_modules/@babel/parser/lib/index.js:10332:23)\n    at Parser.parseExprSubscripts (/app/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Parser.parseUpdate (/app/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Parser.parseMaybeUnary (/app/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Parser.parseExprOps (/app/node_modules/@babel/parser/lib/index.js:9815:23)\n    at Parser.parseMaybeConditional (/app/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Parser.parseMaybeAssign (/app/node_modules/@babel/parser/lib/index.js:9752:21)\n    at allowInAnd (/app/node_modules/@babel/parser/lib/index.js:9718:39)\n    at Parser.allowInAnd (/app/node_modules/@babel/parser/lib/index.js:11448:12)\n    at Parser.parseMaybeAssignAllowIn (/app/node_modules/@babel/parser/lib/index.js:9718:17)\n    at Parser.parseExprListItem (/app/node_modules/@babel/parser/lib/index.js:11196:18)\n    at Parser.parseExprList (/app/node_modules/@babel/parser/lib/index.js:11166:22)\n    at Parser.parseArrayLike (/app/node_modules/@babel/parser/lib/index.js:11045:26)\n    at Parser.parseExprAtom (/app/node_modules/@babel/parser/lib/index.js:10321:23)\n    at Parser.parseExprSubscripts (/app/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Parser.parseUpdate (/app/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Parser.parseMaybeUnary (/app/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Parser.parseExprOps (/app/node_modules/@babel/parser/lib/index.js:9815:23)\n    at Parser.parseMaybeConditional (/app/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Parser.parseMaybeAssign (/app/node_modules/@babel/parser/lib/index.js:9752:21)");

/***/ })

/******/ });
//# sourceMappingURL=highlighter-388cdaa88f3bae8b5615.js.map