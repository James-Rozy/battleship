"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["pageLoad"],{

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHeader)
/* harmony export */ });
function getHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  header.setAttribute('id', 'main-header');

  title.setAttribute('id', 'main-title');
  title.textContent = 'BATTLESHIP';

  header.appendChild(title);
  return header;
}


/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");


function pageLoad() {
  const mainContainer = document.createElement('div');
  const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])();

  mainContainer.appendChild(header);
  return mainContainer;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/pageLoad.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYaUM7O0FBRWxCO0FBQ2Y7QUFDQSxpQkFBaUIsbURBQVM7O0FBRTFCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWhlYWRlcicpO1xuXG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi10aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuIiwiaW1wb3J0IGdldEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGdldEhlYWRlcigpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgcmV0dXJuIG1haW5Db250YWluZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=