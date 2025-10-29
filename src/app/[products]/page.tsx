"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/header";
import AllProductsPage from "../../components/products/page";
import Footer from "../../components/footer";

export default function Page({ params }: { params: { products: string } }) {
    const [searchValue, setSearchValue] = useState("");

    return (
        <Box sx={{ width: "100%" }}>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <AllProductsPage searchValue={searchValue} />
            <Footer />
        </Box>
    );
}
