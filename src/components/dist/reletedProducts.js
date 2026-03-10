"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var useProductForDetails_1 = require("../hooks/useProductForDetails");
var useRelatedProducts_1 = require("../hooks/useRelatedProducts");
var material_1 = require("@mui/material");
var ProductCard_1 = require("./products/components/ProductCard");
function RelatedProducts() {
    var _a;
    var params = navigation_1.useParams();
    var id = params === null || params === void 0 ? void 0 : params.id;
    var _b = useProductForDetails_1.useProduct(id), product = _b.data, isLoading = _b.isLoading, error = _b.error;
    var _c = useRelatedProducts_1.useRelatedProducts(product === null || product === void 0 ? void 0 : product.category), relatedProducts = _c.data, relatedLoading = _c.isLoading;
    if (isLoading)
        return React.createElement("p", null, "Loading product...");
    if (error)
        return React.createElement("p", null, "Error loading product");
    return (React.createElement(material_1.Box, { sx: {
            width: "100%",
            minHeight: "400px",
            background: "#ffff",
            margin: "1%",
            marginTop: "4%",
            marginRight: "1%"
        } },
        React.createElement(material_1.Typography, { sx: { fontSize: "28px", fontWeight: "bold", mb: "1%" } }, "Related Products"),
        React.createElement(material_1.Grid, { container: true, spacing: 4 },
            relatedLoading && React.createElement("p", null, "Loading related..."), (_a = relatedProducts === null || relatedProducts === void 0 ? void 0 : relatedProducts.products) === null || _a === void 0 ? void 0 :
            _a.map(function (product) { return (React.createElement(material_1.Grid, { size: { xs: 12, sm: 6, md: 4, lg: 3 }, key: product.id },
                React.createElement(ProductCard_1["default"], { product: product, qty: 1 }))); }))));
}
exports["default"] = RelatedProducts;
