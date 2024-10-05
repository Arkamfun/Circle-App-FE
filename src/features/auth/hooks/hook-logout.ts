import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiV1 } from "../../../libs/api";
import { removeUser } from "../../../store/auth-slice";


export function useLogout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function logout() {
        try {
            await apiV1.post('/logout');
            Cookies.remove('token');
            dispatch(removeUser());

            navigate('/login', { replace: true });
            alert("Logout successfully");
        } catch (error) {
            console.error("error during logout:", error);
            alert("logout failed")
        }
    }
    return logout
}