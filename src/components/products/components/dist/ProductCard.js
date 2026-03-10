"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var useAddProduct_1 = require("@/hooks/useAddProduct");
var usePopoverMessage_1 = require("@/hooks/usePopoverMessage");
var AddToCartButton_1 = require("./AddToCartButton");
function ProductCard(_a) {
    var _b, _c;
    var product = _a.product, _d = _a.qty, qty = _d === void 0 ? 1 : _d;
    var mutate = useAddProduct_1.useAddProduct().mutate;
    var _e = usePopoverMessage_1.usePopoverMessage(), anchorEl = _e.anchorEl, message = _e.message, color = _e.color, showPopover = _e.showPopover;
    var handleAdd = function (e) {
        mutate({
            title: product.title,
            price: product.price,
            category: product.category
        }, {
            onSuccess: function () {
                showPopover(e.currentTarget, "Product added!", "success");
            },
            onError: function () {
                showPopover(e.currentTarget, "Error occurred!", "error");
            }
        });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Card, { sx: {
                weight: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "1px",
                borderRadius: "10px"
            }, key: product.id },
            react_1["default"].createElement(material_1.CardMedia, { component: "img", image: (_c = (_b = product.images) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : "https://via.placeholder.com/300x200?text=No+image", alt: product.title, sx: {
                    height: 340,
                    width: "100%",
                    objectFit: "cover"
                } }),
            react_1["default"].createElement(material_1.CardContent, { sx: { flexGrow: 1 } },
                react_1["default"].createElement(material_1.Typography, { gutterBottom: true, variant: "subtitle1", noWrap: true }, product.title),
                react_1["default"].createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1
                    } },
                    react_1["default"].createElement(material_1.Rating, { value: Number(product.rating) || 0, precision: 0.5, readOnly: true, size: "small" }),
                    react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, product.rating)),
                react_1["default"].createElement(material_1.Typography, { sx: { fontWeight: "bold" } },
                    "$",
                    product.price),
                react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary", noWrap: true }, product.category)),
            react_1["default"].createElement(material_1.CardActions, { sx: { margin: "4px", marginBottom: "9%" } },
                react_1["default"].createElement(AddToCartButton_1["default"], { product: product, qty: qty }))),
        react_1["default"].createElement(material_1.Popover, { open: Boolean(anchorEl), anchorEl: anchorEl, anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            }, transformOrigin: {
                vertical: "top",
                horizontal: "left"
            } },
            react_1["default"].createElement(material_1.Box, { sx: {
                    p: 1.2,
                    px: 2,
                    color: color === "success" ? "green" : "red",
                    fontWeight: "bold"
                } }, message))));
}
exports["default"] = ProductCard;
