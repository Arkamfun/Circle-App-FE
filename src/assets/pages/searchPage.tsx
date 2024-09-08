import { Box, Text, Input, Container } from "@chakra-ui/react"
import Menu from "../components/layout/menu"
import Profile from "../components/layout/profile"
import Timeline from "../components/layout/timeline"
import { useState, useEffect } from "react"
export default function Search() {


    const dataOrang: object[] = [{
        id: 1,
    }]
    const [data, setData] = useState<string>("")

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value as string)
    }
    function NotFound({ notFound }: { notFound: boolean }) {
        if (notFound == true || data != "") {
            return (
                <Box>
                    <Text as={"p"} fontWeight={"semibold"} color={"white"} fontSize={"2xl"} textAlign={"center"}>No results for "{data}"</Text>
                    <Text as={"p"} fontWeight={"semibold"} color={"grey"} fontSize={"lg"} textAlign={"center"} >Try searching for something else or check the spelling of what you typed.</Text>

                </Box>)
        } else {
            return (
                <Box>
                    <Text as={"p"} fontWeight={"semibold"} color={"white"} fontSize={"2xl"} textAlign={"center"}>Write and search Something</Text>
                    <Text as={"p"} fontWeight={"semibold"} color={"grey"} fontSize={"lg"} textAlign={"center"} >Try searching for something else or check the spelling of what you typed.</Text>

                </Box>
            )
        }

    }

    return (
        <>
            <Container minH={"100vh"} w={"100%"} bg={"#1D1D1D"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} gap={"10rem"} >
                <Menu Home={false} Profile={false} Search={true} Followers={false} />
                <Timeline >
                    <Box display={"flex"} flexDirection={"column"} gap={"1rem"} w={"100%"} justifyContent={"start"} flex={5}>
                        <Text color={"white"} fontSize={"3xl"} fontWeight={"semibold"}>Search</Text>
                        <Input color={"white"} placeholder='Search' py={2} px={10} bg={"#1D1D1D"} border={"1px"} borderColor={"white"} borderRadius={"3xl"} w={"50vh"} type="search" onChange={changeInput}>

                        </Input>
                        <Box w={"100%"} h={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                            <NotFound notFound={false}></NotFound>

                        </Box>
                    </Box>
                </Timeline>

                <Profile />
            </Container>
        </>
    )
}