import { Box } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            align="center"
            opacity={0.4}
            fontSize="md"
            mt="10"
            mb="7"
        >
            &copy; {new Date().getFullYear()} AXKUADRAT™ All Rights Reserved.
        </Box>
    );
}
