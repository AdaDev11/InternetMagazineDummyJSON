"use client";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ProductCard from "./products/components/ProductCard";
import { useProductNewArrivalProducts } from "../hooks/useGetNewArrivalProducts";
import Paper from "@mui/material/Paper";

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 400,
    height: 300,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export default function NewArrivals() {
    // const { data, isLoading, error } = useProductNewArrivalProducts();
    const { data: products, isLoading, error } = useProductNewArrivalProducts();

    if (error) return <p>Error loading products</p>;

    // agar API { products: [] } qaytarsa
    // const products = data ?? [];

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "400px",
                background: "#fff",
                mt: "2%",
            }}
        >
            {/* HEADER */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "1%",
                    p: "1%",
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        New Arrivals
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#ccc",
                        }}
                    >
                        Latest products added to our collection
                    </Typography>
                </Box>

                <Box sx={{ margin: "2%" }}>
                    <Button
                        sx={{
                            color: "black",
                            fontSize: "14px",
                            borderRadius: "8px",
                            border: "0.2px solid #ccc",
                        }}
                        endIcon={<ArrowRightAltIcon />}
                    >
                        View All
                    </Button>
                </Box>
            </Box>

            {/* PRODUCTS */}
            <Box>
                <Grid container spacing={4} sx={{ p: "2%" }}>
                    {isLoading ? (
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <DemoPaper elevation={3}>Loading...</DemoPaper>
                        </Box>
                    ) : (
                        products?.map((product: any) => (
                            <Grid
                                key={product.id}
                                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                            >
                                <ProductCard product={product} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Box>
        </Box>
    );
}
