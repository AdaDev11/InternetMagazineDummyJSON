export async function loginClient(payload: {
    username?: string;
    email?: string;
    password: string;
}) {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error("Login failed");
    }

    return res.json();
}
