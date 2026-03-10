"use strict";
exports.__esModule = true;
exports.useProducts = void 0;
var getAllProduct_1 = require("./../services/getAllProduct");
var react_query_1 = require("@tanstack/react-query");
function useProducts(_a) {
    var filter = _a.filter;
    return react_query_1.useQuery({
        queryKey: ["products", filter],
        queryFn: function () { return getAllProduct_1.getAllProducts({ category: filter }); },
        keepPreviousData: true
    });
}
exports.useProducts = useProducts;
