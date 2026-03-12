"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AspectRatio from "@mui/joy/AspectRatio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import ProductCard from "./products/components/AddToCartButton";
import { useState } from "react";

type Props = { id: string };

export default function ProductDetailsClient({ id }: Props) {
    // export default function ProductDetails() {
    const params = useParams();
    const productId = params?.id as string;
    const [qty, setQty] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: ["product", productId],
        queryFn: () =>
            fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
                res.json()
            ),
        enabled: !!productId,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product</p>;

    return (
        <Box sx={{ m: "1%", width: "98%", pt: "4%" }}>
            <Grid container spacing={4}>
                {/* Product Images */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Swiper
                        direction="horizontal"
                        slidesPerView={1}
                        navigation
                        modules={[Navigation]}
                        style={{ height: "400px", width: "100%" }}
                    >
                        {data.images.map((imgUrl: string, index: number) => (
                            <SwiperSlide key={index}>
                                <Card
                                    variant="outlined"
                                    sx={{ p: 2, textAlign: "center" }}
                                >
                                    <AspectRatio
                                        ratio={1}
                                        sx={{
                                            width: "100%",
                                            maxWidth: 400,
                                            mx: "auto",
                                        }}
                                    >
                                        <img
                                            src={imgUrl}
                                            alt={`product image ${index + 1}`}
                                        />
                                    </AspectRatio>
                                    <Typography variant="body2">
                                        Image {index + 1}
                                    </Typography>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>

                {/* Product Info */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography
                        sx={{
                            background: "#333",
                            borderRadius: "10px",
                            fontSize: "14px",
                            mb: "4%",
                        }}
                    >
                        {data.category}
                    </Typography>
                    <Typography
                        sx={{ mt: "2%", fontSize: "30px", fontWeight: "bold" }}
                    >
                        {data.title}
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
                            value={Number(data.rating) || 0}
                            precision={0.5}
                            readOnly
                            size="small"
                        />
                        <Typography variant="body2" color="text.secondary">
                            {data.rating}
                        </Typography>
                    </Box>

                    <Typography
                        sx={{ mt: "3%", fontSize: "24px", fontWeight: "bold" }}
                    >
                        ${data.price}
                    </Typography>

                    <Typography
                        sx={{ mt: "4%", fontSize: "16px", fontWeight: "bold" }}
                    >
                        Description
                    </Typography>
                    <Typography
                        sx={{ mt: "1%", color: "#333", fontSize: "14px" }}
                    >
                        {data.description}
                    </Typography>

                    {/* Quantity & Add to Cart */}
                    <Box
                        sx={{
                            display: "flex",
                            mt: "9%",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Typography>Quantity</Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button
                                sx={{
                                    border: "1px solid #ccc",
                                    fontSize: "14px",
                                }}
                                onClick={() => qty > 1 && setQty(qty - 1)}
                            >
                                -
                            </Button>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {qty}
                            </Typography>
                            <Button
                                sx={{
                                    border: "1px solid #ccc",
                                    fontSize: "14px",
                                }}
                                onClick={() => setQty(qty + 1)}
                            >
                                +
                            </Button>
                        </Box>
                    </Box>

                    {/* Actions */}
                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                        <ProductCard product={data} qty={qty} />
                        <Button
                            sx={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                            }}
                        >
                            <FavoriteBorderIcon />
                        </Button>
                        <Button
                            sx={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                            }}
                        >
                            <ShareIcon />
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
