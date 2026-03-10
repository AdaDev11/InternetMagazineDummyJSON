"use strict";
exports.__esModule = true;
exports.useGetAllProducts = void 0;
var getAllProduct_1 = require("./../services/getAllProduct");
var react_query_1 = require("@tanstack/react-query");
function useGetAllProducts() {
    return react_query_1.useQuery({
        queryKey: ["product"],
        queryFn: function () { return getAllProduct_1.getAllProducts(); }
    });
}
exports.useGetAllProducts = useGetAllProducts;
