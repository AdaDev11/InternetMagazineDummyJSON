"use client";
"use strict";
exports.__esModule = true;
exports.useLogin = void 0;
var react_query_1 = require("@tanstack/react-query");
var api_1 = require("@/lib/api");
var useAuthStore_1 = require("@/stores/useAuthStore");
function useLogin() {
    var setTokens = useAuthStore_1.useAuthStore(function (s) { return s.setTokens; });
    return react_query_1.useMutation({
        mutationFn: api_1.loginUser,
        onSuccess: function (data) {
            console.log("LOGIN SUCCESS DATA:", data);
            console.log("LOGIN SUCCESS TOKEN:", data.accessToken);
            setTokens(data.accessToken, data.id);
            localStorage.setItem("token", data.accessToken);
        },
        onError: function (err) {
            console.error("LOGIN ERROR:", err);
        }
    });
}
exports.useLogin = useLogin;
