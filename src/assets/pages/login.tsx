
import FormAuth from "../components/FormAuth";
import ButtonAuth from "../elements/ButtonAuth";
import InputAuth from "../elements/InputAuth";
import {Link,} from "@chakra-ui/react";
import { useNavigate  } from "react-router-dom";



function LoginPage() {
    const navigate = useNavigate()
    function goToHome() {
        navigate("/")
        
    }
    return (
        <FormAuth title="Login to Circle" >
        <InputAuth type="text" placeholder='Enter Your Email/username'/>
        <InputAuth type="password" placeholder='Enter Your Password'/>
        <Link color={"white"} textAlign={"end"} textDecoration={"underline"}  href="/register" 
        _hover={{color:"#04A51E"}}> Not Have Account ?</Link>
        <ButtonAuth onClick={() => {goToHome() }}  > Login</ButtonAuth>
        </FormAuth>
    )
}

export default LoginPage 