/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/math.js"(
      /*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ add: () => /* binding */ add,
        /* harmony export */ multiply: () => /* binding */ multiply,
        /* harmony export */
      });
      function add(a, b) {
        console.log("Function add called");
        return a + b;
      }

      function multiply(a, b) {
        console.log("Function multiply called");
        return a * b;
      }

      /***/
    },

    /***/ "./src/utils.js"(
      /*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ formatNumber: () => /* binding */ formatNumber,
        /* harmony export */
      });
      function formatNumber(num) {
        console.log("Function formatNumber called");
        return num.toLocaleString();
      }

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Check if module exists (development only)
    /******/ if (__webpack_modules__[moduleId] === undefined) {
      /******/ var e = new Error("Cannot find module '" + moduleId + "'");
      /******/ e.code = "MODULE_NOT_FOUND";
      /******/ throw e;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
  (() => {
    /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./math.js */ "./src/math.js");
    /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./utils.js */ "./src/utils.js");

    console.log("=== App Starting ===");
    const sum = (0, _math_js__WEBPACK_IMPORTED_MODULE_0__.add)(5, 3);
    const product = (0, _math_js__WEBPACK_IMPORTED_MODULE_0__.multiply)(4, 7);

    console.log(
      "Sum:",
      (0, _utils_js__WEBPACK_IMPORTED_MODULE_1__.formatNumber)(sum)
    );
    console.log(
      "Product:",
      (0, _utils_js__WEBPACK_IMPORTED_MODULE_1__.formatNumber)(product)
    );
    console.log("=== App Finished ===");
  })();

  /******/
})();
