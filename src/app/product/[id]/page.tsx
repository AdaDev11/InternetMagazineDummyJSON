"use client";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ProductDetails from "../../../components/productDetails";
import RelatedProducts from "../../../components/reletedProducts";
import { useState } from "react";

import { use } from "react";

type PageProps = { params: Promise<{ id: string }> };

export default function ProductDetailsPage({ params }: PageProps) {
    const { id } = use(params);
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <ProductDetails id={id} />
            <RelatedProducts />
            <Footer />
        </div>
    );
}
