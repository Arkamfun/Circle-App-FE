import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { apiV1 } from "../../../libs/api";
import { CreateReplyFormInput, ReplyFormSchema } from "../schemas/create-reply-form";
import { CreateReplyDTO } from "../types/createReply.dto";


export function useReply() {
    const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<CreateReplyFormInput>({
        resolver: zodResolver(ReplyFormSchema)
    })

    const { threadId } = useParams<{ threadId: string }>()
    const queryClient = useQueryClient()
    const toast = useToast()
    async function createReply(data: CreateReplyDTO) {
        const formData = new FormData();

        formData.append("content", data.content ?? "halo ini content dummy");
        if (data.image && data.image.length > 0) {
            formData.append("image", data.image[0]);
        }
        const response = await apiV1.post(`/reply/${threadId}`, formData, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
                // "Content-Type": "multipart/form-data",
            },
        })
        console.log("ini response dari reply", response.data);

        queryClient.invalidateQueries({ queryKey: ['replies', threadId] })
        return response.data
    }

    const { mutateAsync: createReplyAsync } = useMutation<CreateReplyDTO, Error, CreateReplyDTO>({
        mutationKey: ['createReply'],
        mutationFn: createReply,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["replies", Number(threadId)] })
        }
    })

    async function onSubmit(data: CreateReplyFormInput) {
        const replyData: CreateReplyDTO = {
            content: data.content,
            image: data.image,
            threadId: Number(threadId),
        }

        console.log("Data yang akan dikirim ke createReplyAsync:", replyData);

        const replyPromise = createReplyAsync(replyData)
        toast.promise(replyPromise, {
            loading: {
                title: 'Posting reply...',
                description: 'Please wait...',
                duration: 2000,
                isClosable: true,
            },
            success: {
                title: 'reply has been posted',
                duration: 2000,
                isClosable: true,
            },
            error: {
                title: 'reply has error',
                duration: 2000,
                isClosable: true,
            },
        })
        try {
            console.log('Data dari reply:', data);
            await replyPromise;
            // await createReplyAsync(replyData);
            // queryClient.invalidateQueries({ queryKey: ['replies', threadId] })
            reset();
        } catch (error) {
            console.error(error)
        }
    }
    return { register, handleSubmit, reset, onSubmit, errors, isSubmitting, setValue }

}