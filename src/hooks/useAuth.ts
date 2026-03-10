"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loginClient } from "@/services/authClient";
import { useAuthStore } from "@/stores/useAuthStore";

// Fetch wrapper with auth token
async function authFetch(url: string) {
    const accessToken = localStorage.getItem("accessToken");
    return fetch(url, {
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
    });
}

export function useLogin() {
    const setTokens = useAuthStore((s) => s.setTokens);
    const setUser = useAuthStore((s) => s.setUser);
    const qc = useQueryClient();

    return useMutation({
        mutationFn: loginClient,
        onSuccess: (data) => {
            setTokens(data.accessToken, data.refreshToken);
            setUser(data.user || data);
            qc.invalidateQueries({ queryKey: ["userProfile"] });
        },
    });
}

export function useUserProfile() {
    const setUser = useAuthStore((s) => s.setUser);

    return useQuery({
        queryKey: ["userProfile"],
        queryFn: async () => {
            const res = await authFetch("https://dummyjson.com/auth/me");
            if (!res.ok) throw new Error("Failed to fetch profile");
            const data = await res.json();
            setUser(data);
            return data;
        },
        retry: false,
    });
}
