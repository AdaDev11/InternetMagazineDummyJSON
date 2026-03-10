"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/lib/api";
import type { User } from "@/types/user";

export function useUserProfile() {
    const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

    return useQuery<User>({
        queryKey: ["me"],
        queryFn: () => getProfile(token!),
        enabled: !!token,
    });
}
