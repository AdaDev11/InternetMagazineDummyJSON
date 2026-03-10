"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product, qty }) {
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
