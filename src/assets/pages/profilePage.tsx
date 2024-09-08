import {Box, Container, Image, Text, Icon, IconProps} from "@chakra-ui/react"
import Menu from "../components/layout/menu"
import Timeline from "../components/layout/timeline"
import ProfileAtas from "../components/layout/profileatas"
import { Sugesstion } from "../components/layout/profile"

export default function ProfilePage() {
    const LoveIcon = (props : IconProps) => (
        <Icon
            viewBox="0 0 576 512"
            fill="white"
            {...props}
        ><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
        </Icon>)

const CommentIcon = (props : IconProps) => (
    <Icon
        viewBox="0 0 576 512"
        fill="white"
        {...props}
    ><path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/>
    </Icon>)

    return (
        <>
        <Container minH={"100vh"} w={"100%"} bg={"#1D1D1D"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}  >
            <Menu Home={false} Profile={true} Search={false} Followers={false}></Menu>
            <Timeline >
                <Box display={"flex"} flexDirection={"column"} gap={"1rem"} w={"80vh"} justifyContent={"start"}>
                    <ProfileAtas></ProfileAtas> 
                    <Box py={5} display={"flex"} flexDirection={"row"} gap={"1rem"} borderBottom={"1px"} borderColor={"grey"} w={"100%"} justifyContent={"start"}>
                        <Image w={"60px"} h={"60px"} objectFit={"cover"} borderRadius={"50px"} alt="profile" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Box display={"flex"} flexDirection={"column"} gap={"2px"} alignItems={"start"} justifyContent={"center"}>
                        <Box display={"flex"} flexDirection={"row"} gap={"1rem"} alignItems={"center"}>
                            <Text color={"white"} fontSize={"lg"} fontWeight={"semibold"}>Stella Audhina</Text>
                            <Text color={"grey"}>@Audhinafh</Text>
                            <Text color={"gray"} fontSize={"lg"} fontWeight={"normal"} >4h</Text>
                        </Box>
                        <Box className="Status-note">
                            <Text color={"white"}>Well beauty is in the eye of the beholder</Text>
                        </Box>
                        <Box>
                            <Image w={"100%"} h={"50vh"} objectFit={"cover"} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        </Box>
                        <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
                            <LoveIcon boxSize={6} />
                            <Text as={"p"} color={"grey"}>24</Text>
                            <CommentIcon boxSize={6} />
                            <Text as={"p"} color={"grey"}>381 Replies</Text>
                        </Box>
                        </Box>

                    </Box>
                    <Box py={5} display={"flex"} flexDirection={"row"} gap={"1rem"} borderBottom={"1px"} borderColor={"grey"} w={"100%"} justifyContent={"start"}>
                        <Image w={"60px"} h={"60px"} objectFit={"cover"} borderRadius={"50px"} alt="profile" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Box display={"flex"} flexDirection={"column"} gap={"2px"} alignItems={"start"} justifyContent={"center"}>
                        <Box display={"flex"} flexDirection={"row"} gap={"1rem"} alignItems={"center"}>
                            <Text color={"white"} fontSize={"lg"} fontWeight={"semibold"}>Stella Audhina</Text>
                            <Text color={"grey"}>@Audhinafh</Text>
                            <Text color={"gray"} fontSize={"lg"} fontWeight={"normal"} >4h</Text>
                        </Box>
                        <Box className="Status-note">
                            <Text color={"white"}>Well beauty is in the eye of the beholder</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
                            <LoveIcon boxSize={6} />
                            <Text as={"p"} color={"grey"}>24</Text>
                            <CommentIcon boxSize={6} />
                            <Text as={"p"} color={"grey"}>381 Replies</Text>
                        </Box>
                        </Box>

                    </Box>
                </Box>
            </Timeline>

            <Sugesstion />
        </Container>
        </>
    )
}