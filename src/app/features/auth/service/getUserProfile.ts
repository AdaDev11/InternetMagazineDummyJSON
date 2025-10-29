export const getUserProfile = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) throw new Error("No token found");

    const res = await fetch("https://dummyjson.com/auth/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
};
