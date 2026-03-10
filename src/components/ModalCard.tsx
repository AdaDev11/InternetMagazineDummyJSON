"use client";
import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ModalCard({
    open,
    onClose,
    cart = [],
    updateQty,
    removeItem,
}) {
    const safeCart = cart || [];

    const total = safeCart.reduce(
        (sum, item) => sum + item.price * item.qty || 1,
        0
    );

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box
                sx={{
                    width: 420,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                    }}
                >
                    <Typography variant="h6">Shopping Cart</Typography>
                    <IconButton onClick={() => onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Typography variant="body2" sx={{ mb: 2 }}>
                    {safeCart.length} items in your cart
                </Typography>

                <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
                    {safeCart.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: 2,
                                mb: 2,
                                border: "1px solid #ddd",
                                borderRadius: 2,
                            }}
                        >
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <img
                                    src={item?.image}
                                    width={60}
                                    height={60}
                                    style={{ borderRadius: 8 }}
                                />
                                <Box>
                                    <Typography>{item.title}</Typography>
                                    <Typography fontWeight="bold">
                                        ${item.price}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <IconButton
                                    onClick={() => updateQty(item.id, "dec")}
                                >
                                    <RemoveIcon />
                                </IconButton>

                                <Typography>{item.qty || 1}</Typography>

                                <IconButton
                                    onClick={() => updateQty(item.id, "inc")}
                                >
                                    <AddIcon />
                                </IconButton>

                                <IconButton onClick={() => removeItem(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 2,
                        }}
                    >
                        <Typography fontWeight="bold">Total:</Typography>
                        <Typography fontWeight="bold">
                            ${total.toFixed(2)}
                        </Typography>
                    </Box>

                    <Button fullWidth variant="contained">
                        Proceed to Checkout
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
}
