import { z } from "zod";

export const ReplyFormSchema = z.object({
    content: z.string().min(1).max(300),
    image: z.instanceof(FileList).optional(),
    threadId: z.number().optional(),
})

export type CreateReplyFormInput = z.infer<typeof ReplyFormSchema>