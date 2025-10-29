export function checkTokenExpiry() {
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    if (!tokenExpiry) return false;

    const now = Date.now();
    return now < Number(tokenExpiry);
}

export function isLoggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}
