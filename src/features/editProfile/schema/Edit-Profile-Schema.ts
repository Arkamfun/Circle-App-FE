import z from "zod";

export const editProfileSchema = z.object({
    fullname: z.string().min(1, "name is required!"),
    userame: z.string().min(1, "name is required!"),
    bio: z.string(),
    image:z.string(),
})

export type EditProfileInputs = z.infer<typeof editProfileSchema>