import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/use-store";
import { apiV1 } from "../../../libs/api";
import { setUser } from "../../../store/auth-slice";
import { RegisterFormInputs, registerSchema } from "../schemas/register";
import { RegisterResponseDTO } from "../types/Register.dto";

export function useRegisterForm() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting },
        setError, 
    } = useForm<RegisterFormInputs>({
        resolver:zodResolver(registerSchema),
    });

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function onSubmit(data: RegisterFormInputs) {
        try {
            const response = await apiV1.post<RegisterResponseDTO 
            >("/auth/register", data)
            const {user} = response.data 

            dispatch(setUser(user));
            console.log(response.data)
            
            navigate("/login");

        }catch(error) {
            if(axios.isAxiosError(error) && error.response) {
                const stackMessage = error.response.data.stack
               if(stackMessage.includes('fullName')){
                setError('fullName', {
                    message: "full name must at least 5 character long",
                })

               }
               if (stackMessage.includes('"email"')) {
                setError('email', {
                    message: "Invalid email format",
                });
            }
            
            if (stackMessage.includes('"password"')) {
                setError('password', {
                    message: "Password must be at least 6 characters long",
                });
            }else {
                console.log("Other Error:", error);
            }
        
            }
        }
    };
    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
    }
}
