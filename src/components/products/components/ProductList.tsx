import Link from "next/link";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
    return (
        <Grid
            container
            spacing={4}
            sx={{
                mt: 2,
                mx: "auto",
                width: "100%",
                maxWidth: "1200px",
                px: { xs: 1, sm: 2, md: 3 },
            }}
        >
            {products?.map((product) => (
                <Grid item xs={6} sm={3} md={3} key={product.id}>
                    <Link
                        href={`/product/${product.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <ProductCard product={product} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}
