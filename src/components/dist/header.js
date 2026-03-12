"use client";
"use strict";
exports.__esModule = true;
var React = require("react");
var link_1 = require("next/link");
var material_1 = require("@mui/material");
var Menu_1 = require("@mui/icons-material/Menu");
var Search_1 = require("@mui/icons-material/Search");
var PersonOutlined_1 = require("@mui/icons-material/PersonOutlined");
var Storefront_1 = require("@mui/icons-material/Storefront");
var LocalGroceryStoreOutlined_1 = require("@mui/icons-material/LocalGroceryStoreOutlined");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var ModalCard_1 = require("../components/ModalCard");
var useCartStore_1 = require("../hooks/useCartStore");
var useAuthStore_1 = require("../hooks/useAuthStore");
function Header(_a) {
    var searchValue = _a.searchValue, setSearchValue = _a.setSearchValue;
    var router = navigation_1.useRouter();
    var items = useCartStore_1.useCartStore(function (s) { return s.items; });
    var updateQuantity = useCartStore_1.useCartStore(function (s) { return s.updateQuantity; });
    var removeItem = useCartStore_1.useCartStore(function (s) { return s.removeItem; });
    var handleSearchSubmit = function (e) {
        e.preventDefault();
        if (searchValue.trim()) {
            router.push("/products?search=" + encodeURIComponent(searchValue));
        }
    };
    var token = useAuthStore_1.useAuthStore(function (s) { return s.token; });
    var handelProfileClick = function () {
        if (token) {
            router.push("/profile");
        }
        else {
            router.push("/login");
        }
    };
    var navigation = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Categories", href: "/categories" },
    ];
    var _b = React.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleOpen = function (e) {
        setAnchorEl(e.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
    return (React.createElement(material_1.AppBar, { position: "static", sx: {
            backgroundColor: "white",
            color: "black",
            width: "100%"
        } },
        React.createElement(material_1.Toolbar, { sx: { justifyContent: "space-between" } },
            React.createElement(material_1.Box, { sx: { display: "flex", alignItems: "center", gap: 1 } },
                React.createElement(material_1.IconButton, { sx: {
                        color: "#ffff",
                        background: "black"
                    } },
                    React.createElement(Storefront_1["default"], null)),
                React.createElement(material_1.Box, { component: link_1["default"], href: "/", sx: {
                        fontWeight: "bold",
                        fontSize: "1.8rem",
                        textDecoration: "none",
                        color: "black",
                        display: { xs: "none", sm: "flex" }
                    } }, "E-Store")),
            React.createElement(material_1.Box, { sx: {
                    display: { xs: "none", md: "flex" },
                    gap: 3
                } }, navigation.map(function (page) { return (React.createElement(link_1["default"], { key: page.name, className: "link_header_desk", href: page.href, style: {
                    textDecoration: "none",
                    color: "#595858f6"
                } }, page.name)); })),
            React.createElement(material_1.Box, { sx: {
                    display: "flex",
                    justifyContent: "space-btween",
                    alignItems: "center",
                    gap: 2
                } },
                React.createElement("form", { onSubmit: handleSearchSubmit },
                    React.createElement(material_1.Box, { sx: {
                            display: { xs: "none", sm: "flex" },
                            alignItems: "center",
                            border: "1px solid #cccc",
                            borderRadius: "20px",
                            px: 1
                        } },
                        React.createElement(Search_1["default"], { sx: { fontSize: "20px", color: "#595858f6" } }),
                        React.createElement(material_1.InputBase, { placeholder: "Search products...", sx: {
                                ml: 1,
                                fontSize: "0.9rem"
                            }, value: searchValue, onChange: function (e) { return setSearchValue(e.target.value); } }))),
                React.createElement(material_1.IconButton, { type: "button", onClick: handelProfileClick },
                    React.createElement(PersonOutlined_1["default"], null)),
                React.createElement(material_1.IconButton, { onClick: function () { return setOpen(true); } },
                    React.createElement(LocalGroceryStoreOutlined_1["default"], null)),
                React.createElement(ModalCard_1["default"], { open: open, onClose: function () { return setOpen(false); }, cart: items, updateQty: updateQuantity, removeItem: removeItem }),
                React.createElement(material_1.Box, { sx: {
                        display: {
                            xs: "flex",
                            md: "none",
                            "& .MuiPaper-root": {
                                background: "white",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                borderRadius: "12px"
                            }
                        }
                    } },
                    React.createElement(material_1.IconButton, { onClick: handleOpen, sx: { color: "#595858f6" } },
                        React.createElement(Menu_1["default"], null)),
                    React.createElement(material_1.Menu, { id: "menu-appbar", anchorEl: anchorEl, anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        }, keepMounted: true, transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        }, open: Boolean(anchorEl), onClose: handleClose, sx: {
                            display: { xs: "block", md: "none" },
                            background: "#ffff"
                        } }, navigation.map(function (page) { return (React.createElement(material_1.MenuItem, { key: page.name, onClick: handleClose, sx: {
                            fontSize: "1rem",
                            fontWeight: "500",
                            "& a": {
                                textDecoration: "none",
                                color: "black",
                                width: "100%",
                                display: "block"
                            },
                            "& hover": {
                                backgroundColor: "#f5f5f5"
                            }
                        } },
                        React.createElement(link_1["default"], { href: page.href }, page.name))); })))))));
}
exports["default"] = Header;
