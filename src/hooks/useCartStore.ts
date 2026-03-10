"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist((set) => ({
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

                    if (type === "inc") return { ...item, qty: item.qty + 1 };
                    if (type === "dec" && item.qty > 1)
                        return { ...item, qty: item.qty - 1 };

                    return item;
                }),
            })),

        removeItem: (id) =>
            set((state) => ({
                items: state.items.filter((i) => i.id !== id),
            })),
    }))
);
