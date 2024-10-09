import { useQuery } from "@tanstack/react-query";
import { ThreadEntity } from "../../../entities/thread";
import { apiV1 } from "../../../libs/api";

export function usethreadDetail(threadId: number) {
    async function getThreadById() {
        const response = await apiV1.get<{ data: ThreadEntity }>(`/thread/${threadId}`)
        return response.data.data //datas ini dari Res.JSON di BE threadController
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: threadDetail, isLoading, error } = useQuery<ThreadEntity, Error, ThreadEntity>({
        queryKey: ["threads", threadId],
        queryFn: getThreadById,
        enabled: threadId > 0
    })
    return { threadDetail, isLoading, error }
}