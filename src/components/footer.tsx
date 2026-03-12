import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
    return (
        <Box
            sx={{
                mt: "2%",
                color: "#333c",
                width: "100%",
            }}
        >
            <Grid container spacing={7.8} sx={{ mb: 4, p: "2%" }}>
                <Grid  size={{xs:12, sm:6, md:3}} sx={{ maxWidth: "340px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box
                            sx={{
                                background: "black",
                                width: "30px",
                                height: "30px",
                                borderRadius: "10px",
                                color: "#ffff",
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "center",
                                fontWeight: "bold",
                            }}
                        >
                            ES
                        </Box>
                        <Typography
                            sx={{
                                width: "70%",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "18px",
                            }}
                        >
                            E-Store
                        </Typography>
                    </Box>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 2.4, mb: 2, width: "90%", fontSize: "14px" }}
                    >
                        Your one-stop destination for quality products at great
                        prices. Discover amazing deals and shop with confidence.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            mt: 2,
                        }}
                    >
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </Box>
                </Grid>

                <Grid size={{xs:12, sm:6, md:3}}  sx={{ minWidth: "300px" }}>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            color: "black",
                            fontSize: "16px",
                        }}
                    >
                        Quick Links
                    </Typography>
                    <Typography>Home</Typography>
                    <Typography>Product</Typography>
                    <Typography>Cart</Typography>
                    <Typography>Profile</Typography>
                </Grid>

                <Grid size={{xs:12, sm:6, md:3}}  sx={{ minWidth: "300px" }}>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            color: "black",
                            fontSize: "16px",
                        }}
                    >
                        Customer Service
                    </Typography>

                    <Typography>Help Center</Typography>
                    <Typography>Shipping Info</Typography>
                    <Typography>Returns</Typography>
                    <Typography>Size Guide</Typography>
                </Grid>

                <Grid size={{xs:12, sm:6, md:3}}  sx={{ minWidth: "300px" }}>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            color: "black",
                            fontSize: "16px",
                        }}
                    >
                        Contact Us
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <EmailIcon fontSize="small" /> support@e-store.com
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mt: 1,
                        }}
                    >
                        <LocalPhoneIcon fontSize="small" /> +1 (555) 123-4567
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mt: 1,
                        }}
                    >
                        <LocationOnIcon fontSize="small" /> 123 Commerce St,
                        City
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    mb: 4,
                    p: "1%",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "12px",
                    }}
                >
                    © 2025 E-Store. All rights reserved.
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography
  component="a"
                        sx={{
                            fontSize: "12px",
                        }}
                    >
                        Privacy Policy
                    </Typography>
                    <Typography
                    component="a"
                        sx={{
                            fontSize: "12px",
                        }}
                    >
                        Terms of Service
                    </Typography>
                    <Typography
                    component="a"
                        sx={{
                            fontSize: "12px",
                        }}
                    >
                        Cookie Policy
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
