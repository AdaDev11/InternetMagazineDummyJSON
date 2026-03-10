"use client";

import { useMutation } from "@tanstack/react-query";
import { submitCart } from "@/lib/api";

export function useSubmitCart() {
    return useMutation({
        mutationFn: submitCart,
    });
}
