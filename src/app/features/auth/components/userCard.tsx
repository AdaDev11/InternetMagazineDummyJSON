import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography, Divider } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { format } from "date-fns";

export default function OrderHistory() {
    const [userId, setUserId] = useState(6);

    useEffect(() => {
        const id = localStorage.getItem("userId");
        setUserId(id || 6);
    }, []);

    const {
        data: orders,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["userOrders", userId],
        queryFn: async () => {
            const res = await fetch(
                `https://dummyjson.com/users/${userId}/carts`
            );
            if (!res.ok) throw new Error("Failed to load orders");
            const orders = await res.json();
            return orders;
        },
        enabled: !!userId,
    });

    const orderCarts = orders?.carts || [];

    return (
        <div>
            <Box>
                <Box
                    sx={{
                        p: 3,
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        mt: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <ListAltIcon />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            Orders
                        </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />

                    {isLoading && (
                        <Typography sx={{ mt: 2, color: "text.secondary" }}>
                            Loading orders...
                        </Typography>
                    )}
                    {isError && (
                        <Typography sx={{ mt: 2, color: "error.main" }}>
                            Failed to load orders
                        </Typography>
                    )}

                    {!isLoading && !isError && orderCarts.length === 0 && (
                        <Typography sx={{ mt: 2, color: "text.secondary" }}>
                            You have no orders yet.
                        </Typography>
                    )}

                    {!isLoading &&
                        !isError &&
                        orderCarts.length > 0 &&
                        orderCarts.map((order) => (
                            <Box
                                key={order.id}
                                sx={{
                                    mb: 2,
                                    border: "1px solid #eee",
                                    p: 2,
                                    borderRadius: "8px",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ color: "primary.main", mb: 1 }}
                                >
                                    Order #{order.id}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Total Items: {order.totalProducts} | Unique
                                    Quantity: {order.totalQuantity}
                                </Typography>
                                <Divider sx={{ my: 1 }} />

                                {order.products.map((product) => (
                                    <Box
                                        key={product.id}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "15px",
                                            marginTop: "10px",
                                            borderBottom: "1px dashed #ccc",
                                            pb: 1,
                                            m: 2,
                                        }}
                                    >
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                objectFit: "cover",
                                                borderRadius: "4px",
                                            }}
                                        />
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{ fontWeight: 500 }}
                                            >
                                                {product.title}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                Unit Price: $
                                                {product.price.toFixed(2)}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                minWidth: "50px",
                                                textAlign: "right",
                                            }}
                                        >
                                            x {product.quantity}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 600,
                                                minWidth: "70px",
                                                textAlign: "right",
                                            }}
                                        >
                                            $
                                            {product.discountedTotal.toFixed(2)}
                                        </Typography>
                                    </Box>
                                ))}

                                <Typography
                                    sx={{
                                        mt: 2,
                                        fontWeight: 700,
                                        textAlign: "right",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    Order Total: $
                                    {order.discountedTotal.toFixed(2)}
                                </Typography>
                            </Box>
                        ))}
                </Box>
            </Box>
        </div>
    );
}
