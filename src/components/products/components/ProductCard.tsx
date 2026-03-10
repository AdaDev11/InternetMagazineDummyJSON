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
    Popover,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAddProduct } from "@/hooks/useAddProduct";
import { usePopoverMessage } from "@/hooks/usePopoverMessage";
import AddToCartButton from "./AddToCartButton";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    rating: number;
    images?: string[];
  }

  interface ProductCardProps {
    product: Product;
    qty?: number;
  }
  
export default function ProductCard({ product, qty = 1 }: ProductCardProps) {
    const { mutate } = useAddProduct();
    const { anchorEl, message, color, showPopover } = usePopoverMessage();

    const handleAdd = (e: React.MouseEvent<HTMLElement>) => {
        mutate(
            {
                title: product.title,
                price: product.price,
                category: product.category,
            },
            {
                onSuccess: () => {
                    showPopover(e.currentTarget, "Product added!", "success");
                },
                onError: () => {
                    showPopover(e.currentTarget, "Error occurred!", "error");
                },
            }
        );
    };

    return (
        <>
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

                <CardActions sx={{ margin: "4px", marginBottom: "9%" }}>
                    <AddToCartButton product={product} qty={qty} />
                </CardActions>
            </Card>

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <Box
                    sx={{
                        p: 1.2,
                        px: 2,
                        color: color === "success" ? "green" : "red",
                        fontWeight: "bold",
                    }}
                >
                    {message}
                </Box>
            </Popover>
        </>
    );
}
