"use strict";
exports.__esModule = true;
exports.useAuthStore = void 0;
var zustand_1 = require("zustand");
exports.useAuthStore = zustand_1.create(function (set) { return ({
    token: null,
    userId: null,
    login: function (token, userId) {
        localStorage.setItem("token", token);
        set({ token: token, userId: userId });
    },
    logout: function () {
        localStorage.removeItem("token");
        set({ token: null, userId: null });
    }
}); });
