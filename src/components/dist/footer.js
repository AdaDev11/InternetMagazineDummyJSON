"use strict";
exports.__esModule = true;
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Divider_1 = require("@mui/material/Divider");
var react_1 = require("react");
var Facebook_1 = require("@mui/icons-material/Facebook");
var Twitter_1 = require("@mui/icons-material/Twitter");
var Instagram_1 = require("@mui/icons-material/Instagram");
var Email_1 = require("@mui/icons-material/Email");
var LocalPhone_1 = require("@mui/icons-material/LocalPhone");
var LocationOn_1 = require("@mui/icons-material/LocationOn");
function Footer() {
    return (react_1["default"].createElement(Box_1["default"], { sx: {
            mt: "2%",
            color: "#333c",
            width: "100%"
        } },
        react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 7.8, sx: { mb: 4, p: "2%" } },
            react_1["default"].createElement(Grid_1["default"], { size: { xs: 12, sm: 6, md: 3 }, sx: { maxWidth: "340px" } },
                react_1["default"].createElement(Box_1["default"], { sx: { display: "flex", alignItems: "center", gap: 2 } },
                    react_1["default"].createElement(Box_1["default"], { sx: {
                            background: "black",
                            width: "30px",
                            height: "30px",
                            borderRadius: "10px",
                            color: "#ffff",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            fontWeight: "bold"
                        } }, "ES"),
                    react_1["default"].createElement(Typography_1["default"], { sx: {
                            width: "70%",
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "18px"
                        } }, "E-Store")),
                react_1["default"].createElement(Typography_1["default"], { variant: "body2", color: "text.secondary", sx: { mt: 2.4, mb: 2, width: "90%", fontSize: "14px" } }, "Your one-stop destination for quality products at great prices. Discover amazing deals and shop with confidence."),
                react_1["default"].createElement(Box_1["default"], { sx: {
                        display: "flex",
                        gap: 2,
                        mt: 2
                    } },
                    react_1["default"].createElement(Facebook_1["default"], null),
                    react_1["default"].createElement(Twitter_1["default"], null),
                    react_1["default"].createElement(Instagram_1["default"], null))),
            react_1["default"].createElement(Grid_1["default"], { size: { xs: 12, sm: 6, md: 3 }, sx: { minWidth: "300px" } },
                react_1["default"].createElement(Typography_1["default"], { sx: {
                        fontWeight: "bold",
                        mb: 2,
                        color: "black",
                        fontSize: "16px"
                    } }, "Quick Links"),
                react_1["default"].createElement(Typography_1["default"], null, "Home"),
                react_1["default"].createElement(Typography_1["default"], null, "Product"),
                react_1["default"].createElement(Typography_1["default"], null, "Cart"),
                react_1["default"].createElement(Typography_1["default"], null, "Profile")),
            react_1["default"].createElement(Grid_1["default"], { size: { xs: 12, sm: 6, md: 3 }, sx: { minWidth: "300px" } },
                react_1["default"].createElement(Typography_1["default"], { sx: {
                        fontWeight: "bold",
                        mb: 2,
                        color: "black",
                        fontSize: "16px"
                    } }, "Customer Service"),
                react_1["default"].createElement(Typography_1["default"], null, "Help Center"),
                react_1["default"].createElement(Typography_1["default"], null, "Shipping Info"),
                react_1["default"].createElement(Typography_1["default"], null, "Returns"),
                react_1["default"].createElement(Typography_1["default"], null, "Size Guide")),
            react_1["default"].createElement(Grid_1["default"], { size: { xs: 12, sm: 6, md: 3 }, sx: { minWidth: "300px" } },
                react_1["default"].createElement(Typography_1["default"], { sx: {
                        fontWeight: "bold",
                        mb: 2,
                        color: "black",
                        fontSize: "16px"
                    } }, "Contact Us"),
                react_1["default"].createElement(Box_1["default"], { sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                    } },
                    react_1["default"].createElement(Email_1["default"], { fontSize: "small" }),
                    " support@e-store.com"),
                react_1["default"].createElement(Box_1["default"], { sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1
                    } },
                    react_1["default"].createElement(LocalPhone_1["default"], { fontSize: "small" }),
                    " +1 (555) 123-4567"),
                react_1["default"].createElement(Box_1["default"], { sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1
                    } },
                    react_1["default"].createElement(LocationOn_1["default"], { fontSize: "small" }),
                    " 123 Commerce St, City"))),
        react_1["default"].createElement(Divider_1["default"], { sx: { my: 2 } }),
        react_1["default"].createElement(Box_1["default"], { sx: {
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
                mb: 4,
                p: "1%"
            } },
            react_1["default"].createElement(Typography_1["default"], { sx: {
                    fontSize: "12px"
                } }, "\u00A9 2025 E-Store. All rights reserved."),
            react_1["default"].createElement(Box_1["default"], { sx: { display: "flex", gap: 2 } },
                react_1["default"].createElement(Typography_1["default"], { component: "a", sx: {
                        fontSize: "12px"
                    } }, "Privacy Policy"),
                react_1["default"].createElement(Typography_1["default"], { component: "a", sx: {
                        fontSize: "12px"
                    } }, "Terms of Service"),
                react_1["default"].createElement(Typography_1["default"], { component: "a", sx: {
                        fontSize: "12px"
                    } }, "Cookie Policy")))));
}
exports["default"] = Footer;
