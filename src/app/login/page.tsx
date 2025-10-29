"use client";
import { useState } from "react";
import { loginUser } from "../features/auth/service/authService";
import { useRouter } from "next/navigation";
import { Box, Input, Button, Typography } from "@mui/material";

export default function Page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser({ username, password });
            router.push("/profile");
        } catch (err) {
            setError("Login failed");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 300,
                margin: "100px auto",
            }}
        >
            <Typography variant="h5" textAlign="center">
                Login
            </Typography>

            <Input
                placeholder="Username"
                sx={{ border: "1px solid black", borderRadius: 1, px: 1 }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                placeholder="Password"
                type="password"
                sx={{ border: "1px solid black", borderRadius: 1, px: 1 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
                <Typography color="error" fontSize="0.9rem" textAlign="center">
                    {error}
                </Typography>
            )}

            <Button
                type="submit" // ✅ MUHIM: bu button submit bo‘lishi kerak
                variant="contained"
            >
                Log in
            </Button>
        </Box>
    );
}
