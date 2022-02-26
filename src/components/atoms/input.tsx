import * as React from "react";
import { InputProps, Input as ChakraInput } from "@chakra-ui/react";

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <ChakraInput
      h="62px"
      bg="text.gray150"
      borderRadius="6px"
      focusBorderColor="#BDBDBD"
      border="none"
      {...props}
    />
  );
};

export default Input;
