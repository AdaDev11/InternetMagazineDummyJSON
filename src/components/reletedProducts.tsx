"use client";
import { useParams } from "next/navigation";
import { useProduct } from "../hooks/useProductForDetails";
import { useRelatedProducts } from "../hooks/useRelatedProducts";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Box,
    Rating,
    Button,
    Grid,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function RelatedProducts() {
    const params = useParams();
    const id = params?.id as string;

    const { data: product, isLoading, error } = useProduct(id);
    const { data: relatedProducts, isLoading: relatedLoading } =
        useRelatedProducts(product?.category);

    if (isLoading) return <p>Loading product...</p>;
    if (error) return <p>Error loading product</p>;

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "400px",
                background: "#ffff",
                margin: "1%",
                marginTop: "4%",
                marginRight: "1%",
            }}
        >
            <Typography sx={{ fontSize: "28px", fontWeight: "bold", mb: "1%" }}>
                Related Products
            </Typography>

            <Grid container spacing={4}>
                {relatedLoading && <p>Loading related...</p>}
                {relatedProducts?.products?.map((product: any) => (
                    <Grid
                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                        key={product.id}
                    >
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
                                <Typography
                                    gutterBottom
                                    variant="subtitle1"
                                    noWrap
                                >
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
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {product.rating}
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    ${product.price}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    noWrap
                                >
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
