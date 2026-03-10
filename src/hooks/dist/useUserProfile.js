"use client";
"use strict";
exports.__esModule = true;
exports.useUserProfile = void 0;
var react_query_1 = require("@tanstack/react-query");
var api_1 = require("@/lib/api");
function useUserProfile() {
    var token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    return react_query_1.useQuery({
        queryKey: ["me"],
        queryFn: function () { return api_1.getProfile(token); },
        enabled: !!token
    });
}
exports.useUserProfile = useUserProfile;
