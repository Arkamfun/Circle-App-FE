import z from 'zod';

export const registerSchema = z.object({
    fullName: z.string().min(1, "full name is required!"),
    email: z.string().email("invalid email address!"),
    password: z.string().min(6, "password must be at least 6 characters!"),
    
    
});
export type RegisterFormInputs = z.infer<typeof registerSchema> 
// typenya pake register schema 
// export type artinya ts ini nge export registerformInputs 
// type itu bentuk object

// type nama = {key :, key: } type rgisterform input = {key dari register schema}

// export const register 