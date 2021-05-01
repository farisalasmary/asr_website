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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /app/app/javascript/packs/highlighter.js: Unexpected token (24:0)\n\n  22 | \n  23 |     }\n> 24 | \n     | ^\n    at Parser._raise (/app/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/app/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.raise (/app/node_modules/@babel/parser/lib/index.js:786:17)\n    at Parser.unexpected (/app/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Parser.parseExprAtom (/app/node_modules/@babel/parser/lib/index.js:10416:20)\n    at Parser.parseExprSubscripts (/app/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Parser.parseUpdate (/app/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Parser.parseMaybeUnary (/app/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Parser.parseExprOps (/app/node_modules/@babel/parser/lib/index.js:9815:23)\n    at Parser.parseMaybeConditional (/app/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Parser.parseMaybeAssign (/app/node_modules/@babel/parser/lib/index.js:9752:21)\n    at Parser.parseExpressionBase (/app/node_modules/@babel/parser/lib/index.js:9696:23)\n    at allowInAnd (/app/node_modules/@babel/parser/lib/index.js:9690:39)\n    at Parser.allowInAnd (/app/node_modules/@babel/parser/lib/index.js:11442:16)\n    at Parser.parseExpression (/app/node_modules/@babel/parser/lib/index.js:9690:17)\n    at Parser.parseStatementContent (/app/node_modules/@babel/parser/lib/index.js:11708:23)\n    at Parser.parseStatement (/app/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseBlockOrModuleBlockBody (/app/node_modules/@babel/parser/lib/index.js:12159:25)\n    at Parser.parseBlockBody (/app/node_modules/@babel/parser/lib/index.js:12145:10)\n    at Parser.parseBlock (/app/node_modules/@babel/parser/lib/index.js:12129:10)\n    at Parser.parseFunctionBody (/app/node_modules/@babel/parser/lib/index.js:11108:24)\n    at Parser.parseFunctionBodyAndFinish (/app/node_modules/@babel/parser/lib/index.js:11091:10)\n    at withTopicForbiddingContext (/app/node_modules/@babel/parser/lib/index.js:12299:12)\n    at Parser.withTopicForbiddingContext (/app/node_modules/@babel/parser/lib/index.js:11417:14)\n    at Parser.parseFunction (/app/node_modules/@babel/parser/lib/index.js:12298:10)\n    at Parser.parseFunctionOrFunctionSent (/app/node_modules/@babel/parser/lib/index.js:10511:17)\n    at Parser.parseExprAtom (/app/node_modules/@babel/parser/lib/index.js:10336:21)\n    at Parser.parseExprSubscripts (/app/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Parser.parseUpdate (/app/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Parser.parseMaybeUnary (/app/node_modules/@babel/parser/lib/index.js:9945:17)");

/***/ })

/******/ });
//# sourceMappingURL=highlighter-e6d50f5a1d567be33768.js.map