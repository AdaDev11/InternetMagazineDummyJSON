import { searchFunction } from "./../services/Search";
import { useQuery } from "@tanstack/react-query";

export function useSearchFunction(searchValue: string) {
    return useQuery({
        queryKey: ["searchProducts", searchValue],
        queryFn: () => searchFunction(searchValue),
        enabled: !!searchValue,
    });
}
