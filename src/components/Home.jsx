import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/img-1.jpg"
import img2 from "../assets/img-2.jpg"
import img3 from "../assets/img-3.jpg"
import img4 from "../assets/img-4.jpg"
import img5 from "../assets/img-5.jpg"

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}

const Home = () => {
    return (

        <Box >

            <Mycarousel />

            <Container p={"16"} maxW={"container.xl"} minH={"100vh"}>
                <Heading borderBottom={"2px"} py="2" w={"fit-content"} textTransform={("uppercase")} m="auto" >Services</Heading>
                <Stack h="full"
                    p={"4"}
                    alignItems={"center"}
                    direction={["column", "row"]}
                >

                    <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />

                    <Text letterSpacing={"widset"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"} >
                        Lorem ipsum
                         dolor sit amet consectetur, adipisicing elit.
                        Consectetur fuga perspiciatis ducimus delectus nihil fugit
                        cum ullam a quod, debitis laudantium incidunt laboriosam.
                        Corrupti saepe omnis illum quisquam amet maxime. Cumque,
                        aspernatur reprehenderit in est placeat sapiente mollitia
                        magni perspiciatis at quia quisquam, autem debitis dolore,
                        vitae totam. Numquam unde dicta, reiciendis temporibus sit
                        cum autem odit illo dolorem neque libero. Minima, expedita
                        magni ex pariatur excepturi veritatis corporis voluptates
                        facere nobis assumenda quibusdam velit? Illum dolores architecto
                        maiores nulla blanditiis a distinctio odit nisi iusto? Suscipit,

                    </Text>
                </Stack>

            </Container>

        </Box>
    )
}
const Mycarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
        >
            <Box w="full" h={"100vh"}>
                <Image src={img1} />
                <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                    Watch The Future
                </Heading>
            </Box>
            <Box w="full" h={"100vh"}>
                <Image src={img2} />
                <Heading bgColor={"whiteAlpha.600"} color={"blacxk"} {...headingOptions}>
                    Future is gaming
                </Heading>
            </Box>
            <Box w="full" h={"100vh"}>
                <Image src={img3} />
                <Heading bgColor={"whiteAlpha.600"} color={"blacxk"} {...headingOptions}>
                    Gaming on console
                </Heading>
            </Box>
            <Box w="full" h={"100vh"}>
                <Image src={img4} />
                <Heading bgColor={"whiteAlpha.600"} color={"blacxk"} {...headingOptions}>
                    Gaming at Night
                </Heading>
            </Box>

        </Carousel>
    );
};


export default Home