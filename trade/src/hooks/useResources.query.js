import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getData, getList } from "../api/resources.api.js";

export function useGetList() {
    return useQuery({
        queryKey: ["getList"],
        queryFn: () => getList()
    })
}

export function useGetData(id) {
    return useQuery({
        queryKey: ["getData", id],
        queryFn: () => getData(id)
    })
}