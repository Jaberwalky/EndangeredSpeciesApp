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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var onLoad = function(){
  
  console.log("start of onLoad function!!")
  
 //  var request = new XMLHttpRequest()
 // var urlElephant = "http://apiv3.iucnredlist.org/api/v3/species/history/id/12392?token=7fed1505eceb7b96fba16063a9b85a02b583179102f64c9c0d1bc482b2f2cba8"
 // var urlLion = "http://apiv3.iucnredlist.org/api/v3/species/history/id/15951?token=7fed1505eceb7b96fba16063a9b85a02b583179102f64c9c0d1bc482b2f2cba8"
 // var urlWhale = "http://apiv3.iucnredlist.org/api/v3/species/history/id/2477?token=7fed1505eceb7b96fba16063a9b85a02b583179102f64c9c0d1bc482b2f2cba8"
 // var urlTurtle = "http://apiv3.iucnredlist.org/api/v3/species/history/id/3897?token=7fed1505eceb7b96fba16063a9b85a02b583179102f64c9c0d1bc482b2f2cba8"


 // request.open("GET", urlElephant);

 // request.open("GET", urlLion);

 // request.open("GET", urlWhale);

 // request.open("GET", urlTurtle);




 //  request.addEventListener( 'load', function( req, res ) {
 //    var jsonString = this.responseText;
 //    var allSpecies = JSON.parse( jsonString );  
 //    console.log(allSpecies);
 //  });

 //  request.send()

}

// onLoad();
window.addEventListener('load', onLoad)


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map