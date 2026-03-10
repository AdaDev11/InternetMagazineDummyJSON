"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LocalMallOutlined_1 = require("@mui/icons-material/LocalMallOutlined");
function UserCardModal() {
    return (react_1["default"].createElement(Box, null,
        react_1["default"].createElement(Box, { sx: {
                display: "flex",
                justifyContent: "space-between"
            } },
            react_1["default"].createElement(Grid, null,
                react_1["default"].createElement(LocalMallOutlined_1["default"], null),
                react_1["default"].createElement(Typography, null, "Shopping Cart"),
                react_1["default"].createElement("span", null)),
            react_1["default"].createElement(Grid, null, "X"))) >
    );
}
exports["default"] = UserCardModal;
