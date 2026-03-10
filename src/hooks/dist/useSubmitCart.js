"use client";
"use strict";
exports.__esModule = true;
exports.useSubmitCart = void 0;
var react_query_1 = require("@tanstack/react-query");
var api_1 = require("@/lib/api");
function useSubmitCart() {
    return react_query_1.useMutation({
        mutationFn: api_1.submitCart
    });
}
exports.useSubmitCart = useSubmitCart;
