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
var ArrowRightAlt_1 = require("@mui/icons-material/ArrowRightAlt");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Button_1 = require("@mui/material/Button");
var styles_1 = require("@mui/material/styles");
var ProductCard_1 = require("./products/components/ProductCard");
var useGetNewArrivalProducts_1 = require("../hooks/useGetNewArrivalProducts");
var Paper_1 = require("@mui/material/Paper");
var DemoPaper = styles_1.styled(Paper_1["default"])(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ width: 400, height: 300, padding: theme.spacing(2) }, theme.typography.body2), { textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }));
});
function NewArrivals() {
    // const { data, isLoading, error } = useProductNewArrivalProducts();
    var _a = useGetNewArrivalProducts_1.useProductNewArrivalProducts(), products = _a.data, isLoading = _a.isLoading, error = _a.error;
    if (error)
        return React.createElement("p", null, "Error loading products");
    // agar API { products: [] } qaytarsa
    // const products = data ?? [];
    return (React.createElement(Box_1["default"], { sx: {
            width: "100%",
            minHeight: "400px",
            background: "#fff",
            mt: "2%"
        } },
        React.createElement(Box_1["default"], { sx: {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                pt: "1%",
                p: "1%"
            } },
            React.createElement(Box_1["default"], null,
                React.createElement(Typography_1["default"], { sx: {
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "black"
                    } }, "New Arrivals"),
                React.createElement(Typography_1["default"], { sx: {
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#ccc"
                    } }, "Latest products added to our collection")),
            React.createElement(Box_1["default"], { sx: { margin: "2%" } },
                React.createElement(Button_1["default"], { sx: {
                        color: "black",
                        fontSize: "14px",
                        borderRadius: "8px",
                        border: "0.2px solid #ccc"
                    }, endIcon: React.createElement(ArrowRightAlt_1["default"], null) }, "View All"))),
        React.createElement(Box_1["default"], null,
            React.createElement(Grid_1["default"], { container: true, spacing: 4, sx: { p: "2%" } }, isLoading ? (React.createElement(Box_1["default"], { sx: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                } },
                React.createElement(DemoPaper, { elevation: 3 }, "Loading..."))) : (products === null || products === void 0 ? void 0 : products.map(function (product) { return (React.createElement(Grid_1["default"], { key: product.id, size: { xs: 12, sm: 6, md: 4, lg: 3 } },
                React.createElement(ProductCard_1["default"], { product: product }))); }))))));
}
exports["default"] = NewArrivals;
