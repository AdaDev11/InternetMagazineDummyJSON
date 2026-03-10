"use client";
"use strict";
exports.__esModule = true;
exports.useUserOrders = void 0;
var react_query_1 = require("@tanstack/react-query");
var cart_1 = require("@/services/cart");
function useUserOrders(userId) {
    return react_query_1.useQuery({
        queryKey: ["orders", userId],
        queryFn: function () { return cart_1.getUserOrders(userId); },
        enabled: !!userId
    });
}
exports.useUserOrders = useUserOrders;
