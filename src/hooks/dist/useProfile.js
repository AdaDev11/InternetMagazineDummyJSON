"use strict";
exports.__esModule = true;
exports.useProfile = void 0;
var react_query_1 = require("@tanstack/react-query");
var api_1 = require("@/lib/api");
var useAuthStore_1 = require("@/stores/useAuthStore");
function useProfile() {
    var token = useAuthStore_1.useAuthStore(function (s) { return s.token; });
    return react_query_1.useQuery({
        queryKey: ["profile", token],
        queryFn: function () {
            if (!token)
                throw new Error("No token");
            return api_1.getProfile(token);
        },
        enabled: !!token
    });
}
exports.useProfile = useProfile;
