import React from 'react'
import { Button, Text,Container, Heading, Input, VStack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container maxW={"Contanier.xl"}
            h={"100v"} p={"16"}>
            <form>
                <VStack
                    alignItems={"stretch"}
                    spacing={"8"}
                     w={["full","96"]}
                    m={"auto"} 
                    my={"16"}
                >
                    <Heading>Welcome Back</Heading>
                    <Input placeholder={"Email"} type={"email"}
                        required focusBorderColor='purple.500' />

                    <Input placeholder={"password"} type={"password"}
                        required focusBorderColor='purple.500' />
                  <Button variant={"link"} alignItems={"flex-end"}>
                    <Link to={"/forgetpassword"}>Forgot password</Link>
                  </Button>

                  <Button colorScheme={"purple"} type={"submit"}>Login In</Button>
              
                <Text textAlign={"right"}> 
                New User?   
                <Button variant={"link"} colorScheme={"purple"}>
                    <Link to={"/signup"}>Sign Up</Link>
                  </Button>  
                </Text>
                </VStack>


            </form>

        </Container>
    )
}

export default Login