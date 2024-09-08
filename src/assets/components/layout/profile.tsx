import{Image,Button,Box,Text, } from '@chakra-ui/react' 
import ProfileAtas from './profileatas'


export function Sugesstion() {

    return (
        <Box w={"100%"} className='kanan' display={"flex"} flexDirection={"column"}  py={"2rem"} gap={"1rem"}
        border={"1px"} borderColor={"grey"} borderRadius={"10px"}>
            <Box className='Sugesstion' display={"flex"} flexDirection={"column"} gap={"1rem"} background={"#262626"} px={5} py={5} w={"100%"}>
    <Text color={"white"} fontWeight={"semibold"} fontSize={"2xl"}>Sugesstion For You</Text>

    <Box className='Sugesti-foto'>
        <Box className='Sugesti-akun' display={"flex"} flexDirection={"row"} gap={"1rem"} alignItems={"center"} justifyContent={"space-between"} mb={5}>
            <Box display={"flex"} flexDirection={"row"} gap={"1rem"}>
                <Image w={"60px"} h={"60px"} objectFit={"cover"} borderRadius={"50px"} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="nama-akun"
                
                />
                <Box display={"flex"} flexDirection={"column"}>
                    <Text as={"p"} color={"white"} fontWeight={"semibold"}>Stella Audhina</Text>
                    <Text as={"p"} color={"grey"}>@Audhinafh</Text>
                </Box>
                </Box>
                <Button border={"1px"} borderColor={"white"} color={"grey"} borderRadius={"3xl"} fontWeight={"semibold"} px={3} py={2}> Following</Button>
        </Box>
        <Box className='Sugesti-akun' display={"flex"} flexDirection={"row"} gap={"1rem"} alignItems={"center"} justifyContent={"space-between"} mb={5}>
            <Box display={"flex"} flexDirection={"row"} gap={"1rem"}>
                <Image w={"60px"} h={"60px"} objectFit={"cover"} borderRadius={"50px"} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="nama-akun"
                
                />
                <Box display={"flex"} flexDirection={"column"}>
                    <Text as={"p"} color={"white"} fontWeight={"semibold"}>Stella Audhina</Text>
                    <Text as={"p"} color={"grey"}>@Audhinafh</Text>
                </Box>
                </Box>
                <Button border={"1px"} borderColor={"white"} color={"white"} borderRadius={"3xl"} fontWeight={"semibold"} px={3} py={2}> Follow</Button>
        </Box>
    </Box>
</Box>
        </Box>
        
    )
    
}
export default function Profile () {
    return (
        <>
        <Box  w={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}
        className='profile'
        >
            <Box   w={"100%"} className='kanan' display={"flex"} flexDirection={"column"} px={"2rem"} py={"2rem"} gap={"1rem"}>
                <ProfileAtas />
                        <Sugesstion />
                </Box>
            
        </Box>
        </>
    )

}
