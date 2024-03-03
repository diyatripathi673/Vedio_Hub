import React from 'react'
import {
    Box, Button, HStack, Text, Heading, Stack, Input,





    VStack
} from "@chakra-ui/react"
import { AiOutlineSend } from "react-icons/ai"
const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"}
            minH={"40"}
            p={"16"}
            color={"white"}>


            <Stack direction={["column", "row"]} >
                <VStack
                    alignItems={"stretch"}
                    w={"full"}
                    px={"4"}>
                    <Heading size="md" textTransform={"uppercase"}>
                        Subscribe to get updates

                    </Heading>
                    <HStack
                        borderBottom={"2px solid white"} py="2">
                        <Input placeholder='Enter your E-mail here..'
                            border={"none"}
                            borderRadius={"none"}
                            outline={"none"}
                            focusBorderColor='none'
                        />
                        <Button
                            p={"0"}
                            colorScheme={"purple"}
                            variant={"ghost"}
                            borderRadius={"0 20px 20px 0"}
                        >
                            <AiOutlineSend size={"20"} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={"full"}
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}
                >
                    <Heading
                        textTransform={"uppercase"} textAlign={"center"}>
                        VIDEO HUB
                    </Heading>
                    <Text>All right Recived</Text>
                </VStack>
                
                <VStack w={"full"}>
                    <Heading size={"md"} textTransform={"uppercase"} >
                        Social Media
                        </Heading>
                        <Button target={"_blank"} variant={"link"} colorScheme={'whiteAlpha'}>
                            <a href="https://youtube.com">youtube</a>
                        </Button>

                        <Button target={"_blank"} variant={"link"} colorScheme={'whiteAlpha'}>
                            <a href="https://instagram.com/diyatripathi27">Instagram</a>
                        </Button>

                        <Button target={"_blank"} variant={"link"} colorScheme={'whiteAlpha'}>
                            <a href="https://github.com/diyatripathi673">GitHub</a>
                        </Button>
                    
                </VStack>

            </Stack>
        </Box>
    )
}

export default Footer