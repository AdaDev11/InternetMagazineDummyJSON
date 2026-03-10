"use client";
import create from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
    id: number;
    title: string;
    price: number;
    qty: number;
    image?: string;
};

type CartState = {
    items: CartItem[];
    add: (item: CartItem) => void;
    remove: (id: number) => void;
    updateQty: (id: number, qty: number) => void;
    clear: () => void;
    total: () => number;
};

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            add: (item) => {
                const found = get().items.find((i) => i.id === item.id);
                if (found) {
                    set({
                        items: get().items.map((i) =>
                            i.id === item.id
                                ? { ...i, qty: i.qty + item.qty }
                                : i
                        ),
                    });
                } else {
                    set({ items: [...get().items, item] });
                }
            },
            remove: (id) =>
                set({ items: get().items.filter((i) => i.id !== id) }),
            updateQty: (id, qty) =>
                set({
                    items: get().items.map((i) =>
                        i.id === id ? { ...i, qty } : i
                    ),
                }),
            clear: () => set({ items: [] }),
            total: () =>
                get().items.reduce((s, it) => s + it.price * it.qty, 0),
        }),
        { name: "cart-storage" }
    )
);
