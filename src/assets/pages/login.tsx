
import { Button, Input, Link, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useLoginForm } from "../../features/auth/hooks/login-form";
import { ErrorMessage } from "../../features/auth/schemas/Error";

function LoginPage() {
    const {register, handleSubmit, errors, onSubmit} = useLoginForm();
    const navigate = useNavigate()

    return (
        <>

        <form onSubmit={handleSubmit(onSubmit)} >
            
        <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"100vh"}
        bg={"#1D1D1D"}
        gap={6}
        w={"40vh"}
        mx={"auto"}
        color={"white"}
        >

        <Text color={"#04A51E"} fontWeight={"semibold"} fontSize={"5xl"}>Circle</Text>
        <Input type="email" 
        placeholder="email"
        display={"block"}
        w={"100%"}
        py={3}
        bg={"transparent"}
        border={"1px"}
        borderRadius={"xl"}
        borderColor={"white"}
        px={5}
        
        
        
        
        {...register("email")}  />
        <Input type="password" 
        placeholder="password"
        bg={"transparent"}
        display={"block"}
        w={"100%"}
        border={"1px"}
        borderColor={"white"}
        py={3}
        px={5}
        borderRadius={"xl"}
        {...register("password")}/>
        
        <ErrorMessage message={errors.email?.message}/>

        
        <ErrorMessage message={errors.password?.message}/>
        <Box display={"flex"} flexDirection={"column"} gap={2} w={"100%"}>
        <Link color={"white"} textAlign={"end"} textDecoration={"underline"}  onClick={() => {navigate("/register") }} 
        _hover={{color:"#04A51E"}} cursor={"pointer"}> Not Have Account ?</Link>

        <Button type="submit" color={'white'} bg={"green"} p={3} borderRadius={"3xl"}>Login</Button>
        <Link color={"white"} textAlign={"end"} textDecoration={"underline"}  onClick={() => {navigate("/forgotpassword") }} 
        _hover={{color:"#04A51E"}} cursor={"pointer"}> Forgot Passwword</Link>
        </Box>
        </Box>
        </form>
        </>
    )
}

export default LoginPage 