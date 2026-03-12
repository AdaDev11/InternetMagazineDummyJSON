"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_query_1 = require("@tanstack/react-query");
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Grid_1 = require("@mui/material/Grid");
var Card_1 = require("@mui/material/Card");
var Rating_1 = require("@mui/material/Rating");
var Button_1 = require("@mui/material/Button");
var AspectRatio_1 = require("@mui/joy/AspectRatio");
var react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/navigation");
var modules_1 = require("swiper/modules");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var Share_1 = require("@mui/icons-material/Share");
var AddToCartButton_1 = require("./products/components/AddToCartButton");
var react_2 = require("react");
function ProductDetailsClient(_a) {
    var id = _a.id;
    // export default function ProductDetails() {
    var params = navigation_1.useParams();
    var productId = params === null || params === void 0 ? void 0 : params.id;
    var _b = react_2.useState(1), qty = _b[0], setQty = _b[1];
    var _c = react_query_1.useQuery({
        queryKey: ["product", productId],
        queryFn: function () {
            return fetch("https://dummyjson.com/products/" + productId).then(function (res) {
                return res.json();
            });
        },
        enabled: !!productId
    }), data = _c.data, isLoading = _c.isLoading, error = _c.error;
    if (isLoading)
        return React.createElement("p", null, "Loading...");
    if (error)
        return React.createElement("p", null, "Error loading product");
    return (React.createElement(Box_1["default"], { sx: { m: "1%", width: "98%", pt: "4%" } },
        React.createElement(Grid_1["default"], { container: true, spacing: 4 },
            React.createElement(Grid_1["default"], { size: { xs: 12, sm: 6 } },
                React.createElement(react_1.Swiper, { direction: "horizontal", slidesPerView: 1, navigation: true, modules: [modules_1.Navigation], style: { height: "400px", width: "100%" } }, data.images.map(function (imgUrl, index) { return (React.createElement(react_1.SwiperSlide, { key: index },
                    React.createElement(Card_1["default"], { variant: "outlined", sx: { p: 2, textAlign: "center" } },
                        React.createElement(AspectRatio_1["default"], { ratio: 1, sx: {
                                width: "100%",
                                maxWidth: 400,
                                mx: "auto"
                            } },
                            React.createElement("img", { src: imgUrl, alt: "product image " + (index + 1) })),
                        React.createElement(Typography_1["default"], { variant: "body2" },
                            "Image ",
                            index + 1)))); }))),
            React.createElement(Grid_1["default"], { size: { xs: 12, sm: 6 } },
                React.createElement(Typography_1["default"], { sx: {
                        background: "#333",
                        borderRadius: "10px",
                        fontSize: "14px",
                        mb: "4%"
                    } }, data.category),
                React.createElement(Typography_1["default"], { sx: { mt: "2%", fontSize: "30px", fontWeight: "bold" } }, data.title),
                React.createElement(Box_1["default"], { sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1
                    } },
                    React.createElement(Rating_1["default"], { value: Number(data.rating) || 0, precision: 0.5, readOnly: true, size: "small" }),
                    React.createElement(Typography_1["default"], { variant: "body2", color: "text.secondary" }, data.rating)),
                React.createElement(Typography_1["default"], { sx: { mt: "3%", fontSize: "24px", fontWeight: "bold" } },
                    "$",
                    data.price),
                React.createElement(Typography_1["default"], { sx: { mt: "4%", fontSize: "16px", fontWeight: "bold" } }, "Description"),
                React.createElement(Typography_1["default"], { sx: { mt: "1%", color: "#333", fontSize: "14px" } }, data.description),
                React.createElement(Box_1["default"], { sx: {
                        display: "flex",
                        mt: "9%",
                        alignItems: "center",
                        gap: 2
                    } },
                    React.createElement(Typography_1["default"], null, "Quantity"),
                    React.createElement(Box_1["default"], { sx: { display: "flex", gap: 2 } },
                        React.createElement(Button_1["default"], { sx: {
                                border: "1px solid #ccc",
                                fontSize: "14px"
                            }, onClick: function () { return qty > 1 && setQty(qty - 1); } }, "-"),
                        React.createElement(Typography_1["default"], { sx: {
                                fontSize: "14px",
                                display: "flex",
                                justifyContent: "center"
                            } }, qty),
                        React.createElement(Button_1["default"], { sx: {
                                border: "1px solid #ccc",
                                fontSize: "14px"
                            }, onClick: function () { return setQty(qty + 1); } }, "+"))),
                React.createElement(Box_1["default"], { sx: { display: "flex", gap: 2, mt: 2 } },
                    React.createElement(AddToCartButton_1["default"], { product: data, qty: qty }),
                    React.createElement(Button_1["default"], { sx: {
                            border: "1px solid #ccc",
                            borderRadius: "10px"
                        } },
                        React.createElement(FavoriteBorder_1["default"], null)),
                    React.createElement(Button_1["default"], { sx: {
                            border: "1px solid #ccc",
                            borderRadius: "10px"
                        } },
                        React.createElement(Share_1["default"], null)))))));
}
exports["default"] = ProductDetailsClient;
