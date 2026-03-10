export type LoginCredentials = {
    username: string;
    password: string;
};

export type LoginResponse = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    [key: string]: any;
};

export async function loginUser({
    username,
    password,
}: LoginCredentials): Promise<LoginResponse> {
    if (typeof window === "undefined") {
        throw new Error("loginUser can only be called in the browser");
    }

    const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.message || "Login failed");
    }

    const data: LoginResponse = await res.json();

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data));

    return data;
}
