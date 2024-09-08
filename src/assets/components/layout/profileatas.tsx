import {Box,Text, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, FormControl, FormLabel, FormErrorMessage, FormHelperText,Textarea  } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import React from "react"


function ErrorMessage() {
    const [input, setInput] = useState('Stella Audhina')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
    return (
        <FormControl isInvalid={isError}>
          <FormLabel color={"white"} >Name</FormLabel>
          <Input placeholder='Enter your new Name' w={"100%"} bg={"transparent"} border={"1px"} borderColor={"white"} p={3} borderRadius={"xl"} color={"white"}  type='text' value={input} onChange={handleInputChange} />
          {!isError ? (
            <FormHelperText color={"white"}>
            </FormHelperText>
          ) : (
            <FormErrorMessage color={"red"}>Name is required.</FormErrorMessage>
          )}
          <FormLabel color={"white"} >Username</FormLabel>
          <Input placeholder='Enter your new Name' w={"100%"} bg={"transparent"} border={"1px"} borderColor={"white"} p={3} borderRadius={"xl"} color={"white"}  type='text' value={"@Stella"} onChange={handleInputChange} />
          {!isError ? (
            <FormHelperText color={"white"}>
            </FormHelperText>
          ) : (
            <FormErrorMessage color={"red"}>Name is required.</FormErrorMessage>
          )}
          <FormLabel color={"white"} >Username</FormLabel>
          <Textarea resize={"none"} placeholder='Enter your new Name' w={"100%"} bg={"transparent"} border={"1px"} borderColor={"white"} p={3} borderRadius={"xl"} color={"white"} _vertical={"10px"} value={" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ducimus quidem quos culpa saepe nam voluptatum maiores sequi quia explicabo? Quis rem eius cum facere repellat ullam quidem sed necessitatibus?"} onChange={handleInputChange} />
          {!isError ? (
            <FormHelperText color={"white"}>
            </FormHelperText>
          ) : (
            <FormErrorMessage color={"red"}>Name is required.</FormErrorMessage>
          )}
        </FormControl>
      )
}
function ButtonProfile () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
      <>
        <Button 
                onClick={onOpen} 
                border={"1px"}
                        borderColor={"white"}
                        color={"white"}
                        borderRadius={"3xl"}
                        fontWeight={"semibold"}
                        px={3}
                        py={2}
                        mx={""}>Edit Profile</Button>
        
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
          <ModalOverlay bg={"blackAlpha.500"} />
          <ModalContent mx={"auto"} display={"flex"} w={"600px"} flexDirection={"column"} justifyContent={"center"}>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} mx={"auto"} w={"100%"} borderBottom={"1px"} borderColor={"grey"} mb={2}>

            <ModalHeader color={"white"} fontWeight={"semibold"} flex={1} fontSize={"2xl"} >Edit Profile</ModalHeader>
            <ModalCloseButton color={"white"}  />
            </Box>
            <ModalBody bg={"#262626"} w={"100%"} h={"606px"}  mx={"auto"} display={"flex"} flexDirection={"column"} justifyContent={"start"} gap={"5rem"} px={5}>
                <Box>

             
            <Box w={"auto"}  mt={"20px"}
                bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                h={"100px"}
                borderRadius={"10px"}>
            </Box>
            <Box position={"absolute"} top={"270px"} left={"20px"} w={"100%"}>
                <Box display={"flex"} justifyContent={"space-between"} w={"full"} flexDirection={"row"} alignItems={"end"} px={5}>
                    <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    boxSize={"80px"} objectFit={"cover"} borderRadius={"50px"} border={"2px"} borderColor={"#262626"} display={"inline"} />
                    </Box>
                </Box>
                </Box>
                    <Box>
                        <ErrorMessage />
                    </Box>

            </ModalBody>
  
            <ModalFooter>
              <Button color={"white"} bg={"#04A51E"}  py={1} px={2} mt={3} borderRadius={"3xl"} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
    
}
export default function ProfileAtas () {
    const Navigate = useNavigate()
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
                    <ButtonProfile />
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
    )
}
