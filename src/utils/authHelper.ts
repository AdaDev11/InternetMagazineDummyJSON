export function getAccessToken() {
    return typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
}

export function getTokenExpiry() {
    return typeof window !== "undefined"
        ? localStorage.getItem("tokenExpiry")
        : null;
}

export function isLoggedIn() {
    const token = getAccessToken();
    if (!token) return false;

    const expiry = getTokenExpiry();
    if (expiry) {
        return Date.now() < Number(expiry);
    }

    return true;
}

export function saveAuth({ accessToken, expiresInSeconds }) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem(
        "tokenExpiry",
        String(Date.now() + expiresInSeconds * 1000)
    );
}

export function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenExpiry");
}
