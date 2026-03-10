"use client";
import { useState } from "react";

export function usePopoverMessage() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("success");

    const showPopover = (
        event: HTMLElement,
        msg: string,
        type: "success" | "error"
    ) => {
        setAnchorEl(event);
        setMessage(msg);
        setColor(type);
        setTimeout(() => {
            setAnchorEl(null);
        }, 2000);
    };

    return {
        anchorEl,
        message,
        color,
        showPopover,
    };
}
