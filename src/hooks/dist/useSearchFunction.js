"use strict";
exports.__esModule = true;
exports.useSearchFunction = void 0;
var Search_1 = require("./../services/Search");
var react_query_1 = require("@tanstack/react-query");
function useSearchFunction(searchValue) {
    return react_query_1.useQuery({
        queryKey: ["searchProducts", searchValue],
        queryFn: function () { return Search_1.searchFunction(searchValue); },
        enabled: !!searchValue
    });
}
exports.useSearchFunction = useSearchFunction;
