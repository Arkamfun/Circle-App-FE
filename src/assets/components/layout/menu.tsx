import {Text, Box, Icon, IconProps,Link, BoxProps } from '@chakra-ui/react'
import ButtonAuth from '../../elements/ButtonAuth'
import { useNavigate  } from "react-router-dom";
import { ReactNode } from 'react';


interface menuProps extends BoxProps  {
    Home:boolean
    Search:boolean
    Followers:boolean
    Profile:boolean
}

 



export default function Menu( {Home, Search, Followers, Profile, ...props} : menuProps) {
    function MenuList({ name, active, path, children }: { name: string; active: boolean; path: string ; children?: ReactNode }) {
        const navigate = useNavigate();
        if(active){
            return <Box  display={"flex"} flexDirection={"row"} gap={"1rem"} alignItems={"center"}>
            {children}
            <Text  color={"white"} fontSize={"xl"} fontWeight={"semibold"} cursor={"pointer"} onClick={() => navigate(path)} >{name}</Text>
            </Box>
        }else {
            return <Box  display={"flex"} flexDirection={"row"} gap={"1rem"} alignItems={"center"}>
            {children}
            <Text  color={"white"} fontSize={"xl"} fontWeight={"light"} cursor={"pointer"} onClick={() => navigate(path)} >{name}</Text>
            </Box>  
        }
        }

    const HomeIcon = (props : IconProps) => (
        <Icon
            viewBox="0 0 576 512"
            fill="white"
            {...props}
        ><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
        </Icon>)
    const UserIcon = (props : IconProps) => (
        <Icon
            viewBox="0 0 576 512"
            fill="white"
            {...props}
        ><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
        </Icon>)
    const LoveIcon = (props : IconProps) => (
        <Icon
            viewBox="0 0 576 512"
            fill="white"
            {...props}
        ><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
        </Icon>)
    const ProfileIcon = (props : IconProps) => (
        <Icon
            viewBox="0 0 576 512"
            fill="white"
            {...props}
        ><path d="M256 48l0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16l-64 0zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM160 320l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L96 416c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/>
        </Icon>)
        
const Navigate = useNavigate()    
    return(

        <>
        
    <Box {...props} color={"white"} borderRight={"1px"} borderColor={"grey"} px={"2rem"} w={"100vh"}
    display={"flex"} flexDirection={"column"} justifyContent={"space-around"} gap={"20rem"}>
    <Box display={"flex"} flexDirection={"column"} gap={"2rem"} my={"2rem"}>
        <Text color={"#04A51E"} fontSize={"5xl"} fontWeight={"semibold"} cursor={"pointer"} onClick={() => Navigate("/") }>Circle</Text>
            

            <MenuList name="Home" active={Home} path="/">
                <HomeIcon boxSize={"30px"}/>
            </MenuList>
            <MenuList name="Search" active={Search} path="/search">
                <UserIcon boxSize={"30px"}/>
            </MenuList>
            <MenuList name="Followers" active={Followers} path="/followers">
            <LoveIcon boxSize={"30px"}/>
            </MenuList>
            <MenuList name="Profile" active={Profile} path="/profile">
                <ProfileIcon boxSize={"30px"} />
            </MenuList>
            </Box>
            <Box>
            <ButtonAuth>Create Post</ButtonAuth>
        </Box>
        <Box>
            <Link color={"white"} textAlign={"end"} textDecoration={"underline"} href="/login">Logout</Link>
        </Box>
    </Box>

    
        </>
    ) 
}


