import Link from "next/link";
import Header from "../components/header";
import "../style/style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Hero from "../components/hero";
import Footer from "../components/footer";
import FeaturedProducts from "../components/featuredProducts";
import NewArrivals from "../components/newArrivals";
import ByCategory from "../components/byCategory";
import ModalCard from "../components/ModalCard";
import { useState } from "react";

export default function Home() {
    return (
        <div>
            <Header />
            <ModalCard />
            <Hero />
            <ByCategory />
            <FeaturedProducts />
            <NewArrivals />
            <Footer />
        </div>
    );
}
