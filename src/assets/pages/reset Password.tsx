import FormAuth from "../components/FormAuth";
import InputAuth from "../elements/InputAuth";
import {Link, Text} from "@chakra-ui/react"
import ButtonAuth from "../elements/ButtonAuth";
function ResetPassword() {
    return (
        <FormAuth title="Reset Password" >
        <InputAuth type="password" placeholder='old Password'/>
        <InputAuth type="password" placeholder='New Password'/>
        <ButtonAuth>Send Instruction</ButtonAuth>
        <Text color={"white"} pt={4}>Already have an account ?
        <Link color={"#04A51E"} textAlign={"start"} textDecoration={"underline"}  href="#" 
        _hover={{fontWeight:"bold",color:"#04A51E"}}>Login</Link>

        </Text>
        </FormAuth>
    )

}

export default ResetPassword