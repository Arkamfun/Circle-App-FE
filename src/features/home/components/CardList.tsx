import { Box, BoxProps, Button, Image, Text } from "@chakra-ui/react";
import { Heart, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import { ThreadEntity } from "../../../entities/thread";
interface ThreadCardProps extends BoxProps {
    thread : ThreadEntity;
}


export default function ThreadCard({ thread } :ThreadCardProps) {
    
console.log(thread.author);


 return (
    <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
        {/* <Image src={thread.user.photoProfile}/> */}
        <Box w={"100%"} display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Box color={"white"} display={"flex"} flexDirection={"column"}  gap={"2px"} 
            borderBottom={"1px"} borderColor={"grey"} w={"100%"} justifyContent={"center"}
            >
               
                <Text fontWeight={"semibold"}>{thread.author?.fullName}</Text>
                <Text color={"grey"}>@{thread.author?.username}</Text>
                <Text>{thread?.createdAt?.toLocaleString()}</Text>
           
            <Box color={"white"}>
            <Link to={`/status/${thread.id}`} >
            <Text>{thread.title}</Text>
            <Text>{thread.content}</Text>
            </Link>
            <Image src={thread.image}/>
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
                <Button color={"white"} backgroundColor={"transparent"}>
                    <Heart size={20} fill={"transparant"}/>
                    <Text>36</Text>
                    </Button>
                <Button backgroundColor={"transparent"} color={"white"}>
                    <MessageSquareText
                size={20}
                style={{ marginRight: "5px" }}
                fill="transparent"
            />
            <Text>381 Replies</Text>
        </Button>
            </Box>
        </Box>
        </Box>
    </Box>
 )
}