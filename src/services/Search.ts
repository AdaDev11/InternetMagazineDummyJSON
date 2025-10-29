export const searchFunction = async (searchValue: string) => {
    if (!searchValue) return null;
    const res = await fetch(
        `https://dummyjson.com/products/search?q=${searchValue}`
    );
    if (!res.ok) throw new Error("Error search!");
    return res.json();
};
