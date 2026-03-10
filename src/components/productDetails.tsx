"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
    Box,
    Typography,
    Grid,
    Card,
    Rating,
    Button,
    Divider,
} from "@mui/material";
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

export default function ProductDetailsPage() {
    const params = useParams();
    const id = params?.id;

    const [qty, setQty] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () =>
            fetch(`https://dummyjson.com/products/${id}`).then((res) =>
                res.json()
            ),
        enabled: !!id,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Box
            sx={{
                m: "1%",
                width: "98%",
                pt: "4%",
            }}
        >
            <Grid
                sx={{
                    display: "flex",
                    gap: 2,
                }}
                container
                spacing={4}
            >
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Swiper
                        direction="horizontal"
                        slidesPerView={1}
                        navigation
                        modules={[Navigation]}
                        style={{
                            height: "400px",
                            width: "100%",
                        }}
                    >
                        {data.images.map((imgUrl, index) => (
                            <SwiperSlide key={index}>
                                <Card
                                    variant="outlined"
                                    sx={{ p: 2, textAlign: "center" }}
                                >
                                    <AspectRatio
                                        ratio="1"
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
                                        Rasm {index + 1}
                                    </Typography>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>

                <Grid
                    size={{ xs: 12, sm: 6 }}
                    sx={{
                        ml: "1%",
                        mt: "1%",
                    }}
                >
                    <span
                        sx={{
                            background: "#333",
                            borderRadius: "10px",
                            fontSize: "14px",
                            mb: "4%",
                        }}
                    >
                        {data.category}
                    </span>
                    <Typography
                        sx={{
                            mt: "2%",
                            fontSize: "30px",
                            fontWeight: "bold",
                        }}
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
                        sx={{
                            mt: "3%",
                            fontSize: "24px",
                            fontWeight: "bold",
                        }}
                    >
                        ${data.price}
                    </Typography>

                    <Typography
                        sx={{ mt: "4%", fontSize: "16px", fontWeight: "bold" }}
                    >
                        Description
                    </Typography>
                    <Typography
                        sx={{
                            mt: "1%",
                            color: "#333",
                            fontSize: "14px",
                        }}
                    >
                        {data.description}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            mt: "9%",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Typography>Quantity</Typography>

                        <Box sx={{ color: "black", display: "flex", gap: 2 }}>
                            <Button
                                sx={{
                                    background: "#e0e0",
                                    color: "black",
                                    fontSize: "14px",
                                    border: "1px solid #cccc",
                                }}
                                onClick={() => qty > 1 && setQty(qty - 1)}
                            >
                                -
                            </Button>

                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {qty}
                            </Typography>

                            <Button
                                sx={{
                                    background: "#e0e0",
                                    color: "black",
                                    fontSize: "14px",
                                    border: "1px solid #cccc",
                                }}
                                onClick={() => setQty(qty + 1)}
                            >
                                +
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 2,
                            mt: 2,
                        }}
                    >
                        <ProductCard product={data} qty={qty} />

                        <Button
                            sx={{
                                background: "#e0e0",
                                color: "black",
                                border: "1px solid #cccc",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center",
                                height: "100%",
                                mt: "2%",
                            }}
                        >
                            <FavoriteBorderIcon />
                        </Button>

                        <Button
                            sx={{
                                background: "#e0e0",
                                color: "black",
                                border: "1px solid #cccc",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center",
                                height: "100%",
                                mt: "2%",
                            }}
                        >
                            <ShareIcon />
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "90%",
                            alignItems: "center",
                            mt: "4%",
                            ml: "4%",
                            maxHeight: "100px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContnet: "center",
                                flexDirection: "column",
                                gap: 1,
                                alignItems: "center",
                                maxHeight: "100px",
                            }}
                        >
                            <Box
                                sx={{
                                    color: "#333c",
                                    height: "100%",
                                    alignItems: "center",
                                    textAlign: "center",
                                    fontSize: "28px",
                                    width: "100px",
                                }}
                            >
                                <LocalShippingOutlinedIcon fontSize="midle" />
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    color: "#333c",
                                }}
                            >
                                Free Shipping
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContnet: "center",
                                flexDirection: "column",
                                gap: 1,
                                alignItems: "center",
                                maxHeight: "100px",
                            }}
                        >
                            <Box
                                sx={{
                                    color: "#333c",
                                    height: "100%",
                                    alignItems: "center",
                                    textAlign: "center",
                                    fontSize: "28px",
                                    width: "100px",
                                }}
                            >
                                <AddModeratorOutlinedIcon fontSize="midle" />
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    color: "#333c",
                                }}
                            >
                                Warranty
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContnet: "center",
                                flexDirection: "column",
                                gap: 1,
                                alignItems: "center",
                                maxHeight: "100px",
                            }}
                        >
                            <Box
                                sx={{
                                    color: "#333c",
                                    height: "100%",
                                    alignItems: "center",
                                    textAlign: "center",
                                    fontSize: "28px",
                                    width: "100px",
                                }}
                            >
                                <ReplayOutlinedIcon fontSize="midle" />
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    color: "#333c",
                                }}
                            >
                                Easy Returns
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={4}
                sx={{
                    borderRadius: "20px",
                    border: "1px solid #ccc",
                    boxShadow: "1px 1px 1px #ccc",
                    mt: "8%",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "1%",
                        mt: "1%",
                        ml: "2%",
                        width: "100%",
                    }}
                >
                    Product Information
                </Typography>
                <Grid
                    item
                    size={{ xs: 12, sm: 5.8 }}
                    sx={{
                        ml: "1%",
                        mb: "1%",
                        mt: "-2%",
                    }}
                >
                    <Box
                        sx={{
                            margin: "2%",
                            mt: "1%",
                        }}
                    >
                        <Typography
                            sx={{
                                width: "100%",
                                fontSize: "14px",
                                fontWeight: "bold",
                            }}
                        >
                            Specifications
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "2%",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#333",
                                    fontSize: "14px",
                                }}
                            >
                                Brand:
                            </Typography>
                            <Typography fontSize="14px">
                                {data.brand}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "2%",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#333",
                                    fontSize: "14px",
                                }}
                            >
                                SKU:
                            </Typography>
                            <Typography fontSize="14px">{data.sku}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "2%",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#333",
                                    fontSize: "14px",
                                }}
                            >
                                Weight:
                            </Typography>
                            <Typography fontSize="14px">
                                {data.weight}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "2%",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#333",
                                    fontSize: "14px",
                                }}
                            >
                                Dimensions:
                            </Typography>
                            <Typography fontSize="14px">
                                {data.dimensions.width} x{" "}
                                {data.dimensions.height} x{" "}
                                {data.dimensions.depth} cm
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    size={{ xs: 12, sm: 5.8 }}
                    sx={{
                        ml: "1%",
                        mb: "1%",
                        mt: "-2%",
                    }}
                >
                    <Box
                        sx={{
                            margin: "2%",
                            mt: "1%",
                        }}
                    >
                        <Typography
                            sx={{
                                width: "100%",
                                fontSize: "14px",
                                fontWeight: "bold",
                            }}
                        >
                            Shipping & Returns
                        </Typography>

                        <Box sx={{ display: "flex", gap: 1, mt: "2%" }}>
                            <Typography
                                sx={{ fontSize: "14px", color: "#333c" }}
                            >
                                Shipping:
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                {data.shippingInformation}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1, mt: "2%" }}>
                            <Typography
                                sx={{ fontSize: "14px", color: "#333c" }}
                            >
                                Return Policy:
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                {data?.returnPolicy
                                    ? data.returnPolicy
                                    : "No return policy"}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1, mt: "2%" }}>
                            <Typography
                                sx={{ fontSize: "14px", color: "#333c" }}
                            >
                                Warranty:
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                {data.warrantyInformation}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid
                sx={{
                    borderRadius: "20px",
                    border: "1px solid #ccc",
                    boxShadow: "1px 1px 1px #ccc",
                    mt: "4%",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "1%",
                        ml: "2%",
                        width: "100%",
                    }}
                >
                    Customer Reviews
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        m: "2%",
                    }}
                >
                    <Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Typography sx={{ fontSize: "14px" }}>
                                Eleanor Collins
                            </Typography>
                            <Rating
                                value={3}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                        </Box>
                        <Typography
                            sx={{ mt: "1%", color: "#333c", fontSize: "14px" }}
                        >
                            Would not recommend!
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "14px", color: "#333c" }}>
                            30.04.2025
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        m: "2%",
                    }}
                >
                    <Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Typography sx={{ fontSize: "14px" }}>
                                Lucas Gordon
                            </Typography>
                            <Rating
                                value={4}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                        </Box>
                        <Typography
                            sx={{ mt: "1%", color: "#333c", fontSize: "14px" }}
                        >
                            Very satisfied!
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "14px", color: "#333c" }}>
                            30.04.2025
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        m: "2%",
                    }}
                >
                    <Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Typography sx={{ fontSize: "14px" }}>
                                Eleanor Collins
                            </Typography>
                            <Rating
                                value={5}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                        </Box>
                        <Typography
                            sx={{ mt: "1%", color: "#333c", fontSize: "14px" }}
                        >
                            Highly impressed!
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "14px", color: "#333c" }}>
                            30.04.2025
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
}
