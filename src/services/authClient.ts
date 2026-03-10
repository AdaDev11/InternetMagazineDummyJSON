import { authFetch } from "@/lib/authFetch";

export async function loginClient(payload: {
    username?: string;
    password: string;
}) {
    const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: payload.username,
            password: payload.password,
        }),
    });

    if (!res.ok) throw new Error("Login failed");
    return res.json();
}

export async function getMeClient() {
    const res = await authFetch("https://dummyjson.com/auth/me");
    if (!res.ok) throw new Error("Me fetch failed");
    return res.json();
}
