import FormAuth from "../components/FormAuth";
import InputAuth from "../elements/InputAuth";
import {Link, Text} from "@chakra-ui/react"
import ButtonAuth from "../elements/ButtonAuth";
import { useNavigate  } from "react-router-dom";
function ForgotPassword() {
    const Navigate = useNavigate()
    return (
        <FormAuth title="Forgot Password" >
        <InputAuth type="email" placeholder='Enter Your Email'/>
        <ButtonAuth>Send Instruction</ButtonAuth>
        <Text color={"white"} pt={4}>Already have an account ?
        <Link color={"#04A51E"} textAlign={"start"} cursor={"pointer"} textDecoration={"underline"} onClick={() => {Navigate("/login") }}
        _hover={{fontWeight:"bold",color:"#04A51E"}}>Login</Link>

        </Text>
        </FormAuth>
    )

}

export default ForgotPassword