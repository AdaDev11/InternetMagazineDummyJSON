"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var LocalMallOutlined_1 = require("@mui/icons-material/LocalMallOutlined");
var ArrowRightAlt_1 = require("@mui/icons-material/ArrowRightAlt");
function StartShopping() {
    return (react_1["default"].createElement(material_1.Box, { sx: {
            width: "100%",
            minHeight: "400px",
            background: "black",
            display: "flex",
            justifyContent: "center"
        } },
        react_1["default"].createElement(material_1.Box, { sx: {
                height: "100%",
                alignItems: "center",
                display: "block",
                justifyContent: "space-between",
                color: "#ffff",
                textAlign: "center",
                marginTop: "2%",
                marginBottom: "8%"
            } },
            react_1["default"].createElement(material_1.Box, { sx: {
                    fontSize: "10px",
                    color: "#cccc",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                } },
                react_1["default"].createElement(LocalMallOutlined_1["default"], { sx: { fontSize: "120px", color: "#cccc" } })),
            react_1["default"].createElement(material_1.Box, { sx: {
                    width: "100%",
                    alignItems: "center"
                } },
                react_1["default"].createElement(material_1.Typography, { sx: {
                        fontSize: "40px",
                        fontWeight: "bold",
                        color: "#ffff"
                    } }, "Ready to Start Shopping?"),
                react_1["default"].createElement(material_1.Typography, { sx: {
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#cccc",
                        width: "98%",
                        marginTop: "2%",
                        marginBottom: "4%"
                    } }, "Join thousands of satisfied customers and discover amazing products at unbeatable prices."),
                react_1["default"].createElement(material_1.Box, { sx: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        gap: 4
                    } },
                    react_1["default"].createElement(material_1.Button, { sx: {
                            background: "#cccc",
                            color: "black",
                            borderRadius: "10px"
                        }, endIcon: react_1["default"].createElement(ArrowRightAlt_1["default"], null) }, "Browse Products"),
                    react_1["default"].createElement(material_1.Button, { sx: {
                            background: "#0000",
                            color: "#ffff",
                            borderRadius: "10px",
                            border: "1px solid #ffff"
                        } }, "Create Account"))))));
}
exports["default"] = StartShopping;
