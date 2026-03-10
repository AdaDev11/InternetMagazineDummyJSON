"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var material_1 = require("@mui/material");
var ProductCard_1 = require("./ProductCard");
function ProductList(_a) {
    var products = _a.products, _b = _a.qty, qty = _b === void 0 ? 1 : _b;
    return (React.createElement(material_1.Grid, { container: true, spacing: 4, sx: {
            mt: 2,
            mx: "auto",
            width: "100%",
            maxWidth: "1200px",
            px: { xs: 1, sm: 2, md: 3 }
        } }, products === null || products === void 0 ? void 0 : products.map(function (product) { return (React.createElement(material_1.Grid, { item: true, xs: 6, sm: 3, key: product.id },
        React.createElement(link_1["default"], { href: "/product/" + product.id, style: { textDecoration: "none" } },
            React.createElement(ProductCard_1["default"], { product: product, qty: qty })),
        React.createElement(material_1.Typography, null, "."))); })));
}
exports["default"] = ProductList;
