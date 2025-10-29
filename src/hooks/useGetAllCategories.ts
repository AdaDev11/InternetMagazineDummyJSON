"use client";
import { getProductAllCategories } from "./../services/GetAllCategories";
import { useQuery } from "@tanstack/react-query";

type Category = {
    slug: string;
    name: string;
    url: string;
};

export function useProductAllCategories() {
    return useQuery<Category[]>({
        queryKey: ["productAllCategories"],
        queryFn: getProductAllCategories,
    });
}
