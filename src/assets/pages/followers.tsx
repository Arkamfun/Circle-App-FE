import Menu from "../components/layout/menu"
import Profile from "../components/layout/profile"
import Timeline from "../components/layout/timeline"
import dummyUser from "../components/dummyUser"
import { Container, Text, Box, Image, Textarea, Button, Icon, IconProps, Checkbox, RadioGroup, Radio, useRadio, HStack , useRadioGroup, UseRadioProps,   } from "@chakra-ui/react"
import { ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"



export default function Followers() {
  const Navigate = useNavigate()
    const users = dummyUser;
    const [follows, setFollow] = useState(users)

    const handleFollow = (isFollowing:boolean) => {
        // setState harus menggunakan callback function agar state terupdate langsung
        setFollow(() => users.filter((user) => user.isFollowing === isFollowing))
        console.log(follow)
        
    }
      return (
<Container display={"flex"} flexDirection={"row"} h={"100%"} bg={"#1D1D1D"}>
<Menu Home={false} Search={false} Followers={true} Profile={false} />
<Timeline>
    <Box display={"flex"} flexDirection={"column"} gap={"1rem"} w={"80vh"} h={"100%"} pt={"1rem"}>
    <Text as={"p"} fontWeight={"semibold"} color={"white"} fontSize={"2xl"}>Followers</Text>
    <Box display={"flex"} flexDirection={"row"} gap={1} w={"100%"} >
          <Button flex={1} backgroundColor={"#04A51E"}  borderRadius={"3xl"} 
        color={"white"} padding={"1rem"} _hover={{backgroundColor:"white", color:"#04A51E"}} onClick={() => handleFollow(true)} >Following</Button>
          <Button flex={1} backgroundColor={"#04A51E"} 
        color={"white"} padding={"1rem"} borderRadius={"3xl"} _hover={{backgroundColor:"white", color:"#04A51E"}} onClick={() => handleFollow(false)} >Follow</Button>
    </Box>
    <Box display={"flex"} flexDirection={"column"} gap={"2rem"} pt={"1rem"} >
    {follows.map((user) => (
        <Box display={"flex"} flexDirection={"row"} gap={"1rem"} h={"60px"} w={"100%"} alignItems={"start"}  justifyContent={"space-between"} >
          <Box display={"flex"} flexDirection={"row"} gap={"1rem"} h={"60px"} alignItems={"start"}>
          <Box className="image">
            <Image w={"60px"} h={"60px"} borderRadius={"50%"} alt={user.nama} objectFit={"cover"} src={user.foto} />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={0}>

          <Text color={"white"} _hover={{cursor:"pointer", color:"#04A51E"}} fontWeight={"semibold"} fontSize={"xl"} onClick={() => Navigate("/profile")}>{user.nama}</Text>
          <Text as={"p"} color={"grey"}>@{user.nama} </Text>
          <Text as={"p"} color={"white"}>{user.comment} </Text>
          </Box>
          </Box>
          <Box>

          
          {user.isFollowing ? <Button p={2} borderRadius={"full"} border={"1px"} borderColor={"white"} color={"white"}>Following</Button> : <Button border={"1px"} p={2} borderRadius={"full"} borderColor={"grey"} color={"grey"} >Unfollow</Button> }
          </Box>
        </Box>
    ))}
    </Box>
    </Box>
</Timeline>
<Profile />
</Container>

    )
}