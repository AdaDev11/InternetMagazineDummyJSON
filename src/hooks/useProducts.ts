import { getAllProducts } from "./../services/getAllProduct";
import { useQuery } from "@tanstack/react-query";

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

export function useProducts({ filter }: { filter: string }) {
    return useQuery<Product[]>({
        queryKey: ["products", filter],
        queryFn: () => getAllProducts(filter),
        keepPreviousData: true,
    });
}
