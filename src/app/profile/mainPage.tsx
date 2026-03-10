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
import { useUserProfile } from "@/hooks/useUserProfile";
import { StartShopping } from "../../components/startShopping";
import Header from "@/components/header";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useUserOrders } from "@/hooks/useUserOrders";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function MainPage() {
    const [value, setValue] = useState(0);
    const { data: user, isLoading, error } = useUserProfile();
    const [mounted, setMounted] = useState(false);
    const { data: orders } = useUserOrders(user?.id);

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
            <Box display="flex" justifyContent="space-between">
                <Typography
                    fontSize={28}
                    fontWeight="bold"
                    sx={{ fontFamily: "Roboto" }}
                >
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

            <Tabs value={value} onChange={(_, v) => setValue(v)} centered>
                <Tab label="Profile" />
                <Tab label="Orders" />
                <Tab label="Settings" />
            </Tabs>

            {value === 0 && (
                <>
                    <Box
                        mt={8}
                        p={2}
                        sx={{ borderRadius: "4px", border: "1px solid #cccc" }}
                        mt={4}
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
                        mt={8}
                        p={2}
                        sx={{ borderRadius: "4px", border: "1px solid #cccc" }}
                    >
                        <Typography fontWeight="bold" mb={2}>
                            <span>
                                <PersonOutlineOutlinedIcon />
                            </span>
                            Personal Information
                        </Typography>

                        <Grid container spacing={2} mt={1}>
                            <Grid item size={{ sm: 6, xs: 12 }}>
                                <Typography>First name</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={user.firstName}
                                />
                            </Grid>
                            <Grid item size={{ sm: 6, xs: 12 }}>
                                <Typography>Last name</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={user.lastName}
                                />
                            </Grid>
                            <Grid item size={{ sm: 6, xs: 12 }}>
                                <Typography>Email</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={user.email}
                                />
                            </Grid>

                            <Grid item size={{ sm: 6, xs: 12 }}>
                                <Typography>Phone</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={user.phone}
                                />
                            </Grid>
                            <Grid item size={{ sm: 6, xs: 12 }}>
                                <Typography>Age</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={user.age}
                                />
                            </Grid>
                            <Grid item size={{ sm: 6, xs: 12 }}>
                                <Typography>Gender</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={user.gender}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box
                        mt={8}
                        p={2}
                        sx={{ borderRadius: "4px", border: "1px solid #cccc" }}
                    >
                        <Typography
                            mt={2}
                            fontWeight="bold"
                            display="flex"
                            gap={1}
                        >
                            <LocationOnOutlinedIcon /> Address
                        </Typography>
                        <Typography mt={1}>{user.address.address}</Typography>
                        <Typography mt={1}>
                            {user.address.city}, {user.address.state}
                        </Typography>
                    </Box>

                    <Box
                        mt={8}
                        p={2}
                        sx={{ borderRadius: "4px", border: "1px solid #cccc" }}
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

            {value === 2 && (
                <Box mt={4}>
                    <Box
                        sx={{
                            border: "1px solid #ddd",
                            p: 2,
                            mb: 2,
                            borderRadius: "6px",
                        }}
                    >
                        <Typography fontWeight="bold" mb={2}>
                            <span>
                                <SettingsOutlinedIcon />
                            </span>
                            Account Settings
                        </Typography>

                        <Typography>Notifications</Typography>
                        <Grid>
                            <Box
                                display="flex"
                                mt={2}
                                sx={{ alignItems: "center" }}
                            >
                                <Checkbox />
                                <Typography>
                                    Email notifications for orders
                                </Typography>
                            </Box>

                            <Box display="flex" sx={{ alignItems: "center" }}>
                                <Checkbox />
                                <Typography>
                                    SMS notifications for shipping updates
                                </Typography>
                            </Box>

                            <Box display="flex" sx={{ alignItems: "center" }}>
                                <Checkbox />
                                <Typography>Marketing emails</Typography>
                            </Box>
                        </Grid>

                        <Divider />

                        <Grid mt={2}>
                            <Typography>Privacy</Typography>

                            <Box
                                display="flex"
                                mt={2}
                                sx={{ alignItems: "center" }}
                            >
                                <Checkbox />
                                <Typography>Make profile public</Typography>
                            </Box>

                            <Box display="flex" sx={{ alignItems: "center" }}>
                                <Checkbox />
                                <Typography>
                                    Allow data collection for analytics
                                </Typography>
                            </Box>
                        </Grid>

                        <Divider />

                        <Grid mt={2}>
                            <Typography>Danger Zone</Typography>

                            <Button
                                sx={{
                                    background: "red",
                                    color: "white",
                                    marginTop: "1%",
                                    textTransform: "none",
                                }}
                            >
                                Delet Account
                            </Button>
                        </Grid>
                    </Box>
                </Box>
            )}
        </Box>
    );
}
