"use client";

import {
    Box,
    Typography,
    Button,
    Tabs,
    Tab,
    Divider,
    Grid,
    TextField,
    Stack,
    Checkbox,
} from "@mui/material";
import { useState, useEffect } from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useUserOrders } from "@/hooks/useUserOrders";

export default function MainPage() {
    const [value, setValue] = useState(0);
    const { data: user, isLoading, error } = useUserProfile();
    const [mounted, setMounted] = useState(false);
    const { data: orders } = useUserOrders(user?.id ?? 0);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    if (isLoading) return <Typography>Loading...</Typography>;
    if (error)
        return <Typography color="error">Error loading profile</Typography>;
    if (!user) return null;

    return (
        <Box sx={{ width: "90%", mx: "auto", mt: 4 }}>
            {/* Header */}
            <Box display="flex" justifyContent="space-between">
                <Typography fontSize={28} fontWeight="bold">
                    My Profile
                </Typography>
                <Button
                    startIcon={<ModeOutlinedIcon />}
                    sx={{
                        background: "black",
                        color: "white",
                        borderRadius: "8px",
                        textTransform: "none",
                    }}
                >
                    Edit Profile
                </Button>
            </Box>

            {/* Tabs */}
            <Tabs value={value} onChange={(_, v) => setValue(v)} centered>
                <Tab label="Profile" />
                <Tab label="Orders" />
                <Tab label="Settings" />
            </Tabs>

            {/* Profile Tab */}
            {value === 0 && (
                <>
                    <Box
                        p={2}
                        sx={{
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            mt: 4,
                        }}
                        display="flex"
                        gap={2}
                        alignItems="center"
                    >
                        <img
                            src={user.image}
                            alt={user.username}
                            width={100}
                            height={100}
                            style={{ borderRadius: "50%" }}
                        />
                        <Stack>
                            <Typography>
                                {user.firstName} {user.lastName}
                            </Typography>
                            <Typography>{user.email}</Typography>
                            <Typography>{user.phone}</Typography>
                        </Stack>
                    </Box>

                    <Box
                        mt={4}
                        p={2}
                        sx={{ borderRadius: "4px", border: "1px solid #ccc" }}
                    >
                        <Typography fontWeight="bold" mb={2}>
                            <PersonOutlineOutlinedIcon /> Personal Information
                        </Typography>
                        <Grid container spacing={2}>
                            {[
                                { label: "First name", value: user.firstName },
                                { label: "Last name", value: user.lastName },
                                { label: "Email", value: user.email },
                                { label: "Phone", value: user.phone },
                                { label: "Age", value: user.age },
                                { label: "Gender", value: user.gender },
                            ].map((field) => (
                                <Grid item xs={12} sm={6} key={field.label}>
                                    <Typography>{field.label}</Typography>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={field.value}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box
                        mt={4}
                        p={2}
                        sx={{ borderRadius: "4px", border: "1px solid #ccc" }}
                    >
                        <Typography fontWeight="bold" display="flex" gap={1}>
                            <LocationOnOutlinedIcon /> Address
                        </Typography>
                        <Typography>{user.address.address}</Typography>
                        <Typography>
                            {user.address.city}, {user.address.state}
                        </Typography>
                    </Box>

                    <Box
                        mt={4}
                        p={2}
                        sx={{ borderRadius: "4px", border: "1px solid #ccc" }}
                    >
                        <Typography fontWeight="bold">
                            Company Information
                        </Typography>
                        <Typography>{user.company.name}</Typography>
                        <Typography>{user.company.title}</Typography>
                        <Typography>{user.company.department}</Typography>
                    </Box>
                </>
            )}

            {/* Orders Tab */}
            {value === 1 && (
                <Box mt={4}>
                    <Typography>Orders</Typography>
                    {orders?.carts?.map((cart: any) => (
                        <Box
                            key={cart.id}
                            sx={{
                                border: "1px solid #ddd",
                                p: 2,
                                mb: 2,
                                borderRadius: "6px",
                            }}
                        >
                            <Typography fontWeight="bold">
                                Order #{cart.id}
                            </Typography>
                            {cart.products.map((product: any) => (
                                <Box
                                    key={product.id}
                                    display="flex"
                                    justifyContent="space-between"
                                    mt={1}
                                >
                                    <Typography>{product.title}</Typography>
                                    <Typography>
                                        {product.quantity} × ${product.price}
                                    </Typography>
                                </Box>
                            ))}
                            <Typography mt={2} fontWeight="bold">
                                Total: ${cart.total}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}

            {/* Settings Tab */}
            {value === 2 && (
                <Box
                    mt={4}
                    sx={{ border: "1px solid #ddd", p: 2, borderRadius: "6px" }}
                >
                    <Typography fontWeight="bold" mb={2}>
                        <SettingsOutlinedIcon /> Account Settings
                    </Typography>
                    <Box display="flex" alignItems="center" mt={2}>
                        <Checkbox />
                        <Typography>Email notifications for orders</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                        <Checkbox />
                        <Typography>
                            SMS notifications for shipping updates
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                        <Checkbox />
                        <Typography>Marketing emails</Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box display="flex" alignItems="center" mt={1}>
                        <Checkbox />
                        <Typography>Make profile public</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                        <Checkbox />
                        <Typography>
                            Allow data collection for analytics
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Button
                        sx={{
                            background: "red",
                            color: "white",
                            textTransform: "none",
                        }}
                    >
                        Delete Account
                    </Button>
                </Box>
            )}
        </Box>
    );
}
