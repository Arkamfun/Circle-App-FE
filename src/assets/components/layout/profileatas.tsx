import { Avatar, Box, Button, FormControl, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure,FormLabel, Input } from "@chakra-ui/react"
import React, { RefObject } from "react"

import { useUser } from "../../../features/auth/hooks/hook-user"


interface InitialFocusModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRef: RefObject<HTMLInputElement>;
  finalRef: RefObject<HTMLInputElement>;
}
function profileModal ({isOpen,onClose, initialRef, finalRef}: InitialFocusModalProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, errors, onSubmit } = useUser();
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={finalRef}
        initialFocusRef={initialRef}>
          <ModalOverlay
            backdropFilter='blur(20px)'
            backgroundColor="rgba(128, 128, 128,0.1)"
          >
            <ModalContent
              minW="45vw" overflow={"auto"} background={"#1d1d1d"} borderRadius={"15px"}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody pb={6}>
                  <Box mb={"10px"} mt={'5px'}  width="100%" display="flex">
                  <Text fontWeight={'bold'} color={'home.text'}>Edit Profile</Text>

                    <ModalCloseButton
                      width="20px"
                      height="20px"
                      m={"5px 2px"}
                      rounded="full"
                      fontSize={"7px"}
                      color="home.link"
                      fontWeight={"bold"}
                      border="1.5px solid #909090" />
                  </Box>
                  <Box>
                    <Image  
                      width={'100%'}
                      height={'125px'}
                      display={'block'}
                      borderRadius='10px'
                      src='https://wallpapercave.com/wp/wp4566576.jpg' />

                      <Box
                      mt={'-35px'}
                      display={'flex'}
                      alignItems={'center'}>
                        <Avatar
                          ms={'20px'}
                          boxSize='80px'
                          display={'block'}
                          borderRadius='500px'
                          border={'3px solid black'}
                          src='https://bit.ly/dan-abramov' />
                        
                        <FormControl>
                          <FormLabel
                            display={'flex'}
                            fontSize={'30px'}
                            cursor={'pointer'}
                            color={'grey'}

                          ><Box
                          mt={'8px'}
                          ms={'-59px'}
                          bg={'#323232'}
                          color={'white'}
                          padding={'7px'}
                          fontSize={'20px'}
                          borderRadius={'full'}>

                            </Box></FormLabel>
                            <Input type='file' hidden/>
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl color={"white"}>
                          <FormLabel
                          mt={'15px'}
                          p={'10px'}
                          fontSize={'16px'}
                          color={'home.modal'}
                          borderRadius={'7px'}
                          border={'1px solid #545454'} 
                          >Name
                          <Input
                          type="text"
                          mt={'-10px'}
                          ms={'-14px'}
                          border={'none'}
                          >
                          </Input>
                          </FormLabel>
                        </FormControl>
                      </Box>
                  </Box>
                </ModalBody>
              </form>

            </ModalContent>
          </ModalOverlay>
      </Modal>
    </>
  )
}

// function profileatas



export default function ProfileAtas () {  

const {user} = useUser()
  

    return (
        <Box bg={"#262626"}
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
                    </Box>
                </Box>
                <Box mt={"4rem"}>
                    <Text as={"p"} fontWeight={"semibold"} color={"white"} fontSize={"2xl"} ps={5}>{user?.fullName}</Text>
                    <Text as={"p"} ps={5} color={"grey"}>@{user?.username}</Text>
                    <Text as={"p"} ps={5} color={"white"}></Text>
                    <Box display={"flex"} flexDirection={"row"} gap={"1rem"} mt={"1rem"} ps={5} pb={10}>

                        <Text as={"p"} color={"grey"}  ><Text as={"span"} fontWeight={"semibold"} color={"white"}>291</Text> Following</Text>

                        <Text as={"p"} color={"grey"} > <Text as={"span"} fontWeight={"semibold"} color={"white"}>291</Text> Following</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
