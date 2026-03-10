"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useCartStore = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
exports.useCartStore = zustand_1.create(middleware_1.persist(function (set) { return ({
    items: [],
    addToCart: function (product) {
        return set(function (state) {
            var exist = state.items.find(function (i) { return i.id === product.id; });
            if (exist) {
                return {
                    items: state.items.map(function (i) {
                        return i.id === product.id
                            ? __assign(__assign({}, i), { qty: i.qty + product.qty }) : i;
                    })
                };
            }
            return {
                items: __spreadArrays(state.items, [__assign(__assign({}, product), { qty: 1 })])
            };
        });
    },
    updateQuantity: function (id, type) {
        return set(function (state) { return ({
            items: state.items.map(function (item) {
                if (item.id !== id)
                    return item;
                if (type === "inc")
                    return __assign(__assign({}, item), { qty: item.qty + 1 });
                if (type === "dec" && item.qty > 1)
                    return __assign(__assign({}, item), { qty: item.qty - 1 });
                return item;
            })
        }); });
    },
    removeItem: function (id) {
        return set(function (state) { return ({
            items: state.items.filter(function (i) { return i.id !== id; })
        }); });
    }
}); }));
