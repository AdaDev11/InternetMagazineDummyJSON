export interface GetAllProductsParams {
    limit?: number;
    skip?: number;
    category?: string;
    search?: string;
    sortBy?: string;
    order?: string;
    select?: string;
}

export const getAllProducts = async ({
    limit,
    skip,
    category,
    search,
    sortBy,
    order,
    select,
}: GetAllProductsParams = {}): Promise<any> => {
    let url = "https://dummyjson.com/products";

    if (search) {
        url = `https://dummyjson.com/products/search`;
    } else if (category) {
        url = `https://dummyjson.com/products/category/${encodeURIComponent(
            category
        )}`;
    }

    const params = new URLSearchParams();

    if (limit !== null) params.append("limit", String(limit));
    if (skip !== null) params.append("skip", String(skip));
    if (select) params.append("select", select);
    if (search) params.append("q", search);
    if (sortBy) params.append("sortBy", sortBy);
    if (order) params.append("order", order);

    const fullUrl = params.toString() ? `${url}?${params.toString()}` : url;

    const res = await fetch(fullUrl);
    if (!res.ok) throw new Error(`Failed fetch to data: ${res.status}`);
    return res.json();
};
