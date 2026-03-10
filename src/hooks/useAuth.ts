"use client";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { loginClient, getMeClient } from "@/services/authClient";
import { useAuthStore } from "@/stores/useAuthStore";
export function useLogin() {
    const setTokens = useAuthStore((s) => s.setTokens);
    const setUser = useAuthStore((s) => s.setUser);
    const qc = useQueryClient();

    return useMutation({
        mutationFn: loginClient,
        onSuccess: (data) => {
            setTokens(data.accessToken, data.refreshToken);
            setUser(data);
            qc.invalidateQueries(["userProfile"]);
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
            console.log("data.token", data.token);
            console.log(
                "localStorage token",
                localStorage.getItem("accessToken")
            );
        },
        retry: false,
    });
}
