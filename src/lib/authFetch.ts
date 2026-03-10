import { useAuthStore } from "@/stores/useAuthStore";

export async function doRefresh(): Promise<{
    accessToken: string;
    refreshToken?: string;
} | null> {
    try {
        const refreshToken = localStorage.getItem("zustand:auth-storage")
            ? JSON.parse(localStorage.getItem("zustand:auth-storage")!)
                  .refreshToken
            : null;
        if (!refreshToken) return null;

        const res = await fetch("/api/auth/refresh", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken }),
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data;
    } catch {
        return null;
    }
}

export async function authFetch(input: RequestInfo, init?: RequestInit) {
    const stored = localStorage.getItem("zustand:auth-storage");
    const token = stored ? JSON.parse(stored).accessToken : null;

    const headers = new Headers(init?.headers || {});
    if (token) headers.set("Authorization", `Bearer ${token}`);
    headers.set(
        "Content-Type",
        headers.get("Content-Type") || "application/json"
    );

    let res = await fetch(input, { ...init, headers });

    if (res.status === 401) {
        const newTokens = await doRefresh();
        if (newTokens?.accessToken) {
            const existing = stored ? JSON.parse(stored) : {};
            const next = {
                ...existing,
                accessToken: newTokens.accessToken,
                refreshToken: newTokens.refreshToken ?? existing.refreshToken,
            };
            localStorage.setItem("zustand:auth-storage", JSON.stringify(next));

            const headers2 = new Headers(init?.headers || {});
            headers2.set("Authorization", `Bearer ${newTokens.accessToken}`);
            headers2.set(
                "Content-Type",
                headers2.get("Content-Type") || "application/json"
            );
            res = await fetch(input, { ...init, headers: headers2 });
        }
    }

    return res;
}
