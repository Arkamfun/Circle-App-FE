import {
    Box,
    Button,
    Container,
    Input,
    Text
} from '@chakra-ui/react'
import ThreadCard from '../../features/home/components/CardList'
import { useHomePage } from '../../hooks/use-home-page'
import Menu from '../components/layout/menu'
import Profile from '../components/layout/profile'
import { usePostThread } from '../../features/home/hooks/post-thread-hook'
function HomePage() {
    const { threads } = useHomePage();
    
    //hook itu ngeparsing data frontend ke backend atau sebaliknya
    const { register, handleSubmit, onSubmit} = usePostThread(); 
    return (
        <>

            <Container minH={"100vh"} w={"100%"} bg={"#1D1D1D"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} gap={"8rem"} >
                <Menu Followers={false} Home={true} Search={false} Profile={false} />
                <Box w={"100%"} flex={5} display={"flex"} flexDirection={"column"} gap={"20px"} >
                    <Box display={"flex"} flexDirection={"column"} width={"80vh"} justifyContent={"center"}>
                        <Box maxWidth={"500px"} >
                            <Text fontWeight={"bold"} fontSize={"30px"} color={"white"}>
                                Home
                            </Text>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} justifyItems={"center"} mx={"auto"} gap={"10px"}>
                                <Input display={"block"} placeholder='Title'{...register("title")} />
                                <Input display={"block"} placeholder='Content'{...register("content")} />
                                {/* <Input type="file" name='image'  {...register("image")} /> */}
                                <Button type="submit" backgroundColor={"white"}>
                                    Post
                                </Button>
                            </Box>
                            </form>
                        </Box>
                        <Box display={"block"} flexDirection={"column"} gap={"10px"}>
                            {threads?.map((thread) => <ThreadCard thread={thread} />)}
                        </Box>
                    </Box>
                </Box>
                <Profile />
            </Container>
        </>
    )
}

export default HomePage

