"use client";
"use strict";
exports.__esModule = true;
exports.useProductFeaturedProducts = void 0;
var react_query_1 = require("@tanstack/react-query");
var GetFeaturedProducts_1 = require("./../services/GetFeaturedProducts");
function useProductFeaturedProducts() {
    return react_query_1.useQuery({
        queryKey: ["featuredProducts"],
        queryFn: GetFeaturedProducts_1.getFeaturedProducts
    });
}
exports.useProductFeaturedProducts = useProductFeaturedProducts;
