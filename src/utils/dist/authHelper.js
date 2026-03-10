"use strict";
exports.__esModule = true;
exports.logout = exports.saveAuth = exports.isLoggedIn = exports.getTokenExpiry = exports.getAccessToken = void 0;
function getAccessToken() {
    return typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
}
exports.getAccessToken = getAccessToken;
function getTokenExpiry() {
    return typeof window !== "undefined"
        ? localStorage.getItem("tokenExpiry")
        : null;
}
exports.getTokenExpiry = getTokenExpiry;
function isLoggedIn() {
    var token = getAccessToken();
    if (!token)
        return false;
    var expiry = getTokenExpiry();
    if (expiry) {
        return Date.now() < Number(expiry);
    }
    return true;
}
exports.isLoggedIn = isLoggedIn;
function saveAuth(_a) {
    var accessToken = _a.accessToken, expiresInSeconds = _a.expiresInSeconds;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("tokenExpiry", String(Date.now() + expiresInSeconds * 1000));
}
exports.saveAuth = saveAuth;
function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenExpiry");
}
exports.logout = logout;
