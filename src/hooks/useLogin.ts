import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/lib/api";
import { useAuthStore } from "@/stores/useAuthStore";

export function useLogin() {
    const login = useAuthStore((s) => s.login);

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            console.log("LOGIN SUCCESS DATA:", data);
            console.log("LOGIN SUCCESS TOKEN:", data.accessToken);
            login(data.token, data.id);
            localStorage.setItem("token", data.accessToken);
        },
        onError: (err) => {
            console.error("LOGIN ERROR:", err);
        },
    });
}
