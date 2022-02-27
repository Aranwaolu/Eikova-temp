import * as React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import Logo from "../atoms/logo";

interface ILogoTextProps {
  big?: boolean;
}
const LogoText: React.FC<ILogoTextProps> = ({ big }) => {
  return (
    <HStack>
      <Box w={big ? "auto" : "28px"} __css={{ svg: { width: "100%" } }}>
        <Logo />
      </Box>
      <Text
        fontSize={big ? "78.46px" : "30.15px"}
        fontWeight="700"
        color="white"
        ml={big ? "24px" : ""}
        lineHeight={big ? "102.16px" : "39.25px"}
      >
        Eikova
      </Text>
    </HStack>
  );
};

export default LogoText;
