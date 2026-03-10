"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/header";
import AllProductsPage from "../../components/products/page";
import Footer from "../../components/footer";

type Params = {
    products: string;
};

export default function Page({ params }: { params: Params }) {
    const { products } = params;

    const [searchValue, setSearchValue] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("asc");

    return (
        <Box sx={{ width: "100%" }}>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />

            <AllProductsPage
                searchValue={searchValue}
                category={category}
                sort={sort}
            />

            <Footer />
        </Box>
    );
}
