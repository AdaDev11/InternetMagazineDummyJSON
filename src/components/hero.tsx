import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import { Star } from "lucide-react";
import React from "react";
import headphones from "../assets/wireless-headphones.png";
import smartphone from "../assets/modern-smartphone.png";
import bag from "../assets/luxury-handbag.png";
import watch from "../assets/luxury-watch.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Hero() {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr 1fr", md: "2fr 2fr" },
                background: "#e5e5e5",
                width: "100%",
                height: "auto",
            }}
        >
            <Box
                sx={{
                    display: "block",
                    width: "auto",
                    minHeight: "90vh",
                    marginTop: "10%",
                    marginLeft: "2%",
                }}
            >
                <Typography
                    sx={{
                        width: "90%",
                        fontWeight: "900",
                        fontSize: "370%",
                    }}
                >
                    Discover Amazing Products at Great Prices
                </Typography>
                <Typography
                    sx={{
                        width: "90%",
                        fontWeight: "700",
                        fontSize: "90%",
                        marginTop: "4%",
                        color: "#3d3d3d",
                    }}
                >
                    Shop from thousands of products across multiple categories.
                    Find everything you need with fast shipping and excellent
                    customer service.
                </Typography>

                <Box
                    sx={{
                        width: "40%",
                        marginTop: "4%",
                        display: "grid",
                        gridTemplateColumns: "2fr 2fr",
                        gap: 4,
                        height: "40px",
                    }}
                >
                    <Button
                        sx={{
                            width: "140px",
                            borderRadius: "12px",
                            fontSize: "70%",
                            background: "black",
                            alignItems: "center",
                            padding: "4%",
                        }}
                        variant="contained"
                        endIcon={<ArrowRightAltIcon />}
                        size="small"
                    >
                        Shop Now
                    </Button>
                    <Button
                        sx={{
                            width: "140px",
                            borderRadius: "12px",
                            fontSize: "70%",
                            background: "#ffff",
                            padding: "4%",
                            color: "black",
                            fontWeight: "900",
                        }}
                        disableElevation
                        size="small"
                    >
                        Browse Categories
                    </Button>
                </Box>

                <Stack
                    direction="row"
                    spacing={8}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        marginTop: "4%",
                        marginLeft: "7%",
                        width: "38%",
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h5" fontWeight="bold">
                            1000+
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Products
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h5" fontWeight="bold">
                            50+
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Categories
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 0.5,
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold">
                                4.5
                            </Typography>
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Typography variant="body2" color="text.secondary">
                                Rating
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gridTemplateColumns: "2fr 2fr",
                    maxHeight: "90vh",
                    gap: 4,
                    width: "100%",
                    marginTop: "10%",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        flexDirection: "column",
                        gap: 2,
                        width: "45%",
                        height: "90%",
                        marginTop: "1%",
                    }}
                >
                    <Box
                        sx={{
                            aspectRation: "1/1",
                            borderRadius: 2,
                            overflow: "hidden",
                            bgColor: "grey.200",
                            width: "90%",
                            height: "98%",
                        }}
                    >
                        <img
                            width={200}
                            height={300}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "20px",
                            }}
                            alt="Product 1"
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-smartphone-fZQ1mGchYI7CVO0mut9EdKEZAIrSZW.png"
                        />
                    </Box>
                    <Box
                        sx={{
                            aspectRation: "1/1",
                            borderRadius: 2,
                            overflow: "hidden",
                            bgColor: "grey.200",
                            width: "90%",
                            height: "98%",
                        }}
                    >
                        <img
                            width={200}
                            height={300}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "20px",
                            }}
                            alt="Product 1"
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/wireless-headphones-LqpBeruF3f0RCUBwcARZlX0cQuiOyO.png"
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        flexDirection: "column",
                        gap: 2,
                        width: "45%",
                        height: "90%",
                        marginTop: "8%",
                    }}
                >
                    <Box
                        sx={{
                            aspectRation: "1/1",
                            borderRadius: 2,
                            overflow: "hidden",
                            bgColor: "grey.200",
                            width: "90%",
                            height: "98%",
                        }}
                    >
                        <img
                            width={200}
                            height={300}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "20px",
                            }}
                            alt="Product 1"
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/luxury-watch-tUBTkl3PJSFux6ecAdtSI7ybNhjFlz.jpg"
                        />
                    </Box>
                    <Box
                        sx={{
                            aspectRation: "1/1",
                            borderRadius: 2,
                            overflow: "hidden",
                            bgColor: "grey.200",
                            width: "90%",
                            height: "98%",
                        }}
                    >
                        <img
                            width={200}
                            height={300}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "20px",
                            }}
                            alt="Product 1"
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/luxury-handbag-wd9wy1PXVJeXcJVqBEWAa7x25sqhgo.png"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
