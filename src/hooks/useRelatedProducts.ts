import { useQuery } from "@tanstack/react-query";

export function useRelatedProducts(category: string | undefined) {
    return useQuery({
        queryKey: ["category", category],
        queryFn: () =>
            fetch(`https://dummyjson.com/products/category/${category}`).then(
                (res) => res.json()
            ),
        enabled: !!category,
    });
}
