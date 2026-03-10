// src/app/provider.tsx
"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var react_query_devtools_1 = require("@tanstack/react-query-devtools");
var queryClient = new react_query_1.QueryClient();
function Provider(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_query_1.QueryClientProvider, { client: queryClient },
        children,
        react_1["default"].createElement(react_query_devtools_1.ReactQueryDevtools, { initialIsOpen: false })));
}
exports["default"] = Provider;
