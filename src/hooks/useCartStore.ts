"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
    id: number;
    title: string;
    price: number;
    qty: number;
    image?: string;
}

// Store interfeysi
interface CartState {
    items: CartItem[];
    addToCart: (product: CartItem) => void;
    updateQuantity: (id: number, type: "inc" | "dec") => void;
    removeItem: (id: number) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],

            addToCart: (product) =>
                set((state) => {
                    const exist = state.items.find((i) => i.id === product.id);

                    if (exist) {
                        return {
                            items: state.items.map((i) =>
                                i.id === product.id
                                    ? { ...i, qty: i.qty + product.qty }
                                    : i
                            ),
                        };
                    }

                    return {
                        items: [...state.items, { ...product, qty: 1 }],
                    };
                }),

            updateQuantity: (id, type) =>
                set((state) => ({
                    items: state.items.map((item) => {
                        if (item.id !== id) return item;

                        if (type === "inc")
                            return { ...item, qty: item.qty + 1 };
                        if (type === "dec" && item.qty > 1)
                            return { ...item, qty: item.qty - 1 };

                        return item;
                    }),
                })),

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                })),
        }),
        {
            name: "cart-storage",
        }
    )
);
