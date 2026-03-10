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
exports.useCartStore = zustand_1.create()(middleware_1.persist(function (set, get) { return ({
    items: [],
    add: function (item) {
        var found = get().items.find(function (i) { return i.id === item.id; });
        if (found) {
            set({
                items: get().items.map(function (i) {
                    return i.id === item.id
                        ? __assign(__assign({}, i), { qty: i.qty + item.qty }) : i;
                })
            });
        }
        else {
            set({ items: __spreadArrays(get().items, [item]) });
        }
    },
    remove: function (id) {
        return set({ items: get().items.filter(function (i) { return i.id !== id; }) });
    },
    updateQty: function (id, qty) {
        return set({
            items: get().items.map(function (i) {
                return i.id === id ? __assign(__assign({}, i), { qty: qty }) : i;
            })
        });
    },
    clear: function () { return set({ items: [] }); },
    total: function () {
        return get().items.reduce(function (s, it) { return s + it.price * it.qty; }, 0);
    }
}); }, { name: "cart-storage" }));
