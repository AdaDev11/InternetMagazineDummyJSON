"use client";
import { useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ProductDetails from "../../../components/productDetails";
import RelatedProducts from "../../../components/reletedProducts";

export default function ProductDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <ProductDetails id={params.id} />
            <RelatedProducts />
            <Footer />
        </div>
    );
}
