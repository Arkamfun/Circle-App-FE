import { Button, Text,Box, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegisterForm } from "../../features/auth/hooks/register-form";
import { ErrorMessage } from '../../features/auth/schemas/Error';


function RegisterPage() {
    const navigate = useNavigate()
    const { register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit } = useRegisterForm()

    return (
        <>
        <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"100vh"}
        bg={"#1D1D1D"}
        gap={6}
        w={"50vh"}
        mx={"auto"}
        color={"white"}
        >
        <form onSubmit={handleSubmit(onSubmit)}>
                <Box w={"40vh"} display={"flex"} flexDirection={"column"} gap={"1rem"}>
                <Text color={"#04A51E"} fontWeight={"semibold"} fontSize={"5xl"}>Circle</Text>  
                <Input type="text" placeholder="fullname"
                w={"100%"} 
                display={"block"} 
                py={3} 
                px={5} 
                bg={"transparent"}
                borderRadius={"xl"}  
                border={"1px"}
                {...register("fullName")} />
                {/* <InputAuth
                    type="text"
                    placeholder='Enter Your full name'
                    {...register("fullName")}
                /> */}
                   <ErrorMessage message={errors.fullName?.message} />


                {/* <InputAuth
                    type="email"
                    placeholder='Enter Your Email'
                    {...register("email")}
                    
                    /> */}
                
                <Input type="email" placeholder="email" 
                display={"block"} 
                w={"100%"} 
                bg={"transparent"} 
                py={3} 
                px={5}
                border={"1px"}
                borderRadius={"xl"}
                {...register("email")} />
                    <ErrorMessage message={errors.email?.message} />
                {/* <InputAuth
                    type="password"
                    placeholder='Enter Your Password'
                    {...register("password")}
                    
                    /> */}
                <Input type="password" 
                placeholder="password" 
                display={"block"} 
                w={"100%"} 
                py={3} 
                px={5}
                bg={"transparent"}
                border={"1px"}
                borderRadius={"xl"}
                {...register("password")} />
                    <ErrorMessage message={errors.password?.message} />
                   
                <Text
                    color={"white"}
                    textAlign={"end"}
                    textDecoration={"underline"}
                    onClick={() => navigate("/login")}
                    _hover={{ color: "#04A51E" }}
                    cursor={"pointer"}
                    >Have Account ? Please Login</Text>


                <Text>
                </Text>
            <Button type="submit" 
            color={"white"}
            bg={"green"}
            padding={4}
            borderRadius={"3xl"}
            _hover={{backgroundColor:"white", color:"green"}}
            >Register</Button>
                    </Box>   
            </form>
        </Box>
        </>
    )
}

export default RegisterPage