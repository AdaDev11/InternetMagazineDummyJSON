"use client";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "./../services/GetFeaturedProducts";

interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    sku: string;
    dimensions: Dimensions;
    warrantyInformation: string;
    images: string[];
};

export function useProductFeaturedProducts() {
    return useQuery<Product[]>({
        queryKey: ["featuredProducts"],
        queryFn: getFeaturedProducts,
    });
}
