"use client";
import React, { useState } from "react";
import {
    Container,
    Box,
    Typography,
    Card,
    CardMedia,
    Button,
} from "@mui/material";
import { useProductAllCategories } from "../hooks/useGetAllCategories";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";

export default function ByCategory() {
    const { data, isLoading, error } = useProductAllCategories();
    const [showAll, setShowAll] = useState(false);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {`$error`}</p>;
    if (!Array.isArray(data)) return null;

    return (
        <Box
            sx={{
                width: "100%",
                textAlign: "center",
            }}
        >
            <Typography
                sx={{
                    fontWeight: "900",
                    fontSize: "200%",
                    marginTop: "4%",
                }}
            >
                Shop by Category
            </Typography>
            <Typography
                sx={{
                    fontWeight: "900",
                    fontSize: "120%",
                    color: "#cccc",
                }}
            >
                Explore our wide range of product categories
            </Typography>
            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(220px, 2fr))"
                gap={2}
                sx={{
                    marginTop: "4%",
                    maxHeight: showAll ? "none" : "300px",
                    width: "100%",
                    overflowY: "hidden",
                }}
            >
                {Array.isArray(data) &&
                    data.map((cat: any, idx: number) => (
                        <Link
                            key={idx}
                            href={`/products?/category=${encodeURIComponent(
                                cat.name
                            )}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Card
                                key={idx}
                                sx={{
                                    minHeight: "240px",
                                    boxShadow: "#cccc",
                                    margin: "8%",
                                    border: "1px solid #cccc",
                                    borderRadius: "10px",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/abstract-geometric-shapes-sUE5R8SURiS0JAVLKZSgt58oSNZSJI.png"
                                    alt="category"
                                    sx={{
                                        height: "70%",
                                        margin: "4.9%",
                                        borderRadius: "10px",
                                        width: "90%",
                                        transition: "transform 0.2s",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                        marginTop: "14%",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        alignItems: "center",
                                        textAlign: "center",
                                        marginTop: "4%",
                                        marginBottom: "14%",
                                    }}
                                >
                                    {cat.name}
                                </Typography>
                            </Card>
                        </Link>
                    ))}
            </Box>

            {!showAll && data.length > 6 && (
                <Button
                    sx={{
                        fontSize: "90%",
                        color: "black",
                        boxShadow: "2px 2px 20px 1px #cccc",
                    }}
                    endIcon={<ArrowRightAltIcon />}
                    onClick={() => setShowAll(true)}
                >
                    View All Categories
                </Button>
            )}
        </Box>
    );
}
