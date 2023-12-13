"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/cg */ \"(app-client)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/lu */ \"(app-client)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var _public_powerpulse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/powerpulse.png */ \"(app-client)/./public/powerpulse.png\");\n/* harmony import */ var _public_cinemania_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/cinemania.png */ \"(app-client)/./public/cinemania.png\");\n/* harmony import */ var _public_mimino_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/mimino.png */ \"(app-client)/./public/mimino.png\");\n/* harmony import */ var _public_carhub_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/carhub.png */ \"(app-client)/./public/carhub.png\");\n/* harmony import */ var _public_promptopia_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/promptopia.png */ \"(app-client)/./public/promptopia.png\");\n/* harmony import */ var _public_webstudio_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/webstudio.png */ \"(app-client)/./public/webstudio.png\");\n\n\n\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Graduated bootcamp\",\n        location: \"Miami, FL\",\n        description: \"I graduated after 6 months of studying. I immediately found a job as a front-end developer.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_7__.LuGraduationCap),\n        date: \"2019\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Orlando, FL\",\n        description: \"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_8__.CgWorkAlt),\n        date: \"2019 - 2021\"\n    },\n    {\n        title: \"Full-Stack Developer\",\n        location: \"Houston, TX\",\n        description: \"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaReact),\n        date: \"2021 - present\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"CarHub\",\n        description: \"Next.js application with a responsive design for viewing cars, featuring rental pricing, and detailed characteristics.\",\n        tags: [\n            \"Next.js\",\n            \"TypeScript\",\n            \"React hooks\",\n            \"Tailwind CSS\",\n            \"post css\",\n            \"autoprefixer\"\n        ],\n        imageUrl: _public_carhub_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        link: \"https://auto-dealer-our2.vercel.app/\"\n    },\n    {\n        title: \"Promptopia\",\n        description: \"Next.js full-stack application, responsive design, Google authorization for seamless prompt sharing between users.\",\n        tags: [\n            \"Next.js\",\n            \"React hooks\",\n            \"Tailwind CSS\",\n            \"mongodb\",\n            \"mongoose\",\n            \"oauth\"\n        ],\n        imageUrl: _public_promptopia_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        link: \"https://promptopia-blush-gamma.vercel.app/\"\n    },\n    {\n        title: \"Power Pulse\",\n        description: \"React fitness app with authorization, animated exercise demos, activity diary, and daily calorie tracking.\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"Node\",\n            \"Express\",\n            \"MongoDB\"\n        ],\n        imageUrl: _public_powerpulse_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        link: \"https://bob-ua.github.io/pj-react-777/\"\n    },\n    {\n        title: \"Cinemania\",\n        description: \"As a Team Lead and developer, I collaborated with others to build and deploy a JavaScript trailer hub. It incorporates responsive design and seamlessly interacts with APIs using Axios.\",\n        tags: [\n            \"JavaScript\",\n            \"HTML\",\n            \"CSS\",\n            \"Parcel\"\n        ],\n        imageUrl: _public_cinemania_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        link: \"https://bob-ua.github.io/dream_team_Cinemania/\"\n    },\n    {\n        title: \"MIMINO\",\n        description: \"In my role as a Team Lead and developer, I worked with a team to create and launch a responsive four-page hotel complex website.\",\n        tags: [\n            \"JavaScript\",\n            \"HTML\",\n            \"CSS\",\n            \"Parcel\"\n        ],\n        imageUrl: _public_mimino_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        link: \"https://bob-ua.github.io/dream_team/\"\n    },\n    {\n        title: \"Web Studio\",\n        description: \"In my role as a Team Lead and developer, I worked with a team to create and launch a responsive four-page hotel complex website.\",\n        tags: [\n            \"JavaScript\",\n            \"HTML\",\n            \"CSS\",\n            \"Parcel\"\n        ],\n        imageUrl: _public_webstudio_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        link: \"https://bob-ua.github.io/goit-markup-hw-07/\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React.js\",\n    \"Next\",\n    \"Node\",\n    \"Tailwind CSS\",\n    \"Redux\",\n    \"Express\",\n    \"MongoDB\",\n    \"Mongoose\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ0Y7QUFDUTtBQUNBO0FBQ0Y7QUFDTjtBQUNBO0FBQ1E7QUFDRjtBQUd4QyxNQUFNVSxRQUFRO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWpCLDBEQUFtQixDQUFDRywyREFBZUE7UUFDekNnQixNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNakIsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ2tCLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1qQiwwREFBbUIsQ0FBQ0UsbURBQU9BO1FBQ2pDaUIsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGVBQWU7SUFDMUI7UUFDRU4sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFDSjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxVQUFVZiwwREFBTUE7UUFDaEJnQixNQUFNO0lBQ1I7SUFDQTtRQUNFVCxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUNKO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0RDLFVBQVVkLDhEQUFVQTtRQUNwQmUsTUFBTTtJQUNSO0lBQ0E7UUFDRVQsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVM7WUFBUTtZQUFXO1NBQVU7UUFDdERDLFVBQVVsQiw4REFBVUE7UUFDcEJtQixNQUFNO0lBQ1I7SUFDQTtRQUNFVCxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQWM7WUFBUTtZQUFPO1NBQVM7UUFDN0NDLFVBQVVqQiw2REFBU0E7UUFDbkJrQixNQUFNO0lBQ1I7SUFDQTtRQUNFVCxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQWM7WUFBUTtZQUFPO1NBQVM7UUFDN0NDLFVBQVVoQiwwREFBTUE7UUFDaEJpQixNQUFNO0lBQ1I7SUFDQTtRQUNFVCxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQWM7WUFBUTtZQUFPO1NBQVM7UUFDN0NDLFVBQVViLDZEQUFTQTtRQUNuQmMsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGFBQWE7SUFDeEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBRUQsQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZGF0YS50cz8xNmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENnV29ya0FsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xuaW1wb3J0IHsgRmFSZWFjdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgTHVHcmFkdWF0aW9uQ2FwIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCI7XG5pbXBvcnQgcG93ZXJwdWxzZSBmcm9tIFwiQC9wdWJsaWMvcG93ZXJwdWxzZS5wbmdcIjtcbmltcG9ydCBjaW5lbWFuaWEgZnJvbSBcIkAvcHVibGljL2NpbmVtYW5pYS5wbmdcIjtcbmltcG9ydCBtaW1pbm8gZnJvbSBcIkAvcHVibGljL21pbWluby5wbmdcIjtcbmltcG9ydCBjYXJodWIgZnJvbSBcIkAvcHVibGljL2Nhcmh1Yi5wbmdcIjtcbmltcG9ydCBwcm9tcHRvcGlhIGZyb20gXCJAL3B1YmxpYy9wcm9tcHRvcGlhLnBuZ1wiO1xuaW1wb3J0IHdlYnN0dWRpbyBmcm9tIFwiQC9wdWJsaWMvd2Vic3R1ZGlvLnBuZ1wiO1xuXG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIGhhc2g6IFwiI2hvbWVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJvdXRcIixcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgIGhhc2g6IFwiI3Byb2plY3RzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNraWxsc1wiLFxuICAgIGhhc2g6IFwiI3NraWxsc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFeHBlcmllbmNlXCIsXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkdyYWR1YXRlZCBib290Y2FtcFwiLFxuICAgIGxvY2F0aW9uOiBcIk1pYW1pLCBGTFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJIGdyYWR1YXRlZCBhZnRlciA2IG1vbnRocyBvZiBzdHVkeWluZy4gSSBpbW1lZGlhdGVseSBmb3VuZCBhIGpvYiBhcyBhIGZyb250LWVuZCBkZXZlbG9wZXIuXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChMdUdyYWR1YXRpb25DYXApLFxuICAgIGRhdGU6IFwiMjAxOVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRnJvbnQtRW5kIERldmVsb3BlclwiLFxuICAgIGxvY2F0aW9uOiBcIk9ybGFuZG8sIEZMXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkkgd29ya2VkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBmb3IgMiB5ZWFycyBpbiAxIGpvYiBhbmQgMSB5ZWFyIGluIGFub3RoZXIgam9iLiBJIGFsc28gdXBza2lsbGVkIHRvIHRoZSBmdWxsIHN0YWNrLlwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2dXb3JrQWx0KSxcbiAgICBkYXRlOiBcIjIwMTkgLSAyMDIxXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGdWxsLVN0YWNrIERldmVsb3BlclwiLFxuICAgIGxvY2F0aW9uOiBcIkhvdXN0b24sIFRYXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkknbSBub3cgYSBmdWxsLXN0YWNrIGRldmVsb3BlciB3b3JraW5nIGFzIGEgZnJlZWxhbmNlci4gTXkgc3RhY2sgaW5jbHVkZXMgUmVhY3QsIE5leHQuanMsIFR5cGVTY3JpcHQsIFRhaWx3aW5kLCBQcmlzbWEgYW5kIE1vbmdvREIuIEknbSBvcGVuIHRvIGZ1bGwtdGltZSBvcHBvcnR1bml0aWVzLlwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFSZWFjdCksXG4gICAgZGF0ZTogXCIyMDIxIC0gcHJlc2VudFwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkNhckh1YlwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJOZXh0LmpzIGFwcGxpY2F0aW9uIHdpdGggYSByZXNwb25zaXZlIGRlc2lnbiBmb3Igdmlld2luZyBjYXJzLCBmZWF0dXJpbmcgcmVudGFsIHByaWNpbmcsIGFuZCBkZXRhaWxlZCBjaGFyYWN0ZXJpc3RpY3MuXCIsXG4gICAgdGFnczogW1xuICAgICAgXCJOZXh0LmpzXCIsXG4gICAgICBcIlR5cGVTY3JpcHRcIixcbiAgICAgIFwiUmVhY3QgaG9va3NcIixcbiAgICAgIFwiVGFpbHdpbmQgQ1NTXCIsXG4gICAgICBcInBvc3QgY3NzXCIsXG4gICAgICBcImF1dG9wcmVmaXhlclwiLFxuICAgIF0sXG4gICAgaW1hZ2VVcmw6IGNhcmh1YixcbiAgICBsaW5rOiBcImh0dHBzOi8vYXV0by1kZWFsZXItb3VyMi52ZXJjZWwuYXBwL1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUHJvbXB0b3BpYVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJOZXh0LmpzIGZ1bGwtc3RhY2sgYXBwbGljYXRpb24sIHJlc3BvbnNpdmUgZGVzaWduLCBHb29nbGUgYXV0aG9yaXphdGlvbiBmb3Igc2VhbWxlc3MgcHJvbXB0IHNoYXJpbmcgYmV0d2VlbiB1c2Vycy5cIixcbiAgICB0YWdzOiBbXG4gICAgICBcIk5leHQuanNcIixcbiAgICAgIFwiUmVhY3QgaG9va3NcIixcbiAgICAgIFwiVGFpbHdpbmQgQ1NTXCIsXG4gICAgICBcIm1vbmdvZGJcIixcbiAgICAgIFwibW9uZ29vc2VcIixcbiAgICAgIFwib2F1dGhcIixcbiAgICBdLFxuICAgIGltYWdlVXJsOiBwcm9tcHRvcGlhLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcm9tcHRvcGlhLWJsdXNoLWdhbW1hLnZlcmNlbC5hcHAvXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQb3dlciBQdWxzZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJSZWFjdCBmaXRuZXNzIGFwcCB3aXRoIGF1dGhvcml6YXRpb24sIGFuaW1hdGVkIGV4ZXJjaXNlIGRlbW9zLCBhY3Rpdml0eSBkaWFyeSwgYW5kIGRhaWx5IGNhbG9yaWUgdHJhY2tpbmcuXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIk5vZGVcIiwgXCJFeHByZXNzXCIsIFwiTW9uZ29EQlwiXSxcbiAgICBpbWFnZVVybDogcG93ZXJwdWxzZSxcbiAgICBsaW5rOiBcImh0dHBzOi8vYm9iLXVhLmdpdGh1Yi5pby9wai1yZWFjdC03NzcvXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDaW5lbWFuaWFcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQXMgYSBUZWFtIExlYWQgYW5kIGRldmVsb3BlciwgSSBjb2xsYWJvcmF0ZWQgd2l0aCBvdGhlcnMgdG8gYnVpbGQgYW5kIGRlcGxveSBhIEphdmFTY3JpcHQgdHJhaWxlciBodWIuIEl0IGluY29ycG9yYXRlcyByZXNwb25zaXZlIGRlc2lnbiBhbmQgc2VhbWxlc3NseSBpbnRlcmFjdHMgd2l0aCBBUElzIHVzaW5nIEF4aW9zLlwiLFxuICAgIHRhZ3M6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiUGFyY2VsXCJdLFxuICAgIGltYWdlVXJsOiBjaW5lbWFuaWEsXG4gICAgbGluazogXCJodHRwczovL2JvYi11YS5naXRodWIuaW8vZHJlYW1fdGVhbV9DaW5lbWFuaWEvXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNSU1JTk9cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSW4gbXkgcm9sZSBhcyBhIFRlYW0gTGVhZCBhbmQgZGV2ZWxvcGVyLCBJIHdvcmtlZCB3aXRoIGEgdGVhbSB0byBjcmVhdGUgYW5kIGxhdW5jaCBhIHJlc3BvbnNpdmUgZm91ci1wYWdlIGhvdGVsIGNvbXBsZXggd2Vic2l0ZS5cIixcbiAgICB0YWdzOiBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIlBhcmNlbFwiXSxcbiAgICBpbWFnZVVybDogbWltaW5vLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9ib2ItdWEuZ2l0aHViLmlvL2RyZWFtX3RlYW0vXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJXZWIgU3R1ZGlvXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkluIG15IHJvbGUgYXMgYSBUZWFtIExlYWQgYW5kIGRldmVsb3BlciwgSSB3b3JrZWQgd2l0aCBhIHRlYW0gdG8gY3JlYXRlIGFuZCBsYXVuY2ggYSByZXNwb25zaXZlIGZvdXItcGFnZSBob3RlbCBjb21wbGV4IHdlYnNpdGUuXCIsXG4gICAgdGFnczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJQYXJjZWxcIl0sXG4gICAgaW1hZ2VVcmw6IHdlYnN0dWRpbyxcbiAgICBsaW5rOiBcImh0dHBzOi8vYm9iLXVhLmdpdGh1Yi5pby9nb2l0LW1hcmt1cC1ody0wNy9cIixcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBza2lsbHNEYXRhID0gW1xuICBcIkhUTUxcIixcbiBcdFwiQ1NTXCIsXG4gIFwiSmF2YVNjcmlwdFwiLFxuICBcIlR5cGVTY3JpcHRcIixcbiBcdFwiUmVhY3QuanNcIixcbiBcdFwiTmV4dFwiLFxuIFx0XCJOb2RlXCIsXG4gXHRcIlRhaWx3aW5kIENTU1wiLFxuIFx0XCJSZWR1eFwiLFxuIFx0XCJFeHByZXNzXCIsXG4gXHRcIk1vbmdvREJcIixcbiBcdFwiTW9uZ29vc2VcIixcblxuXSBhcyBjb25zdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNnV29ya0FsdCIsIkZhUmVhY3QiLCJMdUdyYWR1YXRpb25DYXAiLCJwb3dlcnB1bHNlIiwiY2luZW1hbmlhIiwibWltaW5vIiwiY2FyaHViIiwicHJvbXB0b3BpYSIsIndlYnN0dWRpbyIsImxpbmtzIiwibmFtZSIsImhhc2giLCJleHBlcmllbmNlc0RhdGEiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImRhdGUiLCJwcm9qZWN0c0RhdGEiLCJ0YWdzIiwiaW1hZ2VVcmwiLCJsaW5rIiwic2tpbGxzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});