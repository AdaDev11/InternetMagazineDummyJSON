"use client";
"use strict";
exports.__esModule = true;
exports.useAuthStore = void 0;
var zustand_1 = require("zustand");
exports.useAuthStore = zustand_1.create(function (set) { return ({
    accessToken: null,
    refreshToken: null,
    user: null,
    setTokens: function (accessToken, refreshToken) {
        return set({ accessToken: accessToken, refreshToken: refreshToken });
    },
    setUser: function (user) { return set({ user: user }); },
    clearAuth: function () { return set({ accessToken: null, refreshToken: null, user: null }); }
}); });
