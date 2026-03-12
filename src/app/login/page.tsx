"use client";
import { useState } from "react";
import { Box, Input, Button, Typography } from "@mui/material";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";

export default function Page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const { mutate, isLoading } = useLogin();
    const { mutate, isPending: isLoading } = useLogin();
    const router = useRouter();

    return (
        <Box
            component="form"
            onSubmit={(e) => {
                e.preventDefault();
                mutate(
                    { username, password },
                    {
                        onSuccess: () => router.push("/profile"),
                    }
                );
            }}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" disabled={isLoading}>
                {isLoading ? "Loading..." : "Log in"}
            </Button>
        </Box>
    );
}
