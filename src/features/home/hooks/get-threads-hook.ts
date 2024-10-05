import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ThreadEntity } from "../../../entities/thread";
import { apiV1 } from "../../../libs/api";
import { createThreadSchema } from "../schemas/threadsSchema";
import { CreateThreadsDTO } from "../types/threads.dto";


export const useHomePage = () =>{


    const {register, handleSubmit } = useForm<CreateThreadsDTO>({
        mode:"onSubmit",
        resolver:zodResolver(createThreadSchema)
    });

    async function getThreads() {
        const response = await apiV1.get<null, {data:ThreadEntity[]}>('/thread')
        console.log('ini response data', response.data)
        return response.data
    }

    const {data : threads, isLoading} = useQuery<ThreadEntity[]>({
        queryKey: ["threads"], // tempat simpan return dari queryFn
        queryFn: getThreads, //manggil function getthreads, yang mana returnnya disimpan di querykey diatas
    });


    // const { mutateAsync } = useMutation<
    // ThreadEntity,
    // AxiosError,
    // CreateThreadsDTO 
    // >({
    //     mutationFn:(newThread) => {
    //         const formData = new FormData();
    //         formData.append("title", newThread.title)
    //         formData.append("content", newThread.content);
    //         formData.append("image", newThread.image[0])
    //         return apiV1.post('/threads',formData)
    //     }
    // })

    // const onSubmit : SubmitHandler<CreateThreadsDTO> = async (data) => {
    //     try {
    //         await mutateAsync(data);
    //         refetch();
    //     }catch(err) {
    //         console.log(err)
    //     }
    // }
    return {
        threads, register,handleSubmit, isLoading
    }
}