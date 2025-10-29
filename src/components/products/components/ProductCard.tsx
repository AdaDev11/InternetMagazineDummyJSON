"use client";
import React from "react";
import {
    Card,
    Box,
    Typography,
    CardContent,
    CardMedia,
    CardActions,
    Rating,
    Button,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ProductCard({ product }) {
    return (
        <Card
            sx={{
                weight: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "1px",
                borderRadius: "10px",
            }}
            key={product.id}
            gap={2}
        >
            <CardMedia
                component="img"
                image={
                    product.images?.[0] ??
                    "https://via.placeholder.com/300x200?text=No+image"
                }
                alt={product.title}
                sx={{
                    height: 340,
                    width: "100%",
                    objectFit: "cover",
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="subtitle1" noWrap>
                    {product.title}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                    }}
                >
                    <Rating
                        value={Number(product.rating) || 0}
                        precision={0.5}
                        readOnly
                        size="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                        {product.rating}
                    </Typography>
                </Box>
                <Typography sx={{ fontWeight: "bold" }}>
                    ${product.price}
                </Typography>

                <Typography variant="body2" color="text.secondary" noWrap>
                    {product.category}
                </Typography>
            </CardContent>

            <CardActions
                sx={{
                    margin: "4px",
                    alignItems: "center",
                    marginBottom: "9%",
                }}
            >
                <Button
                    size="small"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    sx={{
                        width: "98%",
                        background: "black",
                        color: "#ffff",
                        fontSize: "14px",
                    }}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}
