"use client";
import { useQuery } from "@tanstack/react-query";

export const useUserOrders = (userId: number) => {
    return useQuery({
        queryKey: ["userOrders", userId],
        queryFn: async () => {
            const res = await fetch(
                `https://dummyjson.com/users/${userId}/carts`
            );
            if (!res.ok) throw new Error("Failed to fetch orders");
            return res.json();
        },
        enabled: !!userId,
    });
};
