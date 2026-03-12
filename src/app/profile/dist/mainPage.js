"use client";
"use strict";
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Button_1 = require("@mui/material/Button");
var Tabs_1 = require("@mui/material/Tabs");
var Tab_1 = require("@mui/material/Tab");
var Divider_1 = require("@mui/material/Divider");
var Grid_1 = require("@mui/material/Grid");
var TextField_1 = require("@mui/material/TextField");
var Stack_1 = require("@mui/material/Stack");
var Checkbox_1 = require("@mui/material/Checkbox");
var react_1 = require("react");
var ModeOutlined_1 = require("@mui/icons-material/ModeOutlined");
var LocationOnOutlined_1 = require("@mui/icons-material/LocationOnOutlined");
var PersonOutlineOutlined_1 = require("@mui/icons-material/PersonOutlineOutlined");
var SettingsOutlined_1 = require("@mui/icons-material/SettingsOutlined");
var useUserProfile_1 = require("@/hooks/useUserProfile");
var useUserOrders_1 = require("@/hooks/useUserOrders");
function MainPage() {
    var _a, _b;
    var _c = react_1.useState(0), value = _c[0], setValue = _c[1];
    var _d = useUserProfile_1.useUserProfile(), user = _d.data, isLoading = _d.isLoading, error = _d.error;
    var _e = react_1.useState(false), mounted = _e[0], setMounted = _e[1];
    var orders = useUserOrders_1.useUserOrders((_a = user === null || user === void 0 ? void 0 : user.id) !== null && _a !== void 0 ? _a : 0).data;
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted)
        return null;
    if (isLoading)
        return React.createElement(Typography_1["default"], null, "Loading...");
    if (error)
        return React.createElement(Typography_1["default"], { color: "error" }, "Error loading profile");
    if (!user)
        return null;
    return (React.createElement(Box_1["default"], { sx: { width: "90%", mx: "auto", mt: 4 } },
        React.createElement(Box_1["default"], { display: "flex", justifyContent: "space-between" },
            React.createElement(Typography_1["default"], { fontSize: 28, fontWeight: "bold" }, "My Profile"),
            React.createElement(Button_1["default"], { startIcon: React.createElement(ModeOutlined_1["default"], null), sx: {
                    background: "black",
                    color: "white",
                    borderRadius: "8px",
                    textTransform: "none"
                } }, "Edit Profile")),
        React.createElement(Tabs_1["default"], { value: value, onChange: function (_, v) { return setValue(v); }, centered: true },
            React.createElement(Tab_1["default"], { label: "Profile" }),
            React.createElement(Tab_1["default"], { label: "Orders" }),
            React.createElement(Tab_1["default"], { label: "Settings" })),
        value === 0 && (React.createElement(React.Fragment, null,
            React.createElement(Box_1["default"], { p: 2, sx: {
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    mt: 4
                }, display: "flex", gap: 2, alignItems: "center" },
                React.createElement("img", { src: user.image, alt: user.username, width: 100, height: 100, style: { borderRadius: "50%" } }),
                React.createElement(Stack_1["default"], null,
                    React.createElement(Typography_1["default"], null,
                        user.firstName,
                        " ",
                        user.lastName),
                    React.createElement(Typography_1["default"], null, user.email),
                    React.createElement(Typography_1["default"], null, user.phone))),
            React.createElement(Box_1["default"], { mt: 4, p: 2, sx: { borderRadius: "4px", border: "1px solid #ccc" } },
                React.createElement(Typography_1["default"], { fontWeight: "bold", mb: 2 },
                    React.createElement(PersonOutlineOutlined_1["default"], null),
                    " Personal Information"),
                React.createElement(Grid_1["default"], { container: true, spacing: 2 }, [
                    { label: "First name", value: user.firstName },
                    { label: "Last name", value: user.lastName },
                    { label: "Email", value: user.email },
                    { label: "Phone", value: user.phone },
                    { label: "Age", value: user.age },
                    { label: "Gender", value: user.gender },
                ].map(function (field) { return (React.createElement(Grid_1["default"], { size: { xs: 12, sm: 6 }, key: field.label },
                    React.createElement(Typography_1["default"], null, field.label),
                    React.createElement(TextField_1["default"], { fullWidth: true, size: "small", value: field.value }))); }))),
            React.createElement(Box_1["default"], { mt: 4, p: 2, sx: { borderRadius: "4px", border: "1px solid #ccc" } },
                React.createElement(Typography_1["default"], { fontWeight: "bold", display: "flex", gap: 1 },
                    React.createElement(LocationOnOutlined_1["default"], null),
                    " Address"),
                React.createElement(Typography_1["default"], null, user.address.address),
                React.createElement(Typography_1["default"], null,
                    user.address.city,
                    ", ",
                    user.address.state)),
            React.createElement(Box_1["default"], { mt: 4, p: 2, sx: { borderRadius: "4px", border: "1px solid #ccc" } },
                React.createElement(Typography_1["default"], { fontWeight: "bold" }, "Company Information"),
                React.createElement(Typography_1["default"], null, user.company.name),
                React.createElement(Typography_1["default"], null, user.company.title),
                React.createElement(Typography_1["default"], null, user.company.department)))),
        value === 1 && (React.createElement(Box_1["default"], { mt: 4 },
            React.createElement(Typography_1["default"], null, "Orders"), (_b = orders === null || orders === void 0 ? void 0 : orders.carts) === null || _b === void 0 ? void 0 :
            _b.map(function (cart) { return (React.createElement(Box_1["default"], { key: cart.id, sx: {
                    border: "1px solid #ddd",
                    p: 2,
                    mb: 2,
                    borderRadius: "6px"
                } },
                React.createElement(Typography_1["default"], { fontWeight: "bold" },
                    "Order #",
                    cart.id),
                cart.products.map(function (product) { return (React.createElement(Box_1["default"], { key: product.id, display: "flex", justifyContent: "space-between", mt: 1 },
                    React.createElement(Typography_1["default"], null, product.title),
                    React.createElement(Typography_1["default"], null,
                        product.quantity,
                        " \u00D7 $",
                        product.price))); }),
                React.createElement(Typography_1["default"], { mt: 2, fontWeight: "bold" },
                    "Total: $",
                    cart.total))); }))),
        value === 2 && (React.createElement(Box_1["default"], { mt: 4, sx: { border: "1px solid #ddd", p: 2, borderRadius: "6px" } },
            React.createElement(Typography_1["default"], { fontWeight: "bold", mb: 2 },
                React.createElement(SettingsOutlined_1["default"], null),
                " Account Settings"),
            React.createElement(Box_1["default"], { display: "flex", alignItems: "center", mt: 2 },
                React.createElement(Checkbox_1["default"], null),
                React.createElement(Typography_1["default"], null, "Email notifications for orders")),
            React.createElement(Box_1["default"], { display: "flex", alignItems: "center", mt: 1 },
                React.createElement(Checkbox_1["default"], null),
                React.createElement(Typography_1["default"], null, "SMS notifications for shipping updates")),
            React.createElement(Box_1["default"], { display: "flex", alignItems: "center", mt: 1 },
                React.createElement(Checkbox_1["default"], null),
                React.createElement(Typography_1["default"], null, "Marketing emails")),
            React.createElement(Divider_1["default"], { sx: { my: 2 } }),
            React.createElement(Box_1["default"], { display: "flex", alignItems: "center", mt: 1 },
                React.createElement(Checkbox_1["default"], null),
                React.createElement(Typography_1["default"], null, "Make profile public")),
            React.createElement(Box_1["default"], { display: "flex", alignItems: "center", mt: 1 },
                React.createElement(Checkbox_1["default"], null),
                React.createElement(Typography_1["default"], null, "Allow data collection for analytics")),
            React.createElement(Divider_1["default"], { sx: { my: 2 } }),
            React.createElement(Button_1["default"], { sx: {
                    background: "red",
                    color: "white",
                    textTransform: "none"
                } }, "Delete Account")))));
}
exports["default"] = MainPage;
