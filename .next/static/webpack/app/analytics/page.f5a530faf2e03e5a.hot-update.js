"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/analytics/page",{

/***/ "(app-pages-browser)/./src/components/AnalyticsDashboard.tsx":
/*!***********************************************!*\
  !*** ./src/components/AnalyticsDashboard.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_BarChart_Card_tremor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=BarChart,Card!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=BarChart,Card!=!./node_modules/@tremor/react/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownRight_ArrowRight_ArrowUpRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownRight,ArrowRight,ArrowUpRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-up-right.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownRight_ArrowRight_ArrowUpRight_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownRight,ArrowRight,ArrowUpRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownRight_ArrowRight_ArrowUpRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownRight,ArrowRight,ArrowUpRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-down-right.js\");\n/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-country-flag */ \"(app-pages-browser)/./node_modules/react-country-flag/dist/react-country-flag.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst Badge = (param)=>{\n    let { percentage } = param;\n    const isPositive = percentage > 0;\n    const isNeutral = percentage === 0;\n    const isNegative = percentage < 0;\n    if (isNaN(percentage)) return null;\n    const positiveClassname = \"bg-green-900/25 text-green-400 ring-green-400/25\";\n    const neutralClassname = \"bg-zinc-900/25 text-zinc-400 ring-zinc-400/25\";\n    const negativeClassname = \"bg-red-900/25 text-red-400 ring-red-400/25\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"inline-flex gap-1 items-center rounded-md px-2 py-1 text-xs \\n            font-medium ring-1 ring-inset \".concat(isPositive ? positiveClassname : isNeutral ? neutralClassname : negativeClassname),\n        children: [\n            isPositive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDownRight_ArrowRight_ArrowUpRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"h-3 w-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                lineNumber: 37,\n                columnNumber: 27\n            }, undefined) : null,\n            isNeutral ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDownRight_ArrowRight_ArrowUpRight_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \"h-3 w-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                lineNumber: 38,\n                columnNumber: 26\n            }, undefined) : null,\n            isNegative ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDownRight_ArrowRight_ArrowUpRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"h-3 w-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                lineNumber: 39,\n                columnNumber: 27\n            }, undefined) : null,\n            percentage.toFixed(0),\n            \"%\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Badge;\nconst AnalyticsDashboard = (param)=>{\n    let { avgVisitorsPerDay, amtVisitorsToday, timeseriesPageViews, topCountries } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BarChart_Card_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"w-full mx-auto max-w-xs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-tremor-default text-dark-tremor-content\",\n                                children: \"Avg. visitors/day\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl text-dark-tremor-content-strong font-semibold\",\n                                children: avgVisitorsPerDay\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BarChart_Card_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"w-full mx-auto max-w-xs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" text-tremor-default text-dark-tremor-content\",\n                                children: [\n                                    \"Visitors today\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Badge, {\n                                        percentage: (amtVisitorsToday / Number(avgVisitorsPerDay) - 1) * 100\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl text-dark-tremor-content-strong font-semibold\",\n                                children: amtVisitorsToday\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BarChart_Card_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                className: \"flex flex-col sm:grid grid-cols-4 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"w-full text-dark-tremor-content-strong text-center sm:left-left font-semibold text-xl\",\n                        children: \"This weeks top visitors:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3 flex items-center justify-between flex-wrap gap-8\",\n                        children: topCountries === null || topCountries === void 0 ? void 0 : topCountries.map((param)=>{\n                            let [countryCode, number] = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-3 text-dark-tremor-content-strong\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"hidden sm:block text-tremor-content\",\n                                        children: countryCode\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_country_flag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: \"text-5xl sm:text-3xl\",\n                                        svg: true,\n                                        countryCode: countryCode\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-tremor-content sm:text-dark-tremor-content-strong\",\n                                        children: number\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 29\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BarChart_Card_tremor_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                children: timeseriesPageViews ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BarChart_Card_tremor_react__WEBPACK_IMPORTED_MODULE_1__.BarChart, {\n                    allowDecimals: false,\n                    showAnimation: true,\n                    data: timeseriesPageViews.map((day)=>({\n                            name: day.date,\n                            Visitors: day.events.reduce((acc, crr)=>{\n                                return acc + Object.values(crr)[0];\n                            }, 0)\n                        })),\n                    categories: [\n                        \"Visitors\"\n                    ],\n                    index: \"name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 21\n                }, undefined) : null\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stu\\\\Desktop\\\\fullstack\\\\nextJS\\\\analytics-dashboard\\\\src\\\\components\\\\AnalyticsDashboard.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = AnalyticsDashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnalyticsDashboard);\nvar _c, _c1;\n$RefreshReg$(_c, \"Badge\");\n$RefreshReg$(_c1, \"AnalyticsDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FuYWx5dGljc0Rhc2hib2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHOEM7QUFDeUI7QUFDdEI7QUFTakQsTUFBTU0sUUFBUTtRQUFDLEVBQUVDLFVBQVUsRUFBMEI7SUFDakQsTUFBTUMsYUFBYUQsYUFBYTtJQUNoQyxNQUFNRSxZQUFZRixlQUFlO0lBQ2pDLE1BQU1HLGFBQWFILGFBQWE7SUFFaEMsSUFBSUksTUFBTUosYUFBYSxPQUFPO0lBRTlCLE1BQU1LLG9CQUFvQjtJQUMxQixNQUFNQyxtQkFBbUI7SUFDekIsTUFBTUMsb0JBQW9CO0lBRTFCLHFCQUNJLDhEQUFDQztRQUNHQyxXQUFXLDJHQU9WLE9BTEdSLGFBQ01JLG9CQUNBSCxZQUNBSSxtQkFDQUM7O1lBR1ROLDJCQUFhLDhEQUFDSixrSEFBWUE7Z0JBQUNZLFdBQVU7Ozs7OzRCQUFlO1lBQ3BEUCwwQkFBWSw4REFBQ04sa0hBQVVBO2dCQUFDYSxXQUFVOzs7Ozs0QkFBZTtZQUNqRE4sMkJBQWEsOERBQUNSLGtIQUFjQTtnQkFBQ2MsV0FBVTs7Ozs7NEJBQWU7WUFDdERULFdBQVdVLE9BQU8sQ0FBQztZQUFHOzs7Ozs7O0FBR25DO0tBNUJNWDtBQThCTixNQUFNWSxxQkFBcUI7UUFBQyxFQUN4QkMsaUJBQWlCLEVBQ2pCQyxnQkFBZ0IsRUFDaEJDLG1CQUFtQixFQUNuQkMsWUFBWSxFQUNVO0lBQ3RCLHFCQUNJLDhEQUFDQztRQUFJUCxXQUFVOzswQkFDWCw4REFBQ087Z0JBQUlQLFdBQVU7O2tDQUNYLDhEQUFDZixtRkFBSUE7d0JBQUNlLFdBQVU7OzBDQUNaLDhEQUFDUTtnQ0FBRVIsV0FBVTswQ0FBK0M7Ozs7OzswQ0FHNUQsOERBQUNRO2dDQUFFUixXQUFVOzBDQUNSRzs7Ozs7Ozs7Ozs7O2tDQUdULDhEQUFDbEIsbUZBQUlBO3dCQUFDZSxXQUFVOzswQ0FDWiw4REFBQ1E7Z0NBQUVSLFdBQVU7O29DQUFnRDtrREFFekQsOERBQUNWO3dDQUNHQyxZQUNJLENBQUNhLG1CQUFtQkssT0FBT04scUJBQXFCLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FJakUsOERBQUNLO2dDQUFFUixXQUFVOzBDQUNSSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtiLDhEQUFDbkIsbUZBQUlBO2dCQUFDZSxXQUFVOztrQ0FDWiw4REFBQ1U7d0JBQUdWLFdBQVU7a0NBQXdGOzs7Ozs7a0NBR3RHLDhEQUFDTzt3QkFBSVAsV0FBVTtrQ0FDVk0seUJBQUFBLG1DQUFBQSxhQUFjSyxHQUFHLENBQUM7Z0NBQUMsQ0FBQ0MsYUFBYUMsT0FBTzs0QkFDckMscUJBQ0ksOERBQUNOO2dDQUFJUCxXQUFVOztrREFDWCw4REFBQ1E7d0NBQUVSLFdBQVU7a0RBQ1JZOzs7Ozs7a0RBRUwsOERBQUN2QiwwREFBZ0JBO3dDQUNiVyxXQUFVO3dDQUNWYyxHQUFHO3dDQUNIRixhQUFhQTs7Ozs7O2tEQUdqQiw4REFBQ0o7d0NBQUVSLFdBQVU7a0RBQ1JhOzs7Ozs7Ozs7Ozs7d0JBSWpCOzs7Ozs7Ozs7Ozs7MEJBSVIsOERBQUM1QixtRkFBSUE7MEJBQ0FvQixvQ0FDRyw4REFBQ3JCLHVGQUFRQTtvQkFDTCtCLGVBQWU7b0JBQ2ZDLGFBQWE7b0JBQ2JDLE1BQU1aLG9CQUFvQk0sR0FBRyxDQUFDLENBQUNPLE1BQVM7NEJBQ3BDQyxNQUFNRCxJQUFJRSxJQUFJOzRCQUNkQyxVQUFVSCxJQUFJSSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztnQ0FDOUIsT0FBT0QsTUFBTUUsT0FBT0MsTUFBTSxDQUFDRixJQUFJLENBQUMsRUFBRTs0QkFDdEMsR0FBRzt3QkFDUDtvQkFDQUcsWUFBWTt3QkFBQztxQkFBVztvQkFDeEJDLE9BQU07Ozs7O2dDQUVWOzs7Ozs7Ozs7Ozs7QUFJcEI7TUE1RU0zQjtBQThFTiwrREFBZUEsa0JBQWtCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuYWx5dGljc0Rhc2hib2FyZC50c3g/Y2ZlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgYW5hbHl0aWNzIH0gZnJvbSBcIkAvdXRpbHMvYW5hbHl0aWNzXCJcclxuaW1wb3J0IHsgQmFyQ2hhcnQsIENhcmQgfSBmcm9tIFwiQHRyZW1vci9yZWFjdFwiXHJcbmltcG9ydCB7IEFycm93RG93blJpZ2h0LCBBcnJvd1JpZ2h0LCBBcnJvd1VwUmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcclxuaW1wb3J0IFJlYWN0Q291bnRyeUZsYWcgZnJvbSBcInJlYWN0LWNvdW50cnktZmxhZ1wiXHJcblxyXG5pbnRlcmZhY2UgQW5hbHl0aWNzRGFzaGJvYXJkUHJvcHMge1xyXG4gICAgYXZnVmlzaXRvcnNQZXJEYXk6IHN0cmluZ1xyXG4gICAgYW10VmlzaXRvcnNUb2RheTogbnVtYmVyXHJcbiAgICB0aW1lc2VyaWVzUGFnZVZpZXdzOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIGFuYWx5dGljcy5yZXRyaXZlRGF5cz4+XHJcbiAgICB0b3BDb3VudHJpZXM6IFtzdHJpbmcsIG51bWJlcl1bXVxyXG59XHJcblxyXG5jb25zdCBCYWRnZSA9ICh7IHBlcmNlbnRhZ2UgfTogeyBwZXJjZW50YWdlOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNQb3NpdGl2ZSA9IHBlcmNlbnRhZ2UgPiAwXHJcbiAgICBjb25zdCBpc05ldXRyYWwgPSBwZXJjZW50YWdlID09PSAwXHJcbiAgICBjb25zdCBpc05lZ2F0aXZlID0gcGVyY2VudGFnZSA8IDBcclxuXHJcbiAgICBpZiAoaXNOYU4ocGVyY2VudGFnZSkpIHJldHVybiBudWxsXHJcblxyXG4gICAgY29uc3QgcG9zaXRpdmVDbGFzc25hbWUgPSBcImJnLWdyZWVuLTkwMC8yNSB0ZXh0LWdyZWVuLTQwMCByaW5nLWdyZWVuLTQwMC8yNVwiXHJcbiAgICBjb25zdCBuZXV0cmFsQ2xhc3NuYW1lID0gXCJiZy16aW5jLTkwMC8yNSB0ZXh0LXppbmMtNDAwIHJpbmctemluYy00MDAvMjVcIlxyXG4gICAgY29uc3QgbmVnYXRpdmVDbGFzc25hbWUgPSBcImJnLXJlZC05MDAvMjUgdGV4dC1yZWQtNDAwIHJpbmctcmVkLTQwMC8yNVwiXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBnYXAtMSBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBweC0yIHB5LTEgdGV4dC14cyBcclxuICAgICAgICAgICAgZm9udC1tZWRpdW0gcmluZy0xIHJpbmctaW5zZXQgJHtcclxuICAgICAgICAgICAgICAgIGlzUG9zaXRpdmVcclxuICAgICAgICAgICAgICAgICAgICA/IHBvc2l0aXZlQ2xhc3NuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgOiBpc05ldXRyYWxcclxuICAgICAgICAgICAgICAgICAgICA/IG5ldXRyYWxDbGFzc25hbWVcclxuICAgICAgICAgICAgICAgICAgICA6IG5lZ2F0aXZlQ2xhc3NuYW1lXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2lzUG9zaXRpdmUgPyA8QXJyb3dVcFJpZ2h0IGNsYXNzTmFtZT1cImgtMyB3LTNcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtpc05ldXRyYWwgPyA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICB7aXNOZWdhdGl2ZSA/IDxBcnJvd0Rvd25SaWdodCBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICB7cGVyY2VudGFnZS50b0ZpeGVkKDApfSVcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEFuYWx5dGljc0Rhc2hib2FyZCA9ICh7XHJcbiAgICBhdmdWaXNpdG9yc1BlckRheSxcclxuICAgIGFtdFZpc2l0b3JzVG9kYXksXHJcbiAgICB0aW1lc2VyaWVzUGFnZVZpZXdzLFxyXG4gICAgdG9wQ291bnRyaWVzLFxyXG59OiBBbmFseXRpY3NEYXNoYm9hcmRQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBteC1hdXRvIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byBtYXgtdy14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdHJlbW9yLWRlZmF1bHQgdGV4dC1kYXJrLXRyZW1vci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF2Zy4gdmlzaXRvcnMvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtZGFyay10cmVtb3ItY29udGVudC1zdHJvbmcgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXZnVmlzaXRvcnNQZXJEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gbWF4LXcteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC10cmVtb3ItZGVmYXVsdCB0ZXh0LWRhcmstdHJlbW9yLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzaXRvcnMgdG9kYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYW10VmlzaXRvcnNUb2RheSAvIE51bWJlcihhdmdWaXNpdG9yc1BlckRheSkgLSAxKSAqIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWRhcmstdHJlbW9yLWNvbnRlbnQtc3Ryb25nIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FtdFZpc2l0b3JzVG9kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206Z3JpZCBncmlkLWNvbHMtNCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWRhcmstdHJlbW9yLWNvbnRlbnQtc3Ryb25nIHRleHQtY2VudGVyIHNtOmxlZnQtbGVmdCBmb250LXNlbWlib2xkIHRleHQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGlzIHdlZWtzIHRvcCB2aXNpdG9yczpcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcCBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BDb3VudHJpZXM/Lm1hcCgoW2NvdW50cnlDb2RlLCBudW1iZXJdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtZGFyay10cmVtb3ItY29udGVudC1zdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2sgdGV4dC10cmVtb3ItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeUNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENvdW50cnlGbGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNXhsIHNtOnRleHQtM3hsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlPXtjb3VudHJ5Q29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXRyZW1vci1jb250ZW50IHNtOnRleHQtZGFyay10cmVtb3ItY29udGVudC1zdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge251bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAge3RpbWVzZXJpZXNQYWdlVmlld3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhckNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RGVjaW1hbHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93QW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RpbWVzZXJpZXNQYWdlVmlld3MubWFwKChkYXkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXkuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc2l0b3JzOiBkYXkuZXZlbnRzLnJlZHVjZSgoYWNjLCBjcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjICsgT2JqZWN0LnZhbHVlcyhjcnIpWzBdIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17W1wiVmlzaXRvcnNcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuYWx5dGljc0Rhc2hib2FyZFxyXG4iXSwibmFtZXMiOlsiQmFyQ2hhcnQiLCJDYXJkIiwiQXJyb3dEb3duUmlnaHQiLCJBcnJvd1JpZ2h0IiwiQXJyb3dVcFJpZ2h0IiwiUmVhY3RDb3VudHJ5RmxhZyIsIkJhZGdlIiwicGVyY2VudGFnZSIsImlzUG9zaXRpdmUiLCJpc05ldXRyYWwiLCJpc05lZ2F0aXZlIiwiaXNOYU4iLCJwb3NpdGl2ZUNsYXNzbmFtZSIsIm5ldXRyYWxDbGFzc25hbWUiLCJuZWdhdGl2ZUNsYXNzbmFtZSIsInNwYW4iLCJjbGFzc05hbWUiLCJ0b0ZpeGVkIiwiQW5hbHl0aWNzRGFzaGJvYXJkIiwiYXZnVmlzaXRvcnNQZXJEYXkiLCJhbXRWaXNpdG9yc1RvZGF5IiwidGltZXNlcmllc1BhZ2VWaWV3cyIsInRvcENvdW50cmllcyIsImRpdiIsInAiLCJOdW1iZXIiLCJoMiIsIm1hcCIsImNvdW50cnlDb2RlIiwibnVtYmVyIiwic3ZnIiwiYWxsb3dEZWNpbWFscyIsInNob3dBbmltYXRpb24iLCJkYXRhIiwiZGF5IiwibmFtZSIsImRhdGUiLCJWaXNpdG9ycyIsImV2ZW50cyIsInJlZHVjZSIsImFjYyIsImNyciIsIk9iamVjdCIsInZhbHVlcyIsImNhdGVnb3JpZXMiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AnalyticsDashboard.tsx\n"));

/***/ })

});