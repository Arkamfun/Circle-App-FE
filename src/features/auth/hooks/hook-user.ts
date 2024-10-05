import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { UserEntity } from "../../../entities/user";
import { apiV1 } from "../../../libs/api";


export function useUser() {
    async function getUser() {
        const response = await apiV1.get<null, {data:UserEntity}>('/getuser', {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
            },
        })
        
        return response.data

        
    }  
    const {data : user, isLoading} = useQuery<UserEntity>({ // ini bisa diambil lagi
        queryKey: ['user'], // tempat simpen return dari queryFn (ini gak bisa dipanggil)
        queryFn: getUser, // manggil function getuser 
    })

    return {user, isLoading}
}