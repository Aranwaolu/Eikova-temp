import * as React from "react";
import { HStack, Text } from "@chakra-ui/react";
import Logo from "../atoms/logo";

interface ILogoTextProps {
  big?: boolean;
}
const LogoText: React.FC<ILogoTextProps> = ({ big }) => {
  return (
    <HStack>
      <Logo />
      <Text
        fontSize={big ? "78.46px" : "30.15px"}
        fontWeight={big ? "700" : ""}
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
