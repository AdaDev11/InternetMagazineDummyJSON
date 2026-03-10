"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_query_1 = require("@tanstack/react-query");
var material_1 = require("@mui/material");
var AspectRatio_1 = require("@mui/joy/AspectRatio");
var react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/navigation");
var modules_1 = require("swiper/modules");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var Share_1 = require("@mui/icons-material/Share");
var LocalShippingOutlined_1 = require("@mui/icons-material/LocalShippingOutlined");
var AddModeratorOutlined_1 = require("@mui/icons-material/AddModeratorOutlined");
var ReplayOutlined_1 = require("@mui/icons-material/ReplayOutlined");
var AddToCartButton_1 = require("./products/components/AddToCartButton");
var react_2 = require("react");
function ProductDetailsPage() {
    var params = navigation_1.useParams();
    var id = params === null || params === void 0 ? void 0 : params.id;
    var _a = react_2.useState(1), qty = _a[0], setQty = _a[1];
    var _b = react_query_1.useQuery({
        queryKey: ["product", id],
        queryFn: function () {
            return fetch("https://dummyjson.com/products/" + id).then(function (res) {
                return res.json();
            });
        },
        enabled: !!id
    }), data = _b.data, isLoading = _b.isLoading, error = _b.error;
    if (isLoading)
        return React.createElement("p", null, "Loading...");
    if (error)
        return React.createElement("p", null, "Error");
    return (React.createElement(material_1.Box, { sx: {
            m: "1%",
            width: "98%",
            pt: "4%"
        } },
        React.createElement(material_1.Grid, { sx: {
                display: "flex",
                gap: 2
            }, container: true, spacing: 4 },
            React.createElement(material_1.Grid, { size: { xs: 12, sm: 6 } },
                React.createElement(react_1.Swiper, { direction: "horizontal", slidesPerView: 1, navigation: true, modules: [modules_1.Navigation], style: {
                        height: "400px",
                        width: "100%"
                    } }, data.images.map(function (imgUrl, index) { return (React.createElement(react_1.SwiperSlide, { key: index },
                    React.createElement(material_1.Card, { variant: "outlined", sx: { p: 2, textAlign: "center" } },
                        React.createElement(AspectRatio_1["default"], { ratio: "1", sx: {
                                width: "100%",
                                maxWidth: 400,
                                mx: "auto"
                            } },
                            React.createElement("img", { src: imgUrl, alt: "product image " + (index + 1) })),
                        React.createElement(material_1.Typography, { variant: "body2" },
                            "Rasm ",
                            index + 1)))); }))),
            React.createElement(material_1.Grid, { size: { xs: 12, sm: 6 }, sx: {
                    ml: "1%",
                    mt: "1%"
                } },
                React.createElement("span", { sx: {
                        background: "#333",
                        borderRadius: "10px",
                        fontSize: "14px",
                        mb: "4%"
                    } }, data.category),
                React.createElement(material_1.Typography, { sx: {
                        mt: "2%",
                        fontSize: "30px",
                        fontWeight: "bold"
                    } }, data.title),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1
                    } },
                    React.createElement(material_1.Rating, { value: Number(data.rating) || 0, precision: 0.5, readOnly: true, size: "small" }),
                    React.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, data.rating)),
                React.createElement(material_1.Typography, { sx: {
                        mt: "3%",
                        fontSize: "24px",
                        fontWeight: "bold"
                    } },
                    "$",
                    data.price),
                React.createElement(material_1.Typography, { sx: { mt: "4%", fontSize: "16px", fontWeight: "bold" } }, "Description"),
                React.createElement(material_1.Typography, { sx: {
                        mt: "1%",
                        color: "#333",
                        fontSize: "14px"
                    } }, data.description),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        mt: "9%",
                        alignItems: "center",
                        gap: 2
                    } },
                    React.createElement(material_1.Typography, null, "Quantity"),
                    React.createElement(material_1.Box, { sx: { color: "black", display: "flex", gap: 2 } },
                        React.createElement(material_1.Button, { sx: {
                                background: "#e0e0",
                                color: "black",
                                fontSize: "14px",
                                border: "1px solid #cccc"
                            }, onClick: function () { return qty > 1 && setQty(qty - 1); } }, "-"),
                        React.createElement(material_1.Typography, { sx: {
                                fontSize: "14px",
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "center"
                            } }, qty),
                        React.createElement(material_1.Button, { sx: {
                                background: "#e0e0",
                                color: "black",
                                fontSize: "14px",
                                border: "1px solid #cccc"
                            }, onClick: function () { return setQty(qty + 1); } }, "+"))),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                        mt: 2
                    } },
                    React.createElement(AddToCartButton_1["default"], { product: data, qty: qty }),
                    React.createElement(material_1.Button, { sx: {
                            background: "#e0e0",
                            color: "black",
                            border: "1px solid #cccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                            mt: "2%"
                        } },
                        React.createElement(FavoriteBorder_1["default"], null)),
                    React.createElement(material_1.Button, { sx: {
                            background: "#e0e0",
                            color: "black",
                            border: "1px solid #cccc",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                            mt: "2%"
                        } },
                        React.createElement(Share_1["default"], null))),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "90%",
                        alignItems: "center",
                        mt: "4%",
                        ml: "4%",
                        maxHeight: "100px"
                    } },
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            justifyContnet: "center",
                            flexDirection: "column",
                            gap: 1,
                            alignItems: "center",
                            maxHeight: "100px"
                        } },
                        React.createElement(material_1.Box, { sx: {
                                color: "#333c",
                                height: "100%",
                                alignItems: "center",
                                textAlign: "center",
                                fontSize: "28px",
                                width: "100px"
                            } },
                            React.createElement(LocalShippingOutlined_1["default"], { fontSize: "midle" })),
                        React.createElement(material_1.Typography, { sx: {
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "#333c"
                            } }, "Free Shipping")),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            justifyContnet: "center",
                            flexDirection: "column",
                            gap: 1,
                            alignItems: "center",
                            maxHeight: "100px"
                        } },
                        React.createElement(material_1.Box, { sx: {
                                color: "#333c",
                                height: "100%",
                                alignItems: "center",
                                textAlign: "center",
                                fontSize: "28px",
                                width: "100px"
                            } },
                            React.createElement(AddModeratorOutlined_1["default"], { fontSize: "midle" })),
                        React.createElement(material_1.Typography, { sx: {
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "#333c"
                            } }, "Warranty")),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            justifyContnet: "center",
                            flexDirection: "column",
                            gap: 1,
                            alignItems: "center",
                            maxHeight: "100px"
                        } },
                        React.createElement(material_1.Box, { sx: {
                                color: "#333c",
                                height: "100%",
                                alignItems: "center",
                                textAlign: "center",
                                fontSize: "28px",
                                width: "100px"
                            } },
                            React.createElement(ReplayOutlined_1["default"], { fontSize: "medium" })),
                        React.createElement(material_1.Typography, { sx: {
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "#333c"
                            } }, "Easy Returns"))))),
        React.createElement(material_1.Grid, { container: true, spacing: 4, sx: {
                borderRadius: "20px",
                border: "1px solid #ccc",
                boxShadow: "1px 1px 1px #ccc",
                mt: "8%"
            } },
            React.createElement(material_1.Typography, { sx: {
                    fontSize: "16px",
                    fontWeight: "bold",
                    margin: "1%",
                    mt: "1%",
                    ml: "2%",
                    width: "100%"
                } }, "Product Information"),
            React.createElement(material_1.Grid, { item: true, size: { xs: 12, sm: 5.8 }, sx: {
                    ml: "1%",
                    mb: "1%",
                    mt: "-2%"
                } },
                React.createElement(material_1.Box, { sx: {
                        margin: "2%",
                        mt: "1%"
                    } },
                    React.createElement(material_1.Typography, { sx: {
                            width: "100%",
                            fontSize: "14px",
                            fontWeight: "bold"
                        } }, "Specifications"),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            mt: "2%"
                        } },
                        React.createElement(material_1.Typography, { sx: {
                                color: "#333",
                                fontSize: "14px"
                            } }, "Brand:"),
                        React.createElement(material_1.Typography, { fontSize: "14px" }, data.brand)),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            mt: "2%"
                        } },
                        React.createElement(material_1.Typography, { sx: {
                                color: "#333",
                                fontSize: "14px"
                            } }, "SKU:"),
                        React.createElement(material_1.Typography, { fontSize: "14px" }, data.sku)),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            mt: "2%"
                        } },
                        React.createElement(material_1.Typography, { sx: {
                                color: "#333",
                                fontSize: "14px"
                            } }, "Weight:"),
                        React.createElement(material_1.Typography, { fontSize: "14px" }, data.weight)),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            mt: "2%"
                        } },
                        React.createElement(material_1.Typography, { sx: {
                                color: "#333",
                                fontSize: "14px"
                            } }, "Dimensions:"),
                        React.createElement(material_1.Typography, { fontSize: "14px" },
                            data.dimensions.width,
                            " x",
                            " ",
                            data.dimensions.height,
                            " x",
                            " ",
                            data.dimensions.depth,
                            " cm")))),
            React.createElement(material_1.Grid, { item: true, xs: 12, sm: 6, sx: {
                    ml: "1%",
                    mb: "1%",
                    mt: "-2%"
                } },
                React.createElement(material_1.Box, { sx: {
                        margin: "2%",
                        mt: "1%"
                    } },
                    React.createElement(material_1.Typography, { sx: {
                            width: "100%",
                            fontSize: "14px",
                            fontWeight: "bold"
                        } }, "Shipping & Returns"),
                    React.createElement(material_1.Box, { sx: { display: "flex", gap: 1, mt: "2%" } },
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px", color: "#333c" } }, "Shipping:"),
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px" } }, data.shippingInformation)),
                    React.createElement(material_1.Box, { sx: { display: "flex", gap: 1, mt: "2%" } },
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px", color: "#333c" } }, "Return Policy:"),
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px" } }, (data === null || data === void 0 ? void 0 : data.returnPolicy) ? data.returnPolicy
                            : "No return policy")),
                    React.createElement(material_1.Box, { sx: { display: "flex", gap: 1, mt: "2%" } },
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px", color: "#333c" } }, "Warranty:"),
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px" } }, data.warrantyInformation))))),
        React.createElement(material_1.Grid, { sx: {
                borderRadius: "20px",
                border: "1px solid #ccc",
                boxShadow: "1px 1px 1px #ccc",
                mt: "4%"
            } },
            React.createElement(material_1.Typography, { sx: {
                    fontSize: "16px",
                    fontWeight: "bold",
                    margin: "1%",
                    ml: "2%",
                    width: "100%"
                } }, "Customer Reviews"),
            React.createElement(material_1.Box, { sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    m: "2%"
                } },
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Box, { sx: { display: "flex", gap: 2 } },
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px" } }, "Eleanor Collins"),
                        React.createElement(material_1.Rating, { value: 3, precision: 0.5, readOnly: true, size: "small" })),
                    React.createElement(material_1.Typography, { sx: { mt: "1%", color: "#333c", fontSize: "14px" } }, "Would not recommend!")),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { sx: { fontSize: "14px", color: "#333c" } }, "30.04.2025"))),
            React.createElement(material_1.Divider, { sx: { my: 2 } }),
            React.createElement(material_1.Box, { sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    m: "2%"
                } },
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Box, { sx: { display: "flex", gap: 2 } },
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px" } }, "Lucas Gordon"),
                        React.createElement(material_1.Rating, { value: 4, precision: 0.5, readOnly: true, size: "small" })),
                    React.createElement(material_1.Typography, { sx: { mt: "1%", color: "#333c", fontSize: "14px" } }, "Very satisfied!")),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { sx: { fontSize: "14px", color: "#333c" } }, "30.04.2025"))),
            React.createElement(material_1.Divider, { sx: { my: 2 } }),
            React.createElement(material_1.Box, { sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    m: "2%"
                } },
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Box, { sx: { display: "flex", gap: 2 } },
                        React.createElement(material_1.Typography, { sx: { fontSize: "14px" } }, "Eleanor Collins"),
                        React.createElement(material_1.Rating, { value: 5, precision: 0.5, readOnly: true, size: "small" })),
                    React.createElement(material_1.Typography, { sx: { mt: "1%", color: "#333c", fontSize: "14px" } }, "Highly impressed!")),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { sx: { fontSize: "14px", color: "#333c" } }, "30.04.2025"))))));
}
exports["default"] = ProductDetailsPage;
