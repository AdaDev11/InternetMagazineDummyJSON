"use client";
"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var ModeOutlined_1 = require("@mui/icons-material/ModeOutlined");
var LocationOnOutlined_1 = require("@mui/icons-material/LocationOnOutlined");
var useUserProfile_1 = require("@/hooks/useUserProfile");
var PersonOutlineOutlined_1 = require("@mui/icons-material/PersonOutlineOutlined");
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
var useUserOrders_1 = require("@/hooks/useUserOrders");
var SettingsOutlined_1 = require("@mui/icons-material/SettingsOutlined");
function MainPage() {
    var _a;
    var _b = react_1.useState(0), value = _b[0], setValue = _b[1];
    var _c = useUserProfile_1.useUserProfile(), user = _c.data, isLoading = _c.isLoading, error = _c.error;
    var _d = react_1.useState(false), mounted = _d[0], setMounted = _d[1];
    var orders = useUserOrders_1.useUserOrders(user === null || user === void 0 ? void 0 : user.id).data;
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted)
        return null;
    if (isLoading)
        return React.createElement(material_1.Typography, null, "Loading...");
    if (error)
        return React.createElement(material_1.Typography, { color: "error" }, "Error loading profile");
    if (!user)
        return null;
    return (React.createElement(material_1.Box, { sx: { width: "90%", mx: "auto", mt: 4 } },
        React.createElement(material_1.Box, { display: "flex", justifyContent: "space-between" },
            React.createElement(material_1.Typography, { fontSize: 28, fontWeight: "bold", sx: { fontFamily: "Roboto" } }, "My Profile"),
            React.createElement(material_1.Button, { startIcon: React.createElement(ModeOutlined_1["default"], null), sx: {
                    background: "black",
                    color: "white",
                    borderRadius: "8px",
                    textTransform: "none"
                } }, "Edit Profile")),
        React.createElement(material_1.Tabs, { value: value, onChange: function (_, v) { return setValue(v); }, centered: true },
            React.createElement(material_1.Tab, { label: "Profile" }),
            React.createElement(material_1.Tab, { label: "Orders" }),
            React.createElement(material_1.Tab, { label: "Settings" })),
        value === 0 && (React.createElement(React.Fragment, null,
            React.createElement(material_1.Box, { mt: 8, p: 2, sx: { borderRadius: "4px", border: "1px solid #cccc" }, mt: 4, display: "flex", gap: 2, alignItems: "center" },
                React.createElement("img", { src: user.image, alt: user.username, width: 100, height: 100, style: { borderRadius: "50%" } }),
                React.createElement(material_1.Stack, null,
                    React.createElement(material_1.Typography, null,
                        user.firstName,
                        " ",
                        user.lastName),
                    React.createElement(material_1.Typography, null, user.email),
                    React.createElement(material_1.Typography, null, user.phone))),
            React.createElement(material_1.Box, { mt: 8, p: 2, sx: { borderRadius: "4px", border: "1px solid #cccc" } },
                React.createElement(material_1.Typography, { fontWeight: "bold", mb: 2 },
                    React.createElement("span", null,
                        React.createElement(PersonOutlineOutlined_1["default"], null)),
                    "Personal Information"),
                React.createElement(material_1.Grid, { container: true, spacing: 2, mt: 1 },
                    React.createElement(material_1.Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(material_1.Typography, null, "First name"),
                        React.createElement(material_1.TextField, { fullWidth: true, size: "small", value: user.firstName })),
                    React.createElement(material_1.Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(material_1.Typography, null, "Last name"),
                        React.createElement(material_1.TextField, { fullWidth: true, size: "small", value: user.lastName })),
                    React.createElement(material_1.Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(material_1.Typography, null, "Email"),
                        React.createElement(material_1.TextField, { fullWidth: true, size: "small", value: user.email })),
                    React.createElement(material_1.Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(material_1.Typography, null, "Phone"),
                        React.createElement(material_1.TextField, { fullWidth: true, size: "small", value: user.phone })),
                    React.createElement(material_1.Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(material_1.Typography, null, "Age"),
                        React.createElement(material_1.TextField, { fullWidth: true, size: "small", value: user.age })),
                    React.createElement(material_1.Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(material_1.Typography, null, "Gender"),
                        React.createElement(material_1.TextField, { fullWidth: true, size: "small", value: user.gender })))),
            React.createElement(material_1.Box, { mt: 8, p: 2, sx: { borderRadius: "4px", border: "1px solid #cccc" } },
                React.createElement(material_1.Typography, { mt: 2, fontWeight: "bold", display: "flex", gap: 1 },
                    React.createElement(LocationOnOutlined_1["default"], null),
                    " Address"),
                React.createElement(material_1.Typography, { mt: 1 }, user.address.address),
                React.createElement(material_1.Typography, { mt: 1 },
                    user.address.city,
                    ", ",
                    user.address.state)),
            React.createElement(material_1.Box, { mt: 8, p: 2, sx: { borderRadius: "4px", border: "1px solid #cccc" } },
                React.createElement(material_1.Typography, { fontWeight: "bold" }, "Company Information"),
                React.createElement(material_1.Typography, null, user.company.name),
                React.createElement(material_1.Typography, null, user.company.title),
                React.createElement(material_1.Typography, null, user.company.department)))),
        value === 1 && (React.createElement(material_1.Box, { mt: 4 },
            React.createElement(material_1.Typography, null, "Orders"), (_a = orders === null || orders === void 0 ? void 0 : orders.carts) === null || _a === void 0 ? void 0 :
            _a.map(function (cart) { return (React.createElement(material_1.Box, { key: cart.id, sx: {
                    border: "1px solid #ddd",
                    p: 2,
                    mb: 2,
                    borderRadius: "6px"
                } },
                React.createElement(material_1.Typography, { fontWeight: "bold" },
                    "Order #",
                    cart.id),
                cart.products.map(function (product) { return (React.createElement(material_1.Box, { key: product.id, display: "flex", justifyContent: "space-between", mt: 1 },
                    React.createElement(material_1.Typography, null, product.title),
                    React.createElement(material_1.Typography, null,
                        product.quantity,
                        " \u00D7 $",
                        product.price))); }),
                React.createElement(material_1.Typography, { mt: 2, fontWeight: "bold" },
                    "Total: $",
                    cart.total))); }))),
        value === 2 && (React.createElement(material_1.Box, { mt: 4 },
            React.createElement(material_1.Box, { sx: {
                    border: "1px solid #ddd",
                    p: 2,
                    mb: 2,
                    borderRadius: "6px"
                } },
                React.createElement(material_1.Typography, { fontWeight: "bold", mb: 2 },
                    React.createElement("span", null,
                        React.createElement(SettingsOutlined_1["default"], null)),
                    "Account Settings"),
                React.createElement(material_1.Typography, null, "Notifications"),
                React.createElement(material_1.Grid, null,
                    React.createElement(material_1.Box, { display: "flex", mt: 2, sx: { alignItems: "center" } },
                        React.createElement(material_1.Checkbox, null),
                        React.createElement(material_1.Typography, null, "Email notifications for orders")),
                    React.createElement(material_1.Box, { display: "flex", sx: { alignItems: "center" } },
                        React.createElement(material_1.Checkbox, null),
                        React.createElement(material_1.Typography, null, "SMS notifications for shipping updates")),
                    React.createElement(material_1.Box, { display: "flex", sx: { alignItems: "center" } },
                        React.createElement(material_1.Checkbox, null),
                        React.createElement(material_1.Typography, null, "Marketing emails"))),
                React.createElement(material_1.Divider, null),
                React.createElement(material_1.Grid, { mt: 2 },
                    React.createElement(material_1.Typography, null, "Privacy"),
                    React.createElement(material_1.Box, { display: "flex", mt: 2, sx: { alignItems: "center" } },
                        React.createElement(material_1.Checkbox, null),
                        React.createElement(material_1.Typography, null, "Make profile public")),
                    React.createElement(material_1.Box, { display: "flex", sx: { alignItems: "center" } },
                        React.createElement(material_1.Checkbox, null),
                        React.createElement(material_1.Typography, null, "Allow data collection for analytics"))),
                React.createElement(material_1.Divider, null),
                React.createElement(material_1.Grid, { mt: 2 },
                    React.createElement(material_1.Typography, null, "Danger Zone"),
                    React.createElement(material_1.Button, { sx: {
                            background: "red",
                            color: "white",
                            marginTop: "1%",
                            textTransform: "none"
                        } }, "Delet Account")))))));
}
exports["default"] = MainPage;
