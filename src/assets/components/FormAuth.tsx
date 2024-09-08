import { FormControl, Container, Text, Center } from "@chakra-ui/react";

interface LoginFormAuthProps extends React.InputHTMLAttributes<HTMLInputElement> {
   title:string
   children:React.ReactNode
}

function FormAuth(props:LoginFormAuthProps) {
   return (
   <Center h={"80vh"} display={"flex"} flexDirection={"column"}>

      <FormControl 
      onSubmit={props.onSubmit}
      display="flex" 
      flexDirection="column" 
      w={{ base: "50%", md: "30%" }} 
      justifyContent={"center"} 
      pt={4}
      mx={"auto"}
      ><Container  w={"100%"}>
      <Text 
      textAlign={"start"} 
      color={"#04A51E"} 
      fontSize={"5xl"}
      fontWeight={"semibold"}
      my={-4}
      >
          Circle
      </Text>
      <Text 
      textAlign={"start"} 
      color={"white"} 
      fontSize={"5xl"}
      fontWeight={"semibold"}
      >
          {props.title}
      </Text>
      </Container>

         {props.children}
         </FormControl>

   </Center>
   ) 
}

export default FormAuth