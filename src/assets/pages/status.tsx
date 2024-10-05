import Profile from "../components/layout/profile"
import Menu from "../components/layout/menu"
import Timeline from "../components/layout/timeline"
import { Container, Text, Box, Image, Textarea, Button, Icon, IconProps,  } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import { usethreadDetail } from "../../features/home/hooks/useThreadDetail-hook"
import { useHomePage } from "../../hooks/use-home-page"
import { useParams } from "react-router-dom"
export default function Status() {
    const navigate = useNavigate()
    const {threadId} = useParams() 
    const {threadDetail} =  usethreadDetail(Number(threadId))
    console.log('ini dari FE',threadDetail)
    const FileImage = (props : IconProps) => (
        <Icon
            viewBox="0 0 576 512"
            fill="#04A51E"
            {...props}
        ><path d="M320 496c26.5 0 48-21.5 48-48l0-268.1c0-1.3-.1-2.6-.2-3.9L248 176c-22.1 0-40-17.9-40-40l0-119.8c-1.3-.2-2.6-.2-3.9-.2L64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0zm41.1-336c-.8-1-1.6-1.9-2.4-2.7L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4L224 136c0 13.3 10.7 24 24 24l113.1 0zM0 64C0 28.7 28.7 0 64 0L204.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c9 9 14.1 21.2 14.1 33.9L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM56 224a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm78.6 116.6c-1.4 2.1-3.8 3.3-6.3 3.4s-4.9-1-6.5-3l-29.6-36.9c0 0-.1-.1-.1-.1s-.1 0-.1 .1L66 416c-1.3 1.7-2 3.8-2 6c0 5.5 4.5 10 10 10l235.8 0c5.6 0 10.2-4.6 10.2-10.2c0-2.1-.7-4.2-1.9-5.9L228 288.2l-53.5 76.4zM228 272c5.1 0 9.9 2.5 12.8 6.6l90.4 128c3.1 4.4 4.8 9.7 4.8 15.1c0 14.5-11.7 26.2-26.2 26.2L74 448c-14.4 0-26-11.6-26-26c0-5.6 1.8-11.1 5.2-15.6l66-87.9c3.1-4.1 7.8-6.5 12.9-6.5c4.9 0 9.6 2.2 12.6 6.1l22.9 28.6 47.6-68c2.9-4.2 7.7-6.7 12.9-6.7z"/>
        </Icon>)
    
    const LoveIcon = (props : IconProps) => (
        <Icon
            viewBox="0 0 576 512"
            {...props}
        ><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
        </Icon>)
    const CommentIcon = (props : IconProps) => (
        <Icon
            viewBox="0 0 576 512"
            {...props}
        ><path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/>
        </Icon>)

    return (
        
        <>
        <Container minH={"100vh"} w={"100%"} bg={"#1D1D1D"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} >
        <Menu Home={true} Profile={false} Followers={false} Search={false} />
        <Timeline>
        <Box w={"100%"} flex={5} display={"flex"} flexDirection={"column"} gap={"20px"} >
                    <Box display={"flex"} gap={5} alignItems={"center"} mt={5}>
                    <ArrowBackIcon color={"white"} fontSize={"2xl"} onClick={() => navigate("/")} cursor={"pointer"} _hover={{color:"grey"}} />
                    <Text color={"white"}  fontSize={"2xl"} fontWeight={"semibold"}>Status</Text>
                    </Box>

                    <Box className='comments' display={"flex"} gap={5} borderBottom={"1px"} borderColor={"grey"} pb={5}>
                        
                        <Box w={"60px"} h={"60px"} >
                            <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            w={"100%"} h={"100%"} borderRadius={"50%"} objectFit={"cover"}
                            >
                            </Image>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} w={"100%"} >
                            <Box display={"flex"} gap={2}>
                                <Text as={"p"} fontWeight={"bold"} color={"white"}>Indah Pra Karya </Text>
                                <Text as={"p"} fontWeight={"light"} color={"grey"}>@indahpra</Text>
                                <Text as={"p"} fontWeight={"bold"} color={"grey"}>.</Text>
                                <Text as={"p"} fontWeight={"light"} color={"grey"}> 4h</Text>
                            </Box>
                            <Box>
                                <Text as={"p"} color={"white"} fontWeight={"bold"} fontSize={"xl"} textAlign={"center"}>
                                {threadDetail?.title}
                                </Text>
                                <Text as={"p"} color={"white"}>
                                {threadDetail?.content}
                                </Text>
                            </Box>
                            <Box display={"flex"} my={3} alignItems={"center"} gap={2}>
                                <LoveIcon fill={"red"} boxSize={"20px"} />
                                <Text as={"p"} color={"grey"}>125</Text>
                                <CommentIcon fill={"grey"} boxSize={"20px"}/>
                                <Text as={"p"} color={"grey"}>125 Replies</Text>
                            </Box>
                        </Box>

                    </Box>
                    <Box className ='Post' display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} h={"100px"} borderBottom={"1px"} borderColor={"grey"}> 
                        <Box>
                        <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        objectFit={"cover"} h={"60px"} w={"60px"} borderRadius={"50%"}
                        />
                        </Box>
                        <Box>
                            <Textarea w={"30rem"} bg={"none"} border={"none"} color={"white"} placeholder={"What's on your mind?"} _active={{border:"none"}} borderBottom={"1px"} p={"1rem"} resize={"none"}/>
                        </Box>
                        <Box>
                            <FileImage boxSize={"30px"}/>
                        <Button color={"white"} backgroundColor={"#04A51E"} borderRadius={"3xl"} fontWeight={"semibold"} px={3} py={2}>Post</Button>
                        </Box>
                    </Box>
                    <Box className='comments' display={"flex"} gap={5} borderBottom={"1px"} borderColor={"grey"} pb={5}>
                        <Box w={"60px"} h={"60px"} >
                            <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            w={"100%"} h={"100%"} borderRadius={"50%"} objectFit={"cover"}
                            >
                            </Image>
                        </Box>
                        <Box className='Status' cursor={"pointer"} display={"flex"} flexDirection={"column"} w={"100%"} >
                            <Box display={"flex"} gap={2}>
                                <Text as={"p"} fontWeight={"bold"} color={"white"}>Indah Pra Karya </Text>
                                <Text as={"p"} fontWeight={"light"} color={"grey"}>@indahpra</Text>
                                <Text as={"p"} fontWeight={"bold"} color={"grey"}>.</Text>
                                <Text as={"p"} fontWeight={"light"} color={"grey"}> 4h</Text>
                            </Box>
                            <Box>
                                <Text as={"p"} color={"white"}>
                                    Masa sih
                                </Text>
                            </Box>
                            <Box display={"flex"} my={3} alignItems={"center"} gap={2}>
                                <LoveIcon fill={"grey"} boxSize={"20px"} />
                                <Text as={"p"} color={"grey"}>125</Text>
                            </Box>
                        </Box>

                    </Box>
                    <Box className='comments' display={"flex"} gap={5} borderBottom={"1px"} borderColor={"grey"} pb={5}>
                        <Box w={"60px"} h={"60px"} >
                            <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            w={"100%"} h={"100%"} borderRadius={"50%"} objectFit={"cover"}
                            >
                            </Image>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} w={"100%"} >
                            <Box display={"flex"} gap={2}>
                                <Text as={"p"} fontWeight={"bold"} color={"white"}>Indah Pra Karya </Text>
                                <Text as={"p"} fontWeight={"light"} color={"grey"}>@indahpra</Text>
                                <Text as={"p"} fontWeight={"bold"} color={"grey"}>.</Text>
                                <Text as={"p"} fontWeight={"light"} color={"grey"}> 4h</Text>
                            </Box>
                            <Box>
                                <Text as={"p"} color={"white"}>
                                52 Books you should know:
                                </Text>
                                <Box w={"35rem"} h={"40rem"}>
                                <Image src='https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'h={"100%"} w={"100%"} objectFit={"cover"} />
                                </Box>
                            </Box>
                            <Box display={"flex"} my={3} alignItems={"center"} gap={2}>
                                <LoveIcon fill={"grey"} boxSize={"20px"} />
                                <Text as={"p"} color={"grey"}>125</Text>
                            </Box>
                        </Box>

                    </Box>
                </Box>
        </Timeline>
        <Profile/>


        </Container>
        </>
    )
}