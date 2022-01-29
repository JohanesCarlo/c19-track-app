import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./libs/Theme";
import Fonts from "./components/Fonts";

ReactDom.render(
    <ChakraProvider theme={Theme}>
        <Fonts />
        <App />
    </ChakraProvider>,
    document.getElementById("root")
);
