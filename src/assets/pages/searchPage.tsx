import { Box, Text, Input, Container } from "@chakra-ui/react"
import Menu from "../components/layout/menu"
import Profile from "../components/layout/profile"
import Timeline from "../components/layout/timeline"
import { useState, useEffect } from "react"
import { UserEntity } from "../../entities/user"
import Cookies from "js-cookie"
import { apiV1 } from "../../libs/api"
import { SearchResult } from "./search-result"

export default function Search() {
    
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [result, setResult] = useState<UserEntity[]>([]);
    const [, setLoading] = useState<boolean>(false);
    const token = Cookies.get("token")
    let userLogin: UserEntity | null = null;

    useEffect(() => {
        const search = async () => {
            setLoading(true)
            try {
                const response = await apiV1.get<UserEntity[]>(`/search`, {
                    params: { query: searchQuery },
                    headers: { Authorization: `Bearer ${token}` }
                });
                const filterUser = response.data.filter((user) => user.id !== userLogin?.id)
                setResult(filterUser)
            } catch (error) {
                console.log('Failed to decode token: ', error)
            }
            setLoading(false)
        };

        if (searchQuery) {
            search();  // Call the search function when searchQuery changes
        }
    }, [searchQuery, token, userLogin]);  // Add dependencies
    if(token) {
        try {
            const payloadBase64 = token.split(".")[1];
            if(payloadBase64) {
                const decodePayload = JSON.parse(atob(payloadBase64))
                userLogin = decodePayload
            }
        } catch(error) {
            console.error("failed to decode token:", error)
        }
    }
    

    console.log('result', searchQuery);
    

    return (
        <>
            <Container minH={"100vh"} w={"100%"} bg={"#1D1D1D"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} gap={"10rem"} >
                <Menu Home={false} Profile={false} Search={true} Followers={false} />
                <Timeline >
                    <Box display={"flex"} flexDirection={"column"} gap={"1rem"} w={"100%"} justifyContent={"start"} flex={5}>
                        <Text color={"white"} fontSize={"3xl"} fontWeight={"semibold"}>Search</Text>
                        <Input color={"white"} placeholder='Search' py={2} px={10} bg={"#1D1D1D"} border={"1px"} borderColor={"white"} borderRadius={"3xl"} w={"50vh"} type="search" onChange={(e) => setSearchQuery(e.target.value)}>

                        </Input>
                        <Box w={"100%"} h={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"start"} alignItems={"start"}>
                        <SearchResult result={result} />
                        </Box>
                    </Box>

                </Timeline>

                <Profile />
            </Container>
        </>
    )
}