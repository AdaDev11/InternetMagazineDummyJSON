export async function loginUser(body: { username: string; password: string }) {
    const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        throw new Error("Login failed");
    }

    return res.json();
}

export async function getProfile(token: string) {
    const res = await fetch("https://dummyjson.com/auth/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error("Unauthorized");
    }

    return res.json();
}
