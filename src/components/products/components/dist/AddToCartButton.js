"use client";
"use strict";
exports.__esModule = true;
var useCartStore_1 = require("@/hooks/useCartStore");
var useAuthStore_1 = require("@/hooks/useAuthStore");
var navigation_1 = require("next/navigation");
function AddToCartButton(_a) {
    var product = _a.product, _b = _a.qty, qty = _b === void 0 ? 1 : _b;
    var addToCart = useCartStore_1.useCartStore(function (s) { return s.addToCart; });
    var router = navigation_1.useRouter();
    var token = useAuthStore_1.useAuthStore.getState().token;
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
    return (React.createElement("button", { onClick: function () {
            var _a;
            return addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: (_a = product.images) === null || _a === void 0 ? void 0 : _a[0],
                qty: qty
            });
        } }, "Add to Cart"));
}
exports["default"] = AddToCartButton;
