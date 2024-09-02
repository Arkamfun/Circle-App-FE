import{Image,Button,Box,Text } from '@chakra-ui/react' 
function Profile() {
    return (
        <>
                        <Box w={"100%"} className='kanan' display={"flex"} flexDirection={"column"} px={"2rem"} py={"2rem"} gap={"1rem"} flex={3}>
                    <Box background={"#262626"}
                        width={"100%"} position={"relative"}>
                        <Box>
                            <Text color={"white"} py={"1rem"} px={"1rem"} fontWeight={"semibold"} fontSize={"2xl"}>My Profile</Text>
                            <Box w={"auto"} mx={"20px"}
                                bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                                h={"100px"}
                                borderRadius={"10px"}>
                            </Box>
                            <Box position={"absolute"} bottom={"178px"} w={"100%"}>
                                <Box display={"flex"} justifyContent={"space-between"} w={"full"} flexDirection={"row"} alignItems={"end"} px={5}>
                                    <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        boxSize={"80px"} objectFit={"cover"} borderRadius={"50px"} border={"2px"} borderColor={"#262626"} display={"inline"} />
                                    <Button
                                        border={"1px"}
                                        borderColor={"white"}
                                        color={"white"}
                                        borderRadius={"3xl"}
                                        fontWeight={"semibold"}
                                        px={3}
                                        py={2}
                                        mx={""}
                                    >Edit Profile</Button>
                                </Box>
                            </Box>
                            <Box mt={"4rem"}>
                                <Text as={"p"} fontWeight={"semibold"} color={"white"} fontSize={"2xl"} ps={5}>Stella Audhina</Text>
                                <Text as={"p"} ps={5} color={"grey"}>@Audhinafh</Text>
                                <Text as={"p"} ps={5} color={"white"}>picked over by the worms, and weird fishes</Text>
                                <Box display={"flex"} flexDirection={"row"} gap={"1rem"} mt={"1rem"} ps={5} pb={10}>

                                    <Text as={"p"} color={"grey"}  ><Text as={"span"} fontWeight={"semibold"} color={"white"}>291</Text> Following</Text>

                                    <Text as={"p"} color={"grey"} > <Text as={"span"} fontWeight={"semibold"} color={"white"}>291</Text> Following</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='Sugesstion' display={"flex"} flexDirection={"column"} gap={"1rem"} background={"#262626"} px={5} py={5}>
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
                    <Box>
                        
                    </Box>
                </Box>
        </>
    )

}

export default Profile