import { useQuery } from "@tanstack/react-query";

export function useProduct(id: string | string[] | undefined) {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () =>
            fetch(`https://dummyjson.com/products/${id}`).then((res) =>
                res.json()
            ),
        enabled: !!id,
    });
}
