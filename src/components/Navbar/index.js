import { Box, Container, Flex, Heading } from "@chakra-ui/react";

import ThemeToggleButton from "./ThemeToogleButton";
import Logo from "./Logo";

export default function Navbar(props) {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    );
}
