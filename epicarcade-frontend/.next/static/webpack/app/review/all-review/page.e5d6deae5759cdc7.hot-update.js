"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/review/all-review/page",{

/***/ "(app-pages-browser)/./src/app/review/all-review/page.tsx":
/*!********************************************!*\
  !*** ./src/app/review/all-review/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllReviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AllReviews_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllReviews.css */ \"(app-pages-browser)/./src/app/review/all-review/AllReviews.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AllReviews() {\n    _s();\n    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch reviews\n        fetch(\"http://localhost:8080/reviews/list-reviews\").then((response)=>response.json()).then((data)=>{\n            setReviews(data);\n            // Fetch games after reviews are loaded\n            fetch(\"http://localhost:8080/reviews/games\").then((response)=>response.json()).then((gamesData)=>{\n                con;\n                // Create a dictionary mapping game IDs to game names\n                const gamesDict = {};\n                gamesData.forEach((game)=>{\n                    gamesDict[game.id] = game.name;\n                });\n                setGames(gamesDict);\n            }).catch((error)=>{\n                console.error(\"Error fetching games:\", error);\n            });\n        }).catch((error)=>{\n            console.error(\"Error fetching reviews:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Reviews\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            reviews.length > 0 ? reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"review\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"id-games\",\n                            children: [\n                                \"Id-game: \",\n                                games[review.id_game] || review.id_game\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Rating: \",\n                                review.rating\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Comment: \",\n                                review.comment\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"no-reviews\",\n                children: \"No reviews available.\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(AllReviews, \"F9wp4xtE+UeJSzEpEVUplgJXtCo=\");\n_c = AllReviews;\nvar _c;\n$RefreshReg$(_c, \"AllReviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmV2aWV3L2FsbC1yZXZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUN6QjtBQUVYLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsQ0FBQztJQUVwQ0QsZ0RBQVNBLENBQUM7UUFDUixnQkFBZ0I7UUFDaEJPLE1BQU0sOENBQ0hDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQTtZQUNKUCxXQUFXTztZQUNYLHVDQUF1QztZQUN2Q0osTUFBTSx1Q0FDSEMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNJLENBQUFBO2dCQUNKQztnQkFDQSxxREFBcUQ7Z0JBQ3JELE1BQU1DLFlBQVksQ0FBQztnQkFDbkJGLFVBQVVHLE9BQU8sQ0FBQ0MsQ0FBQUE7b0JBQ2hCRixTQUFTLENBQUNFLEtBQUtDLEVBQUUsQ0FBQyxHQUFHRCxLQUFLRSxJQUFJO2dCQUNoQztnQkFDQVosU0FBU1E7WUFDWCxHQUNDSyxLQUFLLENBQUNDLENBQUFBO2dCQUNMQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUN6QztRQUNKLEdBQ0NELEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDM0M7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSHJCLFFBQVFzQixNQUFNLEdBQUcsSUFDaEJ0QixRQUFRdUIsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNuQiw4REFBQ047b0JBQWdCQyxXQUFVOztzQ0FDekIsOERBQUNNOzRCQUFHTixXQUFVOztnQ0FBVztnQ0FBVWxCLEtBQUssQ0FBQ3NCLE9BQU9HLE9BQU8sQ0FBQyxJQUFJSCxPQUFPRyxPQUFPOzs7Ozs7O3NDQUMxRSw4REFBQ0M7O2dDQUFFO2dDQUFTSixPQUFPSyxNQUFNOzs7Ozs7O3NDQUN6Qiw4REFBQ0Q7O2dDQUFFO2dDQUFVSixPQUFPTSxPQUFPOzs7Ozs7OzttQkFIbkJMOzs7OzBDQU9aLDhEQUFDRztnQkFBRVIsV0FBVTswQkFBYTs7Ozs7Ozs7Ozs7O0FBSWxDO0dBL0N3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmV2aWV3L2FsbC1yZXZpZXcvcGFnZS50c3g/ODdmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0FsbFJldmlld3MuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsUmV2aWV3cygpIHtcbiAgY29uc3QgW3Jldmlld3MsIHNldFJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoIHJldmlld3NcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Jldmlld3MvbGlzdC1yZXZpZXdzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRSZXZpZXdzKGRhdGEpO1xuICAgICAgICAvLyBGZXRjaCBnYW1lcyBhZnRlciByZXZpZXdzIGFyZSBsb2FkZWRcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZXZpZXdzL2dhbWVzJylcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZ2FtZXNEYXRhID0+IHtcbiAgICAgICAgICAgIGNvblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgZGljdGlvbmFyeSBtYXBwaW5nIGdhbWUgSURzIHRvIGdhbWUgbmFtZXNcbiAgICAgICAgICAgIGNvbnN0IGdhbWVzRGljdCA9IHt9O1xuICAgICAgICAgICAgZ2FtZXNEYXRhLmZvckVhY2goZ2FtZSA9PiB7XG4gICAgICAgICAgICAgIGdhbWVzRGljdFtnYW1lLmlkXSA9IGdhbWUubmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0R2FtZXMoZ2FtZXNEaWN0KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBnYW1lczonLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmV2aWV3czonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMT5BbGwgUmV2aWV3czwvaDE+XG4gICAgICB7cmV2aWV3cy5sZW5ndGggPiAwID8gKFxuICAgICAgICByZXZpZXdzLm1hcCgocmV2aWV3LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmV2aWV3XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaWQtZ2FtZXNcIj5JZC1nYW1lOiB7Z2FtZXNbcmV2aWV3LmlkX2dhbWVdIHx8IHJldmlldy5pZF9nYW1lfTwvaDI+XG4gICAgICAgICAgICA8cD5SYXRpbmc6IHtyZXZpZXcucmF0aW5nfTwvcD5cbiAgICAgICAgICAgIDxwPkNvbW1lbnQ6IHtyZXZpZXcuY29tbWVudH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1yZXZpZXdzXCI+Tm8gcmV2aWV3cyBhdmFpbGFibGUuPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWxsUmV2aWV3cyIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiZ2FtZXMiLCJzZXRHYW1lcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJnYW1lc0RhdGEiLCJjb24iLCJnYW1lc0RpY3QiLCJmb3JFYWNoIiwiZ2FtZSIsImlkIiwibmFtZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsZW5ndGgiLCJtYXAiLCJyZXZpZXciLCJpbmRleCIsImgyIiwiaWRfZ2FtZSIsInAiLCJyYXRpbmciLCJjb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/review/all-review/page.tsx\n"));

/***/ })

});