export async function getUserOrders(userId: number) {
    const res = await fetch(`https://dummyjson.com/carts/user/${userId}`);

    if (!res.ok) {
        throw new Error("Failed to fetch orsers");
    }

    return res.json();
    console.log("res:", res);
}
