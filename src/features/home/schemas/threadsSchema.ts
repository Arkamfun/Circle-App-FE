import { z } from "zod";

export const createThreadSchema = z.object({
  title: z.string().min(1).max(50),
  content: z.string().min(1).max(300),
  image : z.instanceof(FileList).optional(),
})

export type createThreadFormInput = z.infer<typeof createThreadSchema>