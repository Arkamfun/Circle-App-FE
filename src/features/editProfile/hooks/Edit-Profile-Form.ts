import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/use-store";
import { apiV1 } from "../../../libs/api";
import { EditProfileInputs, editProfileSchema } from "../schema/Edit-Profile-Schema";
import { SetEditProfile } from "../store/Edit-Profile-Slice";

export function useEditProfileForm() {
    const {register, handleSubmit,setError,formState:{errors,isSubmitting}} = useForm<EditProfileInputs>({
          resolver:zodResolver(editProfileSchema)
    });

    const dispatch = useAppDispatch();

    async function onSubmit(data:EditProfileInputs) {
        try {
            const response = await apiV1.patch(`/users/editprofile/:id`, data);
            const {user} = response.data;
            dispatch(SetEditProfile(user));
        } catch (error) {
            if(axios.isAxiosError(error) && error.response) {
                const stackMessage = error.response.data.stack;
                if(stackMessage.includes('fullname')) {
                    setError('fullname', {
                        message: "full name must at least 5 character long",
                    });
                }
            }
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit
    }

}