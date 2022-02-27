import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./router/app-router";
import { theme } from "./style-config/theme";
import Font from "./style-config/font";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Font />
    <AppRouter />
  </ChakraProvider>
);
