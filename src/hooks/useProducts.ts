"use client";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (category?: string, sort?: string) => {
    return useQuery({
        queryKey: ["products", category, sort],
        queryFn: async () => {
            let url = `/api/products`;
            if (category) url += `?category=${category}`;
            if (sort) url += `&sort=${sort}`;

            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch products");
            return res.json();
        },
    });
};
