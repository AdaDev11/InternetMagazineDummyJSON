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
import ProductCard from "./products/components/ProductCard";

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
                        <ProductCard product={product} qty={1} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
