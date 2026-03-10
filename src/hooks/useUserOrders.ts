"use client";
import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "@/services/cart";

export function useUserOrders(userId: number) {
    return useQuery({
        queryKey: ["orders", userId],
        queryFn: () => getUserOrders(userId),
        enabled: !!userId,
    });
}
