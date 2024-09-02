import { Button } from '@chakra-ui/react'
interface ButtonAuthProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children:string
}
function ButtonAuth ( props:ButtonAuthProps ) {
    return (
        <>
        <Button 
        backgroundColor={"#04A51E"} 
        color={"white"} 
        w={"100%"} 
        py={2} 
        borderRadius={"lg"} 
        mt={5} 
        mx={"auto"}
        {...props}
        _hover={{backgroundColor:"white", color:"#04A51E"}}
        onClick={props.onClick}
        >
        {props.children}</Button>
    </>
    )
}

export default ButtonAuth
