/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
// const home = () => {
//   let test = document.createElement('div');
//   // test.innerHTML = "hello I am from module: home";
//   let test_content = document.createTextNode('Hello I am from module: home ');
//   test.appendChild(test_content);
//   return test;
// }

// export default home;

// export default function home(){
//   console.log('i get called from home');
// }

function home(){
  let home = document.createElement('div');
  home.classList.add('container');
  // test.innerHTML = "hello I am from module: home";
  let order = document.createElement('div');
  order.classList.add('order');
  let delivery_btn = document.createElement('button');
  delivery_btn.innerHTML = "Order Delivery!";
  let pickup_btn = document.createElement('button');

  pickup_btn.innerHTML = "Order Pickup!";
  order.appendChild(delivery_btn);
  order.appendChild(pickup_btn);
  home.appendChild(order);

  let test_content = document.createTextNode('Hello I am from module: home ');
  home.appendChild(test_content);
  let test = document.createElement('div');
  test.innerHTML = 'Hello inside';
  test.classList.add('content');
  test.classList.add('container');

  home.appendChild(test);
  return home;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gY29uc3QgaG9tZSA9ICgpID0+IHtcbi8vICAgbGV0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgLy8gdGVzdC5pbm5lckhUTUwgPSBcImhlbGxvIEkgYW0gZnJvbSBtb2R1bGU6IGhvbWVcIjtcbi8vICAgbGV0IHRlc3RfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIZWxsbyBJIGFtIGZyb20gbW9kdWxlOiBob21lICcpO1xuLy8gICB0ZXN0LmFwcGVuZENoaWxkKHRlc3RfY29udGVudCk7XG4vLyAgIHJldHVybiB0ZXN0O1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBob21lO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCl7XG4vLyAgIGNvbnNvbGUubG9nKCdpIGdldCBjYWxsZWQgZnJvbSBob21lJyk7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKXtcbiAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgLy8gdGVzdC5pbm5lckhUTUwgPSBcImhlbGxvIEkgYW0gZnJvbSBtb2R1bGU6IGhvbWVcIjtcbiAgbGV0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9yZGVyLmNsYXNzTGlzdC5hZGQoJ29yZGVyJyk7XG4gIGxldCBkZWxpdmVyeV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsaXZlcnlfYnRuLmlubmVySFRNTCA9IFwiT3JkZXIgRGVsaXZlcnkhXCI7XG4gIGxldCBwaWNrdXBfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgcGlja3VwX2J0bi5pbm5lckhUTUwgPSBcIk9yZGVyIFBpY2t1cCFcIjtcbiAgb3JkZXIuYXBwZW5kQ2hpbGQoZGVsaXZlcnlfYnRuKTtcbiAgb3JkZXIuYXBwZW5kQ2hpbGQocGlja3VwX2J0bik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQob3JkZXIpO1xuXG4gIGxldCB0ZXN0X2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSGVsbG8gSSBhbSBmcm9tIG1vZHVsZTogaG9tZSAnKTtcbiAgaG9tZS5hcHBlbmRDaGlsZCh0ZXN0X2NvbnRlbnQpO1xuICBsZXQgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXN0LmlubmVySFRNTCA9ICdIZWxsbyBpbnNpZGUnO1xuICB0ZXN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgdGVzdC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBob21lLmFwcGVuZENoaWxkKHRlc3QpO1xuICByZXR1cm4gaG9tZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=