"use client";
import { useQuery } from "@tanstack/react-query";
import { getNewArrivalProducts } from "../services/GetNewArrivalProducts";

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

export function useProductNewArrivalProducts() {
    return useQuery<Product[]>({
        queryKey: ["newArrivalProducts"],
        // queryFn: getNewArrivalProducts,
        queryFn: async () => {
            const data = await getNewArrivalProducts();
            return data.products ?? [];
        },
    });
}
