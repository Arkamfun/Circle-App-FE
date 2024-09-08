import {Box} from "@chakra-ui/react"
import { ReactNode } from "react"


export default function Timeline({children} : {children : ReactNode}) {
    return (
        <>
            <Box w={"100%"} flex={5} display={"flex"} flexDirection={"column"} px={10} >
            {children}
        </Box>
        </>
    )
}