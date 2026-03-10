export async function getUserProfile(token: string) {
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
