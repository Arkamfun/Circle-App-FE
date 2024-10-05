import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { ThreadEntity } from "../entities/thread";
import { apiV1 } from "../libs/api";
import { createThreadSchema } from "../features/home/schemas/threadsSchema";
import { CreateThreadsDTO } from "../features/home/types/threads.dto"; 

export const useHomePage = () =>{
    const {data : threads, refetch} = useQuery<ThreadEntity[]>({
        queryKey: ["threads"],
        queryFn: getThreads,
    });

    const {register, handleSubmit } = useForm<CreateThreadsDTO>({
        mode:"onSubmit",
        resolver:zodResolver(createThreadSchema)
    });

    async function getThreads() {
        const response = await apiV1.get('/thread', {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },

        })
        return response.data
    }

    const { mutateAsync } = useMutation<
    ThreadEntity,
    AxiosError,
    CreateThreadsDTO 
    >({
        mutationFn:(newThread) => {
            const formData = new FormData();
            formData.append("title", newThread.title)
            formData.append("content", newThread.content);
            formData.append("image", newThread.image[0])
            return apiV1.post('/thread',formData)
        }
    })

    const onSubmit : SubmitHandler<CreateThreadsDTO> = async (data) => {
        try {
            await mutateAsync(data);
            refetch();
        }catch(err) {
            console.log(err)
        }
    }
    return {
        threads, register,handleSubmit,onSubmit,
    }
}