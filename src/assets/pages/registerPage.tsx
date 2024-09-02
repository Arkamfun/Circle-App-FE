import { useState } from "react";
import FormAuth from "../components/FormAuth";
import ButtonAuth from "../elements/ButtonAuth";
import InputAuth from "../elements/InputAuth";
import { Link } from "@chakra-ui/react"
import { useNavigate  } from "react-router-dom";

interface registerPageProps {
    name:string,
    password:string,
    email:string
}
function RegisterPage() {
    const navigate = useNavigate()

    const [register, setRegister] = useState<registerPageProps>({
        name:"",
        password:"",
        email:""
    })

    const handleRegister = (e:React.ChangeEvent<HTMLInputElement>) => {
        setRegister({...register, [e.target.name]:e.target.value})
    }
    return (
        <FormAuth 
        title="Register to Circle" 
        onSubmit={() => {console.log("Register") }} >

        <InputAuth 
        type="text" 
        placeholder='Enter Your Name' 
        name="name" 
        value={register.name} 
        onChange={handleRegister}/>

        <InputAuth 
        type="email" 
        placeholder='Enter Your Email' 
        name="email" 
        value={register.email} 
        onChange={handleRegister}/>

        <InputAuth 
        type="password" 
        placeholder='Enter Your Password' 
        name="password" 
        value={register.password} 
        onChange={handleRegister}/>

        <Link 
        color={"white"} 
        textAlign={"end"} 
        textDecoration={"underline"} 
        href="/login"
        _hover={{color:"#04A51E"}}
        >Have Account ? please Login</Link>

        <ButtonAuth onClick={() => {navigate("/login") }}  style={{backgroundColor:"#04A51E"}}>Register</ButtonAuth>
    
        </FormAuth>
        
    )
}

export default RegisterPage