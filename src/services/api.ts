export const getProducts = async (endpoint: string) => {
    const baseURL = "https://dummyjson.com";
    const res = await fetch(`${baseURL}${endpoint}}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
};
