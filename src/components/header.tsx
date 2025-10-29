"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, X, User } from "lucide-react";
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Input,
    InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../utils/authHelper";

export default function Header({ searchValue, setSearchValue }) {
    const router = useRouter();

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchValue.trim()) {
            router.push(`/products?search=${encodeURIComponent(searchValue)}`);
        }
    };

    useEffect(() => {
        if (isLoggedIn()) {
            router.push("/login");
        }
    });

    const handelProfileClick = () => {
        if (isLoggedIn()) {
            router.push("/profile");
        } else {
            router.push("/login");
        }
    };
    const navigation = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Categories", href: "/categories" },
    ];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "white",
                color: "black",
                width: "100%",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                        sx={{
                            color: "#ffff",
                            background: "black",
                        }}
                    >
                        <StorefrontIcon />
                    </IconButton>

                    <Box
                        component={Link}
                        href="/"
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1.8rem",
                            textDecoration: "none",
                            color: "black",
                            display: { xs: "none", sm: "flex" },
                        }}
                    >
                        E-Store
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: 3,
                    }}
                >
                    {navigation.map((page) => (
                        <Link
                            key={page.name}
                            className="link_header_desk"
                            href={page.href}
                            style={{
                                textDecoration: "none",
                                color: "#595858f6",
                            }}
                        >
                            {page.name}
                        </Link>
                    ))}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-btween",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <form onSubmit={handleSearchSubmit}>
                        <Box
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                alignItems: "center",
                                border: "1px solid #cccc",
                                borderRadius: "20px",
                                px: 1,
                            }}
                        >
                            <SearchIcon
                                sx={{ fontSize: "20px", color: "#595858f6" }}
                            />
                            <InputBase
                                placeholder="Search products..."
                                sx={{
                                    ml: 1,
                                    fontSize: "0.9rem",
                                }}
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            ></InputBase>
                        </Box>
                    </form>

                    <IconButton type="button" onClick={handelProfileClick}>
                        <PersonOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <LocalGroceryStoreOutlinedIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none",
                                "& .MuiPaper-root": {
                                    background: "white",
                                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                    borderRadius: "12px",
                                },
                            },
                        }}
                    >
                        <IconButton
                            onClick={handleOpen}
                            sx={{ color: "#595858f6" }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{
                                display: { xs: "block", md: "none" },
                                background: "#ffff",
                            }}
                        >
                            {navigation.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={handleClose}
                                    sx={{
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        "& a": {
                                            textDecoration: "none",
                                            color: "black",
                                            width: "100%",
                                            display: "block",
                                        },
                                        "& hover": {
                                            backgroundColor: "#f5f5f5",
                                        },
                                    }}
                                >
                                    <Link href={page.href}>{page.name}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
