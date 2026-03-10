"use client";
"use strict";
exports.__esModule = true;
exports.usePopoverMessage = void 0;
var react_1 = require("react");
function usePopoverMessage() {
    var _a = react_1.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var _b = react_1.useState(""), message = _b[0], setMessage = _b[1];
    var _c = react_1.useState("success"), color = _c[0], setColor = _c[1];
    var showPopover = function (event, msg, type) {
        setAnchorEl(event);
        setMessage(msg);
        setColor(type);
        setTimeout(function () {
            setAnchorEl(null);
        }, 2000);
    };
    return {
        anchorEl: anchorEl,
        message: message,
        color: color,
        showPopover: showPopover
    };
}
exports.usePopoverMessage = usePopoverMessage;
