"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useRouter } from "next/navigation";

export interface Product {
    id: number;
    title: string;
    price: number;
    images?: string[];
    category?: string;
}

interface AddToCartButtonProps {
    product: Product;
    qty?: number;
}

export interface CartItem {
    id: number;
    title: string;
    price: number;
    qty: number;
    image?: string;
}

export default function AddToCartButton({
    product,
    qty = 1,
}: AddToCartButtonProps) {
    const addToCart = useCartStore((s) => s.addToCart);
    const router = useRouter();
    const token = useAuthStore.getState().token;

    // if (!token) {
    //     router.push("/login?redirect=/checkout");
    //     return;
    // }

    // Add to cart da error shigara berdi render waqtinda error dep sogan tomendegiler komentte tur
    // addToCart(product);
    // addToCart({
    //     ...product,
    //     quantity: qty,
    // });

    return (
        <button
            onClick={() =>
                addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.images?.[0],
                    qty: qty,
                })
            }
        >
            Add to Cart
        </button>
    );
}
