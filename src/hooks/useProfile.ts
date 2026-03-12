import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/lib/api";
import { useAuthStore } from "@/stores/useAuthStore";

export function useProfile() {
    // const token = useAuthStore((s) => s.token);
    const token = useAuthStore((s) => s.accessToken);

    return useQuery({
        queryKey: ["profile", token],
        queryFn: () => {
            if (!token) throw new Error("No token");
            return getProfile(token);
        },
        enabled: !!token,
    });
}
