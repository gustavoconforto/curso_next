"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        database: process.env.POSTGRES_DB,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRyxXQUFXO1FBQ2pDQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLE1BQU1QLFFBQVFDLEdBQUcsQ0FBQ08sYUFBYTtRQUMvQkMsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDekM7SUFDQSxNQUFNWixPQUFPYSxPQUFPO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTWQsT0FBT0YsS0FBSyxDQUFDQztJQUNsQyxNQUFNQyxPQUFPZSxHQUFHO0lBQ2hCLE9BQU9EO0FBQ1Q7QUFFQSxpRUFBZTtJQUNiaEIsT0FBT0E7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXJzb19kZXYvLi9pbmZyYS9kYXRhYmFzZS5qcz9lMzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJwZ1wiO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeShxdWVyeU9iamVjdCkge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19IT1NULFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5QT1NUR1JFU19EQixcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19QT1JULFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VTRVIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JELFxuICB9KTtcbiAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5T2JqZWN0KTtcbiAgYXdhaXQgY2xpZW50LmVuZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5OiBxdWVyeSxcbn07XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicXVlcnkiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfSE9TVCIsImRhdGFiYXNlIiwiUE9TVEdSRVNfREIiLCJwb3J0IiwiUE9TVEdSRVNfUE9SVCIsInVzZXIiLCJQT1NUR1JFU19VU0VSIiwicGFzc3dvcmQiLCJQT1NUR1JFU19QQVNTV09SRCIsImNvbm5lY3QiLCJyZXN1bHQiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const result = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT 1 + 1 as sum;\");\n    console.log(result.rows);\n    response.status(200).json({\n        chave: \"Chaves\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBRXJELGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFNBQVMsTUFBTUosZ0VBQWMsQ0FBQztJQUNwQ00sUUFBUUMsR0FBRyxDQUFDSCxPQUFPSSxJQUFJO0lBQ3ZCTCxTQUFTRixNQUFNLENBQUMsS0FBS1EsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBUztBQUM5QztBQUVBLGlFQUFlVCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc29fZGV2Ly4vcGFnZXMvYXBpL3YxL3N0YXR1cy9pbmRleC5qcz84NGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5mcmEvZGF0YWJhc2UuanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gc3RhdHVzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0VMRUNUIDEgKyAxIGFzIHN1bTtcIik7XG4gIGNvbnNvbGUubG9nKHJlc3VsdC5yb3dzKTtcbiAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7IGNoYXZlOiBcIkNoYXZlc1wiIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0dXM7XG4iXSwibmFtZXMiOlsiZGF0YWJhc2UiLCJzdGF0dXMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJyZXN1bHQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwianNvbiIsImNoYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();