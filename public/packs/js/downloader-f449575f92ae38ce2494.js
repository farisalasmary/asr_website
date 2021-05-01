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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/downloader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/downloader.js":
/*!********************************************!*\
  !*** ./app/javascript/packs/downloader.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// alternative to DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // code...
  // Initialize your application or run some code.
  function _download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  function download_txt() {
    var spans = document.getElementById('transcription_text').getElementsByTagName('span');
    var obj = {};
    var text = '';

    for (var i = 0; i < spans.length; i++) {
      text += (spans[i].textContent || spans[i].innerText) + ' ';
    }

    _download(filename.split('.')[0] + '.txt', text);
  }

  function format_time(SECONDS) {
    return new Date(SECONDS * 1000).toISOString().substr(11, 12).replace('.', ',');
  }

  function download_srt() {
    var spans = document.getElementById('transcription_text').getElementsByTagName('span');
    var obj = {};
    var text = '';
    var num_words_per_sentence = 7;
    var words = '';
    var i;
    var counter = 1;

    for (i = 0; i < spans.length; i += num_words_per_sentence) {
      words = '';
      word = (spans[i].textContent || spans[i].innerText) + ' '; // add 500 milliseconds to the start time of each segment except the first segment
      // to prevent showing overlaps in the subtitling

      if (i != 0) start_time = format_time(segments_starts[i] + 0.5);else start_time = format_time(segments_starts[i]);
      end_time = start_time; // dummy initialization

      if (i + num_words_per_sentence < segments_ends.length) {
        end_time = format_time(segments_ends[i + num_words_per_sentence]);

        for (var j = i; j < i + num_words_per_sentence; j++) {
          words += (spans[j].textContent || spans[j].innerText) + ' ';
        }
      } else {
        // if the if condition is false, then read the remaining words
        // and set the end_time to be the segment_end of the last word
        end_time = format_time(segments_ends[segments_ends.length - 1]);

        for (var j = i; j < segments_ends.length; j++) {
          words += (spans[j].textContent || spans[j].innerText) + ' ';
        }
      }

      text += counter + '\n' + start_time + ' --> ' + end_time + '\n' + words + '\n\n';
      counter += 1;
    }

    _download(filename.split('.')[0] + '.srt', text);
  }

  var is_editable = 'false';

  function edit_text() {
    var spans = document.getElementById('transcription_text').getElementsByTagName('span');

    for (var i = 0; i < spans.length; i++) {
      spans[i].setAttribute("contenteditable", is_editable);
    }

    if (is_editable == 'true') {
      document.getElementById('edit_txt_btn').innerHTML = 'Edit Text';
      is_editable == 'false';
    } else {
      document.getElementById('edit_txt_btn').innerHTML = 'Save Changes';
      is_editable == 'true';
    }
  }

  document.getElementById("download_txt_btn").addEventListener("click", download_txt);
  document.getElementById("download_srt_btn").addEventListener("click", download_srt);
  document.getElementById("edit_txt_btn").addEventListener("click", edit_text);
});

/***/ })

/******/ });
//# sourceMappingURL=downloader-f449575f92ae38ce2494.js.map