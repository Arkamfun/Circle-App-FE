import {Input, InputProps} from '@chakra-ui/react'

interface InputAuthProps extends InputProps {
    type:string,
    placeholder:string
    
}
function InputAuth (props:InputAuthProps) {

    return (

        <Input 
            
                id="email" 
                border={"1px"} 
                borderColor={"white"} 
                color={"white"} 
                backgroundColor={"#1D1D1D"}
                py={"10px"}
                px={3}
                my={6}
                borderRadius={"md"} 
            
            {...props}
            />
    )

}

export default InputAuth