import { Box, Typography, Button } from "@mui/material";
import React from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function StartShopping() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "400px",
                background: "black",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    alignItems: "center",
                    display: "block",
                    justifyContent: "space-between",
                    color: "#ffff",
                    textAlign: "center",
                    marginTop: "2%",
                    marginBottom: "8%",
                }}
            >
                <Box
                    sx={{
                        fontSize: "10px",
                        color: "#cccc",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <LocalMallOutlinedIcon
                        sx={{ fontSize: "120px", color: "#cccc" }}
                    />
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "40px",
                            fontWeight: "bold",
                            color: "#ffff",
                        }}
                    >
                        Ready to Start Shopping?
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#cccc",
                            width: "98%",
                            marginTop: "2%",
                            marginBottom: "4%",
                        }}
                    >
                        Join thousands of satisfied customers and discover
                        amazing products at unbeatable prices.
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            gap: 4,
                        }}
                    >
                        <Button
                            sx={{
                                background: "#cccc",
                                color: "black",
                                borderRadius: "10px",
                            }}
                            endIcon={<ArrowRightAltIcon />}
                        >
                            Browse Products
                        </Button>
                        <Button
                            sx={{
                                background: "#0000",
                                color: "#ffff",
                                borderRadius: "10px",
                                border: "1px solid #ffff",
                            }}
                        >
                            Create Account
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
