"use strict";
exports.__esModule = true;
exports.useAuthStore = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
exports.useAuthStore = zustand_1.create()(middleware_1.persist(function (set) { return ({
    token: null,
    userId: null,
    login: function (token, userId) {
        set({ token: token, userId: userId });
    },
    logout: function () {
        set({ token: null, userId: null });
    }
}); }, {
    name: "auth-storage"
}));
