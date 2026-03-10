"use client";

import { useMutation } from "@tanstack/react-query";

async function addProduct(data: any) {
    const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to add product");
    }

    return res.json();
}

export function useAddProduct() {
    return useMutation({
        mutationFn: addProduct,
    });
}
