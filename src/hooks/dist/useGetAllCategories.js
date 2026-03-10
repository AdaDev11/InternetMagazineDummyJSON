"use client";
"use strict";
exports.__esModule = true;
exports.useProductAllCategories = void 0;
var GetAllCategories_1 = require("./../services/GetAllCategories");
var react_query_1 = require("@tanstack/react-query");
function useProductAllCategories() {
    return react_query_1.useQuery({
        queryKey: ["productAllCategories"],
        queryFn: GetAllCategories_1.getProductAllCategories
    });
}
exports.useProductAllCategories = useProductAllCategories;
