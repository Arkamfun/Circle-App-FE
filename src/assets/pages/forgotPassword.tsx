import FormAuth from "../components/FormAuth";
import InputAuth from "../elements/InputAuth";
import {Link, Text} from "@chakra-ui/react"
import ButtonAuth from "../elements/ButtonAuth";
function forgotPassword() {
    return (
        <FormAuth title="Forgot Password" >
        <InputAuth type="email" placeholder='Enter Your Email'/>
        <ButtonAuth>Send Instruction</ButtonAuth>
        <Text color={"white"} pt={4}>Already have an account ?
        <Link color={"#04A51E"} textAlign={"start"} textDecoration={"underline"}  href="#" 
        _hover={{fontWeight:"bold",color:"#04A51E"}}>Login</Link>

        </Text>
        </FormAuth>
    )

}

export default forgotPassword