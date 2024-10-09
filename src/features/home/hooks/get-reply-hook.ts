import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { ReplyEntity } from "../../../entities/reply-Entity";
import { apiV1 } from "../../../libs/api";

export const useGetReplies = () => {
    const { threadId } = useParams();

    const getReply = async () => {
        const token = Cookies.get("token");
        const response = await apiV1.get(`/reply/comment/${threadId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('ini response dari getReply', response.data[0]);
        if (response.data) {
            return response.data;

        } else {
            return [''];
        }
    };
    const { data, isLoading, isError } = useQuery<
        ReplyEntity[] | 'ini data',
        Error,
        ReplyEntity[]
    >({
        queryKey: ["replies", Number(threadId)],
        queryFn: getReply,
    });
    // console.log('ini data dari getReply', data);
    return { data, isLoading, isError };
};
