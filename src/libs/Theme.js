import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 24,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            },
            "section-sub": {
                // textDecoration: "underline",
                fontSize: 16,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 6,
                marginBottom: 3
            }
        }
    }
    // Link: {
    //     baseStyle: props => ({
    //         color: mode("#3d7aed", "#ff63c3")(props),
    //         textUnderlineOffset: 3
    //     })
    // }
};

const fonts = {
    heading: "'M PLUS Rounded 1c'"
};

const colors = {
    grassTeal: "#88ccca"
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
};

const theme = extendTheme({ config, components, fonts, colors });
export default theme;
