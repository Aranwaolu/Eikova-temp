import * as React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import LogoText from "../molecules/LogoText";

interface INavigationBarProps {}

const NavigationBar: React.FunctionComponent<INavigationBarProps> = (props) => {
  return (
    <Box as="nav">
      <LogoText />
    </Box>
  );
};

export default NavigationBar;
