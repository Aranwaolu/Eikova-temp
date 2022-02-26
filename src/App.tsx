import * as React from "react";
import { ChakraProvider, theme, } from "@chakra-ui/react";
import AppRouter from "./router/app-router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRouter />
  </ChakraProvider>
);
