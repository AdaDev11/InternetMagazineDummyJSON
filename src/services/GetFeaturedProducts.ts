export const getFeaturedProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=8");
    return res.json();
};
