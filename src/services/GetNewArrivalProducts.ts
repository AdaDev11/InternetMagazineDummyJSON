export const getNewArrivalProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=8&skip=12");
    return res.json();
};
