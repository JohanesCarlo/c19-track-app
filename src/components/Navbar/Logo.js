import { Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
`;

export default function Logo() {
    const imageLogo = `/images/ax2${useColorModeValue("-black", "-green")}.png`;

    return (
        <Link href="https://johanescarlo.vercel.app/" target="_blank">
            <LogoBox>
                <Image src={imageLogo} width="18px" height="20px" alt="logo" />
                <Text
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    fontFamily="M Plus Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    AXKUADRAT™
                </Text>
            </LogoBox>
        </Link>
    );
}
