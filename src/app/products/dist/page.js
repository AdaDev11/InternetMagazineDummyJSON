"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var header_1 = require("../../components/header");
var page_1 = require("../../components/products/page");
var footer_1 = require("../../components/footer");
function Page() {
    var _a = react_1.useState(""), searchValue = _a[0], setSearchValue = _a[1];
    var _b = react_1.useState("all"), category = _b[0], setCategory = _b[1];
    var _c = react_1.useState("asc"), sort = _c[0], setSort = _c[1];
    return (react_1["default"].createElement(material_1.Box, { sx: { width: "100%" } },
        react_1["default"].createElement(header_1["default"], { searchValue: searchValue, setSearchValue: setSearchValue }),
        react_1["default"].createElement(page_1["default"], { searchValue: searchValue, category: category, sort: sort }),
        react_1["default"].createElement(footer_1["default"], null)));
}
exports["default"] = Page;
