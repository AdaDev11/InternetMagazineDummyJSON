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
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Button_1 = require("@mui/material/Button");
var Grid_1 = require("@mui/material/Grid");
var react_1 = require("react");
var useGetFeaturedProducts_1 = require("../hooks/useGetFeaturedProducts");
var ArrowRightAlt_1 = require("@mui/icons-material/ArrowRightAlt");
var Paper_1 = require("@mui/material/Paper");
var styles_1 = require("@mui/material/styles");
var link_1 = require("next/link");
var ProductCard_1 = require("./products/components/ProductCard");
var DemoPaper = styles_1.styled(Paper_1["default"])(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ width: 400, height: 300, padding: theme.spacing(2) }, theme.typography.body2), { textAlign: "center", alignItems: "center" }));
});
function FeaturedProducts() {
    var _a = useGetFeaturedProducts_1.useProductFeaturedProducts(), data = _a.data, isLoading = _a.isLoading, error = _a.error;
    if (isLoading)
        return react_1["default"].createElement("p", null, "Loading...");
    if (error)
        return react_1["default"].createElement("p", null,
            "Error: ", "$error");
    return (react_1["default"].createElement(Box_1["default"], { sx: {
            width: "100%",
            minHeight: "400px",
            background: "#ffff",
            mt: "2%"
        } },
        react_1["default"].createElement(Box_1["default"], { sx: {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                p: "1%"
            } },
            react_1["default"].createElement(Box_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { sx: { fontSize: "28px", fontWeight: "bold" } }, "Featured Products"),
                react_1["default"].createElement(Typography_1["default"], { sx: {
                        color: "#cccc",
                        fontSize: "20px",
                        fontWeight: "bold"
                    } }, "Handpicked products just for you")),
            react_1["default"].createElement(Box_1["default"], { sx: { margin: "2%" } },
                react_1["default"].createElement(Button_1["default"], { sx: {
                        color: "black",
                        border: "0.2px solid #cccc",
                        borderRadius: "8px",
                        boxShadow: "1px 1px 1px #cccc"
                    }, endIcon: react_1["default"].createElement(ArrowRightAlt_1["default"], null) }, "View All"))),
        react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 4, sx: { p: "2%" } }, data && data.length > 0 ? (data.map(function (product) { return (react_1["default"].createElement(Grid_1["default"], { size: { xs: 12, sm: 6, md: 4, lg: 3 }, key: product.id },
            react_1["default"].createElement(link_1["default"], { href: "/product/" + product.id, style: { textDecoration: "none" } },
                react_1["default"].createElement(ProductCard_1["default"], { product: product })))); })) : (react_1["default"].createElement(Box_1["default"], { sx: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%"
            } },
            react_1["default"].createElement(DemoPaper, { variant: "elevation" }, "Loading"))))));
}
exports["default"] = FeaturedProducts;
