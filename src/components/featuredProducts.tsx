"use client";
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Rating,
    Grid,
} from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useProductFeaturedProducts } from "../hooks/useGetFeaturedProducts";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import ProductCard from "./products/components/ProductCard";

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 400,
    height: 300,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
    alignItems: "center",
}));

export default function FeaturedProducts() {
    const { data, isLoading, error } = useProductFeaturedProducts();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {`$error`}</p>;

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "400px",
                background: "#ffff",
                mt: "2%",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    p: "1%",
                }}
            >
                <Box>
                    <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                        Featured Products
                    </Typography>
                    <Typography
                        sx={{
                            color: "#cccc",
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                    >
                        Handpicked products just for you
                    </Typography>
                </Box>
                <Box sx={{ margin: "2%" }}>
                    <Button
                        sx={{
                            color: "black",
                            border: "0.2px solid #cccc",
                            borderRadius: "8px",
                            boxShadow: "1px 1px 1px #cccc",
                        }}
                        endIcon={<ArrowRightAltIcon />}
                    >
                        View All
                    </Button>
                </Box>
            </Box>

            <Grid container spacing={4} sx={{ p: "2%" }}>
                {data && data.length > 0 ? (
                    data.map((product: any) => (
                        <Grid
                            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                            key={product.id}
                        >
                            <Link
                                href={`/product/${product.id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <ProductCard product={product} />
                            </Link>
                        </Grid>
                    ))
                ) : (
                    <Box
                        direction="row"
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <DemoPaper variant="elevation">Loading</DemoPaper>
                    </Box>
                )}
            </Grid>
        </Box>
    );
}
