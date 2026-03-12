"use client";
"use strict";
exports.__esModule = true;
var header_1 = require("../components/header");
require("../style/style.css");
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
var hero_1 = require("../components/hero");
var footer_1 = require("../components/footer");
var featuredProducts_1 = require("../components/featuredProducts");
var newArrivals_1 = require("../components/newArrivals");
var byCategory_1 = require("../components/byCategory");
var ModalCard_1 = require("../components/ModalCard");
var react_1 = require("react");
function Home() {
    var _a = react_1.useState(""), searchValue = _a[0], setSearchValue = _a[1];
    return (React.createElement("div", null,
        React.createElement(header_1["default"], { searchValue: searchValue, setSearchValue: setSearchValue }),
        React.createElement(ModalCard_1["default"], { open: false, onClose: function () { }, cart: [], updateQty: function () { }, removeItem: function () { } }),
        React.createElement(hero_1["default"], null),
        React.createElement(byCategory_1["default"], null),
        React.createElement(featuredProducts_1["default"], null),
        React.createElement(newArrivals_1["default"], null),
        React.createElement(footer_1["default"], null)));
}
exports["default"] = Home;
