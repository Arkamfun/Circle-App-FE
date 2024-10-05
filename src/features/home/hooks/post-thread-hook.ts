import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { ThreadEntity } from "../../../entities/thread";
import { useAppSelector } from "../../../hooks/use-store";
import { apiV1 } from "../../../libs/api";
import { createThreadFormInput, createThreadSchema } from "../schemas/threadsSchema";
import { CreateThreadsDTO } from "../types/threads.dto";

export const usePostThread = () => {
    const {register, handleSubmit, reset,
        formState:{errors, isSubmitting},
     } = useForm<CreateThreadsDTO>({
        mode:"onSubmit",
        resolver:zodResolver(createThreadSchema)
    })
    
    const queryClient = useQueryClient();

    const user = useAppSelector((state) => state.auth.user);
    console.log(user)
    // async function getPosts() {
    //     const response = await apiV1.get<null, {data:ThreadEntity[]}>(`/thread/${authorId}`)
    //     return response.data
    // }
    
    // const {data, isLoading} = useQuery<ThreadEntity[], Error, ThreadEntity[]>({
    //     queryKey: ["threads", authorId],
    //     queryFn:getPosts
    // })
    async function postThread(data:CreateThreadsDTO) {
        const formData = new FormData();
        formData.append("title", data.title?? '')
        formData.append("content", data.content?? '');
        if(data.image) {
            formData.append("image", data.image) 
        }
        const response = await apiV1.post('/thread',formData, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
                "Content-Type": "multipart/form-data",
            }
        });
        
        queryClient.invalidateQueries({queryKey: ['threads']});
        console.log("ini data", response.data)
        return response.data

    }

    const { mutateAsync: createThreadAsync } = useMutation<ThreadEntity, Error, CreateThreadsDTO>({
        mutationKey: ["threads"], //ini gak perlu pakai id
        mutationFn:postThread,
    })

    async function onSubmit (data :createThreadFormInput ) {
        const newThread:CreateThreadsDTO = {
            title:data.title,
            content:data.content,
            image:data.Image,
            authorId:user!.id,
        }
        try {
            await createThreadAsync(newThread);
            reset();
            alert("post thread success!")
        } catch (error) {
            console.error("error create thread:", error);
            alert("post thread failed")
        }
    }

    return {
        register,
        handleSubmit,
        reset,
        errors,
        isSubmitting,
        onSubmit,
        // getPosts,
        // data,
        // isLoading
    }

    
    }