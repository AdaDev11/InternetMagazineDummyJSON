export async function loginUser({ username, password }) {
    const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();

    if (res.ok) {
        localStorage.setItem("accessToken", data.accessToken);
        return data;
    } else {
        throw new Error(data.message || "Login failed");
    }

    // localStorage.setItem("token", data.token);
    // localStorage.setItem("user", JSON.stringify(data));

    // localStorage.setItem("tokenExpiry", Date.now() + 30 * 60 * 1000);

    return data;
}
