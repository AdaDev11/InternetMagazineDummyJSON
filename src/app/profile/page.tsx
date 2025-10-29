"use client";
import {
    Box,
    Typography,
    Button,
    Tabs,
    Tab,
    Divider,
    Paper,
    Grid,
    TextField,
    Stack,
    SvgIcon,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import { getUserProfile } from "../features/auth/service/getUserProfile";
import { useQuery } from "@tanstack/react-query";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
    return (
        <div hidden={value !== index}>
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

export default function Page() {
    const [value, setValue] = useState(0);
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["userProfile"],
        queryFn: getUserProfile,
    });

    if (isLoading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error.message}</Typography>;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: "90%", mx: "auto", mt: 4 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography sx={{ fontWeight: "bold", fontSize: "28px" }}>
                    My Profile
                </Typography>
                <Button
                    startIcon={<EditSquareIcon />}
                    sx={{
                        background: "black",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        "&:hover": { background: "#333" },
                    }}
                >
                    Edit Profile
                </Button>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Tabs
                value={value}
                onChange={handleChange}
                centered
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                    mx: "auto",
                    backgroundColor: "transparent",
                    "& .MuiTabs-flexContainer": {
                        justifyContent: "space-between",
                    },
                }}
            >
                <Tab
                    label="Profile"
                    sx={{
                        fontSize: "16px",
                        color: "black",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        mx: 1,
                        fontWeight: "bold",
                        backgroundColor: "#f5f5f5",
                        transition: "0.3s",
                        width: "30%",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                        "&.Mui-selected": {
                            backgroundColor: "black",
                            color: "white",
                            borderColor: "black",
                        },
                    }}
                />
                <Tab
                    label="Orders"
                    sx={{
                        fontSize: "16px",
                        color: "black",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        mx: 1,
                        fontWeight: "bold",
                        backgroundColor: "#f5f5f5",
                        transition: "0.3s",
                        width: "30%",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                        "&.Mui-selected": {
                            backgroundColor: "black",
                            color: "white",
                            borderColor: "black",
                        },
                    }}
                />
                <Tab
                    label="Settings"
                    sx={{
                        fontSize: "16px",
                        color: "black",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        mx: 1,
                        fontWeight: "bold",
                        backgroundColor: "#f5f5f5",
                        transition: "0.3s",
                        width: "30%",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                        "&.Mui-selected": {
                            backgroundColor: "black",
                            color: "white",
                            borderColor: "black",
                        },
                    }}
                />
            </Tabs>

            <TabPanel
                value={value}
                index={0}
                sx={{
                    marginTop: "20px",
                    pt: "20px",
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        display: "flex",
                        width: "100%",
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        border: "1px solid #ccc",
                        mt: 4,
                    }}
                >
                    <Box sx={{ width: "20%" }}>
                        <img
                            src={user.image}
                            alt={user.username}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: "50%",
                            }}
                        />
                    </Box>
                    <Stack
                        spacing={1}
                        sx={{
                            width: "70%",
                        }}
                    >
                        <Typography>
                            {user.firstName} {user.lastName}
                        </Typography>
                        <Typography color="text.secondary">
                            {user.email}
                        </Typography>
                        <Typography color="text.secondary">
                            {user.phone}
                        </Typography>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        p: 3,
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        display: "block",
                        mt: 4,
                        border: "1px solid #ccc",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 3,
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        👤 Personal Information
                    </Typography>

                    <Grid container spacing={3} sx={{ p: 2 }}>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <Typography sx={{ fontWeight: 500, mb: 1 }}>
                                First Name
                            </Typography>
                            <TextField
                                fullWidth
                                value={user?.firstName || ""}
                                variant="outlined"
                                size="small"
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>

                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <Typography sx={{ fontWeight: 500, mb: 1 }}>
                                Last Name
                            </Typography>
                            <TextField
                                fullWidth
                                value={user?.lastName || ""}
                                variant="outlined"
                                size="small"
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>

                        <Grid item size={{ xs: 12 }}>
                            <Typography sx={{ fontWeight: 500, mb: 1 }}>
                                Email
                            </Typography>
                            <TextField
                                fullWidth
                                value={user?.email || ""}
                                variant="outlined"
                                size="small"
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>

                        <Grid item size={{ xs: 12 }}>
                            <Typography sx={{ fontWeight: 500, mb: 1 }}>
                                Phone
                            </Typography>
                            <TextField
                                fullWidth
                                value={user?.phone || ""}
                                variant="outlined"
                                size="small"
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>

                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <Typography sx={{ fontWeight: 500, mb: 1 }}>
                                Age
                            </Typography>
                            <TextField
                                fullWidth
                                value={user?.age || ""}
                                variant="outlined"
                                size="small"
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>

                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <Typography sx={{ fontWeight: 500, mb: 1 }}>
                                Gender
                            </Typography>
                            <TextField
                                fullWidth
                                value={user?.gender || ""}
                                variant="outlined"
                                size="small"
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box
                    sx={{
                        p: 3,
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        display: "block",
                        mt: 4,
                        border: "1px solid #ccc",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            display: "flex",
                            gap: 1,
                            ml: -1,
                        }}
                    >
                        <LocationOnOutlinedIcon />
                        Address
                    </Typography>
                    <Stack spacing={1}>
                        <Typography>{user.address.address}</Typography>
                        <Typography>
                            {user.address.city}, {user.address.state},{" "}
                            {user.address.postalCode}
                        </Typography>
                        <Typography>{user.address.country}</Typography>

                        <Box></Box>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        p: 3,
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        display: "block",
                        mt: 4,
                        border: "1px solid #ccc",
                        mb: 8,
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            display: "flex",
                            gap: 1,
                        }}
                    >
                        Company Information
                    </Typography>

                    <Stack spacing={1}>
                        <Typography>{user.company.name}</Typography>
                        <Typography>{user.company.title}</Typography>
                        <Typography>{user.company.department}</Typography>
                    </Stack>
                </Box>
            </TabPanel>
            <TabPanel
                value={value}
                index={1}
                sx={{
                    marginTop: "20px",
                    pt: "20px",
                    height: "auto",
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        display: "block",
                        mt: 4,
                        border: "1px solid #ccc",
                        mb: 8,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "center",
                        }}
                    >
                        <ListAltIcon />
                        <Typography variant="h6">Orders</Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        Here you can see your past and active orders.
                    </Typography>
                </Box>
            </TabPanel>
            <TabPanel
                value={value}
                index={2}
                sx={{
                    marginTop: "20px",
                    pt: "20px",
                }}
            >
                <Typography variant="h6">⚙ Settings</Typography>
                <Typography sx={{ mt: 1 }}>
                    Manage your account and privacy preferences.
                </Typography>
            </TabPanel>
        </Box>
    );
}
