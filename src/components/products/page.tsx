"use client";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../services/getAllProduct";
import { useSearchFunction } from "../../hooks/useSearchFunction";
import Filters from "./components/filters";
import { Button, Box, Grid, useMediaQuery, Drawer } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductList from "./components/ProductList";
import { searchFunction } from "./../../services/Search";

export default function AllProductsPage({ searchValue, category, sort }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 12;
    const [filters, setFilters] = useState({
        search: "",
        sort: "",
        category: "",
    });
    const { data: searchData, isLoading: searchLoading } =
        useSearchFunction(searchValue);
    const isMobile = useMediaQuery("(max-width: 900px)");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setPage(1);
    }, [searchValue, category, sort]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const skip = (page - 1) * limit;
            const params = {
                category: filters.category || "",
                search: searchValue || filters.search || "",
                sortBy: filters.sort || "",
                order: "asc",
                limit,
                skip,
            };

            console.log("Fetching products whis params:", params);
            try {
                let endpoint = "/products";

                if (searchValue) endpoint = `/products/search?q=${searchValue}`;
                else if (category) endpoint = `/products/category/${category}`;
                else if (sort) endpoint = `/products?sortBy=${sort}&order=asc`;

                const data = await getAllProducts(params);
                setProducts(data.products);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchValue, filters.category, filters.sort, filters.search, page]);

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "250px 8fr",
                },
                width: "100%",
            }}
        >
            {isMobile && (
                <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                    sx={{
                        position: "fixed",
                        top: 16,
                        left: 16,
                        zIndex: 1200,
                    }}
                >
                    Filters
                </Button>
            )}

            {!isMobile ? (
                <Box>
                    <Filters filters={filters} setFilters={setFilters} />
                </Box>
            ) : (
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Box sx={{ width: "250px", p: 2 }}>
                        <Button>
                            <Filters
                                filters={filters}
                                setFilters={setFilters}
                            />
                        </Button>
                    </Box>
                </Drawer>
            )}

            <Box
                sx={{
                    py: 4,
                    px: { xs: 2, sm: 4, md: 6 },
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "1400px", // sahifani cheklaydi va markazga joylashtiradi
                    }}
                >
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ProductList products={products} />
                    )}

                    {/* Pagination */}
                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Button
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        >
                            <ArrowBackIosIcon />
                        </Button>
                        <span>Page: {page}</span>
                        <Button onClick={() => setPage((p) => p + 1)}>
                            <ArrowForwardIosIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
