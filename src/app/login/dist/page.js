"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var useLogin_1 = require("@/hooks/useLogin");
var navigation_1 = require("next/navigation");
function Page() {
    var _a = react_1.useState(""), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    // const { mutate, isLoading } = useLogin();
    var _c = useLogin_1.useLogin(), mutate = _c.mutate, isLoading = _c.isPending;
    var router = navigation_1.useRouter();
    return (React.createElement(material_1.Box, { component: "form", onSubmit: function (e) {
            e.preventDefault();
            mutate({ username: username, password: password }, {
                onSuccess: function () { return router.push("/profile"); }
            });
        }, sx: {
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 300,
            margin: "100px auto"
        } },
        React.createElement(material_1.Typography, { variant: "h5", textAlign: "center" }, "Login"),
        React.createElement(material_1.Input, { placeholder: "Username", value: username, onChange: function (e) { return setUsername(e.target.value); } }),
        React.createElement(material_1.Input, { placeholder: "Password", type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); } }),
        React.createElement(material_1.Button, { type: "submit", variant: "contained", disabled: isLoading }, isLoading ? "Loading..." : "Log in")));
}
exports["default"] = Page;
